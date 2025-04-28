import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert, FlatList, RefreshControl, Linking } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
import { IMAGE } from '../../../../utils/Constants/Images';
import { SCREEN_NAME } from '../../../../utils/Constants/Screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../../../redux/slices/userSlice';
import { AppDispatch, RootState } from '../../../../redux/store/store';
import { getProfileUser, getbookingsAPi, updateRide } from '../../../../redux/slices/apiSlice';
import { useFocusEffect } from '@react-navigation/native';

type Attachment = {
  attachment: string;
  type: number;
  id: number;
};

type Booking = {
  id: string;
  category: { name: string };
  recepient_name: string;
  delivery_location: string;
  status: 'pending' | 'accepted' | 'rejected' | 'completed' | 'assigned' | 'intransit' | 'cancelled';
  base_price: string;
  amount: string;
  pickup_date: string;
  pickup_location: string;
  distance_km: string;
};

type Vehicle = {
  attachments?: Attachment[];
};

const HomeTabVendor = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch<AppDispatch>();
  const userData = useSelector((state: RootState):any => state.user.userData);
  const [allBookings, setAllBookings] = useState<Booking[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const getProfile = useSelector((state: RootState) => state.API.data.getProfileUserResposne);
  const getDriverVehicleResponse = useSelector((state: RootState) => state.API.data.getDriverVehicleResponse);
  const vehicleData: Vehicle = getDriverVehicleResponse?.data || {};
  const getDriverBooking = useSelector((state: RootState) => state.API.data.getdriverbookingsResponse);

  // Extract documents from vehicle data
  const drivingLicense = vehicleData.attachments?.find(doc => doc.type === 1);
  const vehicleInsurance = vehicleData.attachments?.find(doc => doc.type === 2);

  useFocusEffect(
    useCallback(() => {
      getTokenData();
      fetchAllBookings();
    }, [])
  );

  const getTokenData = async () => {
    try {
      const userToken = await AsyncStorage.getItem('token');
      if (userToken) {
        const decodedToken: any = jwtDecode(userToken);
        const userId = decodedToken?.data?.uid.toString();
        AsyncStorage.setItem('userId', userId);
        dispatch(setUserData(decodedToken));

        const result = await dispatch(getProfileUser(decodedToken?.data?.uid));
        if (result?.payload) {
          AsyncStorage.setItem('role', result?.payload?.data[0]?.role);
        }
      }
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  };

  const fetchAllBookings = async () => {
    try {
      const result = await dispatch(getbookingsAPi());
      if (result?.payload?.data) {
        setAllBookings(result.payload.data);
      }
    } catch (error) {
      console.error('Error fetching all bookings:', error);
      Alert.alert('Error', 'Failed to fetch all bookings');
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchAllBookings().finally(() => setRefreshing(false));
  }, []);

  const updateRideAPI = async (item: Booking, status: string) => {
    try {
      if (!userData?.data?.uid || !getDriverVehicleResponse?.data?.id) {
        throw new Error("Missing required data (driver ID or vehicle ID)");
      }

      const result = await dispatch(updateRide({
        bookingId: item.id,
        status: status,
        driverId: userData.data.uid,
        vehicleId: getDriverVehicleResponse.data.id
      }));

      if (result?.payload) {
        fetchAllBookings();
        if (status === 'assigned') {
          navigation.navigate(SCREEN_NAME.DeliveryDetails, { item });
        }
      }
    } catch (error) {
      console.error('Error updating ride:', error);
      Alert.alert("Error", "Failed to update ride. Please try again.");
    }
  };

  const checkDocuments = () => {
    if (!drivingLicense && !vehicleInsurance) {
      Alert.alert(
        'Documents Required',
        'Please upload both Driving License and Vehicle Insurance documents to continue.',
        [
          {
            text: 'Upload Documents',
            onPress: () => navigation.navigate(SCREEN_NAME.DocumentsAdd)
          },
          {
            text: 'Cancel',
            style: 'cancel'
          }
        ]
      );
      return false;
    }

    if (!drivingLicense) {
      Alert.alert(
        'Driving License Required',
        'Please upload your Driving License document to continue.',
        [
          {
            text: 'Upload License',
            onPress: () => navigation.navigate(SCREEN_NAME.DocumentsAdd)
          },
          {
            text: 'Cancel',
            style: 'cancel'
          }
        ]
      );
      return false;
    }

    if (!vehicleInsurance) {
      Alert.alert(
        'Insurance Required',
        'Please upload your Vehicle Insurance document to continue.',
        [
          {
            text: 'Upload Insurance',
            onPress: () => navigation.navigate(SCREEN_NAME.DocumentsAdd)
          },
          {
            text: 'Cancel',
            style: 'cancel'
          }
        ]
      );
      return false;
    }

    return true;
  };

  const handleAccept = (item: Booking) => {
    if (!checkDocuments()) return;
    updateRideAPI(item, 'assigned');
  };

  const handleReject = (item: Booking) => {
    if (!checkDocuments()) return;
    updateRideAPI(item, 'rejected');
  };

  const formatAmountWithCommas = (amount: any) => {
    if (amount == null) return '';
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const renderDocumentCard = (title: string, document: Attachment | undefined, icon: any, docType: string) => {
    return (
      <TouchableOpacity 
        style={styles.documentCard}
        onPress={() => document ? Linking.openURL(document.attachment) : navigation.navigate(SCREEN_NAME.DocumentsAdd)}
      >
        <View style={{ width: '92%', paddingHorizontal: 10 }}>
          <Text style={styles.documentTitle}>{title}</Text>
          {document ? (
            <View style={styles.documentAvailableContainer}>
              <Image 
                source={IMAGE.pdfIcon} 
                style={styles.documentIcon} 
              />
              <Text style={styles.documentText}>
                {docType} Document (Tap to view)
              </Text>
            </View>
          ) : (
            <TouchableOpacity 
              style={styles.documentMissingContainer}
              onPress={() => navigation.navigate(SCREEN_NAME.DocumentsAdd)}
            >
              <Image 
                source={icon} 
                style={styles.documentMissingIcon} 
              />
              <Text style={styles.documentMissingText}>
                {`No ${docType.toLowerCase()} uploaded - Tap to add`}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <Image 
          resizeMode='contain' 
          source={document ? IMAGE.check : IMAGE.warning} 
          style={styles.documentStatusIcon} 
        />
      </TouchableOpacity>
    );
  };

  const renderBookingItem = ({ item }: { item: Booking }) => (
    <View style={styles.bookingCard}>
      <Text style={styles.categoryText}>{item.category?.name || 'N/A'}</Text>
      <Text style={styles.recipientText}>Recipient: {item.recepient_name || 'N/A'}</Text>

      <TouchableOpacity 
        onPress={() => navigation.navigate(SCREEN_NAME.DeliveryDetails, { item })}
        style={styles.locationContainer}
      >
        <View style={styles.iconContainer}>
        <Image resizeMode='contain' source={{uri:item?.category?.photo}} style={{...styles.locationIcon,tintColor:''}} />
        </View>
        <View style={styles.locationTextContainer}>
          <View style={styles.dropOffContainer}>
            <Image
              resizeMode='contain'
              tintColor={'#F6350F'}
              style={styles.locationPinIcon}
              source={IMAGE.loc2}
            />
            <Text style={styles.dropOffText}>Drop off</Text>
          </View>
          <Text style={styles.locationText}>{item.delivery_location || 'N/A'}</Text>
          <Text style={styles.pickupText}>Pickup: {item.pickup_location || 'N/A'}</Text>
          <Text style={styles.distanceText}>Distance: {item.distance_km || '0'} km</Text>
          <Text style={styles.dateText}>{formatDate(item.pickup_date)}</Text>
          <Text style={styles.priceText}>TZS {formatAmountWithCommas(item?.amount) || '0.00'}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.rejectButton}
          onPress={() => handleReject(item)}
        >
          <Text style={styles.rejectButtonText}>Reject</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.acceptButton}
          onPress={() => handleAccept(item)}
        >
          <Text style={styles.acceptButtonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.nameText}>
              {getProfile?.data[0]?.name ? `${getProfile?.data[0]?.name} ${getProfile?.data[0]?.sname || ''}` : 'User'}
            </Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={()=>navigation.navigate(SCREEN_NAME.NotificationListing)} style={styles.notificationButton}>
              <Image source={IMAGE.notification} style={styles.notificationIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Driving License Card */}
        {renderDocumentCard(
          'Driving License',
          drivingLicense,
          IMAGE.licenseIcon,
          'Driving License'
        )}

        {/* Vehicle Insurance Card */}
        {renderDocumentCard(
          'Vehicle Insurance',
          vehicleInsurance,
          IMAGE.insuranceIcon,
          'Insurance'
        )}

        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Available balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.currencyText}>TZS</Text>
            <Text style={styles.balanceAmount}>{getProfile?.data[0]?.wallet_balance_tzs}</Text>
            <TouchableOpacity>
              <Image source={IMAGE.eye} style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.requestsHeader}>
          <Text style={styles.requestsTitle}>Available Requests</Text>
          <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAME.BookingTabVendor)}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        {allBookings?.length > 0 ? (
          <FlatList
            data={allBookings?.slice(0, 5)}
            renderItem={renderBookingItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={renderSeparator}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['#E34234']}
                tintColor={'#E34234'}
              />
            }
          />
        ) : (
          <View style={styles.onboardingContainer}>
            <Image source={IMAGE.av} style={styles.usersIcon} />
            <Text style={styles.onboardingText}>Complete Onboarding to start taking requests</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeTabVendor;