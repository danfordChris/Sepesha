import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import CustomHeader from '../../../components/CustomHeader';
import { IMAGE } from '../../../utils/Constants/Images';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, requestRideApi } from '../../../redux/slices/apiSlice';
import { AppDispatch, RootState } from '../../../redux/store/store';
import styles from './styles';
import { COLORS } from '../../../utils/Constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from '../../../components/CustomInput';
import Loader from '../../../components/Loader';

const LuggageScreen = ({ navigation, route }: any) => {
  const { type, handleData, locationData } = route?.params || {};
  const inset = useSafeAreaInsets();
  const dispatch = useDispatch<AppDispatch>();
  const [selectedCargo, setSelectedCargo] = useState(null);
  const [selectedCargoItem, setSelectedCargoItem] = useState(null);
  const [pickupPhoto, setPickupPhoto] = useState(null);
  const [photoName, setPhotoName] = useState('');
  const [RecepientName, setRecepientName] = useState('');
  const [RecepientPhone, setRecepientPhone] = useState('');
  const [Discount, setDiscount] = useState('');

  const [amountSelected, setAmountSelected] = useState('')


  const [des, setDes] = useState('');

  const userData = useSelector((state: any) => state.user.userData);
  const data = useSelector((state: any) => state.API.data.getcategoriesResponse);
  const getProfile = useSelector(
    (state: any) => state.API.data.getProfileUserResposne,
  );
  const loader = useSelector((state: any) => state.API.loading.requestRideApiLoading);

  const todayDate = new Date();

  useEffect(() => {
    dispatch(getCategory());

    if (getProfile?.data[0]?.role == 'customer') {
      console.log('sdsdsdds')
      setRecepientName(getProfile?.data[0]?.name)
      setRecepientPhone('+' + getProfile?.data[0]?.phonecode + getProfile?.data[0]?.phone)

    }

  }, []);

  console.log(getProfile, 'data')

  const calculateRideAmount = () => {
    if (!selectedCargoItem || !locationData?.distance) return 0;

    const vehicleMultiplier =
      parseFloat(selectedCargoItem.vehicle_multiplier) || 1;
    const basePricePerKm = parseFloat(selectedCargoItem.price_per_km) || 0;
    const basePrice = parseFloat(selectedCargoItem.base_price) || 0;
    const distanceKm = parseFloat(locationData.distance) || 0;

    const rideAmount =
      vehicleMultiplier * basePricePerKm * distanceKm + basePrice;
    return Math.round(rideAmount);
  };

  const rideAmount = calculateRideAmount();

  const handleSave = () => {
    if (handleData) {
      handleData(selectedCargoItem);
    }
    navigation.goBack();
  };

  const handleCargoSelect = (id, cargo) => {
    setSelectedCargo(id);
    setSelectedCargoItem(cargo);
  };

  const handleTakePhoto = async () => {
    try {
      Alert.alert('Select Photo', 'Choose an option', [
        {
          text: 'Camera',
          onPress: async () => {
            const image = await ImagePicker.openCamera({
              width: 800,
              height: 800,
              cropping: true,
              mediaType: 'photo',
              compressImageQuality: 0.8,
            });
            setPickupPhoto(image.path);
            setPhotoName(image.filename || `pickup_${Date.now()}.jpg`);
          },
        },
        {
          text: 'Gallery',
          onPress: async () => {
            const image = await ImagePicker.openPicker({
              width: 800,
              height: 800,
              cropping: true,
              mediaType: 'photo',
              compressImageQuality: 0.8,
            });
            setPickupPhoto(image.path);
            setPhotoName(image.filename || `pickup_${Date.now()}.jpg`);
          },
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]);
    } catch (error) {
      console.log('Image picker error:', error);
      if (error.code !== 'E_PICKER_CANCELLED') {
        Alert.alert('Error', 'Failed to select image');
      }
    }
  };

  const requestRide = async () => {
    if (!selectedCargoItem) {
      Alert.alert('Error', 'Please select a cargo size');
      return;
    }

    if (!pickupPhoto) {
      Alert.alert('Error', 'Please take proof of pickup cargo');
      return;
    }

    if (!des) {
      Alert.alert('Error', 'Please add description of cargo');
      return;
    }

    try {
      const formData = new FormData();

      // Append basic trip information
      formData.append('customer_id', userData?.data.uid);
      formData.append('fee_category_id', selectedCargoItem?.id);
      formData.append('discount_code', Discount);
      formData.append('referal_code', '123');
      formData.append('recepient_name', RecepientName);
      formData.append('recepient_phone', RecepientPhone);
      formData.append('recepient_address', 'chd');
      formData.append('user_type', getProfile?.data[0]?.role);
      formData.append('description', des || 'abc');
      formData.append('pickup_location', locationData?.startAddress);
      formData.append('pickup_latitude', locationData?.startLat);
      formData.append('pickup_longitude', locationData?.startLng);
      formData.append('delivery_location', locationData?.endAddress);
      formData.append('delivery_latitude', locationData?.endLat);
      formData.append('delivery_longitude', locationData?.endLng);
      formData.append(
        'pickup_date',
        new Date().toISOString().replace(/\.\d{3}Z$/, ''),
      );
      formData.append('distance_km', locationData?.distance);

      // Append the pickup photo
      formData.append('pickup_photo', {
        uri:
          Platform.OS === 'android'
            ? pickupPhoto
            : pickupPhoto.replace('file://', ''),
        name: photoName,
        type: 'image/jpeg',
      });

      console.log('FormData:', formData);
      const result = await dispatch(requestRideApi(formData));
      if (result.payload) {
        Alert.alert('Success', result.payload?.message, [
          {
            text: 'OK',
            onPress: () =>
              navigation.navigate('BottomTab1', {
                screen: 'Rides',
                initial: true,
              }),
          },
        ]);
      }
      console.log(result, '>>>>>>>');
    } catch (error) {
      console.error('Error in requestRide:', error);
      Alert.alert('Error', 'Failed to request ride. Please try again.');
    }
  };

  const formatAmountWithCommas = amount => {
    if (amount == null) return '';
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const isFormValid = selectedCargoItem && pickupPhoto && des;

  return loader ? (
    <Loader />
  ) : (
    <View style={{ flex: 1, backgroundColor: 'white', marginTop: inset.top }}>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <CustomHeader
          btnBack={() => navigation.goBack()}
          text={`Delivery Information`}
          arrowImage={IMAGE.LEFT}
        />
        <ScrollView
          style={{ flex: 1 }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: inset.bottom + 10 }} // Added bottom padding
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false} // Ensure scroll indicator is visible
        >
          <View style={{ flex: 1, paddingBottom: 40 }}>
            {data?.data?.map((cargo: any) => {
              // Safe number parsing with type checking
              const parseNumber = (value: any): number => {
                if (value === null || value === undefined) return 0;

                // Convert to string if it isn't already
                const strValue = typeof value === 'string' ? value : String(value);

                // Remove all non-numeric characters except decimal point
                const cleaned = strValue.replace(/[^\d.]/g, '');
                return parseFloat(cleaned) || 0;
              };

              // Get values with fallbacks
              const vehicleMultiplier = parseNumber(cargo?.vehicle_multiplier);
              const basePricePerKm = parseNumber(cargo?.price_per_km);
              const basePrice = parseNumber(cargo?.base_price);
              const distanceKm = parseNumber(locationData?.distance);

              // Calculate price
              const rideAmount = Math.round(
                (vehicleMultiplier * basePricePerKm * distanceKm) + basePrice
              );

              return (
                <TouchableOpacity
                  key={cargo.id}
                  activeOpacity={0.5}
                  style={[
                    styles.cargoItem,
                    selectedCargo === cargo.id && styles.selectedCargoItem,
                  ]}
                  onPress={() => {
                    handleCargoSelect(cargo.id, cargo)
                    setAmountSelected(rideAmount)
                  }
                  }

                >
                  <View style={styles.cargoInfo}>
                    <Image
                      resizeMode="contain"
                      source={cargo.photo ? { uri: cargo.photo } : IMAGE.cargo}
                      style={styles.cargoIcon}
                    />
                    <View style={styles.cargoDetails}>
                      <Text style={styles.cargoTitle}>{cargo.name}</Text>
                      <Text style={styles.cargoCapacity}>{cargo.capacity}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                      <Text style={styles.cargoPrice}>
                        TZS {rideAmount.toLocaleString('en-US')}
                      </Text>
                      {/* {distanceKm > 0 && (
            <Text style={styles.priceBreakdown}>
              {basePrice.toLocaleString()} + ({basePricePerKm} × {vehicleMultiplier} × {distanceKm}km)
            </Text>
          )} */}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}

            {type === 'DocAdd' ? (
              <TouchableOpacity
                style={styles.requestButton}
                onPress={handleSave}>
                <Text style={styles.requestButtonText}>Save</Text>
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity
                  style={styles.proofContainer}
                  onPress={handleTakePhoto}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: COLORS.main,
                    }}>
                    {pickupPhoto ? (
                      <Image
                        source={{ uri: pickupPhoto }}
                        style={{ width: 50, height: 50, borderRadius: 25 }}
                      />
                    ) : (
                      <Image
                        tintColor={'white'}
                        resizeMode="contain"
                        source={IMAGE.cam}
                        style={styles.cameraIcon}
                      />
                    )}
                  </View>
                  <Text style={styles.proofText}>
                    {pickupPhoto
                      ? 'Proof photo taken'
                      : 'Take proof of Pickup Cargo'}
                  </Text>
                </TouchableOpacity>

                <CustomInput
                  value={RecepientName}
                  onChangeText={text => setRecepientName(text)}
                  placeholder="Recepient Name"
                  style={styles.insput1}
                />
                <CustomInput
                  value={RecepientPhone}
                  onChangeText={text => setRecepientPhone(text)}
                  placeholder="Recepient Phone"
                  keyboardType="number-pad"
                  style={styles.insput1}
                />

                <CustomInput
                  value={des}
                  onChangeText={text => setDes(text)}
                  placeholder="Cargo Description"
                  //   multiline
                  //   textAlignVertical="top"
                  style={styles.insput}
                />
                <CustomInput
                  value={Discount.toUpperCase()}
                  onChangeText={text => setDiscount(text)}
                  placeholder="Discount Code"
                  //   multiline
                  //   textAlignVertical="top"
                  style={styles.insput1}
                />

                <View style={styles.pricingContainer}>
                  <View style={styles.priceRow}>
                    <Text style={styles.priceLabel}>Distance:</Text>
                    <Text style={styles.priceValue}>
                      {(locationData?.distance).toFixed(2) || '0'} KM(s)
                    </Text>
                  </View>
                  <View style={[styles.priceRow, styles.totalRow]}>
                    <Text style={styles.totalLabel}>Total:</Text>
                    <Text style={styles.totalValue}>
                      TZS {amountSelected.toLocaleString()}
                    </Text>
                  </View>
                </View>
              </>
            )}
          </View>
        </ScrollView>
        {type != 'DocAdd' && (
          <View style={{ marginBottom: inset.bottom + 10 }}>
            <TouchableOpacity
              style={[
                styles.requestButton,
                { backgroundColor: isFormValid ? COLORS.main : COLORS.LIGHT_GREY }, // Disabled color
              ]}
              disabled={!isFormValid}
              onPress={requestRide}>
              <Text style={styles.requestButtonText}>Request Delivery</Text>
            </TouchableOpacity>
          </View>
        )
        }
      </View>
    </View>
  );
};

export default LuggageScreen;

// import React, {useEffect, useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   Alert,
//   Platform,
//   KeyboardAvoidingView,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import CustomHeader from '../../../components/CustomHeader';
// import {IMAGE} from '../../../utils/Constants/Images';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {useDispatch, useSelector} from 'react-redux';
// import {getCategory, requestRideApi} from '../../../redux/slices/apiSlice';
// import {AppDispatch, RootState} from '../../../redux/store/store';
// import styles from './styles';
// import {COLORS} from '../../../utils/Constants/Colors';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import CustomInput from '../../../components/CustomInput';
// import Loader from '../../../components/Loader';

// const LuggageScreen = ({navigation, route}: any) => {
//   const {type, handleData, locationData} = route?.params || {};
//   const inset = useSafeAreaInsets();
//   const dispatch = useDispatch<AppDispatch>();
//   const [selectedCargo, setSelectedCargo] = useState<string | null>(null);
//   const [selectedCargoItem, setSelectedCargoItem] = useState<any>(null);
//   const [pickupPhoto, setPickupPhoto] = useState<any>(null);
//   const [photoName, setPhotoName] = useState<string>('');
//   const [des, setDes] = useState('');

//   const userData = useSelector((state: RootState) => state.user.userData);
//   const data = useSelector(
//     (state: RootState) => state.API.data.getcategoriesResponse,
//   );
//   const getProfile = useSelector(
//     (state: RootState) => state.API.data.getProfileUserResposne,
//   );
//   const loader = useSelector(
//     (state: RootState) => state.API.loading.requestRideApiLoading,
//   );

//   const todayDate = new Date();

//   useEffect(() => {
//     dispatch(getCategory());
//   }, []);

//   const calculateRideAmount = () => {
//     if (!selectedCargoItem || !locationData?.distance) return 0;

//     const vehicleMultiplier =
//       parseFloat(selectedCargoItem.vehicle_multiplier) || 1;
//     const basePricePerKm = parseFloat(selectedCargoItem.price_per_km) || 0;
//     const basePrice = parseFloat(selectedCargoItem.base_price) || 0;
//     const distanceKm = parseFloat(locationData.distance) || 0;

//     const rideAmount =
//       vehicleMultiplier * basePricePerKm * distanceKm + basePrice;
//     return Math.round(rideAmount);
//   };

//   const rideAmount = calculateRideAmount();

//   const handleSave = () => {
//     if (handleData) {
//       handleData(selectedCargoItem);
//     }
//     navigation.goBack();
//   };

//   const handleCargoSelect = (id: string, cargo: any) => {
//     setSelectedCargo(id);
//     setSelectedCargoItem(cargo);
//   };

//   const handleTakePhoto = async () => {
//     try {
//       Alert.alert('Select Photo', 'Choose an option', [
//         {
//           text: 'Camera',
//           onPress: async () => {
//             const image = await ImagePicker.openCamera({
//               width: 800,
//               height: 800,
//               cropping: true,
//               mediaType: 'photo',
//               compressImageQuality: 0.8,
//             });
//             setPickupPhoto(image.path);
//             setPhotoName(image.filename || `pickup_${Date.now()}.jpg`);
//           },
//         },
//         {
//           text: 'Gallery',
//           onPress: async () => {
//             const image = await ImagePicker.openPicker({
//               width: 800,
//               height: 800,
//               cropping: true,
//               mediaType: 'photo',
//               compressImageQuality: 0.8,
//             });
//             setPickupPhoto(image.path);
//             setPhotoName(image.filename || `pickup_${Date.now()}.jpg`);
//           },
//         },
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//       ]);
//     } catch (error: any) {
//       console.log('Image picker error:', error);
//       if (error.code !== 'E_PICKER_CANCELLED') {
//         Alert.alert('Error', 'Failed to select image');
//       }
//     }
//   };

//   const requestRide = async () => {
//     if (!selectedCargoItem) {
//       Alert.alert('Error', 'Please select a cargo size');
//       return;
//     }

//     if (!pickupPhoto) {
//       Alert.alert('Error', 'Please take proof of pickup cargo');
//       return;
//     }

//     try {
//       const formData = new FormData();

//       // Append basic trip information
//       formData.append('customer_id', userData?.data.uid);
//       formData.append('fee_category_id', selectedCargoItem?.id);
//       formData.append('discount_code', '123');
//       formData.append('referal_code', '123');
//       formData.append('recepient_name', getProfile?.data[0]?.name);
//       formData.append('recepient_phone', getProfile?.data[0]?.phone);
//       formData.append('recepient_address', 'chd');
//       formData.append('user_type', getProfile?.data[0]?.role);
//       formData.append('description', des || 'abc');
//       formData.append('pickup_location', locationData?.startAddress);
//       formData.append('pickup_latitude', locationData?.startLat);
//       formData.append('pickup_longitude', locationData?.startLng);
//       formData.append('delivery_location', locationData?.endAddress);
//       formData.append('delivery_latitude', locationData?.endLat);
//       formData.append('delivery_longitude', locationData?.endLng);
//       formData.append(
//         'pickup_date',
//         new Date().toISOString().replace(/\.\d{3}Z$/, ''),
//       );
//       formData.append('distance_km', locationData?.distance);

//       // Append the pickup photo
//       formData.append('pickup_photo', {
//         uri:
//           Platform.OS === 'android'
//             ? pickupPhoto
//             : pickupPhoto.replace('file://', ''),
//         name: photoName,
//         type: 'image/jpeg',
//       });

//       console.log('FormData:', formData);
//       const result = await dispatch(requestRideApi(formData));
//       if (result.payload) {
//         Alert.alert('Success', result.payload?.message, [
//           {text: 'OK', onPress: () => navigation.goBack()},
//         ]);
//       }
//       console.log(result, '>>>>>>>');
//     } catch (error) {
//       console.error('Error in requestRide:', error);
//       Alert.alert('Error', 'Failed to request ride. Please try again.');
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={{flex: 1}}
//       keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.container1}>
//           <View style={{paddingTop: inset.top}}>
//             <CustomHeader
//               btnBack={() => navigation.goBack()}
//               text={'Select Cargo Size'}
//               arrowImage={IMAGE.LEFT}
//             />

//             <ScrollView
//             //   style={styles.scrollView}
//               contentContainerStyle={{paddingBottom: 0}}
//               keyboardShouldPersistTaps="handled">
//               {data?.data?.map((cargo: any) => (
//                 <TouchableOpacity
//                   key={cargo.id}
//                   activeOpacity={0.5}
//                   style={[
//                     styles.cargoItem,
//                     selectedCargo === cargo.id && styles.selectedCargoItem,
//                   ]}
//                   onPress={() => handleCargoSelect(cargo.id, cargo)}>
//                   <View style={styles.cargoInfo}>
//                     <Image
//                       resizeMode="contain"
//                       source={cargo.photo ? {uri: cargo.photo} : IMAGE.cargo}
//                       style={styles.cargoIcon}
//                     />
//                     <View style={styles.cargoDetails}>
//                       <Text style={styles.cargoTitle}>{cargo.name}</Text>
//                       <Text style={styles.cargoDescription}>
//                         {cargo.description}
//                       </Text>
//                       <Text style={styles.cargoPrice}>
//                         Price per km: TZS {cargo.price_per_km}
//                       </Text>
//                       <Text style={styles.cargoPrice}>
//                         Base price: TZS {cargo.base_price}
//                       </Text>
//                     </View>
//                     <Text style={styles.cargoCapacity}>{cargo.capacity}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}

//               {type === 'DocAdd' ? (
//                 <TouchableOpacity
//                   style={styles.requestButton}
//                   onPress={handleSave}>
//                   <Text style={styles.requestButtonText}>Save</Text>
//                 </TouchableOpacity>
//               ) : (
//                 <>
//                   <TouchableOpacity
//                     style={styles.proofContainer}
//                     onPress={handleTakePhoto}>
//                     <View
//                       style={{
//                         width: 50,
//                         height: 50,
//                         borderRadius: 30,
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         backgroundColor: COLORS.main,
//                       }}>
//                       {pickupPhoto ? (
//                         <Image
//                           source={{uri: pickupPhoto}}
//                           style={{width: 50, height: 50, borderRadius: 25}}
//                         />
//                       ) : (
//                         <Image
//                           tintColor={'white'}
//                           resizeMode="contain"
//                           source={IMAGE.cam}
//                           style={styles.cameraIcon}
//                         />
//                       )}
//                     </View>
//                     <Text style={styles.proofText}>
//                       {pickupPhoto
//                         ? 'Proof photo taken'
//                         : 'Take proof of Pickup Cargo'}
//                     </Text>
//                   </TouchableOpacity>

//                   <CustomInput
//                     value={des}
//                     onChangeText={text => setDes(text)}
//                     placeholder="Add Description"
//                     multiline
//                     textAlignVertical="top"
//                     style={{...styles.insput}}
//                   />

//                   <View style={styles.pricingContainer}>
//                     {/* <View style={styles.priceRow}>
//                                             <Text style={styles.priceLabel}>Base Price:</Text>
//                                             <Text style={styles.priceValue}>
//                                                 TZS {selectedCargoItem?.base_price || '0.00'}
//                                             </Text>
//                                         </View>
//                                         <View style={styles.priceRow}>
//                                             <Text style={styles.priceLabel}>Price per km:</Text>
//                                             <Text style={styles.priceValue}>
//                                                 TZS {selectedCargoItem?.price_per_km || '0.00'}
//                                             </Text>
//                                         </View> */}
//                     <View style={styles.priceRow}>
//                       <Text style={styles.priceLabel}>Distance:</Text>
//                       <Text style={styles.priceValue}>
//                         {locationData?.distance || '0'} km
//                       </Text>
//                     </View>
//                     {/* <View style={styles.priceRow}>
//                                             <Text style={styles.priceLabel}>Vehicle Multiplier:</Text>
//                                             <Text style={styles.priceValue}>
//                                                 {selectedCargoItem?.vehicle_multiplier || '1.0'}x
//                                             </Text>
//                                         </View> */}
//                     <View style={[styles.priceRow, styles.totalRow]}>
//                       <Text style={styles.totalLabel}>Total:</Text>
//                       <Text style={styles.totalValue}>
//                         TZS {rideAmount.toLocaleString()}
//                       </Text>
//                     </View>
//                   </View>

//                   <View style={{marginBottom: 10}}>
//                     <TouchableOpacity
//                       style={[styles.requestButton]}
//                       onPress={requestRide}>
//                       <Text style={styles.requestButtonText}>
//                         Request a Ride
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                 </>
//               )}
//             </ScrollView>
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//       {loader && <Loader />}
//     </KeyboardAvoidingView>
//   );
// };

// export default LuggageScreen;
