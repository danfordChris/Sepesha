import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../utils/Constants/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        // paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.black,
        marginBottom: 10,
    },
    vehicleInfoContainer:{
        marginHorizontal:20,
    },
    content:{
        marginHorizontal:20,
        marginTop:10

    },
    input: {
        fontSize: 14,
        color: COLORS.black,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.borderColorGrey,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginBottom: 10,
    },
    dropdownContainer: {
        borderWidth: 1,
        borderColor: COLORS.borderColorGrey,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        padding: 12,
        marginBottom: 10,
    },
    dropdownText: {
        fontSize: 14,
        color: COLORS.black,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        padding: 15,
        elevation: 5,
    },
    modalItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.GREY,
    },
    modalItemText: {
        fontSize: 16,
        color: COLORS.black,
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal:20
    },
    documentItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#F1F5F6',
        borderRadius: 10,
        marginBottom: 10,
    },
    documentInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    documentIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    documentText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.black,
    },
    statusIcon: {
        width: 25,
        height: 25,
        resizeMode:'contain'
    },
    warningIcon: {
        tintColor: COLORS.main,
    },
    skipButton: {
        flex: 1,
        padding: 15,
        backgroundColor: COLORS.GREY,
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 10,
    },
    skipButtonText: {
        fontSize: 16,
        color: COLORS.white,
        fontWeight: 'bold',
    },
    continueButton: {
        flex: 1,
        padding: 15,
        backgroundColor: COLORS.main,
        alignItems: 'center',
        borderRadius: 10,
    },
    continueButtonText: {
        fontSize: 16,
        color: COLORS.white,
        fontWeight: 'bold',
    },
});

export default styles;
