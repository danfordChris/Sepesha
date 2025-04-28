import { Dimensions, StyleSheet } from "react-native";
import { FONTS } from "../../../../utils/Constants/Fonts";

const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({

container:{
    flex:1,
    // alignSelf:'center',
    backgroundColor:'white',
    // alignItems:'center'
},

content: {
    padding: 16,
  },
  dateSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  arrow: {
    width: 24,
    height: 24,
    tintColor: '#666',
  },
  dateRange: {
    fontSize: 16,
    fontFamily: FONTS.MEDIUM,
    marginHorizontal: 16,
  },
  balanceCard: {
    backgroundColor: '#FFD7CF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#666',
    fontFamily: FONTS.REGULAR,
  },
  balanceDate: {
    fontSize: 14,
    color: '#666',
    fontFamily: FONTS.REGULAR,
    marginTop: 4,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 8,
  },
  currency: {
    fontSize: 16,
    fontFamily: FONTS.MEDIUM,
    marginRight: 4,
  },
  amount: {
    fontSize: 32,
    fontFamily: FONTS.BOLD,
  },
  payoutInfo: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: FONTS.REGULAR,
  },
  statsContainer: {
    marginBottom: 24,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    fontFamily: FONTS.REGULAR,
  },
  statValue: {
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
  },
  detailsButton: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  detailsText: {
    fontSize: 14,
    color: '#007AFF',
    fontFamily: FONTS.MEDIUM,
    textDecorationLine: 'underline',
  },



  
})

export default styles;