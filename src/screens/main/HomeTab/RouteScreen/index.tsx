import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Image,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IMAGE } from '../../../../utils/Constants/Images';

const RouteScreen = ({ navigation, route }: any) => {
  const insets = useSafeAreaInsets();
  const [currentLocation, setCurrentLocation] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState<string>('');
  const [destinationCoords, setDestinationCoords] = useState<any>(null);
  const [currentCoords, setCurrentCoords] = useState<any>(null);
  const googlePlacesAutocompleteRef = useRef(null);

  const { onDataReceived } = route.params || {}; // Access onDataReceived from params

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
            title: "Location Permission",
            message: "App needs access to your location",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
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
    setLoading(true);
    Geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentCoords({ latitude, longitude });

        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${'AIzaSyBY7WePV2Eg7cigEfbsFvjs1GzEHx6GXVA'}`
          );
          const data = await response.json();
          if (data.results[0]) {
            setCurrentLocation(data.results[0].formatted_address);
            if (googlePlacesAutocompleteRef && googlePlacesAutocompleteRef.current && googlePlacesAutocompleteRef.current.setAddressText) {
              googlePlacesAutocompleteRef.current.setAddressText(data.results[0].formatted_address);
            }
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.log(error);
        setLoading(false);
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

    if (onDataReceived) {
      onDataReceived({
        currentLocation: currentCoords,
        destinationLocation: { latitude: lat, longitude: lng },
      });
    }

    navigation.goBack();
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image style={{ width: 20, height: 20 }} source={IMAGE.LEFT} />
        </TouchableOpacity>
        <Text style={styles.title}>Your route</Text>
      </View>

      <View style={styles.routeContainer}>
        {/* Current Location Search Container */}
        <View style={styles.destinationContainer}>
          <GooglePlacesAutocomplete
            placeholder={loading ? 'Getting location...' : currentLocation || 'Enter current location'}
            onPress={handleCurrentLocationUpdate}
            query={{
              key: 'AIzaSyBY7WePV2Eg7cigEfbsFvjs1GzEHx6GXVA',
              language: 'en',
            }}
            textInputProps={{
              autoFocus: true,
              placeholderTextColor: '#000000',
            }}
            ref={googlePlacesAutocompleteRef}
            styles={{
              textInputContainer: styles.textInputContainer,
              textInput: styles.textInput,
              predefinedPlacesDescription: styles.predefinedPlacesDescription,
              listView: {...styles.listView,top:150},
            }}
            enablePoweredByContainer={false}
            fetchDetails={true}
            renderLeftButton={() => (
              <View style={styles.searchIcon}>
                <Image style={{ width: 20, height: 20 }} source={IMAGE.search} />
              </View>
            )}
          />
        </View>


        <View style={{...styles.destinationContainer,marginTop:20}}>
          <GooglePlacesAutocomplete
            placeholder="Enter destination"
            onPress={handleDestinationSelect}
            query={{
              key: 'AIzaSyBY7WePV2Eg7cigEfbsFvjs1GzEHx6GXVA',
              language: 'en',
            }}
            styles={{
              textInputContainer: styles.textInputContainer,
              textInput: styles.textInput,
              predefinedPlacesDescription: styles.predefinedPlacesDescription,
              listView: styles.listView,
            }}
            enablePoweredByContainer={false}
            fetchDetails={true}
            renderLeftButton={() => (
              <View style={styles.searchIcon}>
                <Image style={{ width: 20, height: 20 }} source={IMAGE.search} />
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  routeContainer: {
    justifyContent: 'space-between',
    padding: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  currentLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  blueDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4A6DFF',
    marginRight: 12,
  },
  locationText: {
    fontSize: 16,
    color: '#000',
  },
  addButton: {
    padding: 8,
  },
  addButtonText: {
    color: '#22C55E',
    fontWeight: '600',
  },
  destinationContainer: {
    borderWidth: 2,
    borderColor: '#22C55E',
    borderRadius: 8,
    height: 60,
    width: '100%',
    zIndex: 999, // Ensures the search box is on top
  },
  textInputContainer: {
    backgroundColor: '#FAFAFA',
    height: 50,
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  textInput: {
    color: '#000000',
    fontSize: 16,
    height: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#fafafa',
    width: '100%',
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
  listView: {
    position: 'absolute',
    top: 60, // Adjusted to be just below the input field
    width: '100%',
    zIndex: 1000, // Ensure the dropdown is above other elements
  },
  searchIcon: {
    justifyContent: 'center',
  },
});

export default RouteScreen;

