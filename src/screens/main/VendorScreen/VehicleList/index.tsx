import React, { useEffect, useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store/store';
import { COLORS } from '../../../../utils/Constants/Colors';
import CustomHeader from '../../../../components/CustomHeader';
import { IMAGE } from '../../../../utils/Constants/Images';
import { FONTS } from '../../../../utils/Constants/Fonts';
import { Rating } from 'react-native-ratings';
import moment from 'moment';
import { driverRating, getMyVehcile } from '../../../../redux/slices/apiSlice';

const VehicleList: React.FC = ({ navigation, route }: any) => {
    const insets = useSafeAreaInsets();
    const [selected, setSelected] = useState(false);
    const { value } = route?.params || {};
    const profileData = useSelector((state: RootState) => state.API.data.getProfileUserResposne);
    const userData = useSelector((state: RootState):any => state.user.userData);

    const dispatch = useDispatch<AppDispatch>()
    const [vehcileData, setVehcileData] = useState<any>([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        myVehicleLIst()
    }, [])

    const myVehicleLIst = async () => {
        try {
            setLoading(true);
            const result = await dispatch(getMyVehcile({
                userId: userData?.data?.uid,
            }));
            console.log(result?.payload?.data)
            if (result?.payload?.status == true) {
                // Ensure we're handling the data as an array
                const vehicleArray = Array.isArray(result?.payload?.data) 
                    ? result?.payload?.data 
                    : [result?.payload?.data];
                setVehcileData(vehicleArray);
            }
        } catch (error) {
            console.error('Error fetching vehicle:', error);
        } finally {
            setLoading(false);
        }
    };

    const renderVehicleItem = ({ item }: { item: any }) => (
        <TouchableOpacity 
            style={styles.vehicleCard}
            onPress={() => navigation.navigate('VehicleDetails', { vehicle: item })}
        >
            <View style={styles.vehicleHeader}>
                <View style={styles.vehicleInfo}>
                    <Text style={styles.vehicleMake}>{item.make} {item.model}</Text>
                    <Text style={styles.vehiclePlate}>{item.plate_number}</Text>
                </View>
                {/* <View style={[styles.statusBadge, { backgroundColor: item.status === 'active' ? COLORS.GREEN : COLORS.LIGHT_GREY }]}>
                    <Text style={styles.statusText}>{item.status === 'active' ? 'Active' : 'Inactive'}</Text>
                </View> */}
            </View>
            
            <View style={styles.vehicleDetails}>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Year:</Text>
                    <Text style={styles.detailValue}>{item.year}</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Color:</Text>
                    <View style={styles.colorContainer}>
                        <View style={[styles.colorCircle, { backgroundColor: item.color }]} />
                        <Text style={styles.detailValue}>{item.color}</Text>
                    </View>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Category:</Text>
                    <Text style={styles.detailValue}>{item.category?.name || 'N/A'}</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Capacity:</Text>
                    <Text style={styles.detailValue}>{item.category?.capacity || 'N/A'}</Text>
                </View>
            </View>
            
            <View style={styles.attachmentsContainer}>
                <Text style={styles.attachmentsTitle}>Documents:</Text>
                <View style={styles.attachmentsList}>
                    {item.attachments && item.attachments.map((attachment: any, index: number) => (
                        <TouchableOpacity 
                            key={index} 
                            style={styles.attachmentItem}
                            onPress={() => {/* Handle document view */}}
                        >
                            <Image source={IMAGE.pdfIcon} style={styles.attachmentIcon} />
                            <Text style={styles.attachmentText}>
                                {attachment.type === 1 ? 'Registration' : 'Insurance'}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </TouchableOpacity>
    );

    const renderEmptyList = () => (
        <View style={styles.emptyContainer}>
            {/* <Image source={IMAGE.NO_DATA} style={styles.emptyImage} /> */}
            <Text style={styles.emptyText}>No vehicles found</Text>
            {/* <TouchableOpacity 
                style={styles.addButton}
                onPress={() => navigation.navigate('AddVehicle')}
            >
                <Text style={styles.addButtonText}>Add New Vehicle</Text>
            </TouchableOpacity> */}
        </View>
    );

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: COLORS.white }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
            <View style={{ flex: 1, paddingTop: insets.top }}>
                <CustomHeader
                    btnBack={() => navigation.goBack()}
                    text={'My Vehicles'}
                    arrowImage={IMAGE.LEFT}
                />
                
                <View style={styles.container}>
                    {loading ? (
                        <View style={styles.loadingContainer}>
                            <Text>Loading vehicles...</Text>
                        </View>
                    ) : (
                        <>
                            <FlatList
                                data={vehcileData}
                                renderItem={renderVehicleItem}
                                keyExtractor={(item) => item.id}
                                contentContainerStyle={styles.listContainer}
                                ListEmptyComponent={renderEmptyList}
                                showsVerticalScrollIndicator={false}
                            />
                            
                            {/* {vehcileData.length > 0 && (
                                <TouchableOpacity 
                                    style={styles.floatingButton}
                                    onPress={() => navigation.navigate('AddVehicle')}
                                >
                                    <Text style={styles.floatingButtonText}>+</Text>
                                </TouchableOpacity>
                            )} */}
                        </>
                    )}
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 16,
    },
    listContainer: {
        paddingVertical: 16,
        paddingBottom: 80, // Add space for floating button
    },
    vehicleCard: {
        backgroundColor: COLORS.white,
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: COLORS.LIGHT_GREY,
    },
    vehicleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.LIGHT_GREY,
        paddingBottom: 12,
    },
    vehicleInfo: {
        flex: 1,
    },
    vehicleMake: {
        fontSize: 18,
        fontFamily: FONTS.SEMI_BOLD,
        color: COLORS.black,
    },
    vehiclePlate: {
        fontSize: 16,
        fontFamily: FONTS.MEDIUM,
        color: COLORS.black,
        marginTop: 4,
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        fontSize: 12,
        fontFamily: FONTS.MEDIUM,
        color: COLORS.white,
    },
    vehicleDetails: {
        marginBottom: 12,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    detailLabel: {
        fontSize: 14,
        fontFamily: FONTS.MEDIUM,
        color: COLORS.LIGHT_GREY,
        width: 80,
    },
    detailValue: {
        fontSize: 14,
        fontFamily: FONTS.REGULAR,
        color: COLORS.black,
    },
    colorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    colorCircle: {
        width: 16,
        height: 16,
        borderRadius: 8,
        marginRight: 8,
        borderWidth: 1,
        borderColor: COLORS.LIGHT_GREY,
    },
    attachmentsContainer: {
        borderTopWidth: 1,
        borderTopColor: COLORS.LIGHT_GREY,
        paddingTop: 12,
    },
    attachmentsTitle: {
        fontSize: 14,
        fontFamily: FONTS.MEDIUM,
        color: COLORS.black,
        marginBottom: 8,
    },
    attachmentsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    attachmentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.LIGHT_GREY + '30',
        borderRadius: 8,
        padding: 8,
        marginRight: 8,
        marginBottom: 8,
    },
    attachmentIcon: {
        width: 20,
        height: 20,
        marginRight: 4,
    },
    attachmentText: {
        fontSize: 12,
        fontFamily: FONTS.REGULAR,
        color: COLORS.black,
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
    },
    emptyImage: {
        width: 120,
        height: 120,
        marginBottom: 16,
    },
    emptyText: {
        fontSize: 16,
        fontFamily: FONTS.MEDIUM,
        color: COLORS.LIGHT_GREY,
        marginBottom: 24,
    },
    addButton: {
        backgroundColor: COLORS.PRIMARY,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    addButtonText: {
        fontSize: 14,
        fontFamily: FONTS.MEDIUM,
        color: COLORS.white,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: COLORS.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    floatingButtonText: {
        fontSize: 28,
        color: COLORS.white,
        fontFamily: FONTS.BOLD,
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.LIGHT_GREY,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 40,
        marginRight: 16,
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        fontSize: 16,
        fontFamily: FONTS.SEMI_BOLD,
        color: COLORS.black,
        marginBottom: 8,
    },
    overallRating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    overallRatingStars: {
        alignSelf: 'flex-start',
    },
    ratingText: {
        fontSize: 14,
        fontFamily: FONTS.REGULAR,
        color: COLORS.black,
        marginLeft: 8,
    },
    ratingsList: {
        paddingVertical: 16,
    },
    ratingCard: {
        backgroundColor: COLORS.white,
        borderRadius: 8,
        padding: 8,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    userDetails: {
        flex: 1,
    },
    userName: {
        fontSize: 14,
        fontFamily: FONTS.MEDIUM,
        color: COLORS.black,
    },
    ratingDate: {
        fontSize: 12,
        fontFamily: FONTS.REGULAR,
        color: COLORS.LIGHT_GREY,
        marginTop: 4,
    },
    ratingStars: {
        alignSelf: 'flex-start',
    },
    comment: {
        fontSize: 12,
        fontFamily: FONTS.REGULAR,
        color: COLORS.black,
        lineHeight: 20,
    },
    noRatingsText: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: FONTS.REGULAR,
        color: COLORS.LIGHT_GREY,
        marginTop: 40,
    },
});

export default VehicleList;