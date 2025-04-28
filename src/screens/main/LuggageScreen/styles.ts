import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../utils/Constants/Colors";
import { FONTS } from "../../../utils/Constants/Fonts";
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollView: {
        padding: 16,
    },
    cargoItem: {
        backgroundColor: '#FCFCFC',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderWidth:1,
        borderColor:COLORS.borderColorGrey,
        
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 3,
        // elevation: 3,
    },
    selectedCargoItem: {
        borderColor: COLORS.main, 
        borderWidth: 1,
    },
    cargoInfo: {
        flexDirection: 'row',
        // alignItems: 'center',
    },
    cargoIcon: {
        width: 40,
        height: 40,
        marginRight: 12,
    },
    cargoDetails: {
        flex: 1,
    },
    cargoTitle: {
        fontSize: 16,
        fontFamily: FONTS.MEDIUM,
        marginBottom: 4,
    },
    cargoCapacity: {
        fontSize: 14,
        color: 'black',
        fontFamily: FONTS.MEDIUM,
        marginBottom: 2,
    },
    cargoPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.main, // Adjust color as needed
        marginTop: 5,
    },
    cargoDescription: {
        fontSize: 14,
        color: '#666',
        fontFamily: FONTS.REGULAR,
    },
    proofContainer: {
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#FE765B',
        padding: 16,
        marginBottom:25,
        // height:125,
        // marginHorizontal:10,
        // marginVertical: 16,
    },
    cameraIcon: {
        width: 24,
        height: 24,
        // marginRight: 8,
        tintColor: '#666',
    },
    proofText: {
        fontSize: 14,
        color: '#666',
        fontFamily: FONTS.REGULAR,
    },
    pricingContainer: {
        backgroundColor: '#FBFBFB',
        borderRadius: 8,
        borderWidth:1,
        borderColor:COLORS.borderColorGrey,
        padding: 16,
        // marginBottom: 80,
    },
    insput: {
        minHeight: 100,
        marginBottom:15,
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.LIGHT_GREY,
        borderRadius: 8,
    },
    insput1: {
        minHeight: 40,
        marginBottom:10,
        borderWidth: 1,
        borderColor: COLORS.LIGHT_GREY,
        borderRadius: 8,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    priceLabel: {
        fontSize: 14,
        color: '#666',
        fontFamily: FONTS.REGULAR,
    },
    priceValue: {
        fontSize: 14,
        fontFamily: FONTS.MEDIUM,
    },
    totalRow: {
        marginTop: 8,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    totalLabel: {
        fontSize: 16,
        fontFamily: FONTS.MEDIUM,
    },
    totalValue: {
        fontSize: 16,
        fontFamily: FONTS.MEDIUM,
        color: 'black',
    },
    requestButton: {
        // position: 'absolute',
        marginTop: 10,
        backgroundColor: COLORS.main,
        borderRadius: 8,
        padding: 16,
        // marginBottom: 80,
    },
    requestButtonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: FONTS.MEDIUM,
        textAlign: 'center',
    },
});

export default styles;