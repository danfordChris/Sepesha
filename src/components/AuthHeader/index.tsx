import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IMAGE } from '../../utils/Constants/Images';
import { COLORS } from '../../utils/Constants/Colors';
import { FONTS } from '../../utils/Constants/Fonts';

const AuthHeader = ({ onLeftPress, onRightPress, rightText = "Skip", hide }: any) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top,marginBottom:10 }]}>
            {
                hide == true ? 
                <TouchableOpacity
                style={[styles.section, styles.leftSection]}
                // onPress={onLeftPress}
            >
                {/* <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={IMAGE.LEFT}
                /> */}
            </TouchableOpacity>
                    : <TouchableOpacity
                        style={[styles.section, styles.leftSection]}
                        onPress={onLeftPress}
                    >
                        <Image
                            resizeMode="contain"
                            style={styles.icon}
                            source={IMAGE.LEFT}
                        />
                    </TouchableOpacity>
            }


            <View style={[styles.section, styles.centerSection]}>
                <Image
                    resizeMode="contain"
                    style={styles.logo}
                    source={IMAGE.LOGO}
                />
            </View>

            <TouchableOpacity
                style={[styles.section, styles.rightSection]}
                onPress={onRightPress}
            >
                <Text style={styles.skipText}>{rightText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    section: {
        justifyContent: 'center',
        height: '100%',
    },
    leftSection: {
        width: '20%',
        height: 50,

        // alignItems: 'flex-start',
    },
    centerSection: {
        width: '60%',
        height: 50,

        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'red'

    },
    rightSection: {
        width: '20%',
        height: 50,

        alignItems: 'flex-end',
    },
    icon: {
        width: 25,
        height: 25,
    },
    logo: {
        width: 120,
        height: 100,
    },
    skipText: {
        fontSize: 18,
        color: COLORS.secColor,
        fontFamily: FONTS.SEMI_BOLD

    },
});

export default AuthHeader;
