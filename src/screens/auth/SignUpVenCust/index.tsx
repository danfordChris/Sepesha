import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';
import { SCREEN_NAME } from '../../../utils/Constants/Screens';
import { IMAGE } from '../../../utils/Constants/Images';
import { COLORS } from '../../../utils/Constants/Colors';
import { FONTS } from '../../../utils/Constants/Fonts';
import PhoneNumberInput from '../../../components/PhoneNumberInput';
import CountryCodePicker from '../../../components/CountryCodePicker';
import { login } from '../../../redux/slices/apiSlice';
import { AppDispatch, RootState } from '../../../redux/store/store';
import Loader from '../../../components/Loader';

const SignUpVenCust = ({ navigation, route }: any) => {
  const { user_Type } = route?.params || {};  // Get user type from route params
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch<AppDispatch>();
  const { loginLoading } = useSelector((state: RootState) => state.API.loading);

  const [activeTab, setActiveTab] = useState('vendor');
  const [state, setState] = useState({
    userType: user_Type == 'customer' ? 'customer' : activeTab,  // Set userType based on passed user_Type or default to 'vendor'
    email: '',
    password: '',
    modalVisible: false,
    selectedCode: '+255',
    phoneNumber: '',
  });

  const openCountryPicker = () => {
    setState(prevState => ({ ...prevState, modalVisible: true }));
  };

  const handleSelectCode = (code: string) => {
    setState(prevState => ({ ...prevState, selectedCode: code, modalVisible: false }));
  };

  const validateFields = () => {
    if (!state.phoneNumber || state.phoneNumber.length < 6) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid phone number.');
      return false;
    }
    // if (!state.password || state.password.length < 6) {
    //   Alert.alert('Invalid Password', 'Password must be at least 6 characters long.');
    //   return false;
    // }
    return true;
  };

  const handleContinue = async () => {
    if (!state.userType) {
      Alert.alert('Select User Type', 'Please select whether you are a vendor or customer.');
      return;
    }
    if (!validateFields()) return;

    const payload = {
      phone: parseInt(state.phoneNumber, 10),
      // password: state.password,
      user_type: state.userType,
    };

    const resultAction = await dispatch(login(payload));

    const data = resultAction;
    console.log(data);
    if (data?.payload) {

      if (state.userType == 'customer') {
        navigation.navigate('OtpVerify', {
          data: data?.payload?.data
        });

      } else if (state.userType == 'vendor') {
        // navigation.navigate('OtpVerify');
        navigation.navigate('OtpVerify', {
          data: data?.payload?.data,
        });
      }else{
        navigation.navigate('OtpVerify', {
          data: data?.payload?.data,
        });
      }
    }
  };

  const handleContinue1 = () => {
    if (!state.userType) {
      Alert.alert('Select User Type', 'Please select whether you are a vendor or customer.');
      return;
    }

    navigation.navigate(SCREEN_NAME.RegisterVendorCustomer, { userType: state.userType });
  };

  useEffect(() => {
    // If the userType is customer, skip tabs and directly set userType to 'customer'
    if (user_Type === 'customer') {
      setState(prevState => ({ ...prevState, userType: 'customer' }));
    }
  }, [user_Type]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: 'white' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar translucent={false}
        backgroundColor="#fff"
        barStyle="dark-content"
      />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: insets.bottom + 20,paddingTop:insets.top }}
        keyboardShouldPersistTaps="handled"
      >

        <TouchableOpacity onPress={()=>navigation.goBack()} style={{justifyContent:'center',width:40,height:40,marginLeft:20}}>

          <Image
          source={IMAGE.LEFT}
          style={{width:30,height:30}}
          />

        </TouchableOpacity>
        <View style={[styles.container, { }]}>
          <Image
            resizeMode="contain"
            style={{ width: '100%', height: 150 }}
            source={IMAGE.ii}
          />


          {/* Conditionally render the tabs based on userType */}
          {state.userType !== 'customer' && (
            <View style={styles.tabsContainer}>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'vendor' && styles.activeTab]}
                onPress={() => {
                  setActiveTab('vendor');
                  setState(prevState => ({ ...prevState, userType: 'vendor' }));
                }}
              >
                <Text style={[styles.tabText, activeTab === 'vendor' && styles.activeTabText]}>
                  I am vendor
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'driver' && styles.activeTab]}
                onPress={() => {
                  setActiveTab('driver');
                  setState(prevState => ({ ...prevState, userType: 'driver' }));
                }}
              >
                <Text style={[styles.tabText, activeTab === 'driver' && styles.activeTabText]}>
                  I am driver
                </Text>
              </TouchableOpacity>
            </View>
          )}

          <Text style={{ textAlign: 'center', color: 'black', fontFamily: FONTS.MEDIUM, fontSize: 28, marginTop: 30 }}>
            Welcome Back
          </Text>

          <Text style={{ textAlign: 'center', color: '#6C6C70', fontFamily: FONTS.REGULAR, fontSize: 14, marginTop: 5, marginBottom: 20 }}>
            Please input your information
          </Text>
          <View style={{ marginHorizontal: 20 }}>
            <PhoneNumberInput
              selectedCode={state.selectedCode}
              phoneNumber={state.phoneNumber}
              setPhoneNumber={(phoneNumber: string) => setState(prevState => ({ ...prevState, phoneNumber }))}
              openCountryPicker={openCountryPicker}
            />
          </View>

          <CountryCodePicker
            modalVisible={state.modalVisible}
            setModalVisible={(modalVisible: boolean) => setState(prevState => ({ ...prevState, modalVisible }))}
            handleSelectCode={handleSelectCode}
          />

          {/* <CustomInput
            value={state.password}
            onChangeText={(text) => setState((prevState) => ({ ...prevState, password: text }))}
            placeholder="Enter your password"
            secureTextEntry={true}
            style={{ marginTop: 0 }}
          /> */}

          <View style={{ marginTop: 30, marginHorizontal: 20 }}>
            <CustomButton title="Sign In" onPress={handleContinue} />
            <CustomButton
              textStyle={{ color: 'black' }}
              title="Sign Up"
              onPress={handleContinue1}
              style={{ marginTop: 20, backgroundColor: 'white', borderWidth: 1, borderColor: COLORS.borderColorGrey }}
            />
          </View>
        </View>
      </ScrollView>
      {loginLoading && <Loader />}
    </KeyboardAvoidingView>
  );
};

export default SignUpVenCust;
