import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, FlatList, Image, Alert } from 'react-native';
import { CommonActions, DrawerActions, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FONTS } from '../utils/Constants/Fonts';


interface MenuItem {
    id: string;
    title: string;
    isSwitch?: boolean;
    onPress?: () => void;
}
export default function CustomDrawerContent({}:any) {
    const { top } = useSafeAreaInsets();
    const navigation = useNavigation();
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [selectedItemId, setSelectedItemId] = useState(null);

    // const userProfileData = useSelector(
    //     (state: any) => state.API?.data?.loginResponse?.data,
    // );

    // console.log(userProfileData, 'userProfileData')

    const dispatch = useDispatch<AppDispatch>();
    


    const menuItems: MenuItem[] = [
        { id: '1', title: 'Edit Profile', onPress: () => {
            // navigation.navigate('EditProfile')

        }},
        { id: '2', title: 'Notification', isSwitch: true },
        { id: '3', title: 'Support', onPress: () => console.log('asa') },
        { id: '4', title: 'Terms and conditions', onPress: () => console.log('asa') },
        { id: '5', title: 'Change password', onPress: () => console.log('sfknd')},
        { id: '6', title: 'Delete account', onPress: () => console.log('sfknd') },
    ];


    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to log out?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Logout',
                    onPress: async () => {
                        console.log('sdd')

                        // try {
                        //     const result = await dispatch(logout());
                        //     console.log(result)
                        //     if (result?.payload?.status == 200) {
                        //         await AsyncStorage.clear()

                        //         setTimeout(async () => {
                        //             navigation.dispatch(
                        //                 CommonActions.reset({
                        //                     index: 0,
                        //                     routes: [{ name: 'LoginScreen' }],
                        //                 })
                        //             );

                        //         }, 200)

                        //     }


                        // } catch (error) {
                        //     console.error('Error during logout:', error);
                        // }
                    },
                },
            ],
            { cancelable: true }
        );
    };

    const handleDelete = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to delete account?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    onPress: async () => {

                        console.log('sdd')
                        // try {
                        //     const result = await dispatch(deleteAccount());
                        //     console.log(result)
                        //     if (result?.payload?.status == 200) {
                        //         await AsyncStorage.clear()

                        //         setTimeout(async () => {
                        //             navigation.dispatch(
                        //                 CommonActions.reset({
                        //                     index: 0,
                        //                     routes: [{ name: 'LoginScreen' }],
                        //                 })
                        //             );

                        //         }, 200)

                        //     }


                        // } catch (error) {
                        //     console.error('Error during logout:', error);
                        // }
                    },
                },
            ],
            { cancelable: true }
        );
    };


    return (
        <View style={{ ...styles.container, paddingTop: top + 10 }}>
            <View style={styles.header}>
                <View style={styles.profile}>
                    <Text style={styles.name}>
                        {( 'Hello')+ '👋'}

                    </Text>
                    {/* <Text style={styles.email}>{userProfileData?.email}</Text> */}
                </View>
                <TouchableOpacity
                    style={styles.closeButton}
                // onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
                >


                    {/* <Image
                        resizeMode="contain"
                        style={{ width: 30, height: 30 }}
                        source={Icons.cross}
                    /> */}
                </TouchableOpacity>
            </View>

            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }: { item: MenuItem }) => (
                    <TouchableOpacity
                        style={[
                            styles.menuItem,
                            item.id === selectedItemId && styles.menuItemSelected,
                        ]}
                        onPress={() => {
                            if (!item.isSwitch) {
                                setSelectedItemId(item?.id);
                                item.onPress && item.onPress();
                            }
                        }}
                    >
                        <Text
                            style={[
                                styles.menuText,
                                item.id === selectedItemId && styles.menuTextSelected,
                            ]}
                        >
                            {item.title}
                        </Text>
                        {item.isSwitch ? (
                            <Switch
                                value={notificationsEnabled}
                                onValueChange={(value) => setNotificationsEnabled(value)}
                                trackColor={{ false: '#767577', true: '#2196F3' }}
                                thumbColor={notificationsEnabled ? '#fff' : '#f4f3f4'}
                            />
                        ) : null}
                    </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 10 }}
            />

            <View style={{ backgroundColor: '#E2E4E5', width: '100%', height: 1.5, marginBottom: 20 }} />

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 30,
        paddingHorizontal: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    profile: {
        gap: 4,
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
    },
    email: {
        fontSize: 14,
        color: '#666',
    },
    closeButton: {
        padding: 4,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        marginBottom: 12,
        borderRadius: 30,
        paddingHorizontal: 20,
    },
    menuItemSelected: {
        backgroundColor: '#EDEDED',
    },
    menuText: {
        fontSize: 14,
        color: '#000',
        fontFamily: FONTS.LIGHT,
    },
    menuTextSelected: {
        fontFamily: FONTS.MEDIUM,
        fontSize: 14,
        color: 'black',
    },
    separator: {
        height: 5,
    },
    logoutButton: {
        marginTop: 'auto',
        marginBottom: 30,
        paddingVertical: 16,
        marginLeft: 30,
    },
    logoutText: {
        fontSize: 16,
        color: '#FF3B30',
    },
});
