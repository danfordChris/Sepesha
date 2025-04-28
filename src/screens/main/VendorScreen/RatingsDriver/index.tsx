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
import { driverRating } from '../../../../redux/slices/apiSlice';

// Mock data - replace with your actual ratings data
const mockRatings = [
    {
        id: '1',
        user: {
            name: 'John Doe',
            image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        rating: 4.5,
        date: '2023-05-15',
        comment: 'Excellent driver! Very professional and arrived on time.'
    },
    {
        id: '2',
        user: {
            name: 'Jane Smith',
            image: 'https://randomuser.me/api/portraits/women/2.jpg',
        },
        rating: 5,
        date: '2023-05-10',
        comment: 'Perfect service, will definitely use again!'
    },
    {
        id: '3',
        user: {
            name: 'Robert Johnson',
            image: 'https://randomuser.me/api/portraits/men/3.jpg',
        },
        rating: 3,
        date: '2023-05-05',
        comment: 'Good but took a longer route than necessary'
    },
];

const RatingDriver: React.FC = ({ navigation, route }: any) => {
    const insets = useSafeAreaInsets();
    const [selected, setSelected] = useState(false);
    const { value } = route?.params || {};
    const profileData = useSelector((state: RootState) => state.API.data.getProfileUserResposne);
    const userData = useSelector((state: RootState):any => state.user.userData);

    const dispatch = useDispatch<AppDispatch>()


    const [reviewData,setReviewData] = useState<any>({})


     useEffect(()=>{
        driverRatingAPi()
     },[])
    const driverRatingAPi = async () => {
        try {
        const result =  await dispatch(driverRating({
            userId: userData?.data?.uid,
          }));
          console.log(result?.payload?.data)
          if(result?.payload?.status==true){
            setReviewData(result?.payload?.data)

          }
        } catch (error) {
          console.error('Error fetching vehicle:', error);
        }
      };
    const renderRatingItem = ({ item }: any) => {
      console.log(item)
        return(
            <View style={styles.ratingCard}>
             <View style={styles.userInfo}>
                <Image
                    source={{ uri: item?.user?.reviewer_photo }}
                    style={styles.userImage}
                />
                <View style={styles.userDetails}>
                    <Text style={styles.userName}>{item?.user?.reviewer_name}</Text>
                    <Text style={styles.ratingDate}>{moment(item?.created_at).format('MMM D, YYYY')}</Text>
                </View>
            </View>
            
            <Rating
                type='star'
                ratingCount={5}
                imageSize={16}
                readonly
                startingValue={item?.rating}
                style={styles.ratingStars}
            />
            
            {item?.review && (
                <Text style={styles.comment}>{item?.review}</Text>
            )}
        </View>

        );
    }
        
        
    

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: COLORS.white }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
            <View style={{ flex: 1, paddingTop: insets.top }}>
                <CustomHeader
                    btnBack={() => navigation.goBack()}
                    text={'My Ratings'}
                    arrowImage={IMAGE.LEFT}
                />

                <View style={styles.container}>
                    <View style={styles.profileHeader}>
                        <Image
                            source={profileData?.data[0]?.profile_photo ? 
                                { uri: profileData.data[0].profile_photo } : 
                                IMAGE.profilecircle}
                            style={styles.profileImage}
                        />
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileName}>
                                {profileData?.data[0]?.name || 'Driver Name'}
                            </Text>
                            <View style={styles.overallRating}>
                                <Rating
                                    type='star'
                                    ratingCount={5}
                                    imageSize={20}
                                    readonly
                                    startingValue={reviewData?.average_rating} // Replace with actual average rating
                                    style={styles.overallRatingStars}
                                />
                                <Text style={styles.ratingText}>{reviewData?.average_rating} ({reviewData?.total_reviews} ratings)</Text>
                            </View>
                        </View>
                    </View>

                    <FlatList
                        data={reviewData?.reviews}
                        renderItem={renderRatingItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.ratingsList}
                        ListEmptyComponent={
                            <Text style={styles.noRatingsText}>No ratings yet</Text>
                        }
                    />
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
        // marginBottom: 12,
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

export default RatingDriver;