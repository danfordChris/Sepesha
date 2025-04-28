import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../../utils/Constants/Colors";
import { FONTS } from "../../../utils/Constants/Fonts";
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({

container:{
    flex:1,
    // alignSelf:'center',
    backgroundColor:'white',
    // alignItems:'center'
},
map: {
    // flex: 1,
    height:700,
    width:'100%'
  },
  searchContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
  rideOptionsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  rideTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rideSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
  },
  rideTypes: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 10,
  },
  rideType: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    minWidth: 80,
    alignItems: 'center',
  },
  selectedRideType: {
    backgroundColor: '#22C55E',
  },
  rideTypeText: {
    fontSize: 16,
    fontWeight: '500',
  },
  calendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  calendarText: {
    marginLeft: 12,
  },
  calendarTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  calendarSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },

  
})

export default styles;