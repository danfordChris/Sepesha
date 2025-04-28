import {
  View,
  Text,
  TextInput,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import TotalNavigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store/store';
import 'react-native-get-random-values';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const RequestLocationPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      // For Android
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'This app needs access to your location to provide personalized services.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      } 
    } else {
      // For iOS
      const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (result === RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    }
  } catch (err) {
    console.warn(err);
  }
};

export default function App() {
  
  useEffect(() => {
    RequestLocationPermission();
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <TotalNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}
if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}
