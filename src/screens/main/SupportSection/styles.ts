// style.ts
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { FONTS } from '../../../utils/Constants/Fonts';
import { COLORS } from '../../../utils/Constants/Colors';




const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
    // margin: 20,
  },
  txtHeading: {
    fontFamily: FONTS.BOLD,
    color: COLORS.black,
    fontSize: 30,
    marginTop: 100,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  txtHeading1: {
    fontFamily: FONTS.SEMI_BOLD,
    color: COLORS.black,
    fontSize: 14,
    // marginTop: 100,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  txtLight: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.LIGHT_GREY,
    fontSize: 14,
    marginTop: 5,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  btnStyle: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.borderColorGrey,
    alignSelf:'center',
    marginTop: Platform.OS == 'ios' ? 20 : 0
  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:Dimensions.get('screen').width-40,
    alignSelf:'center',
    alignItems: 'center',
    marginTop:10,
  },
  orText: {
    textAlign: 'center',
    // 
    fontSize: 14,
    marginLeft:5,
    marginRight:5,
    color: COLORS.black,
    marginVertical: 20,
  },
  inLineTxt:{
    fontFamily:FONTS.SEMI_BOLD,fontSize:16,color:COLORS.black,marginLeft:20,
   paddingVertical:5
  },
  halfInput: {
    alignSelf:'center',
    width:Dimensions.get('screen').width-40,
    // marginTop:5

  },
  txtSignup:{fontFamily:FONTS.LIGHT,color:'#3B4054',textAlign:'center',marginTop:20,marginBottom:30},
  txtSignup1:{fontFamily:FONTS.SEMI_BOLD,color:COLORS.black,fontSize:18},
  forgetTxt:{marginBottom:60,fontFamily:FONTS.SEMI_BOLD,color:COLORS.black,fontSize:16,marginTop:10,alignSelf:'flex-end',marginRight:20},
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
    gap: 8,
    marginHorizontal:20,
    marginTop: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 2,
  },
  checkboxChecked: {
    backgroundColor: COLORS.main,
  },
  termsText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  termsLink: {
    color: COLORS.black,
    fontFamily:FONTS.SEMI_BOLD
    // textDecorationLine: 'underline',
  },
  btnBack:{
    position: 'absolute',
    left: 15,
    height:37,
    width:37,
    zIndex: 10,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: COLORS.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
},
boxPicture:{
   
        width: 150, height: 150, borderRadius: 100,marginTop:20, shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        backgroundColor:'white',
        justifyContent:'center',
        alignSelf:'center',
        shadowRadius: 1.84,
        elevation: 5,
        alignItems:'center'
    
},
attachmentContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: COLORS.LIGHT_GREY,
  borderRadius: 8,
  padding: 15,
  marginHorizontal: 20,
  marginTop: 20,
  marginBottom: 10,
},
attachmentIcon: {
  width: 24,
  height: 24,
  marginRight: 10,
  tintColor: COLORS.main,
},
attachmentText: {
  flex: 1,
  color: COLORS.LIGHT_GREY,
  fontFamily: FONTS.REGULAR,
  fontSize: 16,
},
statusIcon: {
  width: 20,
  height: 20,
  tintColor: COLORS.main,
},
submitButton: {
  marginHorizontal: 20,
  backgroundColor: COLORS.main,
  marginTop: 30,
  marginBottom: 20,
  borderRadius: 8,
  paddingVertical: 15,
},
submitButtonText: {
  color: COLORS.white,
  textAlign: 'center',
  fontFamily: FONTS.REGULAR,
  fontSize: 16,
},

});

export default styles;
