import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../utils/Constants/Colors';
import { COUNTRY_CODES } from '../../utils/JSON';
import { IMAGE } from '../../utils/Constants/Images';
import { FONTS } from '../../utils/Constants/Fonts';

const PhoneNumberInput = ({
  selectedCode,
  phoneNumber,
  setPhoneNumber,
  openCountryPicker,
}: any) => {
  // Find the selected country based on the dial code

  const [isFocused, setIsFocused] = useState(false);

  const selectedCountry =
    COUNTRY_CODES.find((item) => item.dial_code === selectedCode) || {
      flag: '🇹🇿', // Default flag
      dial_code: '+255', // Default code
    };

  const clearPhoneNumber = () => {
    setPhoneNumber('');
  };

  return (
    <View style={[styles.inputContainer, isFocused && { borderColor: COLORS.main, borderWidth: 1 },
    ]}>
      <TouchableOpacity onPress={openCountryPicker} style={styles.countrySelector}>
        {selectedCountry && (
          <Text style={styles.countryText}>
            {selectedCountry.flag} {selectedCountry.dial_code}
          </Text>
        )}
        <Image
          resizeMode='contain'
          style={{ width: 12, height: 12, marginLeft: 5 }}
          source={IMAGE.DOWN_ARW}
        />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="555 283 999"
        keyboardType="phone-pad"
        value={phoneNumber}
        returnKeyType='done'
        onChangeText={setPhoneNumber}
        placeholderTextColor={'#99A1BE'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {phoneNumber.length > 0 && (
        <TouchableOpacity onPress={clearPhoneNumber} style={styles.clearButton}>
          <Image
            resizeMode='contain'
            style={{ width: 20, height: 20 }}
            source={IMAGE.CROSS}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    height: 60,
    borderWidth: 1,
    borderColor: COLORS.borderColorGrey,
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  countryText: {
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    color: COLORS.black,
  },
  input: {
    flex: 1,
    color: COLORS.black,
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    paddingHorizontal: 5,
  },
  clearButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});

export default PhoneNumberInput;
