import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../utils/Constants/Colors";
import { FONTS } from "../../../utils/Constants/Fonts";
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    progressBarContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    progressBar: {
        height: 8,
        borderRadius: 4,
        backgroundColor:'white'
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    styletxt:{color:'grey',fontFamily:FONTS.MEDIUM,fontSize:14,textAlign:'center',marginTop:25,marginBottom:20},
    txtSignup:{
        fontSize:24,
        fontFamily:FONTS.SEMI_BOLD,
        textAlign:'center',
        marginTop:20,
        color:COLORS.black
    },
    resendCodeContainer: {
        alignItems: 'center',
        marginTop: 20,
      },
      resendCodeText: {
        fontSize: 14,
        fontFamily: FONTS.SEMI_BOLD,
        color: COLORS.main,
      },
      resendCodeIn: {
        fontSize: 14,
        fontFamily: FONTS.SEMI_BOLD,
        color: COLORS.main,
      },
      secondsText: {
        fontSize: 14,
        fontFamily: FONTS.SEMI_BOLD,
        color: COLORS.main,
      },
    txt:{
        fontSize:16,
        fontFamily:FONTS.SEMI_BOLD,
        marginTop:30,
        marginBottom:20,
        color:COLORS.black
    },
    




})

export default styles;