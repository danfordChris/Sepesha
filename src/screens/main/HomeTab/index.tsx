import React, {useCallback, useEffect, useRef, useState, useMemo} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Platform,
  Text,
  PermissionsAndroid,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
import {FONTS} from '../../../utils/Constants/Fonts';
import {SCREEN_NAME} from '../../../utils/Constants/Screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getProfileUser} from '../../../redux/slices/apiSlice';
import {useDispatch} from 'react-redux';
import {jwtDecode} from 'jwt-decode';
import {setUserData} from '../../../redux/slices/userSlice';
import MapViewDirections from 'react-native-maps-directions';
import {IMAGE} from '../../../utils/Constants/Images';
import {COLORS} from '../../../utils/Constants/Colors';

const {width, height} = Dimensions.get('window');

const GOOGLE_MAPS_API_KEY = 'AIzaSyAGiZy_LyW1yV0XqSy1CD80o7cwEz3GToc';

// Custom map style outside component to prevent recreation on each render
const customMapStyle = [
  {
    featureType: 'poi.business',
    stylers: [{visibility: 'off'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text',
    stylers: [{visibility: 'off'}],
  },
];

const HomeTab = ({navigation}: any) => {
  const dispatch = useDispatch();
  const mapRef = useRef(null);
  const googlePlacesAutocompleteRef = useRef(null);
  const isMountedRef = useRef(true);
  const regionChangeTimeoutRef = useRef<any>(null);
  const [currentLocation, setCurrentLocation] = useState({});

  // Consolidated location state
  const [locationState, setLocationState] = useState({
    region: {
      latitude: -6.776012,
      longitude: 39.178326,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    currentLocation: null,
    destination: null,
    currentCoords: null,
    destinationCoords: null,
    distance: 0,
    routeCoordinates: [],
  });

  // UI state
  const [uiState, setUiState] = useState({
    isCalculating: false,
    error: null,
  });

  // Memoize derived values
  const isConfirmDisabled = useMemo(() => {
    return (
      uiState.isCalculating ||
      !locationState.currentLocation ||
      !locationState.destination
    );
  }, [
    uiState.isCalculating,
    locationState.currentLocation,
    locationState.destination,
  ]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      if (regionChangeTimeoutRef.current) {
        clearTimeout(regionChangeTimeoutRef.current);
      }
    };
  }, []);

  // Token and user data handling
  useFocusEffect(
    useCallback(() => {
      const getTokenData = async () => {
        try {
          const userToken = await AsyncStorage.getItem('token');
          if (userToken && isMountedRef.current) {
            const decodedToken = jwtDecode(userToken);
            const userId = decodedToken?.data?.uid.toString();
            const storedUserId = await AsyncStorage.getItem('userId');

            if (storedUserId !== userId) {
              await AsyncStorage.setItem('userId', userId);
              dispatch(setUserData(decodedToken));
              dispatch(getProfileUser(decodedToken?.data?.uid));
            }
          }
        } catch (error) {
          console.error('Error decoding token:', error);
        }
      };

      getTokenData();
    }, [dispatch]),
  );

  // Request location permission and get current location
  useEffect(() => {
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
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getCurrentLocation();
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
  }, []);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Permission denied');
          return;
        }
      }

      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setCurrentLocation({latitude, longitude});
          // setPickupCoords({latitude, longitude});
        },
        error => console.log(error),
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };

    requestLocationPermission();
  }, []);

  const getCurrentLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      position => {
        if (!isMountedRef.current) return;

        const {latitude, longitude} = position.coords;
        const currentCoords = {latitude, longitude};

        setLocationState((prev: any) => ({
          ...prev,
          currentCoords,
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        }));

        getAddressFromCoords(latitude, longitude);
      },
      error => {
        if (!isMountedRef.current) return;
        console.log('Location error:', error);
        setUiState((prev: any) => ({
          ...prev,
          error: 'Failed to get current location',
        }));
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  const getAddressFromCoords = useCallback(async (lat, lng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`,
      );
      const data = await response.json();

      if (!isMountedRef.current) return;

      if (data.results[0]) {
        const address = data.results[0].formatted_address;
        setLocationState((prev: any) => ({
          ...prev,
          currentLocation: address,
        }));

        if (googlePlacesAutocompleteRef.current?.setAddressText) {
          googlePlacesAutocompleteRef.current.setAddressText(address);
        }
      }
    } catch (error) {
      if (!isMountedRef.current) return;
      console.error('Geocoding error:', error);
      setUiState((prev: any) => ({
        ...prev,
        error: 'Failed to get address from coordinates',
      }));
    }
  }, []);

  // Calculate distance using Google Maps Distance Matrix API
  const calculateDistanceMatrix = useCallback(async (origin, destination) => {
    if (!isMountedRef.current) return null;

    try {
      setUiState(prev => ({
        ...prev,
        isCalculating: true,
        error: null,
      }));

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?` +
          `origins=${origin.latitude},${origin.longitude}&` +
          `destinations=${destination.latitude},${destination.longitude}&` +
          `key=${GOOGLE_MAPS_API_KEY}&mode=driving`,
      );
      const data = await response.json();

      if (!isMountedRef.current) return null;

      if (data.status === 'OK' && data.rows[0]?.elements[0]?.status === 'OK') {
        const distanceInMeters = data.rows[0].elements[0].distance.value;
        const durationInSeconds = data.rows[0].elements[0].duration.value;

        setLocationState(prev => ({
          ...prev,
          distance: distanceInMeters,
        }));

        return {distance: distanceInMeters, duration: durationInSeconds};
      }
      throw new Error(data.error_message || 'Failed to calculate distance');
    } catch (error) {
      if (!isMountedRef.current) return null;
      console.error('Distance Matrix error:', error);
      setUiState((prev: any) => ({
        ...prev,
        error: 'Failed to calculate route distance',
      }));
      return null;
    } finally {
      if (isMountedRef.current) {
        setUiState(prev => ({
          ...prev,
          isCalculating: false,
        }));
      }
    }
  }, []);

  // Fallback Haversine formula calculation
  const haversineDistance = useCallback(
    (lat1: any, lon1: any, lat2: any, lon2: any) => {
      const R = 6371; // Earth radius in km
      const dLat = ((lat2 - lat1) * Math.PI) / 180;
      const dLon = ((lon2 - lon1) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
          Math.cos((lat2 * Math.PI) / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c * 1000; // Distance in meters
    },
    [],
  );

  const handleDestinationSelect = useCallback(
    async (data, details) => {
      if (!isMountedRef.current) return;

      const {lat, lng} = details.geometry.location;
      const destCoords = {latitude: lat, longitude: lng};

      setLocationState((prev: any) => ({
        ...prev,
        destination: data.description,
        destinationCoords: destCoords,
      }));

      if (locationState.currentCoords) {
        // First try Google Distance Matrix API
        const matrixResult = await calculateDistanceMatrix(
          locationState.currentCoords,
          destCoords,
        );

        // If API fails, use Haversine as fallback
        if (!matrixResult && isMountedRef.current) {
          const haversineDist = haversineDistance(
            locationState.currentCoords.latitude,
            locationState.currentCoords.longitude,
            destCoords.latitude,
            destCoords.longitude,
          );

          setLocationState(prev => ({
            ...prev,
            distance: haversineDist,
          }));
        }

        // Center map on both locations
        if (mapRef.current && isMountedRef.current) {
          mapRef.current.fitToCoordinates(
            [locationState.currentCoords, destCoords],
            {
              edgePadding: {top: 100, right: 100, bottom: 100, left: 100},
              animated: true,
            },
          );
        }
      }
    },
    [locationState.currentCoords, calculateDistanceMatrix, haversineDistance],
  );

  const btnConfirmLocation = useCallback(async () => {
    const {
      currentLocation,
      destination,
      currentCoords,
      destinationCoords,
      distance,
    } = locationState;
    const {isCalculating} = uiState;

    console.log(
      currentLocation,
      destination,
      currentCoords,
      destinationCoords,
      distance,
      '-----',
    );

    if (
      !currentLocation ||
      !destination ||
      !currentCoords ||
      !destinationCoords
    ) {
      Alert.alert(
        'Error',
        'Please select both current location and destination.',
      );
      return;
    }

    // If we haven't calculated distance yet or want to recalculate
    let finalDistance = distance;
    if (distance === 0 || isCalculating) {
      const matrixResult = await calculateDistanceMatrix(
        currentCoords,
        destinationCoords,
      );

      if (!matrixResult && isMountedRef.current) {
        const haversineDist = haversineDistance(
          currentCoords.latitude,
          currentCoords.longitude,
          destinationCoords.latitude,
          destinationCoords.longitude,
        );
        finalDistance = haversineDist;

        setLocationState(prev => ({
          ...prev,
          distance: haversineDist,
        }));
      } else if (matrixResult) {
        finalDistance = matrixResult.distance;
      }
    }

    const locationData = {
      startAddress: currentLocation, 
      startLat: currentCoords.latitude,
      startLng: currentCoords.longitude,
      endAddress: destination,
      endLat: destinationCoords.latitude,
      endLng: destinationCoords.longitude,
      distance: finalDistance / 1000, // Distance in kilometers
      distanceMeters: finalDistance, // Distance in meters
    };

    navigation.navigate(SCREEN_NAME.LuggageScreen, {
      locationData: locationData,
    });
  }, [
    locationState,
    uiState.isCalculating,
    calculateDistanceMatrix,
    haversineDistance,
    navigation,
  ]);

  const handleDirectionsReady = useCallback(result => {
    if (!isMountedRef.current) return;

    const {coordinates} = result;
    setLocationState(prev => ({
      ...prev,
      routeCoordinates: coordinates,
    }));
  }, []);

  // Debounced region change handler to prevent excessive re-renders
  const handleRegionChange = useCallback((newRegion: any) => {
    if (regionChangeTimeoutRef.current) {
      clearTimeout(regionChangeTimeoutRef.current);
    }

    regionChangeTimeoutRef.current = setTimeout(() => {
      if (isMountedRef.current) {
        setLocationState(prev => ({
          ...prev,
          region: newRegion,
        }));
      }
    }, 300);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={locationState.region}
        showsUserLocation={true}
        showsMyLocationButton={true}
        onRegionChangeComplete={handleRegionChange}
        customMapStyle={customMapStyle}>
        {locationState.currentCoords && (
          <Marker
            coordinate={locationState.currentCoords}
            title="Current Location"
          />
        )}

        {locationState.destinationCoords && (
          <Marker
            coordinate={locationState.destinationCoords}
            title="Destination"
          />
        )}

        {locationState.currentCoords && locationState.destinationCoords && (
          <MapViewDirections
            origin={locationState.currentCoords}
            destination={locationState.destinationCoords}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={5}
            strokeColor="#FF6347"
            onReady={handleDirectionsReady}
          />
        )}

        {locationState.routeCoordinates.length > 0 && (
          <Polyline
            coordinates={locationState.routeCoordinates}
            strokeColor="#FF6347"
            strokeWidth={5}
          />
        )}
      </MapView>

      <View style={styles.routeContainer}>
        <View style={styles.destinationContainer}>
          <View
            style={{
              // width: 10,
              // height: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={IMAGE.loc2}
              style={{width: 20, height: 20}}
              resizeMode="contain"
              tintColor={COLORS.black}
            />
          </View>
          <GooglePlacesAutocomplete
            placeholder={
              locationState.currentLocation || 'Enter current location'
            }
            onPress={(data, details: any) => {
              const {lat, lng} = details.geometry.location;
              setLocationState((prev: any) => ({
                ...prev,
                currentLocation: data.description,
                currentCoords: {latitude: lat, longitude: lng},
              }));
            }}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'en',
            }}
            ref={googlePlacesAutocompleteRef}
            styles={{
              textInputContainer: styles.textInputContainer,
              textInput: styles.textInput,
              listView: {...styles.listView, marginTop: 140, zIndex: 10},
            }}
            textInputProps={{
              placeholderTextColor: '#ADADAD',
            }}
            fetchDetails={true}
            enablePoweredByContainer={false}
            // currentLocation={true}
            // enableHighAccuracyLocation={true}
            // currentLocationLabel="Current location"
          />
        </View>
        <View style={styles.separator} />
        <View style={[styles.destinationContainer, {marginTop: 0}]}>
          <View
            style={{
              // width: 10,
              // height: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={IMAGE.loc2}
              style={{width: 20, height: 20}}
              resizeMode="contain"
              tintColor={COLORS.PRIMARY}
            />
          </View>
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
              listView: {...styles.listView, marginTop: 70},
            }}
            textInputProps={{
              placeholderTextColor: '#ADADAD',
            }}
            fetchDetails={true}
            enablePoweredByContainer={false}
          />
        </View>
      </View>

      {(locationState.distance > 0 || uiState.error) && (
        <View style={styles.infoContainer}>
          {locationState.distance > 0 && (
            <Text style={styles.distanceText}>
              Distance: {(locationState.distance / 1000).toFixed(2)} km
            </Text>
          )}
          {/* {uiState.error && <Text style={styles.errorText}>{uiState.error}</Text>} */}
        </View>
      )}

      <TouchableOpacity
        onPress={btnConfirmLocation}
        style={[
          styles.confirmButton,
          isConfirmDisabled && styles.disabledButton,
        ]}
        // disabled={isConfirmDisabled}
      >
        {uiState.isCalculating ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.confirmButtonText}>Confirm Location</Text>
        )}
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
    top: 60,
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 8,
    elevation: 5,
    padding: 10,
    zIndex: 5,
  },
  destinationContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 0,
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
    height: 48,
  },
  listView: {
    backgroundColor: '#fff',
    position: 'absolute',
    borderRadius: 8,
    zIndex: 10,
    width: '100%',
    marginTop: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  confirmButton: {
    backgroundColor: '#000',
    borderRadius: 12,
    width: '90%',
    height: 55,
    position: 'absolute',
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  disabledButton: {
    opacity: 0.6,
  },
  confirmButtonText: {
    color: 'white',
    fontFamily: FONTS.MEDIUM,
    fontSize: 16,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'center',
    minWidth: '60%',
  },
  distanceText: {
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
    color: '#000',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
    color: 'red',
    textAlign: 'center',
  },
});

export default HomeTab;

// import React, {useCallback, useEffect, useRef, useState} from 'react';
// import {
//   StyleSheet,
//   View,
//   Dimensions,
//   Platform,
//   Text,
//   PermissionsAndroid,
//   TouchableOpacity,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';
// import {useFocusEffect} from '@react-navigation/native';
// import MapView, {Marker, Polyline} from 'react-native-maps';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import Geolocation from '@react-native-community/geolocation';
// import {FONTS} from '../../../utils/Constants/Fonts';
// import {SCREEN_NAME} from '../../../utils/Constants/Screens';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {getProfileUser} from '../../../redux/slices/apiSlice';
// import {useDispatch, useSelector} from 'react-redux';
// import {AppDispatch, RootState} from '../../../redux/store/store';
// import {jwtDecode} from 'jwt-decode';
// import {setUserData} from '../../../redux/slices/userSlice';
// import MapViewDirections from 'react-native-maps-directions';

// const {width, height} = Dimensions.get('window');

// const GOOGLE_MAPS_API_KEY = 'AIzaSyAGiZy_LyW1yV0XqSy1CD80o7cwEz3GToc';

// const HomeTab = ({navigation}: any) => {
//   const dispatch = useDispatch<AppDispatch>();
//   const [region, setRegion] = useState({
//     latitude:-6.776012,
//     longitude: 39.178326,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });
//   const [currentLocation, setCurrentLocation] = useState<string | null>(null);
//   const [destination, setDestination] = useState<string | null>(null);
//   const [currentCoords, setCurrentCoords] = useState<any>(null);
//   const [destinationCoords, setDestinationCoords] = useState<any>(null);
//   const [distance, setDistance] = useState<number>(0); // Distance in meters
//   const [isCalculating, setIsCalculating] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [routeCoordinates, setRouteCoordinates] = useState<any[]>([]);

//   const googlePlacesAutocompleteRef = useRef<any>(null);
//   const mapRef = useRef<MapView>(null);

//   // Get user profile and token data
//   // useFocusEffect(
//   //   useCallback(() => {
//   //     const getTokenData = async () => {
//   //       try {
//   //         const userToken = await AsyncStorage.getItem('token');
//   //         if (userToken) {
//   //           const decodedToken: any = jwtDecode(userToken);
//   //           const userId = decodedToken?.data?.uid.toString();
//   //           AsyncStorage.setItem('userId', userId);
//   //           dispatch(setUserData(decodedToken));
//   //           dispatch(getProfileUser(decodedToken?.data?.uid));
//   //         }
//   //       } catch (error) {
//   //         console.error('Error decoding token:', error);
//   //       }
//   //     };
//   //     getTokenData();
//   //   }, [dispatch])
//   // );

//   useFocusEffect(
//     useCallback(() => {
//       let isMounted = true;
//       const getTokenData = async () => {
//         try {
//           const userToken = await AsyncStorage.getItem('token');
//           if (userToken && isMounted) {
//             const decodedToken: any = jwtDecode(userToken);
//             const userId = decodedToken?.data?.uid.toString();
//             const storedUserId = await AsyncStorage.getItem('userId');

//             if (storedUserId !== userId) {
//               await AsyncStorage.setItem('userId', userId);
//               dispatch(setUserData(decodedToken));
//               dispatch(getProfileUser(decodedToken?.data?.uid));
//             }
//           }
//         } catch (error) {
//           console.error('Error decoding token:', error);
//         }
//       };

//       getTokenData();

//       return () => {
//         isMounted = false;
//       };
//     }, [dispatch]),
//   );

//   // Request location permission and get current location
//   useEffect(() => {
//     const requestLocationPermission = async () => {
//       if (Platform.OS === 'ios') {
//         getCurrentLocation();
//       } else {
//         try {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//             {
//               title: 'Location Permission',
//               message: 'App needs access to your location',
//               buttonPositive: 'OK',
//             },
//           );
//           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             getCurrentLocation();
//           }
//         } catch (err) {
//           console.warn(err);
//         }
//       }
//     };
//     requestLocationPermission();
//   }, []);

//   const getCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       async (position: any) => {
//         const {latitude, longitude} = position.coords;
//         setCurrentCoords({latitude, longitude});
//         setRegion({
//           latitude,
//           longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         });
//         getAddressFromCoords(latitude, longitude);
//       },
//       error => {
//         console.log('Location error:', error);
//         setError('Failed to get current location');
//       },
//       {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//     );
//   };

//   const getAddressFromCoords = async (lat: number, lng: number) => {
//     try {
//       const response = await fetch(
//         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`,
//       );
//       const data = await response.json();
//       if (data.results[0]) {
//         setCurrentLocation(data.results[0].formatted_address);
//         if (googlePlacesAutocompleteRef.current?.setAddressText) {
//           googlePlacesAutocompleteRef.current.setAddressText(
//             data.results[0].formatted_address,
//           );
//         }
//       }
//     } catch (error) {
//       console.error('Geocoding error:', error);
//       setError('Failed to get address from coordinates');
//     }
//   };

//   // Calculate distance using Google Maps Distance Matrix API
//   const calculateDistanceMatrix = async (origin: any, destination: any) => {
//     try {
//       setIsCalculating(true);
//       setError(null);
//       const response = await fetch(
//         `https://maps.googleapis.com/maps/api/distancematrix/json?` +
//           `origins=${origin.latitude},${origin.longitude}&` +
//           `destinations=${destination.latitude},${destination.longitude}&` +
//           `key=${GOOGLE_MAPS_API_KEY}&mode=driving`,
//       );
//       const data = await response.json();

//       if (data.status === 'OK' && data.rows[0]?.elements[0]?.status === 'OK') {
//         const distanceInMeters = data.rows[0].elements[0].distance.value;
//         const durationInSeconds = data.rows[0].elements[0].duration.value;
//         setDistance(distanceInMeters);
//         return {distance: distanceInMeters, duration: durationInSeconds};
//       }
//       throw new Error(data.error_message || 'Failed to calculate distance');
//     } catch (error) {
//       console.error('Distance Matrix error:', error);
//       setError('Failed to calculate route distance');
//       return null;
//     } finally {
//       setIsCalculating(false);
//     }
//   };

//   // Fallback Haversine formula calculation
//   const haversineDistance = (
//     lat1: number,
//     lon1: number,
//     lat2: number,
//     lon2: number,
//   ) => {
//     const R = 6371; // Earth radius in km
//     const dLat = ((lat2 - lat1) * Math.PI) / 180;
//     const dLon = ((lon2 - lon1) * Math.PI) / 180;
//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos((lat1 * Math.PI) / 180) *
//         Math.cos((lat2 * Math.PI) / 180) *
//         Math.sin(dLon / 2) *
//         Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     return R * c * 1000; // Distance in meters
//   };

//   const handleDestinationSelect = async (data: any, details: any) => {
//     const {lat, lng} = details.geometry.location;
//     setDestination(data.description);
//     const destCoords = {latitude: lat, longitude: lng};
//     setDestinationCoords(destCoords);

//     if (currentCoords) {
//       // First try Google Distance Matrix API
//       const matrixResult = await calculateDistanceMatrix(
//         currentCoords,
//         destCoords,
//       );

//       // If API fails, use Haversine as fallback
//       if (!matrixResult) {
//         const haversineDist = haversineDistance(
//           currentCoords.latitude,
//           currentCoords.longitude,
//           destCoords.latitude,
//           destCoords.longitude,
//         );
//         setDistance(haversineDist);
//       }

//       // Center map on both locations
//       mapRef.current?.fitToCoordinates([currentCoords, destCoords], {
//         edgePadding: {top: 100, right: 100, bottom: 100, left: 100},
//         animated: true,
//       });
//     }
//   };

//   const btnConfirmLocation = async () => {
//     if (
//       !currentLocation ||
//       !destination ||
//       !currentCoords ||
//       !destinationCoords
//     ) {
//       Alert.alert(
//         'Error',
//         'Please select both current location and destination.',
//       );
//       return;
//     }

//     // If we haven't calculated distance yet or want to recalculate
//     if (distance === 0 || isCalculating) {
//       const matrixResult = await calculateDistanceMatrix(
//         currentCoords,
//         destinationCoords,
//       );
//       if (!matrixResult) {
//         const haversineDist = haversineDistance(
//           currentCoords.latitude,
//           currentCoords.longitude,
//           destinationCoords.latitude,
//           destinationCoords.longitude,
//         );
//         setDistance(haversineDist);
//       }
//     }

//     const locationData = {
//       startAddress: currentLocation,
//       startLat: currentCoords.latitude,
//       startLng: currentCoords.longitude,
//       endAddress: destination,
//       endLat: destinationCoords.latitude,
//       endLng: destinationCoords.longitude,
//       distance: distance / 1000, // Distance in kilometers
//       distanceMeters: distance, // Distance in meters
//     };

//     navigation.navigate(SCREEN_NAME.LuggageScreen, {
//       locationData: locationData,
//     });
//   };
//   const handleDirectionsReady = (result: any) => {
//     const {coordinates} = result;
//     setRouteCoordinates(coordinates);
//   };

//   const regionRef = useRef(region);

//   const handleRegionChange = (newRegion: any) => {
//     if (
//       Math.abs(regionRef.current.latitude - newRegion.latitude) > 0.0001 ||
//       Math.abs(regionRef.current.longitude - newRegion.longitude) > 0.0001
//     ) {
//       regionRef.current = newRegion;
//       setRegion(newRegion);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <MapView
//         ref={mapRef}
//         style={{flex: 1}}
//         // style={styles.map}
//         region={region}
//         showsUserLocation={true}
//         showsMyLocationButton={true}
//         onRegionChangeComplete={handleRegionChange}
//         // onRegionChangeComplete={setRegion}
//         customMapStyle={[
//           {
//             featureType: 'poi.business',
//             stylers: [{visibility: 'off'}],
//           },
//           {
//             featureType: 'poi.park',
//             elementType: 'labels.text',
//             stylers: [{visibility: 'off'}],
//           },
//         ]}>
//         {/* {console.log(currentCoords, '--')} */}
//         {/* <Marker coordinate={currentCoords} title="Current Location" /> */}

//         {currentCoords && (
//           <Marker coordinate={currentCoords} title="Current Location" />
//         )}
//         {destinationCoords && (
//           <Marker coordinate={destinationCoords} title="Destination" />
//         )}
//         {currentCoords && destinationCoords && (
//           <MapViewDirections
//             origin={currentCoords}
//             destination={destinationCoords}
//             apikey={GOOGLE_MAPS_API_KEY}
//             strokeWidth={5}
//             strokeColor="#FF6347"
//             onReady={handleDirectionsReady}
//           />
//         )}
//         {routeCoordinates.length > 0 && (
//           <Polyline
//             coordinates={routeCoordinates}
//             strokeColor="#FF6347"
//             strokeWidth={5}
//           />
//         )}
//       </MapView>

//       <View style={styles.routeContainer}>
//         <View style={styles.destinationContainer}>
//           <GooglePlacesAutocomplete
//             placeholder={currentLocation || 'Enter current location'}
//             onPress={(data, details:any) => {
//               const {lat, lng} = details.geometry.location;
//               setCurrentLocation(data.description);
//               setCurrentCoords({latitude: lat, longitude: lng});
//             }}
//             query={{
//               key: GOOGLE_MAPS_API_KEY,
//               language: 'en',
//               // components: 'country:tz' // Tanzania country code
//             }}
//             ref={googlePlacesAutocompleteRef}
//             styles={{
//               textInputContainer: styles.textInputContainer,
//               textInput: styles.textInput,
//               listView: {...styles.listView, marginTop: 140, zIndex: 10},
//             }}
//             textInputProps={{
//               placeholderTextColor: '#ADADAD',
//             }}
//             fetchDetails={true}
//             enablePoweredByContainer={false}
//             currentLocation={true}
//             currentLocationLabel="Current location"
//           />
//         </View>
//         <View style={styles.separator} />
//         <View style={[styles.destinationContainer, {marginTop: 0}]}>
//           <GooglePlacesAutocomplete
//             placeholder="Enter your Destination"
//             onPress={handleDestinationSelect}
//             query={{
//               key: GOOGLE_MAPS_API_KEY,
//               language: 'en',
//               // components: 'country:tz' // Tanzania country code
//             }}
//             styles={{
//               textInputContainer: styles.textInputContainer,
//               textInput: styles.textInput,
//               listView: {...styles.listView,marginTop:70},
//             }}
//             textInputProps={{
//               placeholderTextColor: '#ADADAD',
//             }}
//             fetchDetails={true}
//             enablePoweredByContainer={false}
//           />
//         </View>
//       </View>

//       {(distance > 0 || error) && (
//         <View style={styles.infoContainer}>
//           {distance > 0 && (
//             <Text style={styles.distanceText}>
//               Distance: {(distance / 1000).toFixed(2)} km
//             </Text>
//           )}
//           {error && <Text style={styles.errorText}>{error}</Text>}
//         </View>
//       )}

//       <TouchableOpacity
//         onPress={btnConfirmLocation}
//         style={[
//           styles.confirmButton,
//           (isCalculating || !currentLocation || !destination) &&
//             styles.disabledButton,
//         ]}
//         disabled={isCalculating || !currentLocation || !destination}>
//         {isCalculating ? (
//           <ActivityIndicator color="white" />
//         ) : (
//           <Text style={styles.confirmButtonText}>Confirm Location</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
//   routeContainer: {
//     position: 'absolute',
//     top: 60,
//     backgroundColor: '#fff',
//     width: '90%',
//     alignSelf: 'center',
//     borderRadius: 8,
//     elevation: 5,
//     padding: 10,
//     zIndex: 5,
//   },
//   destinationContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//   },
//   textInputContainer: {
//     backgroundColor: 'transparent',
//     borderTopWidth: 0,
//     borderBottomWidth: 0,
//     paddingHorizontal: 0,
//   },
//   textInput: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     fontSize: 16,
//     color: '#000',
//     height: 48,
//   },
//   listView: {
//     backgroundColor: '#fff',
//     position: 'absolute',
//     borderRadius: 8,
//     zIndex: 10,
//     width: '100%',
//     marginTop: 5,
//   },
//   separator: {
//     height: 1,
//     backgroundColor: '#ccc',
//     marginVertical: 8,
//   },
//   confirmButton: {
//     backgroundColor: '#000',
//     borderRadius: 12,
//     width: '90%',
//     height: 55,
//     position: 'absolute',
//     bottom: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//   },
//   disabledButton: {
//     opacity: 0.6,
//   },
//   confirmButtonText: {
//     color: 'white',
//     fontFamily: FONTS.MEDIUM,
//     fontSize: 16,
//   },
//   infoContainer: {
//     position: 'absolute',
//     bottom: 100,
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//     padding: 10,
//     borderRadius: 8,
//     alignSelf: 'center',
//     minWidth: '60%',
//   },
//   distanceText: {
//     fontSize: 14,
//     fontFamily: FONTS.MEDIUM,
//     color: '#000',
//     textAlign: 'center',
//   },
//   errorText: {
//     fontSize: 14,
//     fontFamily: FONTS.MEDIUM,
//     color: 'red',
//     textAlign: 'center',
//   },
// });

// export default HomeTab;
