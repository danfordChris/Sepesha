import { StyleSheet } from "react-native";
import { COLORS } from "../../../../utils/Constants/Colors";
import { FONTS } from "../../../../utils/Constants/Fonts";

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