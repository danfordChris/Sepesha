import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../utils/Constants/Colors";
import { FONTS } from "../../../utils/Constants/Fonts";
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({

container:{
    flex:1,
    justifyContent:'center',
    // alignSelf:'center',
    backgroundColor:'white',
    // alignItems:'center'
},
content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent:'center',
},
txtSignup:{
    fontSize:24,
    fontFamily:FONTS.SEMI_BOLD,
    textAlign:'center',
    marginTop:20,
    color:COLORS.black
},

txt:{
    fontSize:24,
    fontFamily:FONTS.SEMI_BOLD,
    marginTop:30,
    marginBottom:20,
    color:COLORS.black,
    textAlign:'center'
},
orContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orText: {
    textAlign: 'center',
    fontSize: 16,
    marginLeft:5,
    marginRight:5,
    color: COLORS.secColor,
    marginVertical: 20,
  },

  
})

export default styles;