import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  Platform,
  Text,
  PermissionsAndroid,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
import { FONTS } from '../../../utils/Constants/Fonts';
import { SCREEN_NAME } from '../../../utils/Constants/Screens';
import { IMAGE } from '../../../utils/Constants/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProfileUser } from '../../../redux/slices/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/store';
import { jwtDecode } from 'jwt-decode';
import { setUserData } from '../../../redux/slices/userSlice';

const { height, width } = Dimensions.get('window');

const GOOGLE_MAPS_API_KEY = 'AIzaSyBY7WePV2Eg7cigEfbsFvjs1GzEHx6GXVA';

const HomeTab = ({ navigation }: any) => {

  const dispatch = useDispatch<AppDispatch>()

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);
  const [destination, setDestination] = useState<string | null>(null);
  const [currentCoords, setCurrentCoords] = useState<any>(null);
  const [destinationCoords, setDestinationCoords] = useState<any>(null);
  const [routeCoordinates, setRouteCoordinates] = useState<any[]>([]);

  const googlePlacesAutocompleteRef = useRef<any>(null);
  const insets = useSafeAreaInsets();

  useFocusEffect(
    useCallback(() => {
      if (currentCoords) {
        setRegion({
          latitude: currentCoords.latitude,
          longitude: currentCoords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }
    }, [currentCoords])
  );

  const getProfile = useSelector((state: RootState) => state.API.data.getProfileUserResposne)


  console.log(getProfile?.data, 'getProfilegetProfile')

  // useEffect(() => {
  //   getTokenData()
  // }, [])
  
  useFocusEffect((
    useCallback(()=>{
      getTokenData()

    },[])
  ))
  const [draggableMarkerCoords, setDraggableMarkerCoords] = useState<any>(null);
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const mapRef = useRef<MapView>(null);

  // Initialize draggable marker with current location
  useEffect(() => {
    if (currentCoords) {
      setDraggableMarkerCoords(currentCoords);
    }
  }, [currentCoords]);

  // Handle map region changes (swiping)
  const handleRegionChangeComplete = (newRegion: any) => {
    setRegion(newRegion);
    if (!draggableMarkerCoords) return;
    
    // Update marker position to center of the map
    const newCoords = {
      latitude: newRegion.latitude,
      longitude: newRegion.longitude,
    };
    updateMarkerPosition(newCoords);
  };

  // Handle marker drag end
  const handleMarkerDragEnd = (e: any) => {
    const newCoords = e.nativeEvent.coordinate;
    updateMarkerPosition(newCoords);
    
    // Center the map on the new marker position
    mapRef.current?.animateToRegion({
      ...region,
      latitude: newCoords.latitude,
      longitude: newCoords.longitude,
    });
  };

  // Update marker position and fetch address
  const updateMarkerPosition = async (newCoords: any) => {
    setDraggableMarkerCoords(newCoords);
    setCurrentCoords(newCoords);
    setIsLoadingAddress(true);
    
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${newCoords.latitude},${newCoords.longitude}&key=${GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();
      if (data.results[0]) {
        setCurrentLocation(data.results[0].formatted_address);
        if (
          googlePlacesAutocompleteRef.current?.setAddressText
        ) {
          googlePlacesAutocompleteRef.current.setAddressText(
            data.results[0].formatted_address
          );
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingAddress(false);
    }
  };
  const getTokenData = async () => {
    try {
      const userToken = await AsyncStorage.getItem('token')

      if (userToken) {
        const decodedToken:any = jwtDecode(userToken)

        const userId = decodedToken?.data?.uid.toString()
        
        console.log(decodedToken?.data?.uid,'decodedToken?.data?.uid')

        console.log(userId,'userId'),

        AsyncStorage.setItem('userId',userId)

        dispatch(setUserData(decodedToken))



        console.log(decodedToken)
        const result = await dispatch(getProfileUser(decodedToken?.data?.uid))


        if (result?.payload) {
          console.log(result?.payload?.data[0]?.role, 'result')
          AsyncStorage.setItem('role', result?.payload?.data[0]?.role)
        }



      } else {
        console.log('No token found')
      }
    } catch (error) {
      console.error('Error decoding token:', error)
    }
  }

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      getCurrentLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs access to your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      async (position:any) => {
        const { latitude, longitude } = position.coords;
        setCurrentCoords({ latitude, longitude });

        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
          );
          const data = await response.json();
          if (data.results[0]) {
            setCurrentLocation(data.results[0].formatted_address);
            if (
              googlePlacesAutocompleteRef &&
              googlePlacesAutocompleteRef.current &&
              googlePlacesAutocompleteRef.current.setAddressText
            ) {
              googlePlacesAutocompleteRef.current.setAddressText(
                data.results[0].formatted_address
              );
            }
          }
        } catch (error) {
          console.error(error);
        }
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const handleCurrentLocationUpdate = (data: any, details: any) => {
    const { lat, lng } = details.geometry.location;
    setCurrentLocation(data.description);
    setCurrentCoords({ latitude: lat, longitude: lng });
  };

  const handleDestinationSelect = (data: any, details: any) => {
    const { lat, lng } = details.geometry.location;
    setDestination(data.description);
    setDestinationCoords({ latitude: lat, longitude: lng });
  };

  const handleDirectionsReady = (result: any) => {
    const { coordinates } = result;
    setRouteCoordinates(coordinates);
  };

  const btnConfirmLocation = () => {
    if (!currentLocation || !destination || !currentCoords || !destinationCoords) {
      Alert.alert("Please select both current location and destination.");
      return;
    }

    const locationData = {
      startAddress: currentLocation,
      startLat: currentCoords.latitude,
      startLng: currentCoords.longitude,
      endAddress: destination,
      endLat: destinationCoords.latitude,
      endLng: destinationCoords.longitude,
    };

    console.log("Location Data:", locationData);

    navigation.navigate(SCREEN_NAME.LuggageScreen,{
      locationData:locationData
    })

    // Send this data to your backend or perform any other action
    // Example: sendLocationDataToBackend(locationData);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={region}
        onRegionChangeComplete={handleRegionChangeComplete}
        customMapStyle={[
          // ... your custom map styles
        ]}
      >
        {draggableMarkerCoords && (
          <Marker
            coordinate={draggableMarkerCoords}
            title="Current Location"
            draggable
            onDragEnd={handleMarkerDragEnd}
            pinColor="#3498db"
          />
        )}
        {destinationCoords && (
          <Marker coordinate={destinationCoords} title="Destination" />
        )}
        {draggableMarkerCoords && destinationCoords && (
          <MapViewDirections
            origin={draggableMarkerCoords}
            destination={destinationCoords}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={5}
            strokeColor="#FF6347"
            onReady={handleDirectionsReady}
          />
        )}
        {routeCoordinates.length > 0 && (
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#FF6347"
            strokeWidth={5}
          />
        )}
      </MapView>

      <View style={styles.routeContainer}>
        <View style={styles.destinationContainer}>
          {/* <Image
          resizeMode='contain'
          style={{width:18,height:18}}
          source={IMAGE.loc1}
          /> */}
          <GooglePlacesAutocomplete
            placeholder={
              currentLocation || 'Enter current location'
            }
            onPress={handleCurrentLocationUpdate}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'en',
            }}
            ref={googlePlacesAutocompleteRef}
            styles={{
              textInputContainer: styles.textInputContainer,
              textInput: styles.textInput,
              listView: {...styles.listView, marginTop: 130, zIndex: 10},
            }}
            fetchDetails={true}
            enablePoweredByContainer={false}
          />
        </View>
        <View style={styles.separator} />


        <View style={[styles.destinationContainer, { marginTop: 0 }]}>
        {/* <Image
          resizeMode='contain'
          style={{width:20,height:20,marginLeft:5}}
          source={IMAGE.loc}
          /> */}
          <GooglePlacesAutocomplete
            placeholder="Enter your Destination"
            onPress={handleDestinationSelect}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'en',
            }}
            styles={{
              textInputContainer: styles.textInputContainer,
              textInput: styles.textInput,
              listView: styles.listView,
            }}
            fetchDetails={true}
            enablePoweredByContainer={false}
          />
        </View>

      </View>
      <TouchableOpacity onPress={()=>btnConfirmLocation()} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  routeContainer: {
    position: 'absolute',
    top: 80,
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 8,
    elevation: 5,
    padding: 10,
    zIndex: 5,  // Ensure this is below the autocomplete list
  },
  destinationContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  textInputContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000', 
  },
  listView: {
    backgroundColor: '#fff',
    position: 'absolute',
    borderRadius:10,
    // width:'100%',
    zIndex: 10, 
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  confirmButton: {
    backgroundColor: 'black',
    borderRadius: 12,
    width: 200,
    height: 55,
    position: 'absolute',
    top: 240,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontFamily: FONTS.MEDIUM,
    fontSize: 14,
  },
});

export default HomeTab;
