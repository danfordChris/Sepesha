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
import {IMAGE} from '../../../utils/Constants/Images';
import CustomHeader from '../../../components/CustomHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {FONTS} from '../../../utils/Constants/Fonts';
import {SCREEN_NAME} from '../../../utils/Constants/Screens';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountTab = ({navigation}: any) => {
  const inset = useSafeAreaInsets();
  const {loginResponse} = useSelector((state: RootState) => state.API.data);
  const getProfile = useSelector(
    (state: RootState) => state.API.data.getProfileUserResposne,
  );

  // Check if user is a vendor
  const isVendor = getProfile?.data[0]?.role === 'vendor';

  const baseMenuItems = [
    {
      id: '1',
      phoneNumber: getProfile?.data[0]?.name
        ? `${getProfile?.data[0]?.name} ${getProfile?.data[0]?.sname || ''}`
        : 'User',
      image: getProfile?.data[0]?.profile_photo
        ? {uri: getProfile?.data[0]?.profile_photo}
        : IMAGE.profilecircle,
      onPress: () => navigation.navigate(SCREEN_NAME.EditProfile),
    },
    {
      id: '3',
      phoneNumber: 'Notification',
      image: IMAGE.notification,
      onPress: () => navigation.navigate(SCREEN_NAME.NotificationListing),
    },
    {
      id: '4',
      phoneNumber: 'Chat',
      image: IMAGE.chat,
      onPress: () => navigation.navigate('Chat'),
    },
    {
      id: '5',
      phoneNumber: 'Support Ticket',
      image: IMAGE.support,
      onPress: () => navigation.navigate(SCREEN_NAME.SupportSection),
    },
    {
      id: '6',
      phoneNumber: 'Share to friends',
      image: IMAGE.share,
      onPress: () => shareApp(),
    },
    {
      id: '7',
      phoneNumber: 'Help',
      image: IMAGE.help,
      onPress: () => shareApp(),
    },
    {
      id: '8',
      phoneNumber: 'Logout',
      image: IMAGE.logout,
      onPress: () => handleLogout(),
    },
  ];

  const vendorMenuItems = [
    {
      id: '2',
      phoneNumber: 'Earning',
      image: IMAGE.card,
      onPress: () => navigation.navigate(SCREEN_NAME.EarningVendor),
    },
  ];

  const menuItems = isVendor 
    ? [...baseMenuItems.slice(0, 1), ...vendorMenuItems, ...baseMenuItems.slice(1)] 
    : baseMenuItems;

  const shareApp = async () => {
    try {
      const result = await Share.share({
        title: 'Check out this Sepesha Cargo Delivery App!',
        message: 'Hey! Download this Sepesha Cargo Delivery App: https://loadly.io/nM2qytCF',
        url: 'https://loadly.io/nM2qytCF',
      });

      if (result.action === Share.sharedAction) {
        console.log('App shared successfully!');
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error:any) {
      console.error('Error while sharing:', error.message);
    }
  };

  const handleLogout = async () => {
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
            await AsyncStorage.clear();
            navigation.navigate(SCREEN_NAME.WELCOMECREEN);
          },
        },
      ],
      {cancelable: false},
    );
  };

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
        {index !== 0 && index !== menuItems.length - 1 && (
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
          data={menuItems}
          contentContainerStyle={{marginTop: 30}}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </View>
  );
};

export default AccountTab;