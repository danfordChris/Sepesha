import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../utils/Constants/Colors';
import { FONTS } from '../../../../../utils/Constants/Fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    title: {
        fontSize: 32,
        marginTop:100,
        fontFamily:FONTS.BOLD,
        color: COLORS.black,
    },
    subtitle: {
        fontSize: 14,
        color: '#6C6C70',
        fontFamily:FONTS.REGULAR,

        marginTop: 5,
        marginBottom: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        marginTop:40,
        flexWrap: 'wrap',
        // marginLeft:20,
        marginBottom:60,
        // justifyContent: 'center',
        alignItems:'center',
        gap: 15,
    },
    vehicleBox: {
        width: '47%',
        height: 150,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.LIGHT_GREY,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        
    },
    selectedVehicleBox: {
        borderColor: COLORS.main,
    },
    vehicleImage: {
        width: 40,
        height: 40,
        tintColor: COLORS.GREY,
        resizeMode:'contain'
    },
    selectedVehicleImage: {
        tintColor: COLORS.main,
    },
    vehicleText: {
        fontSize: 14,
        color: COLORS.GREY,
        marginTop: 8,
    },
    selectedVehicleText: {
        color: COLORS.main,
        fontWeight: 'bold',
    },
    nextButton: {
        width: '100%',
        padding: 15,
        backgroundColor: COLORS.main,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,
    },
    disabledButton: {
        backgroundColor: COLORS.LIGHT_GREY,
    },
    nextButtonText: {
        fontSize: 16,
        color: COLORS.white,
        fontWeight: 'bold',
    },
});

export default styles;
