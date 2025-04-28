import React, { useState, useEffect, useRef } from 'react';
import { Image } from 'react-native';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions, 
  SafeAreaView, 
  StatusBar,
  Animated,
  Easing
} from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { IMAGE } from '../../../utils/Constants/Images';

const { width, height } = Dimensions.get('window');
const GOOGLE_MAPS_API_KEY = 'AIzaSyAGiZy_LyW1yV0XqSy1CD80o7cwEz3GToc';

const RideStatusScreen = ({ route, navigation }: any) => {
  const { rideData } = route?.params || {};

  console.log(rideData,'rideData');
  
  const mapRef = useRef(null);
  
  // Use the actual status from rideData
  const [status, setStatus] = useState(rideData?.status || 'assigned');
  const [driverDetails, setDriverDetails] = useState(null);
  
  // Animation values
  const progressAnim = useRef(new Animated.Value(0)).current;
  const connectorAnim1 = useRef(new Animated.Value(0)).current;
  const connectorAnim2 = useRef(new Animated.Value(0)).current;

  const [locationState, setLocationState] = useState({
    pickupCoords: {
      latitude: parseFloat(rideData?.pickup_latitude) || 30.67,
      longitude: parseFloat(rideData?.pickup_longitude) || 76.73,
    },
    destinationCoords: {
      latitude: parseFloat(rideData?.delivery_latitude) || 30.73,
      longitude: parseFloat(rideData?.delivery_longitude) || 76.78,
    },
    routeCoordinates: [],
    distance: 0,
    duration: 0,
  });

  // Set up animations based on actual status
  useEffect(() => {
    let initialProgress = 0;
    if (status === 'driver_assigned') initialProgress = 1;
    if (status === 'intransit') initialProgress = 2;

    // Set initial animation values
    progressAnim.setValue(initialProgress);
    connectorAnim1.setValue(status !== 'assigned' ? 1 : 0);
    connectorAnim2.setValue(status === 'intransit' ? 1 : 0);

    // Only simulate progress if status is 'assigned'
    if (status === 'assigned') {
      const timer = setTimeout(() => {
        setStatus('assigned')
        // setStatus('driver_assigned');
        Animated.timing(progressAnim, {
          toValue: 1,
          duration: 800,
          easing: Easing.out(Easing.ease),
          useNativeDriver: false,
        }).start();
        Animated.timing(connectorAnim1, {
          toValue: 1,
          duration: 600,
          easing: Easing.out(Easing.ease),
          useNativeDriver: false,
        }).start();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Load driver details when status is 'driver_assigned' or 'intransit'
  useEffect(() => {
    if (status === 'driver_assigned' || status === 'intransit') {
      // In a real app, you would fetch driver details from your API
      // Here we're simulating it with mock data
      setDriverDetails({
        name: "John Driver",
        rating: 4.8,
        vehicle: rideData?.category?.name || "Bajaj",
        phone: rideData?.recepient_phone || "+255 123 456 789",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        eta: "5 min",
        arrivalTime: "Arrives in 3 minutes",
        vehicleNumber: "TZS 1614"
      });
    }
  }, [status]);

  // Handle directions ready
  const handleDirectionsReady = (result: any) => {
    const { distance, duration, coordinates } = result;
    
    setLocationState((prev:any) => ({
      ...prev,
      routeCoordinates: coordinates,
      distance,
      duration,
    }));

    // mapRef.current?.fitToCoordinates((coordinates:any), {
    //   edgePadding: { top: 100, right: 50, bottom: 300, left: 50 },
    //   animated: true,
    // });
  };

  const progressSteps = [
    { title: "Finding driver", key: "assigned" },
    { title: "Driver assigned", key: "driver_assigned" },
    { title: "In transit", key: "intransit" }
  ];

  const currentStepIndex = progressSteps.findIndex(step => step.key === status) || 0;

  const handleCancelRide = () => {
    navigation?.goBack();
  };

  // Animated styles
  const firstConnectorWidth = connectorAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp'
  });

  const secondConnectorWidth = connectorAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp'
  });

  const getCircleStyle = (index: number) => {
    return progressAnim.interpolate({
      inputRange: [index - 0.5, index, index + 0.5],
      outputRange: [0.7, 1, 0.7],
      extrapolate: 'clamp'
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Map Background */}
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: locationState.pickupCoords.latitude,
          longitude: locationState.pickupCoords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Map markers and directions */}
        <Marker coordinate={locationState.pickupCoords}>
          <View style={styles.pickupMarker} />
        </Marker>
        <Marker coordinate={locationState.destinationCoords}>
          <View style={styles.destinationMarker} />
        </Marker>
        <MapViewDirections
          origin={locationState.pickupCoords}
          destination={locationState.destinationCoords}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={4}
          strokeColor="#FF6347"
          onReady={handleDirectionsReady}
        />
      </MapView>
      
      {/* Header */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={IMAGE.LEFT} style={styles.backIcon} />
      </TouchableOpacity>
    
      <View style={styles.header}>
        <Text style={styles.routeText}>
          {rideData?.pickup_location?.split(',')[0] || 'Pickup'} → {rideData?.delivery_location?.split(',')[0] || 'Destination'}
        </Text>
      </View>
      
      {/* Bottom Sheet */}
      {
        rideData.status == 'cancelled' ||rideData.status =='completed'
        ?   <TouchableOpacity style={styles.header1}>
        <Text style={styles.cancelButtonText}>{rideData.status == 'cancelled'?'Cancelled':rideData.status =='completed'?'Completed' :null}</Text>
      </TouchableOpacity>
        : 
         <View style={styles.bottomSheet}>
        {/* Status Title */}
        <Text style={styles.statusTitle}>
          {status === 'assigned' ? 'Finding driver' : 
           status === 'driver_assigned' ? 'Driver assigned' : 
           'In transit'}
        </Text>
        
        {/* Animated Progress Steps */}
        <View style={styles.progressContainer}>
          {progressSteps.map((step, index) => (
            <React.Fragment key={step.key}>
              <View style={styles.stepContainer}>
                <Animated.View style={[
                  styles.stepCircle,
                  index <= currentStepIndex ? styles.activeStep : styles.inactiveStep,
                  {
                    transform: [{
                      scale: getCircleStyle(index)
                    }]
                  }
                ]}>
                  <Text style={styles.stepText}>
                    {index < currentStepIndex ? '✓' : index + 1}
                  </Text>
                </Animated.View>
                <Text style={[
                  styles.stepTitle,
                  index <= currentStepIndex ? styles.activeText : styles.inactiveText
                ]}>
                  {step.title}
                </Text>
              </View>
              
              {index < progressSteps.length - 1 && (
                <View style={styles.connectorContainer}>
                  <Animated.View style={[
                    styles.stepConnector,
                    index === 0 ? { width: firstConnectorWidth } : { width: secondConnectorWidth },
                    index < currentStepIndex ? styles.activeConnector : styles.inactiveConnector
                  ]} />
                </View>
              )}
            </React.Fragment>
          ))}
        </View>
        
        {/* Driver Details (shown when in transit or driver assigned) */}

        {/* {(status === 'intransit' || status === 'driver_assigned') && driverDetails && (
          <View style={styles.driverCard}>
            <Image 
              source={{ uri: driverDetails.photo }} 
              style={styles.driverPhoto} 
            />
            <View style={styles.driverInfo}>
              <Text style={styles.driverName}>{driverDetails.name}</Text>
              <Text style={styles.driverRating}>⭐ {driverDetails.rating}</Text>
              <Text style={styles.driverVehicle}>{driverDetails.vehicle} • {driverDetails.vehicleNumber}</Text>
              <Text style={styles.driverETA}>ETA: {driverDetails.eta}</Text>
            </View>
          </View>
        )} */}
        
        {/* Ride Info */}
        {/* <View style={styles.rideInfo}>
          <View style={styles.rideInfoItem}>
            <Text style={styles.rideInfoLabel}>Distance</Text>
            <Text style={styles.rideInfoValue}>{locationState.distance.toFixed(1)} km</Text>
          </View>
          <View style={styles.rideInfoItem}>
            <Text style={styles.rideInfoLabel}>Price</Text>
            <Text style={styles.rideInfoValue}>{rideData?.amount} {rideData?.currency}</Text>
          </View>
        </View> */}
        
        {/* Cancel Button */}
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancelRide}>
          <Text style={styles.cancelButtonText}>Cancel Ride</Text>
        </TouchableOpacity>
      </View>
      }
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 70,
    right: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header1: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  routeText: {
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  stepContainer: {
    alignItems: 'center',
    zIndex: 2,
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  activeStep: {
    backgroundColor: '#FF6347',
  },
  inactiveStep: {
    backgroundColor: '#E0E0E0',
  },
  stepText: {
    color: 'white',
    fontWeight: 'bold',
  },
  stepTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
  activeText: {
    color: '#000',
    fontWeight: '600',
  },
  inactiveText: {
    color: '#999',
  },
  connectorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 2,
    marginHorizontal: 5,
    marginTop: 15,
  },
  stepConnector: {
    height: '100%',
  },
  activeConnector: {
    backgroundColor: '#FF6347',
  },
  inactiveConnector: {
    backgroundColor: '#E0E0E0',
  },
  driverCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  driverPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  driverInfo: {
    flex: 1,
  },
  driverName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  driverRating: {
    fontSize: 14,
    color: '#FFC107',
    marginBottom: 2,
  },
  driverVehicle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  driverETA: {
    fontSize: 14,
    color: '#4CAF50',
  },
  rideInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  rideInfoItem: {
    alignItems: 'center',
  },
  rideInfoLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 5,
  },
  rideInfoValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FF6347',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#FF6347',
    fontWeight: '600',
    justifyContent:'center',
    textAlign:'center',
    fontSize: 16,
  },
  pickupMarker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    borderWidth: 3,
    borderColor: 'white',
  },
  destinationMarker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#4CAF50',
    borderWidth: 3,
    borderColor: 'white',
  },
});

export default RideStatusScreen;