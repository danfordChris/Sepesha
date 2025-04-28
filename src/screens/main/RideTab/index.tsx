import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { IMAGE } from '../../../utils/Constants/Images';
import CustomHeader from '../../../components/CustomHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style';
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/store';
import {
  cancelRide,
  driverRatingCreate,
  getcustomervendorbookings,
} from '../../../redux/slices/apiSlice';
import { useFocusEffect } from '@react-navigation/native';
import moment from 'moment';
import CancelRideModal from '../../../components/CancelRideModal';
import { FONTS } from '../../../utils/Constants/Fonts';
import CustomRatingModal from '../../../components/CustomeReview';
import { SCREEN_NAME } from '../../../utils/Constants/Screens';

const AccountTab = ({ navigation }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeTab, setActiveTab] = useState<
    'pending' | 'intransit' | 'completed' | 'cancelled'
  >('pending');
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [region] = useState({
    latitude: -6.776012,
    longitude: 39.178326,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [reviewvisible, setReviewVisible] = useState(false);
  const [currentBooking, setCurrentBooking] = useState<any>(null);
  const [showAll, setShowAll] = useState(false);
  const inset = useSafeAreaInsets();

  const [driverID, setDriverID] = useState('')

  const userData = useSelector((state: RootState):any => state.user.userData);

  useFocusEffect(
    useCallback(() => {
      getBooking();
    }, [activeTab]),
  );

  const getBooking = async () => {
    try {
      setLoading(true);
      const result = await dispatch(
        getcustomervendorbookings({
          customer_id: userData?.data?.uid,
          status: activeTab,
        }),
      );

      if (result?.payload?.data) {
        setBookings(result.payload.data);
        console.log(result.payload.data);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const cancelRideApi = async (reason: any) => {
    try {
      if (!currentBooking) return;

      const result = await dispatch(
        cancelRide({
          bookingId: currentBooking.id,
          cancelby: currentBooking.driver_id,
          cancelreason: reason,
        }),
      );

      if (result?.payload) {
        Alert.alert(
          'Ride Cancelled',
          'The ride has been successfully cancelled.',
          [
            {
              text: 'OK',
              onPress: () => {
                getBooking(); // Refresh the list
                setIsModalVisible(false);
              },
            },
          ],
        );
      }
    } catch (error) {
      console.error('Error cancelling ride:', error);
      Alert.alert('Error', 'Failed to cancel ride. Please try again.');
    }
  };

  const giveRatingApi = async (data: any) => {
    try {
      const result = await dispatch(
        driverRatingCreate({
          driver_id: driverID,
          rating: data?.rating,
          review: data?.description
        })
      ).unwrap();
      console.log(result);
      if(result?.status==true){
        Alert.alert(result?.message)
      }
    } catch (error) {
      console.error('Error giving rating:', error);
    }
  };

  const handleCancelPress = (booking: any) => {
    setCurrentBooking(booking);
    setIsModalVisible(true);
  };

  const formatAmountWithCommas = (amount: any) => {
    if (amount == null) return '';
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const renderItem = ({ item }: any) => {
    const pickupCoords = {
      latitude: parseFloat(item.pickup_latitude) || region.latitude,
      longitude: parseFloat(item.pickup_longitude) || region.longitude,
    };

    return (
      <View style={styles.rideContainer}>
        <TouchableOpacity onPress={
          ()=>
          navigation.navigate(SCREEN_NAME.RideStatusScreen,{
          rideData:item
        })
        } style={styles.rideHeader}>
          <View style={styles.userInfo}>
            <Image
              source={{ uri: item?.customer?.profile_photo }}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.userName}>
                {item.recepient_name || 'Customer'}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <Image
                  source={IMAGE.phoneCall}
                  style={{ width: 15, height: 15, marginBottom: 5 }}
                />

                <Text style={styles.phoneNumber}>
                  {item.recepient_phone || 'N/A'}
                </Text>
              </View>
            </View>
          </View>
          <Image
            source={{ uri: item?.category?.photo }}
            style={{ ...styles.vehicleImage, borderRadius: 10 }}
          />
        </TouchableOpacity>

        <View style={styles.rideDetails}>
          <View style={styles.costSection}>
            <Text style={styles.label}>Cost</Text>
            <Text style={styles.cost}>
              TZS {formatAmountWithCommas(item.amount) || '0.00'}
            </Text>
          </View>
          <View style={styles.dateSection}>
            <Text style={styles.label}>Date and Time</Text>
            <Text style={styles.date}>
              {moment(item.pickup_date).format('DD/MM/YYYY')}
            </Text>
          </View>
        </View>

        <View style={styles.locationContainer}>
          <View style={styles.locationPoint}>
            <View style={styles.pickupDot} />
            <Text style={styles.locationText}>
              {item.pickup_location || 'Pickup location'}
            </Text>
          </View>
          <View style={styles.locationLine} />
          <View style={styles.locationPoint}>
            <View style={styles.dropoffDot} />
            <Text style={styles.locationText}>
              {item.delivery_location || 'Delivery location'}
            </Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: FONTS.REGULAR,
                  fontSize: 12,
                  color: '#666',
                  marginBottom: 4,
                }}>
                {'Pickup Photo'}
              </Text>
              <Image
                source={{ uri: item?.pickup_photo }}
                style={{ width: 100, height: 100 }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: FONTS.REGULAR,
                  fontSize: 12,
                  color: '#666',
                  // marginBottom: 4,
                }}>
                {'Pickup Description'}
              </Text>
              <Text style={{ ...styles.locationText }}>
                {item.description || ''}
              </Text>
            </View>
          </View>

          <Text style={styles.duration}>
            Distance: {item.distance_km || '0'} km
          </Text>
        </View>


        {(activeTab === 'pending' || activeTab === 'intransit') && (
          <>
            <MapView
              style={styles.map}
              region={{
                ...pickupCoords,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker coordinate={pickupCoords} />
              {item.delivery_latitude && item.delivery_longitude && (
                <Marker
                  coordinate={{
                    latitude: parseFloat(item.delivery_latitude),
                    longitude: parseFloat(item.delivery_longitude),
                  }}
                />
              )}
            </MapView>
            <TouchableOpacity
              onPress={() => handleCancelPress(item)}
              style={[
                styles.statusContainer,
                { marginBottom: 40, marginTop: 20 },
              ]}>
              <Text style={styles.statusText}>Cancel Ride</Text>
            </TouchableOpacity>
          </>
        )}

        {
          activeTab === 'completed' && (
            <TouchableOpacity
              onPress={() => {
                console.log(item?.driver_id);
                setDriverID(item?.driver_id)

                setReviewVisible(true)
              }}
              style={[
                styles.statusContainer,
                { marginBottom: 0, marginTop: 20 },
              ]}>
              <Text style={styles.statusText}>Give Rating</Text>
            </TouchableOpacity>
          )
        }
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: inset.top }}>
        <CustomHeader
          btnBack={() => navigation.goBack()}
          text={'Bookings'}
          arrowImage={IMAGE.LEFT}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'pending' && styles.activeTab]}
              onPress={() => setActiveTab('pending')}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'pending' && styles.activeTabText,
                ]}>
                Pending
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === 'intransit' && styles.activeTab,
              ]}
              onPress={() => setActiveTab('intransit')}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'intransit' && styles.activeTabText,
                ]}>
                In Transit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === 'completed' && styles.activeTab,
              ]}
              onPress={() => setActiveTab('completed')}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'completed' && styles.activeTabText,
                ]}>
                Completed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === 'cancelled' && styles.activeTab,
              ]}
              onPress={() => setActiveTab('cancelled')}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'cancelled' && styles.activeTabText,
                ]}>
                Cancelled
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {loading ? (
          <View
            style={[
              styles.container,
              { justifyContent: 'center', alignItems: 'center' },
            ]}>
            <ActivityIndicator size="large" />
          </View>
        ) : bookings.length > 0 ? (
          <>
            <FlatList
              data={bookings}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.listContainer}
              showsVerticalScrollIndicator={false}
              initialNumToRender={5}
              maxToRenderPerBatch={5}
            />
          </>
        ) : (
          <View style={{ marginTop: 200 }}>
            <Text style={styles.emptyText}>No rides found</Text>
          </View>
        )}
      </View>

      <CancelRideModal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onConfirm={cancelRideApi}
      />

      <CustomRatingModal
        visible={reviewvisible}
        onClose={() => setReviewVisible(false)}
        onSubmit={(data: any) => {
          console.log('Rating Data:', data);
          // handle submission (e.g., API call)
          giveRatingApi(data)
        }}
      />
    </View>
  );
};

export default AccountTab;
