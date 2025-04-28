import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  Image,
  Linking,
} from 'react-native';

import styles from './styles';
import CustomInput from '../../../components/CustomInput';
import CountryCodePicker from '../../../components/CountryCodePicker';
import PhoneNumberInput from '../../../components/PhoneNumberInput';
import { SCREEN_NAME } from '../../../utils/Constants/Screens';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../../redux/slices/apiSlice';
import CustomAlert from '../../../components/CustomeAlert';
import { AppDispatch, RootState } from '../../../redux/store/store';
import Loader from '../../../components/Loader';
import PriorityDropdown from '../../main/SupportSection/PriorityDropdown';
import CityDropdown from '../../main/LuggageScreen/CitySelect';
import { IMAGE } from '../../../utils/Constants/Images';
import ImageCropPicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import { stat } from 'react-native-fs';

export default function RegisterVendorCustomer({ navigation, route }: any) {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch<AppDispatch>();

  const { userType } = route?.params || {};
  const { registrationLoading } = useSelector(
    (state: RootState) => state.API.loading,
  );
  const [image, setImage] = useState<string | null>(null);
  const [documents, setDocuments] = useState({
    nationalId: null,
  });

  // Add these state variables for National ID
  const [nationalId, setNationalId] = useState('');
  const [nationalIdName, setNationalIdName] = useState('');





  console.log(userType, 'userTypeuserType');
  const [selectedRegionId, setSelectedRegionId] = useState('');
  const [selectedCityName, setSelectedCityName] = useState('');
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    selectedCode: '+255',
    city: '',
    password: '',
    business_description: '',
    confirmPassword: '',
    referal_code: '',
    licenseNumber: '',
    licenseExpiryDate: '',
    agreedToTerms: false,
    modalVisible: false,
  });

  const openCountryPicker = () => {
    setState(prevState => ({ ...prevState, modalVisible: true }));
  };

  const OpenGallery = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setImage(image.path);
      })
      .catch(error => {
        console.log(error);
        if (error.message === 'User did not grant library permission.') {
          Alert.alert(
            'Gallery Permission Required',
            'Please allow Gallery access to upload a picture. You can adjust this in your device settings.',
            [
              { text: 'Settings', onPress: () => Linking.openSettings() },
              { text: 'OK' },
            ]
          );
        }
      });
  };

  const OpenCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setImage(image.path);
      })
      .catch(error => {
        console.log(error);
        if (error.message === 'User did not grant camera permission.') {
          Alert.alert(
            'Camera Permission Required',
            'Please allow camera access to upload a picture. You can adjust this in your device settings.',
            [
              { text: 'Settings', onPress: () => Linking.openSettings() },
              { text: 'OK' },
            ]
          );
        }
      });
  };

  const handleSelectCode = (code: string) => {
    setState(prevState => ({
      ...prevState,
      selectedCode: code,
      modalVisible: false,
    }));
  };
  const validateFields = () => {
    const newErrors: any = {};
    if (!state.firstName.trim())
      newErrors.firstName = 'First name is required.';
    if (!state.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!state.email.trim() || !/\S+@\S+\.\S+/.test(state.email))
      newErrors.email = 'Invalid email address.';
    if (!state.phoneNumber.trim() || state.phoneNumber.length < 8)
      newErrors.phoneNumber = 'Invalid phone number.';
    if (!state.password.trim() || state.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters.';
    if (state.password !== state.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match.';

    if (Object.keys(newErrors).length > 0) {
      const firstErrorKey = Object.keys(newErrors)[0];
      // Alert.alert('Validation Error', newErrors[firstErrorKey]);
      CustomAlert({ message: newErrors[firstErrorKey] });
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    console.log('Form submitted:', state);
    if (!validateFields()) return;

    const formData = new FormData();

    formData.append('first_name', state.firstName);
    formData.append('middle_name', '');
    formData.append('last_name', state.lastName);
    formData.append('phone', state.phoneNumber);
    formData.append('phonecode', parseInt(state.selectedCode.replace('+', ''), 10),);
    formData.append('email', state.email);
    formData.append('region_id', selectedRegionId);
    formData.append('password', state.password);
    formData.append('password_confirmation', state.confirmPassword);
    formData.append('user_type', userType);
    formData.append('business_description', state.business_description);
    formData.append('licence_number', userType === 'customer' || userType === 'vendor'
      ? ''
      : state.licenseNumber);
    formData.append('licence_expiry',
      userType === 'customer' || userType === 'vendor'
        ? ''
        : state.licenseExpiryDate);
    formData.append('referal_code', userType);
    formData.append('privacy_checked', '1');

    if (image) {
      const uniqueImageName = `profile_${Date.now()}.jpg`;
      formData.append('profile_photo', {
        uri: image,
        name: uniqueImageName,
        type: 'image/jpg',
      });
    }

    if (nationalId) {
      const uniqueNationalIdName = `${Date.now()}.pdf`;
      formData.append('attachment', {
        uri: nationalId,
        name: uniqueNationalIdName,
        type: 'application/pdf',
      });
    }else{
      formData.append('attachment','')
    }

    // const payload = {
    //   first_name: state.firstName,
    //   middle_name: '',
    //   last_name: state.lastName,
    //   phone: state.phoneNumber,
    //   phonecode: parseInt(state.selectedCode.replace('+', ''), 10),
    //   email: state.email,
    //   region_id: selectedRegionId,
    //   password: state.password,
    //   password_confirmation: state.confirmPassword,
    //   user_type: userType,
    //   business_description:state.business_description,
    //   licence_number:
    //     userType === 'customer' || userType === 'vendor'
    //       ? ''
    //       : state.licenseNumber,
    //   licence_expiry:
    //     userType === 'customer' || userType === 'vendor'
    //       ? ''
    //       : state.licenseExpiryDate,
    //   referal_code: '',
    //   privacy_checked: state.agreedToTerms,
    // };
    console.log(JSON.stringify(formData));
    const resultAction = await dispatch(registration(formData));

    console.log(resultAction, 'resultAction', userType);

    // const data = resultAction;
    // console.log(data,'payload');
    if (resultAction?.payload?.data) {
      navigation.navigate(SCREEN_NAME.OTPVERIFY, {
        data: resultAction?.payload?.data,
        userTypeValue: userType

      });
    }
    //   Alert.alert(
    //     'Alert',
    //     data.payload.message,
    //     [
    //       {
    //         text: 'OK',
    //         onPress: () => navigation.goBack(), // Navigate back when "OK" is pressed
    //       },
    //     ],
    //     { cancelable: false } // Prevent dismissing the alert by tapping outside
    //   );
    // }

    // navigation.navigate(SCREEN_NAME.OTPVERIFY, {
    //   userType: userType,
    // });
  };

  const cities = [
    {
      region_id: '1',
      name: 'Dar es salaam',
    },
    {
      region_id: '2',
      name: 'Arusha',
    },
    {
      region_id: '3',
      name: 'Shinyanga',
    },
    {
      region_id: '4',
      name: 'Morogoro',
    },
    {
      region_id: '5',
      name: 'Mbeya',
    },
    {
      region_id: '6',
      name: 'Iringa',
    },
    {
      region_id: '7',
      name: 'Geita',
    },
    {
      region_id: '8',
      name: 'Mwanza',
    },
    {
      region_id: '9',
      name: 'Kilimanjaro',
    },
    {
      region_id: '10',
      name: 'Pwani',
    },
    {
      region_id: '11',
      name: 'Lindi',
    },
    {
      region_id: '12',
      name: 'Mtwara',
    },
    {
      region_id: '13',
      name: 'Tanga',
    },
    {
      region_id: '14',
      name: 'Manyara',
    },
    {
      region_id: '15',
      name: 'Tabora',
    },
    {
      region_id: '16',
      name: 'Mara',
    },
    {
      region_id: '17',
      name: 'Kigoma',
    },
    {
      region_id: '18',
      name: 'Rukwa',
    },
    {
      region_id: '19',
      name: 'Simiyu',
    },
    {
      region_id: '20',
      name: 'Unguja',
    },
    {
      region_id: '21',
      name: 'Pemba',
    },
    {
      region_id: '22',
      name: 'Songea',
    },
    {
      region_id: '23',
      name: 'Kagera',
    },
    {
      region_id: '24',
      name: 'Singida',
    },
    {
      region_id: '25',
      name: 'Dodoma',
    },
    {
      region_id: '27',
      name: 'Katavi',
    },
    {
      region_id: '28',
      name: 'Ruvuma',
    },
  ];

  const showImagePickerOptions = () => {
    Alert.alert(
      'Select Image',
      'Choose an option to upload a profile picture',
      [
        { text: 'Open Gallery', onPress: OpenGallery },
        { text: 'Open Camera', onPress: OpenCamera },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };
  const updateDocument = (type: string, uri: string, name: string) => {
    console.log(type, 'type', uri);
    if (type === 'nationalId') {
      setNationalId(uri);
      setNationalIdName(name);
      setDocuments((prev: any) => ({ ...prev, nationalId: uri }));
    }
  };
  const openDocumentPicker = async (type: string) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      if (res) {
        updateDocument(type, res[0].uri, res[0].name);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the document picker');
      } else {
        console.error('Error picking document:', err);
      }
    }
  };
  const DocumentItem = ({ type, label, icon }) => {
    const documentUri = type === 'nationalId' ? nationalId : null;
    const documentName = type === 'nationalId' ? nationalIdName : '';

    return (
      <TouchableOpacity
        style={styles.documentItem}
        onPress={() => openDocumentPicker(type)}
      >
        <View style={styles.documentInfo}>
          <Image source={icon} style={styles.documentIcon} />
          <View>
            <Text style={styles.documentText}>{label}</Text>
            {documentUri && (
              <Text style={styles.documentName} numberOfLines={1}>
                {documentName || 'national_id.pdf'}
              </Text>
            )}
          </View>
        </View>
        {documentUri ? (
          <Image source={IMAGE.check} style={styles.statusIcon} />
        ) : (
          <Image source={IMAGE.warning} style={[styles.statusIcon, styles.warningIcon]} />
        )}
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{
              ...styles.scrollContent,
              marginTop: insets.top,
            }}>
            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
              }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    marginBottom: 5,
                  }}
                  source={IMAGE.LEFT}
                />
              </TouchableOpacity>
              <Text style={styles.title}>Let's Get Started</Text>
            </View>
            <Text style={styles.subtitle}>Please input your information</Text>

            <TouchableOpacity onPress={showImagePickerOptions}>
              <View style={styles.boxPicture}>
                <Image
                  resizeMode={image ? 'cover' : 'cover'}
                  style={{
                    width: image ? 120 : 60,
                    height: image ? 120 : 60,
                    borderRadius: image ? 60 : 30,
                  }}
                  source={
                    image
                      ? { uri: image }

                      : IMAGE.PP
                  }
                  onError={() => console.log("Image Load Error")}
                />
              </View>
            </TouchableOpacity>

            <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 10, marginBottom: 30 }}>
              <Image style={{ width: 20, height: 20 }} source={IMAGE.cam} />
              <Text style={styles.txtHeading1}>Upload a Profile Picture</Text>
            </View>
            <View style={styles.nameContainer}>
              <CustomInput
                value={state.firstName}
                onChangeText={text =>
                  setState(prevState => ({ ...prevState, firstName: text }))
                }
                placeholder="First Name"
                style={styles.halfInput}
              />
              <CustomInput
                value={state.lastName}
                onChangeText={text =>
                  setState(prevState => ({ ...prevState, lastName: text }))
                }
                placeholder="Last Name"
                style={styles.halfInput}
              />
            </View>

            <CustomInput
              value={state.email}
              onChangeText={text =>
                setState(prevState => ({ ...prevState, email: text }))
              }
              placeholder="Email Address"
              keyboardType="email-address"
              style={{ marginBottom: 15 }}
              autoCapitalize="none"
            />



            <PhoneNumberInput
              selectedCode={state.selectedCode}
              phoneNumber={state.phoneNumber}
              setPhoneNumber={(phoneNumber: string) =>
                setState(prevState => ({ ...prevState, phoneNumber }))
              }
              openCountryPicker={openCountryPicker}
            />

            <CountryCodePicker
              modalVisible={state.modalVisible}
              setModalVisible={(modalVisible: boolean) =>
                setState(prevState => ({ ...prevState, modalVisible }))
              }
              handleSelectCode={handleSelectCode}
            />

            <CityDropdown
              cities={cities}
              selectedRegionId={selectedRegionId}
              onSelect={(regionId, name) => {
                setSelectedRegionId(regionId);
                setSelectedCityName(name);
              }}
            />

            {
              userType == 'vendor' && (
                <CustomInput
                  value={state.password}
                  onChangeText={text =>
                    setState(prevState => ({ ...prevState, business_description: text }))
                  }
                  placeholder="Buisness Description"
                  secureTextEntry={true}
                  style={{ marginBottom: 15 }}
                />
              )
            }

            {/* <CityDropdown
              cities={cities}
              selectedRegionId={'1'}
              onSelect={value => {
                console.log(value);
              }}
              style={{marginBottom: 15}}
            /> */}

            {/* <CustomInput
              value={state.city}
              onChangeText={(text) => setState(prevState => ({ ...prevState, city: text }))}
              placeholder="City"
              style={{ marginBottom: 15 }}
            /> */}

            {userType === 'driver' && (
              <>
                <CustomInput
                  value={state.licenseNumber}
                  onChangeText={text =>
                    setState(prevState => ({ ...prevState, licenseNumber: text }))
                  }
                  placeholder="License Number"
                  style={{ marginBottom: 15 }}
                />

                <CustomInput
                  value={state.licenseExpiryDate}
                  onChangeText={text =>
                    setState(prevState => ({
                      ...prevState,
                      licenseExpiryDate: text,
                    }))
                  }
                  placeholder="License Expiry Date (YYYY-MM-DD)"
                  style={{ marginBottom: 15 }}
                  keyboardType="default"
                />

                <DocumentItem
                  type="nationalId"
                  label="National ID or Diver Licence"
                  icon={IMAGE.dl}
                />
              </>
            )}

            <CustomInput
              value={state.password}
              onChangeText={text =>
                setState(prevState => ({ ...prevState, password: text }))
              }
              placeholder="Create Strong Password"
              secureTextEntry={true}
              style={{ marginBottom: 15 }}
            />

            <CustomInput
              value={state.confirmPassword}
              onChangeText={text =>
                setState(prevState => ({ ...prevState, confirmPassword: text }))
              }
              placeholder="Confirm Password"
              secureTextEntry={true}
              style={{ marginBottom: 15 }}
            />

            <CustomInput
              value={state.referal_code.toLocaleUpperCase()}
              onChangeText={text =>
                setState(prevState => ({ ...prevState, referal_code: text }))
              }
              placeholder="Referral Code (if any)"
              style={{ marginBottom: 15 }}
            />

            <View style={styles.termsContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() =>
                  setState(prevState => ({
                    ...prevState,
                    agreedToTerms: !prevState.agreedToTerms,
                  }))
                }>
                <View
                  style={[
                    styles.checkboxInner,
                    state.agreedToTerms && styles.checkboxChecked,
                  ]}
                />
              </TouchableOpacity>
              <Text style={styles.termsText}>
                By checking this box, you agree to our{' '}
                <Text style={styles.termsLink}>Terms & Conditions</Text>. That
                all information provided is true and Snap or its representatives
                may contact me via any of the provided channels.
              </Text>
            </View>

            <TouchableOpacity
              style={[
                styles.button,
                !state.agreedToTerms && styles.buttonDisabled,
              ]}
              onPress={handleSubmit}
              disabled={!state.agreedToTerms}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      {registrationLoading && <Loader />}
    </SafeAreaView>
  );
}
