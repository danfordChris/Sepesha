import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../utils/Constants/Colors";
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({

container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'red',
    alignItems:'center'
}
 , progressContainer: {
    width: '40%',
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginTop: 20,
    position:'absolute',bottom:120,
    overflow: 'hidden',
},
progressBar: {
    height: '100%',
    backgroundColor: COLORS.white, // Red color matching your image
    borderRadius: 5,
}
  
})

export default styles;