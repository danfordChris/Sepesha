import { StyleSheet } from "react-native";
import { FONTS } from "../../../../utils/Constants/Fonts";
import { COLORS } from "../../../../utils/Constants/Colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      // padding: 16,?
      marginHorizontal:16
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
    },
    welcomeText: {
      fontSize: 14,
      color: '#666',
      fontFamily: FONTS.REGULAR,
    },
    nameText: {
      fontSize: 20,
      fontFamily: FONTS.MEDIUM,
      color: '#000',
    },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    notificationButton: {
      padding: 8,
    },
    notificationIcon: {
      width: 24,
      height: 24,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#E0E0E0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarText: {
      fontSize: 16,
      fontFamily: FONTS.MEDIUM,
      color: '#666',
    },
    verificationCard: {
      backgroundColor: '#F0EFF2',
      borderRadius: 12,
      padding: 10,
      marginBottom: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    verificationTitle: {
      fontSize: 16,
      fontFamily: FONTS.MEDIUM,
      color: '#000',
      marginBottom: 4,
    },
    verificationDesc: {
      fontSize: 12,
      fontFamily: FONTS.REGULAR,
      color: '#666',
      width: '90%',
    },
    warningIcon: {
      width: 24,
      height: 24,
      tintColor: '#E34234',
    },
    balanceCard: {
      backgroundColor: '#FFE4E1',
      borderRadius: 12,
      padding: 16,
      marginVertical: 12,
    },
    balanceLabel: {
      fontSize: 14,
      fontFamily: FONTS.REGULAR,
      color: '#666',
      marginBottom: 8,
    },
    balanceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    currencyText: {
      fontSize: 16,
      fontFamily: FONTS.REGULAR,
      color: '#000',
    },
    balanceAmount: {
      fontSize: 24,
      fontFamily: FONTS.MEDIUM,
      color: '#000',
      marginRight: 8,
    },
    eyeIcon: {
      width: 20,
      height: 20,
      tintColor: '#666',
    },
    locationQuestion: {
      fontSize: 14,
      fontFamily: FONTS.REGULAR,
      color: '#000',
      marginBottom: 8,
    },
    locationInput: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    locationIcon: {
      width: '80%',
      height: '80%',
      tintColor: '#E34234',
    },
    locationPlaceholder: {
      fontSize: 14,
      fontFamily: FONTS.REGULAR,
      color: '#666',
    },
    requestsHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 24,
      marginBottom: 16,
    },
    requestsTitle: {
      fontSize: 16,
      fontFamily: FONTS.MEDIUM,
      color: '#000',
    },
    viewAllText: {
      fontSize: 14,
      fontFamily: FONTS.MEDIUM,
      color: '#E34234',
    },
    onboardingContainer: {
      alignItems: 'center',
      marginTop: 32,
      gap: 12,
    },
    usersIcon: {
      width: 48,
      height: 48,
      tintColor: '#666',
    },
    onboardingText: {
      fontSize: 14,
      fontFamily: FONTS.REGULAR,
      color: '#666',
      textAlign: 'center',
    },
    tabButton: {
      flex: 1,
      paddingVertical: 12,
      alignItems: 'center',
    },
    activeTab: {
      backgroundColor: '#E34234',
    },
    tabText: {
      fontFamily: FONTS.MEDIUM,
      fontSize: 14,
      color: '#666',
    },
    activeTabText: {
      color: 'white',
    },
  
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyText: {
      fontSize: 16,
      color: '#666',
      fontFamily: FONTS.REGULAR,
    },
    listContainer: {
      // padding: 16,
      paddingBottom: 0
    },
    separator: {
      height: 1,
      backgroundColor: '#ddd',
      marginHorizontal: 16,
    },
    bookingCard: {
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
    },
    categoryText: {
      fontSize: 16,
      fontFamily: FONTS.MEDIUM,
      marginBottom: 4,
      color: '#000',
    },
    recipientText: {
      fontSize: 14,
      color: '#666',
      fontFamily: FONTS.REGULAR,
      marginBottom: 12,
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 16,
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: 10,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F0EFF2'
    },
  
    locationTextContainer: {
      flex: 1,
    },
    dropOffContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 2,
    },
    locationPinIcon: {
      width: 12,
      height: 12,
    },
    dropOffText: {
      fontSize: 12,
      color: '#E34234',
      fontFamily: FONTS.MEDIUM,
      marginLeft: 8
    },
    locationText: {
      fontSize: 14,
      color: '#000',
      fontFamily: FONTS.REGULAR,
      marginBottom: 4,
    },
    pickupText: {
      fontSize: 14,
      color: '#666',
      fontFamily: FONTS.REGULAR,
      marginBottom: 4,
    },
    distanceText: {
      fontSize: 14,
      color: '#666',
      fontFamily: FONTS.REGULAR,
      marginBottom: 4,
    },
    dateText: {
      fontSize: 12,
      color: '#999',
      fontFamily: FONTS.REGULAR,
      marginBottom: 4,
    },
    priceText: {
      fontSize: 16,
      color: '#000',
      fontFamily: FONTS.MEDIUM,
      marginTop: 8,
    },
    buttonContainer: {
      flexDirection: 'row',
      gap: 12,
      marginTop: 8,
    },
    rejectButton: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    acceptButton: {
      flex: 1,
      backgroundColor: '#E34234',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    rejectButtonText: {
      color: '#666',
      fontSize: 14,
      fontFamily: FONTS.MEDIUM,
    },
    acceptButtonText: {
      color: 'white',
      fontSize: 14,
      fontFamily: FONTS.MEDIUM,
    },
    acceptedContainer: {
      backgroundColor: '#E8F5E9',
      padding: 8,
      borderRadius: 4,
      alignItems: 'center',
      marginTop: 8,
    },
    acceptedText: {
      color: '#2E7D32',
      fontFamily: FONTS.MEDIUM,
    },
    rejectedContainer: {
      backgroundColor: '#FFEBEE',
      padding: 8,
      borderRadius: 4,
      alignItems: 'center',
      marginTop: 8,
    },
    rejectedText: {
      color: '#C62828',
      fontFamily: FONTS.MEDIUM,
    },
    documentCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderRadius: 10,
      padding: 15,
      // marginHorizontal: 15,
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    documentTitle: {
      fontSize: 16,
      fontFamily: FONTS.SEMI_BOLD,
      color: COLORS.LIGHT_GREY,
      marginBottom: 8,
    },
    documentAvailableContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    documentMissingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    documentIcon: {
      width: 24,
      height: 24,
      marginRight: 10,
      tintColor: COLORS.main,
    },
    documentMissingIcon: {
      width: 24,
      height: 24,
      marginRight: 10,
      tintColor: COLORS.LIGHT_GREY,
    },
    documentText: {
      fontSize: 14,
      fontFamily: FONTS.REGULAR,
      color: COLORS.main,
      textDecorationLine: 'underline',
    },
    documentMissingText: {
      fontSize: 14,
      fontFamily: FONTS.REGULAR,
      color: COLORS.LIGHT_GREY,
    },
    documentStatusIcon: {
      width: 20,
      height: 20,
      tintColor: COLORS.main,
    },
    
  })
  export default styles;