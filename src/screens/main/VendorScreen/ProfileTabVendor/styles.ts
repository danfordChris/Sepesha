import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({

container:{
    flex:1,
    // alignSelf:'center',
    backgroundColor:'white',
    // alignItems:'center'
},
itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#FBFBFB',
    height: 50,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10, // Optional: to add space between items
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  personImage: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  arrowImage: {
    width: 20,
    height: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd', // You can change the color of the separator
    marginHorizontal: 20,
  },



  
})

export default styles;