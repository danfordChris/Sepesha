import {StyleSheet, Dimensions} from 'react-native';
import { FONTS } from '../../../utils/Constants/Fonts';
import { COLORS } from '../../../utils/Constants/Colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  logoContainer: {
    marginBottom: 20,
  },
  carouselContainer: {
    flex: 1,
    width: width,
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  carouselText: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: FONTS.BOLD,
    color: '#000000',
    marginBottom: 15,
  },
  carouselDescription: {
    textAlign: 'center',
    fontSize: 13,
    marginTop: 5,
    fontFamily: FONTS.LIGHT,
    color: '#000000',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginTop: -20,
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: COLORS.main,
    width: width - 50,
    height: 55,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontFamily: FONTS.BOLD,
    color: '#ffffff',
  },
  paginationContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginHorizontal: 2,
    // marginVertical: 10,
  },
  activeDot: {
    width: 35,
    height: 8,
    backgroundColor: COLORS.main,
  },
  leftTouchArea: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '20%',
    zIndex: 1,
    justifyContent: 'center',
  },
  rightTouchArea: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '20%',
    zIndex: 1,
    justifyContent: 'center',
  },
  arrowContainer: {
    position: 'absolute',
    left: 10,
    top: '50%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: -2,
  },
});

export default styles;