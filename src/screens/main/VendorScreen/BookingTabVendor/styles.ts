import { Dimensions, StyleSheet } from "react-native";
import { FONTS } from "../../../../utils/Constants/Fonts";

const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      tabContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 8,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        overflow: 'hidden',
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
        padding: 16,
        paddingBottom: 100
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
      locationIcon: {
        width: '80%',
        height: '80%',
        tintColor: '#E34234',
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
      

  
})

export default styles;