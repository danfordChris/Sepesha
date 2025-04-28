import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {FONTS} from '../../utils/Constants/Fonts';

const CustomHeader = ({text, arrowImage, btnBack}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={btnBack}
        style={styles.arrowContainer}>
        <Image
          resizeMode="contain"
          style={styles.arrowImage}
          source={arrowImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: FONTS.BOLD,
            color: 'black',
          }}>
          {text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 50,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  arrowContainer: {
    width: '12%',
    // backgroundColor: 'green',

    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  arrowImage: {
    width: 20,
    height: 20,
  },
  textContainer: {
    width: '88%',
    height: '100%',
    // backgroundColor:'red',
    justifyContent: 'center',
    // paddingLeft: 10,
  },
});

export default CustomHeader;
