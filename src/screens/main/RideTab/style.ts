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
emptyContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'red'
  // marginTop: 100, // Adjust as needed
},
emptyText: {
  fontSize: 16,
  color: 'black',
  fontFamily: 'Roboto-Regular', // Use your font constant
  textAlign: 'center',
  marginTop: 20,
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
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor:'#FBFBFB',
    height:55,
    borderWidth:1,
    borderRadius:12,
    borderColor:COLORS.borderColorGrey,
    marginTop: 20,
    marginBottom:20,
    marginHorizontal: 20,
    padding:5,
    alignItems:'center'
  },
  tab: {
    // paddingVertical: 10,
    height:40,
    justifyContent:'center',
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: COLORS.main,
  },
  tabText: {
    color: '#6C6C70',
    fontFamily: FONTS.MEDIUM,
  },
  activeTabText: {
    color: '#fff',
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
  rideContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rideHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    fontFamily: FONTS.MEDIUM,
    fontSize: 16,
    color: '#000',
  },
  phoneNumber: {
    fontFamily: FONTS.REGULAR,
    fontSize: 14,
    color: '#666',
  },
  vehicleImage: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
  },
  rideDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  costSection: {
    flex: 1,
  },
  dateSection: {
    flex: 1,
  },
  label: {
    fontFamily: FONTS.REGULAR,
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  cost: {
    fontFamily: FONTS.MEDIUM,
    fontSize: 16,
    color: '#000',
  },
  date: {
    fontFamily: FONTS.REGULAR,
    fontSize: 14,
    color: '#000',
  },
  locationContainer: {
    marginTop: 8,
  },
  locationPoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  pickupDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E34234',
    marginRight: 8,
  },
  dropoffDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    marginRight: 8,
  },
  locationLine: {
    width: 2,
    height: 20,
    backgroundColor: '#ddd',
    marginLeft: 4,
    marginVertical: 4,
  },
  locationText: {
    fontFamily: FONTS.REGULAR,
    fontSize: 14,
    color: '#000',
  },
  duration: {
    fontFamily: FONTS.REGULAR,
    fontSize: 12,
    color: COLORS.main,
    marginTop: 8,
  },
  listContainer: {
    padding: 16,
    paddingBottom:120
  },
  map: {
    width: '100%',
    height:180
    // height: '30%',
  },

  statusContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.main,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    marginBottom:20
},
acceptedStatus: {
    backgroundColor: '#E8F5E9',
},
rejectedStatus: {
    backgroundColor: '#FFEBEE',
},
statusText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color:'white'
},
  
})

export default styles;