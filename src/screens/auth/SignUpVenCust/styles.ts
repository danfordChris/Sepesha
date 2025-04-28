import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/Constants/Colors';
import { FONTS } from '../../../utils/Constants/Fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  txt: {
    fontSize: 24,
    fontFamily: FONTS.MEDIUM,
    // marginBottom: 20,
    textAlign:'center'
  },
  txt1: {
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
    marginBottom: 20,
    textAlign:'center',
    color:'#6C6C70'
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  orText: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.GREY,
    marginHorizontal: 10,
  },
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    height:50,
    backgroundColor:'#FBFBFB',
    marginTop:20
  },
  userTypeButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.borderColorGrey,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  selectedUserType: {
    backgroundColor: COLORS.main,
    borderColor: COLORS.borderColorGrey,
  },
  userTypeText: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.black,
    fontSize: 14,
  },
  selectedUserTypeText: {
    color: COLORS.white,
  },
   tabsContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor:'#FBFBFB',
    marginHorizontal:20,
    height:55,
    borderWidth:1,
    borderRadius:12,
    borderColor:COLORS.borderColorGrey,
    marginTop: 50,
    paddingHorizontal:10,
    // marginHorizontal: 20,
    alignItems:'center'
  },
  tab: {
    // paddingVertical: 10,
    width:'50%',
    height:40,
    justifyContent:'center',
    alignItems:'center',
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
});

export default styles;

