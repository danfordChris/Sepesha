import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ActivityIndicator, Alert, RefreshControl } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomHeader from '../../../../components/CustomHeader'
import { IMAGE } from '../../../../utils/Constants/Images'
import { FONTS } from '../../../../utils/Constants/Fonts'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../../redux/store/store'
import { getDriverVehicle, getbookingsAPi, getdriverbookings, updateRide } from '../../../../redux/slices/apiSlice'
import { useFocusEffect } from '@react-navigation/native'
import { SCREEN_NAME } from '../../../../utils/Constants/Screens'
import styles from './styles'

type Booking = {
  id: string;
  photo:string;
  category: { name: string };
  recepient_name: string;
  delivery_location: string;
  status: 'pending' | 'accepted' | 'rejected' | 'completed' | 'assigned' |'intransit' | 'cancelled';
  base_price: string;
  amount:string
  pickup_date: string;
  pickup_location: string;
  distance_km: string;
};
type Attachment = {
  attachment: string;
  type: number;
  id: number;
};
type Vehicle = {
  attachments?: Attachment[];
};

const BookingTabVendor = ({ navigation }: any) => {
  const inset = useSafeAreaInsets();
  const dispatch = useDispatch<AppDispatch>();
  const [allBookings, setAllBookings] = useState<Booking[]>([]);
  const [myBookings, setMyBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [tabLoading, setTabLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const userData = useSelector((state: RootState):any => state.user.userData);
  const [activeTab, setActiveTab] = useState<'all' | 'my'>('all');

  const getDriverVehicleResponse = useSelector((state: RootState) => state.API.data.getDriverVehicleResponse);
  const getDriverBooking = useSelector((state: RootState) => state.API.data.getdriverbookingsResponse);
  const vehicleData: Vehicle = getDriverVehicleResponse?.data || {};

  const drivingLicense = vehicleData.attachments?.find(doc => doc.type === 1);
  const vehicleInsurance = vehicleData.attachments?.find(doc => doc.type === 2);
  console.log(getDriverBooking,'getDriverBooking')
  // Fetch all bookings (for "All Bookings" tab)
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

  const fetchMyBookings = async () => {
    try {
      const result = await dispatch(getdriverbookings({
        driver_id: userData?.data?.uid,
        // status: 'assigned'
      }));

      console.log(result?.payload?.data)
      if (result?.payload?.data) {
        setMyBookings(result.payload.data);
      }
    } catch (error) {
      console.error('Error fetching driver bookings:', error);
      Alert.alert('Error', 'Failed to fetch your bookings');
    }
  };

  // Fetch vehicle data
  const fetchVehicle = async () => {
    try {
      await dispatch(getDriverVehicle({
        userId: userData?.data?.uid,
      }));
    } catch (error) {
      console.error('Error fetching vehicle:', error);
    }
  };

  // Initial data load
  const loadData = async () => {
    try {
      setLoading(true);
      await Promise.all([
        fetchAllBookings(),
        fetchVehicle()
      ]);
      // Pre-fetch my bookings but don't wait for it
      fetchMyBookings();
    } catch (error) {
      console.error('Initial load error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle tab change
  const handleTabChange = (tab: 'all' | 'my') => {
    setActiveTab(tab);
    if (tab === 'my' && myBookings.length === 0) {
      setTabLoading(true);
      fetchMyBookings().finally(() => setTabLoading(false));
    }
  };

  // Refresh control handler
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    if (activeTab === 'all') {
      fetchAllBookings().finally(() => setRefreshing(false));
    } else {
      fetchMyBookings().finally(() => setRefreshing(false));
    }
  }, [activeTab]);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  const updateRideAPI = async (item: any, status: string) => {
    try {
      if (!userData?.data?.uid || !getDriverVehicleResponse?.data?.id) {
        throw new Error("Missing required data (driver ID or vehicle ID)");
      }

      const result = await dispatch(updateRide({
        bookingId: item?.id,
        status: status,
        driverId: userData.data.uid,
        vehicleId: getDriverVehicleResponse.data.id
      }));

      if (result?.payload) {
        // Refresh both tabs after status change
        fetchAllBookings();
        fetchMyBookings();
        navigation.navigate(SCREEN_NAME.DeliveryDetails, {
          item: item
        });
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

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };


  const formatAmountWithCommas = (amount: any) => {
    if (amount == null) return '';
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };


  const renderBookingItem = ({ item }: { item: any }) => (
    <View style={styles.bookingCard}>
      <Text style={styles.categoryText}>{item.category?.name || 'N/A'}</Text>
      <Text style={styles.recipientText}>Recipient: {item.recepient_name || 'N/A'}</Text>

      <TouchableOpacity onPress={()=>navigation.navigate(SCREEN_NAME.DeliveryDetails,{
          item:item
        })}
         style={styles.locationContainer}>
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
          <Text style={styles.dateText}>{formatDate(item?.pickup_date)}</Text>
          <Text style={styles.priceText}>TZS  {formatAmountWithCommas(item?.amount) || '0.00'}</Text>
        </View>
      </TouchableOpacity>

      {item.status === 'pending' && activeTab === 'all' && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.rejectButton}
            onPress={() => handleReject(item?.id)}
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
      )}

      {item.status === 'assigned' && (
        <TouchableOpacity onPress={()=>navigation.navigate(SCREEN_NAME.DeliveryDetails,{
          item:item
        })} style={styles.acceptedContainer}>
          <Text style={styles.acceptedText}>Assigned</Text>
        </TouchableOpacity>
      )}
       {item.status === 'intransit' && (
        <TouchableOpacity onPress={()=>navigation.navigate(SCREEN_NAME.DeliveryDetails,{
          item:item
        })} style={styles.acceptedContainer}>
          <Text style={styles.acceptedText}>Intransit</Text>
        </TouchableOpacity>
      )}
        {item.status === 'completed' && (
        <TouchableOpacity onPress={()=>navigation.navigate(SCREEN_NAME.DeliveryDetails,{
          item:item
        })} style={styles.acceptedContainer}>
          <Text style={styles.acceptedText}>Completed</Text>
        </TouchableOpacity>
      )}
       {item.status === 'cancelled' && (
        <TouchableOpacity onPress={()=>navigation.navigate(SCREEN_NAME.DeliveryDetails,{
          item:item
        })} style={styles.acceptedContainer}>
          <Text style={styles.acceptedText}>Cancelled</Text>
        </TouchableOpacity>
      )}

      {item.status === 'rejected' && (
        <View style={styles.rejectedContainer}>
          <Text style={styles.rejectedText}>Rejected</Text>
        </View>
      )}
    </View>
  );

  const currentData = activeTab === 'all' ? allBookings : myBookings;
  const currentLoading = loading || (activeTab === 'my' && tabLoading);

  if (currentLoading && !refreshing) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#E34234" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: inset.top }}>
        <CustomHeader
          btnBack={() => navigation.goBack()}
          text={'Bookings'}
          arrowImage={IMAGE.LEFT}
        />

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'all' && styles.activeTab]}
            onPress={() => handleTabChange('all')}
          >
            <Text style={[styles.tabText, activeTab === 'all' && styles.activeTabText]}>
              All Bookings
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'my' && styles.activeTab]}
            onPress={() => handleTabChange('my')}
          >
            <Text style={[styles.tabText, activeTab === 'my' && styles.activeTabText]}>
              My Bookings
            </Text>
          </TouchableOpacity>
        </View>

        {currentData.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {activeTab === 'all' ? 'No bookings available' : 'No assigned bookings'}
            </Text>
          </View>
        ) : (
          <FlatList
            data={currentData}
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
        )}
      </View>
    </View>
  )
}

export default BookingTabVendor;