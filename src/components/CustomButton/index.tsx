import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
} from 'react-native';
import { COLORS } from '../../utils/Constants/Colors';
import { FONTS } from '../../utils/Constants/Fonts';

const { width } = Dimensions.get('screen');

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  image?: any; 
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  image,
}) => {

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[styles.button, style]}
    >
      {image && <Image source={image} style={styles.image} />}
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: width - 40,
    backgroundColor: COLORS.main,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row', // Allow content to align horizontally
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.SEMI_BOLD,
  },
  image: {
    width: 20, // Adjust size as needed
    height: 20, // Adjust size as needed
    marginRight: 10, // Spacing between image and text
    resizeMode: 'contain',
  },
});

export default CustomButton;
