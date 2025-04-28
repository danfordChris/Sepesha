import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { ProgressBar } from 'react-native-paper';
// import AuthHeader from '../../../components/AuthHeader';
import { COLORS } from '../../../utils/Constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import CustomButton from '../../../components/Button/CustomButton';
import styles from './style';
import OTP from '../../../components/OTP';
import { FONTS } from '../../../utils/Constants/Fonts';
import { SCREEN_NAME } from '../../../utils/Constants/Screens';
import CustomAlert from '../../../components/CustomeAlert';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/store';
// import { resendOtp, verifyOtp } from '../../../redux/slices/apiSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../../components/CustomButton';
import AuthHeader from '../../../components/AuthHeader';
import { verifyotp } from '../../../redux/slices/apiSlice';
// import Loader from '../../../components/Loader';

const OtpVerify = ({ navigation, route }: any) => {

    const dispatch = useDispatch<AppDispatch>()

    const { data, typeValue, userType, userTypeValue } = route?.params || {}

    const insets = useSafeAreaInsets();
    const [progress, setProgress] = useState(0.3);
    const [reset, setReset] = useState(false);

    const [seconds, setSeconds] = useState(30);
    const [isTimerStart, setIsTimerStart] = useState(true);

    const [otp, setOtp] = useState<number>();


    const [showOtp, setShowOtp] = useState(data?.otp)


    useEffect(() => {

        // console.log(userType,'userTypeuserTypeuserType')
        console.log(data, 'adsakdadkklads')

    }, [])


    // const { verifyOtpLoading } = useSelector((state: RootState) => state.API.loading)


    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isTimerStart) {
            interval = setInterval(() => {
                setSeconds((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval!);
                        setIsTimerStart(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(interval!);
    }, [isTimerStart]);






    const handleOTPChange = (code: number) => {
        setOtp(code);
    };

    // navigation.navigate(SCREEN_NAME.ENTERNAME)

    const btnContinue = async () => {


        // const targetTab = data?.user_type == 'driver'
        //     ?
        //     //  SCREEN_NAME.DocumentsAdd
        //     'BottomTab2'
        //     : data?.user_type == 'customer'
        //         ? 'BottomTab1'
        //         : 'BottomTab1';

        // Navigate to the target tab

        const params = {
            otp: otp,
            user_type: data?.user_type,
            phone: data?.phone_number,
        };
        if (!otp) {
            CustomAlert({ message: 'Please Enter OTP' });
            return;
        }
        try {
            const result = await dispatch(verifyotp(params));
            console.log(result, 'result')
            const res = result?.payload


            console.log(data?.user_type, 'userType')

            if (res?.status == true) {
                console.log(res, 'res?.data?.access_token', userTypeValue, 'userTypeValue');

                await AsyncStorage.setItem('token', res?.access_token)

                if (data?.user_type == 'driver') {
                    if (res?.is_verified == 0) {
                        navigation.navigate(SCREEN_NAME.DocumentsAdd,{
                            screenType:'register',
                            dataValue:res
                        });

                    } else {
                        navigation.navigate('BottomTab2');

                    }

                } else {

                    navigation.navigate('BottomTab1');

                }


                // let targetTab;
                // if (userType === 'driver') {
                //     targetTab = SCREEN_NAME.DocumentsAdd;
                // } else if (userType === 'customer') {
                //     targetTab = 'BottomTab1';
                // } else {
                //     targetTab = 'BottomTab1';
                // }
                // navigation.navigate(targetTab);


                // dispatch(setAccessToken(res?.data?.token));




                // const is_profile_completed = result?.payload?.data?.is_profile_completed.toString()
                // await AsyncStorage.setItem('is_profile_completed',is_profile_completed)

                // console.log('res', res)
                // if(typeValue=='forgot'){
                //     navigation.navigate(SCREEN_NAME.CREATEPASSCODEFORGOT)
                // }else{
                //     if (res?.data?.is_profile_completed == 1) {
                //         console.log('123')
                //         navigation.navigate(SCREEN_NAME.ENTERPASSCODE)
                //     } else {
                //         navigation.navigate(SCREEN_NAME.ENTERNAME, {
                //             data: res?.data
                //         })
                //     }
                // }



                //     } else if (res?.status == 400) {
                //         CustomAlert({ message: res?.message });
            }

            //     // navigation.navigate('AppDrawer'); 
        } catch (error) {
            console.error(error); // Handle error if needed
        }


    }

    const handleResendOtp = async () => {
        setReset(!reset);
        setSeconds(30);
        setIsTimerStart(true);
        // try {
        //     const params = {
        //         userId: data?._id,
        //         type: data?.login_with,
        //     };
        //     const result = await dispatch(resendOtp(params));
        //     const res = result?.payload;

        //     if (res?.status === 200) {
        //         CustomAlert({ message: res?.message });
        //         setShowOtp(result?.payload?.data?.otp)
        //     } else if (res?.status === 400) {
        //         CustomAlert({ message: res?.message });
        //     } else {
        //         CustomAlert({ message: 'An unexpected error occurred. Please try again.' });
        //     }
        // } catch (error) {
        //     console.error('Error in handleResendOtp:', error);
        //     CustomAlert({ message: 'Something went wrong. Please try again later.' });
        // }
    };

    return (
        <View style={[styles.container]}>
            <AuthHeader onLeftPress={() => navigation.goBack()} rightText="" />




            <View style={styles.content}>

                <Text style={styles.styletxt}>

                    `We just texted a confirmation code to number`
                    +255{data?.phone_number}` Please enter the 4 digit OTP code.`

                </Text>


                <Text style={{ color: COLORS.main, fontFamily: FONTS.MEDIUM }}>Enter OTP :- {showOtp}</Text>
                <OTP
                    reset={reset}
                    handleChange={handleOTPChange}
                    containerStyle={{ marginTop: 1 }}
                />

                {/* <CustomButton
                    title="Verify"
                    style={{marginTop:20}}
                    onPress={() => console.log('ss')}
                /> */}

                {!seconds ? (
                    <TouchableOpacity
                        onPress={handleResendOtp}
                        style={styles.resendCodeContainer}>
                        <Text style={{
                            color: COLORS.main,
                        }}>
                            Didn’t receive an OTP yet ?
                            <Text style={styles.resendCodeText}>{' Resend Now'}</Text>

                        </Text>
                    </TouchableOpacity>
                ) : (
                    <View style={styles.resendCodeContainer}>
                        <Text style={styles.resendCodeIn}>
                            Resend OTP in{' '}
                            <Text style={styles.secondsText}>
                                {`00:${String(seconds).padStart(2, '0')}`}
                            </Text>
                        </Text>
                    </View>
                )}



                <View style={{ position: 'absolute', bottom: 30, alignSelf: 'center' }}>
                    <CustomButton
                        title="Continue"
                        onPress={() => btnContinue()}
                    />
                </View>
            </View>
            {/* {verifyOtpLoading && <Loader />} */}

        </View>
    );
};

export default OtpVerify;
