import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {IMAGE} from '../../../utils/Constants/Images';
import {SCREEN_NAME} from '../../../utils/Constants/Screens';
import {useDispatch, useSelector} from 'react-redux';
import {GETSTARTED} from '../../../redux/slices/apiSlice';
import {AppDispatch, RootState} from '../../../redux/store/store';
import RenderHTML from 'react-native-render-html';
import {FCM_init} from '../../../utils/Notification';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

interface CarouselItem {
  title: string;
  desc: string;
  photo: any;
  smallText: string;
  buttonText: string;
}

const carouselData: CarouselItem[] = [
  {
    title: 'Welcome to Sepesha a top delivery app in Tanzania',
    desc: 'Use your smartphone to order cargo delivery, get your cargo picked up by a near by professional driver ,and enjoy a low cost trip to your destination',
    photo: 'https://core.sepesha.com/uploads/1735680199splashphoto.jpg',
    smallText: 'I am driver or vendor',
    buttonText: 'I am customer',
  },
  {
    title: 'Get rides to great ride without the hassle',
    desc: 'Use your smartphone to order cargo delivery, get your cargo picked up by a near by professional driver ,and enjoy a low cost trip to your destination',
    photo: 'https://core.sepesha.com/uploads/1735680225splashphoto.jpg',
    smallText: 'I am driver or vendor',
    buttonText: 'I am customer',
  },
  {
    title: 'Save time, save money and save ride',
    desc: 'Use your smartphone to order cargo delivery, get your cargo picked up by a near by professional driver ,and enjoy a low cost trip to your destination',
    photo: 'https://core.sepesha.com/uploads/1735680240splashphoto.jpg',
    smallText: 'I am  driver or vendor',
    buttonText: 'I am customer',
  },
];

const WelcomeScreen: React.FC = ({props, navigation}: any) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch<AppDispatch>();
  const width = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const getStartedResponse = useSelector(
    (state: RootState) => state.API.data.getStartedResponse,
  );

  useEffect(() => {
    FCM_init({props, navigation});
  }, []);

  const handleSnapToItem = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNextCarouselItem = () => {
    // if (currentIndex < carouselData.length - 1) {
    //   setCurrentIndex(prevIndex => (prevIndex + 1) % carouselData.length);
    // } else {
      navigation.navigate(SCREEN_NAME.SignUpVenCust, {user_Type: 'customer'});
    // }
  };

  const handlePreviousCarouselItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleNextCarouselItemManual = () => {
    if (currentIndex < carouselData.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleBecomeDriverOrVendor = () => {
    navigation.navigate(SCREEN_NAME.SignUpVenCust, {
      user_Type: 'driver_or_vendor',
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ScrollView>
        <View style={[styles.innerContainer, {paddingTop:Platform.OS=='ios'?insets.top:null }]}>
          {/* Left touchable area */}
          <TouchableOpacity 
            style={styles.leftTouchArea}
            onPress={handlePreviousCarouselItem}
            activeOpacity={0.6}
          >
            {currentIndex > 0 && (
              <View style={styles.arrowContainer}>
                <Text style={styles.arrowText}>‹</Text>
              </View>
            )}
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.rightTouchArea}
            onPress={handleNextCarouselItemManual}
            activeOpacity={0.6}
          >
            {currentIndex < carouselData.length - 1 && (
              <View style={[styles.arrowContainer, {right: 10, left: undefined}]}>
                <Text style={styles.arrowText}>›</Text>
              </View>
            )}
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <Image
              source={{uri: carouselData?.[currentIndex].photo}}
              style={{width: width, height: 400}}
              resizeMode='stretch'
            />
          </View>
          <View style={styles.paginationContainer}>
            {carouselData?.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  currentIndex === index && styles.activeDot,
                ]}
              />
            ))}
          </View>
          <View style={styles.carouselContainer}>
            <Carousel
              loop={false}
              width={width}
              height={width / 2.5}
              data={carouselData}
              pagingEnabled
              scrollAnimationDuration={200}
              onSnapToItem={handleSnapToItem}
              defaultIndex={currentIndex}
              renderItem={({index}) => (
                <View style={styles.carouselItem}>
                  <Text style={styles.carouselText}>
                    {carouselData[index].title}
                  </Text>
                  {/* <Text style={styles.carouselDescription}>
                    {carouselData[index].desc}
                  </Text> */}
                </View>
              )}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleNextCarouselItem}>
              <Text style={styles.buttonText}>
                {carouselData[currentIndex].buttonText}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleBecomeDriverOrVendor}
              style={{marginVertical: 10}}>
              <Text style={[styles.carouselDescription, {fontSize: 14}]}>
                {carouselData[currentIndex].smallText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WelcomeScreen;