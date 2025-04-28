import { Linking, PermissionsAndroid, Platform, Alert } from 'react-native';
import { getApp, initializeApp } from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import { getMessaging, getToken, requestPermission } from '@react-native-firebase/messaging';

import Notifications from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Ask for permission
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Notification permission granted!');
  } else {
    console.log('Notification permission denied!');
  }
}

// Globals
const isIOS = Platform.OS === 'ios';
let notificationData: any = null;

export async function FCM_init(): Promise<void> {
  try {
    const configStatus = await firebaseConfig();
    if (configStatus) {
      const hasPermission = await checkNotificationPermission();
      if (hasPermission) {
        await initializeFirebaseMethods();
      } else {
        const permissionGranted = await requestNotificationPermission();
        if (permissionGranted) {
          await initializeFirebaseMethods();
        }
      }
    }
  } catch (error) {
    console.error('Error initializing FCM: ', error);
  }
}

// Firebase Config and Permission Handling
async function firebaseConfig(): Promise<boolean> {
  try {
    if (isIOS && messaging().app === undefined) {
        const firebaseConfig = {
            apiKey: "AIzaSyDi0QKByNVY4EDmVG9dNU7LTxopZ4Sy2e0",
            authDomain: "fiftyshadesofgrape-15ad6.firebaseapp.com",
            projectId: "fiftyshadesofgrape-15ad6",
            storageBucket: "fiftyshadesofgrape-15ad6.firebasestorage.app",
            messagingSenderId: "166868530260",
            appId: "1:166868530260:web:9018bba7d424afeb3a29c1"
          };


      initializeApp(firebaseConfig);
    }
    return true;
  } catch (error) {
    console.error('Error configuring Firebase: ', error);
    return false;
  }
}

export const checkNotificationPermission = async (): Promise<boolean> => {
  try {
    let hasPermission = false;

    if (Platform.OS === 'ios') {
      const authStatus = await messaging().requestPermission();
      hasPermission =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    } else {
      const androidVersion = Number(Platform.Version);
      if (androidVersion > 32) {
        hasPermission = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      } else {
        // For Android versions <= 32, assume notifications are allowed by default
        hasPermission = true;
      }
    }

    console.log(
      'Notification permission: ',
      hasPermission ? 'Granted' : 'Denied',
    );
    return hasPermission;
  } catch (error) {
    console.error('Error checking notification permission: ', error);
    return false;
  }
};

async function requestNotificationPermission(): Promise<boolean> {
  try {
    let permissionGranted = false;

    if (Platform.OS === 'ios') {
      const authStatus = await messaging().requestPermission();
      permissionGranted =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    } else {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      permissionGranted = result === PermissionsAndroid.RESULTS.GRANTED;
    }

    console.log(
      'Notification permission requested: ',
      permissionGranted ? 'Granted' : 'Denied',
    );

    if (!permissionGranted) {
      Alert.alert(
        'Notification Permission Denied',
        'You have denied notification permissions. Please enable it in your settings.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Open Settings',
            onPress: () => {
              Linking.openSettings().catch(() => {
                console.error('Failed to open settings');
              });
            },
          },
        ],
      );
    }

    return permissionGranted;
  } catch (error) {
    console.error('Error requesting notification permission: ', error);
    return false;
  }
}

// Firebase Methods Initialization
async function initializeFirebaseMethods() {
  createNotificationChannel();
  await generateFirebaseToken();
  handleForegroundMessages();
  handleBackgroundMessages();
  setupNotificationClicks();
}

// Notification Channel for Android
function createNotificationChannel(): void {
  try {
    Notifications.createChannel(
      {
        channelId: '123',
        channelName: 'My channel',
        channelDescription: 'A channel to categorize your notifications',
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      (created: boolean) => console.log(`Channel created: ${created}`),
    );
  } catch (error) {
    console.error('Error creating notification channel: ', error);
  }
}

// Generate Firebase Token
// Request notification permission and get the token
async function generateFirebaseToken() {
  try {
    if (isIOS) {
      // Request permission for push notifications
      await requestUserPermission();

      // Get the messaging instance using the new modular SDK
      const messaging = getMessaging(getApp());

      // Now get the APNS token
      const apnsToken = await messaging.getAPNSToken();
      console.log('APNS Token:', apnsToken);

      if (apnsToken) {
        // Fetch the FCM token
        const token = await getToken(messaging);
        console.log('Firebase token:', token);

        // Store the token in AsyncStorage
        await AsyncStorage.setItem('tokenDevice', token);
      } else {
        console.log('No APNS Token found.');
      }
    } else {
      // For Android, directly fetch the FCM token
      const messaging = getMessaging(getApp());
      const token = await getToken(messaging);
      console.log('Firebase token (Android):', token);
      await AsyncStorage.setItem('tokenDevice', token);
    }
  } catch (error) {
    console.error('Error generating Firebase token: ', error);
  }
}


// Foreground Message Handling
function handleForegroundMessages(): void {
  try {
    messaging().onMessage(async remoteMessage => {
      notificationData = remoteMessage?.data;
      console.log('Foreground message: ', notificationData);

      if (isIOS) {
        PushNotificationIOS.addNotificationRequest({
          id: remoteMessage?.messageId || '',
          body: remoteMessage?.notification?.body || '',
          title: remoteMessage?.notification?.title || '',
          priority: 'high',
        });
      } else {
        Notifications.localNotification({
          channelId: '123',
          message: remoteMessage?.notification?.body || '',
          title: remoteMessage?.notification?.title || '',
          priority: 'high',
          vibrate: true,
          playSound: true,
          largeIcon: '@mipmap/ic_launcher_round',
        });
      }
    });
  } catch (error) {
    console.error('Error in foreground message handler: ', error);
  }
}

// Background Message Handling
function handleBackgroundMessages(): void {
  try {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      notificationData = remoteMessage?.data;
      console.log('Background message: ', notificationData);
      return Promise.resolve();
    });
  } catch (error) {
    console.error('Error in background message handler: ', error);
  }
}

// Notification Click Handling
function setupNotificationClicks(): void {
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        notificationData = remoteMessage?.data;
        console.log('App opened from quit state: ', remoteMessage);
      }
    });

  messaging().onNotificationOpenedApp(remoteMessage => {
    notificationData = remoteMessage?.data;
    console.log('App opened from background state: ', remoteMessage);
  });

  Notifications.configure({
    onNotification: (notification: any) => {
      if (notification.userInteraction) {
        console.log('Notification clicked: ', notification);
        handleNotificationClick();
      }
    },
  });
}

function handleNotificationClick(): void {
  if (notificationData) {
    console.log('Processing notification click with data: ', notificationData);
    // Handle click action
  }
}

