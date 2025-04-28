import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Platform, TextInput } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import { Keyboard } from 'react-native';
import { FONTS } from '../../utils/Constants/Fonts';
import { COLORS } from '../../utils/Constants/Colors';

const OTP = ({ otp, handleChange, containerStyle, reset }: any) => {
  const otpInputRef: any = useRef(null);

  useEffect(() => {
    otpInputRef.current.clear();
  }, [reset]);

  const handleDonePress = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <OTPTextInput
        keyboardType="number-pad"
        ref={otpInputRef}
        handleTextChange={handleChange}
        defaultValue={otp}
        selectionColor="default" 
        textInputStyle={styles.otpInput}
        tintColor={COLORS.main} 
        returnKeyType="done"
        onSubmitEditing={handleDonePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: '100%',
  },
  otpInput: {
    flex: 1,
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 18,
    borderBottomWidth: Platform.OS === 'ios' ? 1.5 : 1.5,
    borderColor: 'black',
    borderWidth: 1.5,
    // marginBottom:10,
    // color: 'white',
    fontFamily: FONTS.SEMI_BOLD,
  },
});

export default OTP;
