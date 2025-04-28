import { StyleSheet } from "react-native";
import { FONTS } from "../../../utils/Constants/Fonts";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F9F9F9",
    } ,
    listContent: {
      flexGrow: 1,
  },
  notificationList: {
    marginHorizontal:20,
},
notificationItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
},
headerTitle: {
    fontSize: 20,
    // marginLeft: 16,
    marginBottom:20,
    fontFamily:FONTS.BOLD
  },
notificationTitle: {
    color: 'black',
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: 16,
},
notificationTime: {
    color: '#888',
    fontFamily: FONTS.REGULAR,
    fontSize: 10,
    // marginTop: 5,
},
notificationDescription: {
    color: 'black',
    fontFamily: FONTS.REGULAR,
    fontSize: 14,
    marginTop: 10,
},
  
   
   
  });
  
  export default styles;