import { StyleSheet } from 'react-native'
import { COLORS } from '../../../../../utils/Constants/Colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 16,
        paddingBottom: 100,
    },
    driverSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        backgroundColor: '#F9F9F9',
        padding: 16,
        borderRadius: 8,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    locationTime: {
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
        color: COLORS.PRIMARY
    },
    driverInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#E34234',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    avatarImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    avatarText: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Inter-Bold',
    },
    driverName: {
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
        color: '#000',
        marginBottom: 4,
    },
    deliveryCount: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        color: '#666',
        marginBottom: 4,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starIcon: {
        width: 16,
        height: 16,
        marginRight: 2,
    },
    ratingText: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        color: '#666',
        marginLeft: 4,
    },
    vehicleIcon: {
        width: 40,
        height: 40,
    },
    locationSection: {
        backgroundColor: '#F9F9F9',
        borderRadius: 8,
        padding: 16,
        marginBottom: 24,
    },
    locationItem: {
        marginBottom: 12,
    },
    locationLabel: {
        fontSize: 12,
        fontFamily: 'Inter-Medium',
        color: '#E34234',
        marginBottom: 4,
    },
    locationText: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color: '#000',
    },
    coordinatesText: {
        fontSize: 12,
        color: '#666',
    },
    locationDivider: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 12,
    },
    detailsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        // marginBottom: 24,
    },
    detailItem: {
        width: '48%',
        marginBottom: 16,
    },
    detailLabel: {
        fontSize: 12,
        fontFamily: 'Inter-Medium',
        color: '#666',
        marginBottom: 4,
    },
    detailText: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color: '#000',
    },
    imageSection: {
        marginBottom: 24,
    },
    imageLabel: {
        fontSize: 12,
        fontFamily: 'Inter-Medium',
        color: '#666',
        marginBottom: 8,
    },
    imageGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    packageImage: {
        width: '48%',
        height: 120,
        borderRadius: 8,
    },
    mapLink: {
        backgroundColor: '#F0EFF2',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 24,
    },
    mapLinkText: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        color: '#E34234',
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
    },
    rejectButton: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginRight: 8,
    },
    rejectButtonText: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        color: '#666',
    },
    acceptButton: {
        flex: 1,
        backgroundColor: '#E34234',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginLeft: 8,
    },
    acceptButtonText: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        color: '#fff',
    },
    statusContainer: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.main,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        marginBottom:20
    },
    acceptedStatus: {
        backgroundColor: '#E8F5E9',
    },
    rejectedStatus: {
        backgroundColor: '#FFEBEE',
    },
    statusText: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        color:'white'
    },
})