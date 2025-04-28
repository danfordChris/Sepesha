import React from 'react';
import {Image, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from '../screens/auth/Splash';
import {SCREEN_NAME} from '../utils/Constants/Screens';
import SignUp from '../screens/auth/SignUp';
import OtpVerify from '../screens/auth/OtpVerify';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './CustomeDrawer';
import {FONTS} from '../utils/Constants/Fonts';
import HomeTab from '../screens/main/HomeTab';
import {IMAGE} from '../utils/Constants/Images';
import SecondTab from '../screens/main/AccountTab';
import ThirdTab from '../screens/main/AccuontTab';
import RouteScreen from '../screens/main/HomeTab/RouteScreen';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import SignUpVenCust from '../screens/auth/SignUpVenCust';
import RegisterVendorCustomer from '../screens/auth/RegisterVendorCutomer';
import {COLORS} from '../utils/Constants/Colors';
import AccountTab from '../screens/main/AccountTab';
import RideTab from '../screens/main/RideTab';
import LuggageScreen from '../screens/main/LuggageScreen';
import HomeTabVendor from '../screens/main/VendorScreen/HomeTabVendor';
import EarningTabVendor from '../screens/main/VendorScreen/EarningTabVendor';
import BookingTabVendor from '../screens/main/VendorScreen/BookingTabVendor';
import ProfileTabVendor from '../screens/main/VendorScreen/ProfileTabVendor';
import DocumentsAdd from '../screens/main/VendorScreen/Auth/DocumentsAdd';
import DeliveryDetails from '../screens/main/VendorScreen/BookingTabVendor/DeliveryDetails';
import VehicleSelection from '../screens/main/VendorScreen/Auth/VehicleSelection';
import EditProfile from '../screens/main/VendorScreen/BookingTabVendor/EditProfile';
import SupportSection from '../screens/main/SupportSection';
import NotificationListing from '../screens/main/NotificationListing';
import EarningVendor from '../screens/main/VendorScreen/BookingTabVendor/EarningVendor/EarningVendor';
import RatingDriver from '../screens/main/VendorScreen/RatingsDriver';
import RideStatusScreen from '../screens/main/RideStatusScreen';
import VehicleList from '../screens/main/VendorScreen/VehicleList';

//Tab bar Icons

//Animations for bottom bar
// function AnimatedBar({ focused }: { focused: boolean }) {
//   // Shared value for animation
//   const scaleX = useSharedValue(focused ? 1 : 0);

//   React.useEffect(() => {
//     scaleX.value = withTiming(focused ? 1 : 0, { duration: 3000 });
//   }, [focused]);

//   // Animated style for scaling the width of the bar
//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{ scaleX: scaleX.value }],
//   }));

//   return (
//     <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//       <Animated.View
//         style={[
//           {
//             height: 4,
//             width: 50,
//             backgroundColor: focused ? '#33A697' : '#FFFFFF',
//             marginBottom: 10,
//             borderBottomEndRadius: 2,
//             borderBottomStartRadius: 2,
//             transformOrigin: 'center',
//           },
//           animatedStyle,
//         ]}
//       />
//     </View>
//   );
// }

// Create navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Drawer Navigator
function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {width: 300},
      }}>
      <Drawer.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

function BottomTab1() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {backgroundColor: '#fff', height: 80},
        tabBarLabelStyle: {
          fontSize: 8,
          fontFamily: FONTS.MEDIUM,
          color: '#000',
        },
        headerShown: false,
        animation: 'shift',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 11,
                fontFamily: FONTS.MEDIUM,
                marginVertical: 7,
                color: focused ? COLORS.main : '#6C6C70',
              }}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGE.cottage}
              tintColor={focused ? COLORS.main : '#6C6C70'}
              style={{width: 24, height: 24}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Rides"
        component={RideTab}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 11,
                fontFamily: FONTS.MEDIUM,
                marginVertical: 7,
                color: focused ? COLORS.main : '#6C6C70',
              }}>
              Bookings
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              tintColor={focused ? COLORS.main : '#6C6C70'}
              source={IMAGE.loc}
              style={{width: 24, height: 24}}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountTab}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 11,
                fontFamily: FONTS.MEDIUM,
                marginVertical: 7,
                color: focused ? COLORS.main : '#6C6C70',
              }}>
              Account
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGE.person}
              tintColor={focused ? COLORS.main : '#6C6C70'}
              style={{width: 24, height: 24}}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function BottomTab2() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {backgroundColor: '#fff', height: 80},
        tabBarLabelStyle: {
          fontSize: 8,
          fontFamily: FONTS.MEDIUM,
          color: '#000',
        },
        headerShown: false,
        animation: 'shift',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTabVendor}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 11,
                fontFamily: FONTS.MEDIUM,
                marginVertical: 7,
                color: focused ? COLORS.main : '#6C6C70',
              }}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGE.cottage}
              tintColor={focused ? COLORS.main : '#6C6C70'}
              style={{width: 24, height: 24}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Earnings"
        component={EarningTabVendor}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 11,
                fontFamily: FONTS.MEDIUM,
                marginVertical: 7,
                color: focused ? COLORS.main : '#6C6C70',
              }}>
              Earnings
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              tintColor={focused ? COLORS.main : '#6C6C70'}
              source={IMAGE.loc}
              style={{width: 24, height: 24}}
              resizeMode="contain"
            />
          ),
        }}
      />

      <Tab.Screen
        name="Bookings"
        component={BookingTabVendor}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 11,
                fontFamily: FONTS.MEDIUM,
                marginVertical: 7,
                color: focused ? COLORS.main : '#6C6C70',
              }}>
              Bookings
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGE.CALENDER}
              tintColor={focused ? COLORS.main : '#6C6C70'}
              style={{width: 24, height: 24}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTabVendor}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 11,
                fontFamily: FONTS.MEDIUM,
                marginVertical: 7,
                color: focused ? COLORS.main : '#6C6C70',
              }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGE.person}
              tintColor={focused ? COLORS.main : '#6C6C70'}
              style={{width: 24, height: 24}}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Stack Navigator
function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      {/* Authentication Screens */}
      <Stack.Screen name={SCREEN_NAME.SPLASH} component={Splash} />

      <Stack.Screen name={SCREEN_NAME.SIGNUP} component={SignUp} />

      <Stack.Screen name={SCREEN_NAME.OTPVERIFY} component={OtpVerify} />
      <Stack.Screen name={SCREEN_NAME.ROUTESCREEN} component={RouteScreen} />
      <Stack.Screen name={SCREEN_NAME.WELCOMECREEN} component={WelcomeScreen} />
      <Stack.Screen
        name={SCREEN_NAME.SignUpVenCust}
        component={SignUpVenCust}
      />

      <Stack.Screen
        name={SCREEN_NAME.RegisterVendorCustomer}
        component={RegisterVendorCustomer}
      />

      <Stack.Screen
        name={SCREEN_NAME.LuggageScreen}
        component={LuggageScreen}
      />

      <Stack.Screen name={SCREEN_NAME.DocumentsAdd} component={DocumentsAdd} />
      <Stack.Screen
        name={SCREEN_NAME.VehicleSelection}
        component={VehicleSelection}
      />

      <Stack.Screen
        name={SCREEN_NAME.DeliveryDetails}
        component={DeliveryDetails}
      />

      <Stack.Screen name={SCREEN_NAME.EditProfile} component={EditProfile} />
      <Stack.Screen
        name={SCREEN_NAME.BookingTabVendor}
        component={BookingTabVendor}
      />
      <Stack.Screen
        name={SCREEN_NAME.SupportSection}
        component={SupportSection}
      />
   <Stack.Screen
        name={SCREEN_NAME.NotificationListing}
        component={NotificationListing}
      />

<Stack.Screen
        name={SCREEN_NAME.EarningVendor}
        component={EarningVendor}
      />

<Stack.Screen
        name={SCREEN_NAME.RatingDriver}
        component={RatingDriver}
      />

<Stack.Screen
        name={SCREEN_NAME.RideStatusScreen}
        component={RideStatusScreen}
      />

<Stack.Screen
        name={SCREEN_NAME.VehicleList}
        component={VehicleList}
      />

      <Stack.Screen name={'BottomTab1'} component={BottomTab1} />

      <Stack.Screen name={'BottomTab2'} component={BottomTab2} />

      {/* <Stack.Screen name="AppDrawer" component={AppDrawer} /> */}
    </Stack.Navigator>
  );
}

// App Navigator
export default function TotalNavigation() {
  return <AppStack />;
}
