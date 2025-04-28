import { Image, StyleSheet, Text, View, Animated, StatusBar, LogBox } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { IMAGE } from '../../../utils/Constants/Images'
import { SCREEN_NAME } from '../../../utils/Constants/Screens'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './styles'

LogBox.ignoreLogs(['ViewPropTypes']);


const Splash = ({ navigation }: any) => {
    const progressAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Animate the progress bar
        Animated.timing(progressAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false,
        }).start();

        setTimeout(() => {
            // checkToken()
            navigation.navigate(SCREEN_NAME.WELCOMECREEN)
        }, 3000);
    }, [])

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');
        const role = await AsyncStorage.getItem('role');

        console.log(role, token)
        if (token) {
            if (role == 'driver') {
                navigation.replace('BottomTab2')
            } else {
                navigation.replace('BottomTab1')

            }

        } else {
            navigation.replace(SCREEN_NAME.WELCOMECREEN)
        }
    }

    const width = progressAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%']
    });

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <Image
                resizeMode='contain'
                // tintColor={'white'}
                style={{ width: '80%', height: 400 }}
                source={IMAGE.logo2}
            />
            <View style={styles.progressContainer}>
                <Animated.View
                    style={[
                        styles.progressBar,
                        {
                            width,
                        }
                    ]}
                />
            </View>
        </View>
    )
}

export default Splash

