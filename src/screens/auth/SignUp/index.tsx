import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert, Platform, Image, ScrollView, StatusBar } from 'react-native';

import { COLORS } from '../../../utils/Constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/store';
import CustomAlert from '../../../components/CustomeAlert';
// import Loader from '../../../components/Loader';
import { SCREEN_NAME } from '../../../utils/Constants/Screens';
import CustomButton from '../../../components/CustomButton';
import PhoneNumberInput from '../../../components/PhoneNumberInput';
import CountryCodePicker from '../../../components/CountryCodePicker';
import { IMAGE } from '../../../utils/Constants/Images';
import { FONTS } from '../../../utils/Constants/Fonts';

const SignUp = ({ navigation, route }: any) => {

  const { type, typeValue } = route?.params || {};

  const dispatch = useDispatch<AppDispatch>()
  const insets = useSafeAreaInsets();

  const { registrationLoading } = useSelector((state: RootState) => state.API.loading)

  const [state, setState] = useState({
    progress: typeValue == '2' ? 1 : 0.2,
    modalVisible: false,
    selectedCode: '+255',
    phoneNumber: '',
    loading: false,
  });

  const validatePhoneNumber = () => {
    const phoneRegex = /^[0-9]{6,15}$/; // Validation for 6 to 15 digits
    if (!state.phoneNumber || !phoneRegex.test(state.phoneNumber)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid phone number with 6 to 15 digits.');
      return false;
    }
    return true;
  };

  const handleContinue = async () => {
    if (!validatePhoneNumber()) {
      return;
    }

  };

  const openCountryPicker = () => {
    setState(prevState => ({ ...prevState, modalVisible: true }));
  };

  const handleSelectCode = (code: string) => {
    setState(prevState => ({ ...prevState, selectedCode: code, modalVisible: false }));
  };

  return (
    <View style={[styles.container]}>

<StatusBar translucent={false}
        backgroundColor="#fff"
        barStyle="dark-content"
      />
        <ScrollView showsVerticalScrollIndicator={false}>


      <View style={styles.content}>



        <Image
          resizeMode='contain'
          style={{ width: '100%', height: 200, marginTop: 120 }}
          source={IMAGE.ii}
        />

          <Text style={styles.txt}>Enter your number</Text>

          <PhoneNumberInput
            selectedCode={state.selectedCode}
            phoneNumber={state.phoneNumber}
            setPhoneNumber={(phoneNumber: string) => setState(prevState => ({ ...prevState, phoneNumber }))}
            openCountryPicker={openCountryPicker}
          />

          <CountryCodePicker
            modalVisible={state.modalVisible}
            setModalVisible={(modalVisible: boolean) => setState(prevState => ({ ...prevState, modalVisible }))}
            handleSelectCode={handleSelectCode}
          />

          <CustomButton
            title='Continue'
            style={{ marginTop: 20 }}
            onPress={() => navigation.navigate(SCREEN_NAME.OTPVERIFY)}
          />

          <CustomButton
            title='Sign Up'
            style={{ marginTop: 20, marginBottom: 10 }}
            onPress={() => navigation.navigate(SCREEN_NAME.OTPVERIFY)}
          />
          <View style={styles.orContainer}>
            <View style={{ width: '45%', backgroundColor: COLORS.borderColorGrey, height: 1 }}></View>
            <Text style={styles.orText}>OR</Text>
            <View style={{ width: '45%', backgroundColor: COLORS.borderColorGrey, height: 1 }}></View>
          </View>
          {
            Platform.OS == 'ios' && (
              <CustomButton
                title="Continue with Apple"
                onPress={() => console.log()}
                image={IMAGE.APPLE}
                style={{ backgroundColor: COLORS.black, borderWidth: 1, borderColor: COLORS.borderColorGrey, marginTop: 10 }}
                textStyle={{ color: COLORS.white }}
              />
            )
          }

          <CustomButton
            title="Continue with Google"
            onPress={() => console.log()}
            image={IMAGE.GOOGLE}
            style={{ backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.borderColorGrey, marginTop: Platform.OS == 'ios' ? 20 : 0 }}
            textStyle={{ color: COLORS.black }}
          />
          <View style={{ marginTop: 50, alignSelf: 'center',marginBottom:50 }}>
            <Text style={{ textAlign: 'center', fontFamily: FONTS.LIGHT, color: COLORS.GREY, fontSize: 12 }}>By signing up, you agree to our <Text style={{ textDecorationLine: 'underline' }}>Terms & Conditions, </Text>
              acknowledge our <Text style={{ textDecorationLine: 'underline' }}>Privacy Policy, </Text>and confirm that you're over 18. We may send promotions related to our services
            </Text>

          </View>


      </View>
      {/* {registrationLoading && <Loader />} */}
      </ScrollView>

    </View>
  );
};

export default SignUp;
