import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomHeader from '../../../../../components/CustomHeader';
import { IMAGE } from '../../../../../utils/Constants/Images';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { bookingByIdAPi, cancelRide, updateRide } from '../../../../../redux/slices/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../redux/store/store';
import styles from './styles';
import CancelRideModal from '../../../../../components/CancelRideModal';

const DeliveryDetails = ({ navigation, route }: any) => {
    const dispatch = useDispatch<AppDispatch>();
    const inset = useSafeAreaInsets();
    const { item } = route.params || {};
    const [bookingDetails, setBookingDetails] = useState<any>('');
    const [loading, setLoading] = useState('');

    const getDriverVehicleResponse = useSelector((state: RootState) => state.API.data.getDriverVehicleResponse);
    const userData = useSelector((state: RootState) => state.user.userData);


    useEffect(() => {

        fetchSingleBooking();

    }, []);
    const [isModalVisible, setIsModalVisible] = useState(false);




    const fetchSingleBooking = async () => {
        try {
            // setLoading(true);
            const result = await dispatch(bookingByIdAPi({
                bookingId: item?.id
            }));
            console.log(result?.payload?.data, 'result?.payload?.data');

            if (result?.payload?.data) {
                setBookingDetails(result.payload.data);
            }
        } catch (error) {
            console.error('Error fetching booking details:', error);
            Alert.alert('Error', 'Failed to fetch booking details');
        } finally {
            // setLoading(false);
        }
    };

    const renderStars = (rating: number) => {
        const numericRating = parseFloat(rating?.toString() || '0');
        return [...Array(5)].map((_, index) => (
            <Image
                key={index}
                source={IMAGE.star}
                style={[
                    styles.starIcon,
                    { tintColor: index < Math.floor(numericRating) ? '#FFD700' : '#E0E0E0' }
                ]}
            />
        ));
    };

    const formatDate = (dateString: string) => {
        if (!dateString) return 'N/A';
        try {
            const date = new Date(dateString);
            return isNaN(date.getTime()) ? dateString : date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (e) {
            return dateString;
        }
    };

    if (loading || !bookingDetails) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#E34234" />
            </View>
        );
    }

    const btnStart = (value: any) => {
        console.log(bookingDetails)
        updateRideAPI(value)
    }
  

    const updateRideAPI = async (status: string) => {
            try {         
                const result = await dispatch(updateRide({
                    bookingId: bookingDetails?.id,
                    status: status,
                    driverId: status=='assigned'||status=='rejected'? userData?.data?.uid:bookingDetails.driver_id,
                    vehicleId: status=='assigned'||status=='rejected'? getDriverVehicleResponse.data.id:bookingDetails.vehicle_id
                }));
                if (result?.payload) {
                    fetchSingleBooking()
                }
            } catch (error) {
                console.error('Error updating ride:', error);
                Alert.alert("Error", "Failed to update ride. Please try again.");
            }
        
       
    };

    const handleCancelRide = (reason: any) => {
        console.log('Ride cancelled with reason:', reason);
        // Add your cancellation logic here

        cancelRideApi(reason)
        setIsModalVisible(false);
    };

    const cancelRideApi = async (reason: any) => {
        try {
            const result = await dispatch(cancelRide({
                bookingId: bookingDetails?.id,
                cancelby: bookingDetails.driver_id,
                cancelreason: reason
            }));

            if (result?.payload) {
                // Refresh both tabs after status change
                // fetchSingleBooking()
                Alert.alert(
                    "Ride Cancelled",
                    "The ride has been successfully cancelled.",
                    [
                        {
                            text: "OK",
                            onPress: () => navigation.goBack()
                        }
                    ]
                );
            }
        } catch (error) {
            console.error('Error updating ride:', error);
            Alert.alert("Error", "Failed to update ride. Please try again.");
        }
    };

    const formatAmountWithCommas = (amount: any) => {
        if (amount == null) return '';
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      };

    return (
        <View style={styles.container}>
            <View style={{ paddingTop: inset.top, paddingBottom: inset.bottom }}>
                <CustomHeader
                    btnBack={() => navigation.goBack()}
                    text={'Delivery details'}
                    arrowImage={IMAGE.LEFT}
                />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.content}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}
                >
                    {/* {bookingDetails.customer && (
                        <View style={styles.driverSection}>
                            <View style={styles.driverInfo}>
                                <View style={styles.avatar}>
                                    {bookingDetails.customer.profile_photo ? (
                                        <Image 
                                            source={{ uri: bookingDetails.customer.profile_photo }} 
                                            style={styles.avatarImage}
                                        />
                                    ) : (
                                        <Text style={styles.avatarText}>
                                            {bookingDetails.customer.name?.charAt(0) || 'C'}
                                        </Text>
                                    )}
                                </View>
                                <View>
                                    <Text style={styles.driverName} numberOfLines={1}>
                                        {bookingDetails.customer.name || 'Customer'}
                                    </Text>
                                    <Text style={styles.deliveryCount}>
                                        {bookingDetails.customer.total_deliveries || '0'} Deliveries
                                    </Text>
                                    <View style={styles.ratingContainer}>
                                        <Text style={styles.ratingText}>
                                            {parseFloat(bookingDetails.customer.rating || '0').toFixed(1)}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <Image 
                                resizeMode='contain' 
                                source={IMAGE.vehicle} 
                                style={styles.vehicleIcon} 
                            />
                        </View>
                    )} */}

                    <View style={styles.locationSection}>
                        <View style={styles.locationItem}>
                            <Text style={styles.locationLabel}>Pickup Location</Text>
                            <Text style={styles.locationText}>
                                {bookingDetails.pickup_location || 'N/A'}
                                {/* {bookingDetails.pickup_latitude && bookingDetails.pickup_longitude && (
                                    <Text style={styles.coordinatesText}>
                                        {'\n'}Lat: {bookingDetails.pickup_latitude}, Long: {bookingDetails.pickup_longitude}
                                    </Text>
                                )} */}
                            </Text>
                            <Text style={styles.locationTime}>
                                {formatDate(bookingDetails.pickup_date)}
                            </Text>
                        </View>
                        <View style={styles.locationDivider} />
                        <View style={styles.locationItem}>
                            <Text style={styles.locationLabel}>Delivery Location</Text>
                            <Text style={styles.locationText}>
                                {bookingDetails.delivery_location || 'N/A'}
                                {/* {bookingDetails.delivery_latitude && bookingDetails.delivery_longitude && (
                                    <Text style={styles.coordinatesText}>
                                        {'\n'}Lat: {bookingDetails.delivery_latitude}, Long: {bookingDetails.delivery_longitude}
                                    </Text>
                                )} */}
                            </Text>
                            {bookingDetails.delivery_date && (
                                <Text style={styles.locationTime}>
                                    {formatDate(bookingDetails.delivery_date)}
                                </Text>
                            )}
                        </View>
                    </View>

                    {/* Package Details */}
                    <View style={styles.detailsGrid}>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailLabel}>What you are sending</Text>
                            <Text style={styles.detailText}>
                                {bookingDetails.description || 'N/A'}
                            </Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailLabel}>Recipient</Text>
                            <Text style={styles.detailText}>
                                {bookingDetails.recepient_name || 'N/A'}
                            </Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailLabel}>Recipient contact</Text>
                            <Text style={styles.detailText}>
                                {bookingDetails.recepient_phone || 'N/A'}
                            </Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailLabel}>Recipient address</Text>
                            <Text style={styles.detailText}>
                                {bookingDetails.recepient_address || 'N/A'}
                            </Text>
                        </View>

                        <View style={styles.detailItem}>
                            <Text style={styles.detailLabel}>Payment</Text>
                            <Text style={styles.detailText}>
                                {bookingDetails.pyment_mode === 'cash' ? 'Cash' : 'Card'}
                            </Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailLabel}>Amount:</Text>
                            <Text style={styles.detailText}>
                                TZS {formatAmountWithCommas(bookingDetails.amount) || '0.00'}
                            </Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailLabel}>Distance:</Text>
                            <Text style={styles.detailText}>
                                {bookingDetails.distance_km || '0'} km
                            </Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailLabel}>Pickup Date:</Text>
                            <Text style={styles.detailText}>
                                {formatDate(bookingDetails.pickup_date)}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Description</Text>
                        <Text style={styles.detailText}>
                            {bookingDetails.description ? `${bookingDetails.description}` : 'N/A'}
                        </Text>
                    </View>
                    {/* Photos Section */}
                    {bookingDetails.pickup_photo && (
                        <View style={styles.imageSection}>
                            <Text style={styles.imageLabel}>Pickup image(s)</Text>
                            <View style={styles.imageGrid}>
                                <Image
                                    source={{ uri: bookingDetails.pickup_photo }}
                                    style={styles.packageImage}
                                    resizeMode="cover"
                                />
                                {bookingDetails.delivery_photo && (
                                    <Image
                                        source={{ uri: bookingDetails.delivery_photo }}
                                        style={styles.packageImage}
                                        resizeMode="cover"
                                    />
                                )}
                            </View>
                        </View>
                    )}


                    {/* Map Button */}
                    {bookingDetails.pickup_latitude && bookingDetails.pickup_longitude &&
                        bookingDetails.delivery_latitude && bookingDetails.delivery_longitude && (
                            <TouchableOpacity
                                style={styles.mapLink}
                                onPress={() => {
                                    // Construct the maps URL
                                    const pickupCoords = `${bookingDetails.pickup_latitude},${bookingDetails.pickup_longitude}`;
                                    const deliveryCoords = `${bookingDetails.delivery_latitude},${bookingDetails.delivery_longitude}`;

                                    // URL for Google Maps with directions
                                    const url = `https://www.google.com/maps/dir/?api=1&origin=${pickupCoords}&destination=${deliveryCoords}&travelmode=driving`;

                                    // Open the URL
                                    Linking.openURL(url).catch(err => {
                                        console.error("Failed to open maps:", err);
                                        Alert.alert("Error", "Could not open the maps application");
                                    });
                                }}
                            >
                                <Text style={styles.mapLinkText}>View Map Route</Text>
                            </TouchableOpacity>
                        )}
                    {bookingDetails.status == 'pending' && (
                        <View style={styles.bottomButtons}>
                            <TouchableOpacity
                                style={styles.rejectButton}
                                onPress={() => {
                                    btnStart('rejected')

                                }}
                            >
                                <Text style={styles.rejectButtonText}>Reject</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.acceptButton}
                                onPress={() => {
                                    btnStart('assigned')

                                }}
                            >
                                <Text style={styles.acceptButtonText}>Accept</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    {bookingDetails.status == 'assigned' && (
                        <TouchableOpacity
                            onPress={() => btnStart('intransit')}
                            style={[
                                styles.statusContainer,
                            ]}>
                            <Text style={styles.statusText}>
                                Start Delivery
                            </Text>
                        </TouchableOpacity>
                    )}
                    {bookingDetails.status == 'intransit' && (
                        <TouchableOpacity
                            onPress={() => btnStart('completed')}
                            style={[
                                styles.statusContainer,
                            ]}>
                            <Text style={styles.statusText}>
                                Stop Delivery
                            </Text>
                        </TouchableOpacity>
                    )}
                    {bookingDetails.status == 'completed' && (
                        <TouchableOpacity
                            // onPress={() => btnStart('completed')}
                            style={[
                                styles.statusContainer,
                            ]}>
                            <Text style={styles.statusText}>
                                completed
                            </Text>
                        </TouchableOpacity>
                    )}

                    {bookingDetails.status == 'assigned' && (
                        <TouchableOpacity
                            onPress={() => setIsModalVisible(true)}
                            style={[
                                styles.statusContainer, { marginBottom: 40 },
                            ]}>
                            <Text style={styles.statusText}>
                                Cancel Ride
                            </Text>
                        </TouchableOpacity>
                    )}

                    <CancelRideModal
                        visible={isModalVisible}
                        onCancel={() => setIsModalVisible(false)}
                        onConfirm={handleCancelRide}
                    />

                </ScrollView>


                {/* Action Buttons */}

                {/* Status Indicator */}

            </View>
        </View>
    );
};

export default DeliveryDetails;