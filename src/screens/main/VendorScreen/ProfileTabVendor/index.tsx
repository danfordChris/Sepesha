import {
  Alert,
  FlatList,
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IMAGE} from '../../../../utils/Constants/Images';
import {SCREEN_NAME} from '../../../../utils/Constants/Screens';
import styles from './styles';
import {FONTS} from '../../../../utils/Constants/Fonts';
import CustomHeader from '../../../../components/CustomHeader';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileTabVendor = ({navigation}: any) => {
  const getProfile = useSelector(
    (state: RootState) => state.API.data.getProfileUserResposne,
  );

  console.log(getProfile,'getProfilegetProfilegetProfile');
  const data = [
    {
      id: '1',
      phoneNumber: getProfile?.data[0]?.name
        ? `${getProfile?.data[0]?.name} ${getProfile?.data[0]?.sname || ''}`
        : 'User',
      // phoneNumber: 'User',

      image: getProfile?.data[0]?.profile_photo
        ? {uri: getProfile?.data[0]?.profile_photo}
        : IMAGE.profilecircle,
      onPress: () => navigation.navigate(SCREEN_NAME.EditProfile),
    },
    {
      id: '2',
      phoneNumber: 'Documents',
      image: IMAGE.card,
      onPress: () => navigation.navigate(SCREEN_NAME.DocumentsAdd), // Example of navigation
    },

    {
      id: '3',
      phoneNumber: 'Ratings',
      image: IMAGE.chat,
      onPress: () => navigation.navigate(SCREEN_NAME.RatingDriver), // Example of navigation
    },
    {
      id: '3',
      phoneNumber: 'My Vehicle',
      image: IMAGE.chat,
      onPress: () => navigation.navigate(SCREEN_NAME.VehicleList), // Example of navigation
    },
    
    {
      id: '3',
      phoneNumber: 'Chat',
      image: IMAGE.chat,
      onPress: () => navigation.navigate('Chat'), // Example of navigation
    },

  
    {
      id: '4',
      phoneNumber: 'Support',
      image: IMAGE.support,
      onPress: () => navigation.navigate(SCREEN_NAME.SupportSection), // Example of navigation
    },
    {
      id: '5',
      phoneNumber: 'Refer to friends',
      image: IMAGE.share,
      onPress: () => shareApp(), // Example of navigation
    },
    {
      id: '6',
      phoneNumber: 'Logout',
      image: IMAGE.logout,
      onPress: () =>
        Alert.alert(
          'Logout',
          'Are you sure you want to logout?',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Logout cancelled'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: async () => {
                console.log('User logged out');
                await AsyncStorage.clear();
                navigation.navigate(SCREEN_NAME.WELCOMECREEN);
              },
            },
          ],
          {cancelable: false},
        ),
    },
  ];
  const shareApp = async () => {
    try {
      const result = await Share.share({
        title: 'Check out this Sepesha Cargo Delivery App!',
        message:
          'Hey! Download this Sepesha Cargo Delivery App: https://loadly.io/nM2qytCF',
        url: 'https://loadly.io/nM2qytCF', // Optional, good for iOS
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log('Shared with activity type:', result.activityType);
        } else {
          // shared
          console.log('App shared successfully!');
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error while sharing:', error.message);
    }
  };

  const inset = useSafeAreaInsets();

  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        onPress={item.onPress}
        activeOpacity={0.5}
        style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image style={styles.personImage} source={item?.image} />
          <Text style={{color: 'black', fontFamily: FONTS.MEDIUM}}>
            {item.phoneNumber}
          </Text>
        </View>
        {index !== 0 && index !== data.length - 1 && (
          <Image style={styles.arrowImage} source={IMAGE.arrowright} />
        )}
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <View style={{paddingTop: inset.top}}>
        <CustomHeader
          btnBack={() => navigation.goBack()}
          text={'Account'}
          arrowImage={IMAGE.LEFT}
        />

        <FlatList
          data={data}
          contentContainerStyle={{marginTop: 30}}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeparator} // Add separator here
        />
      </View>
    </View>
  );
};

export default ProfileTabVendor;
