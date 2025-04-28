import { StyleSheet } from 'react-native';
import { COLORS } from '../../../utils/Constants/Colors';
import { FONTS } from '../../../utils/Constants/Fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      scrollContent: {
        padding: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 24,
      },
      nameContainer: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 16,
      },
      halfInput: {
        flex: 1,
      },
      termsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 24,
        gap: 8,
        marginTop: 16,
      },
      txtHeading1: {
        fontFamily: FONTS.SEMI_BOLD,
        color: COLORS.black,
        fontSize: 14,
        // marginTop: 100,
        justifyContent: 'center',
        alignSelf: 'center'
      },
      boxPicture: {

        width: 120, height: 120, borderRadius: 100, marginTop: 0, shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowRadius: 1.84,
        elevation: 5,
        alignItems: 'center'
    
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
        backgroundColor: '#E34234',
      },
      termsText: {
        flex: 1,
        fontSize: 14,
        color: '#666',
      },
      termsLink: {
        color: '#E34234',
        textDecorationLine: 'underline',
      },
      button: {
        backgroundColor: '#E34234',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
      },
      buttonDisabled: {
        backgroundColor: '#ccc',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
      },
      documentItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#F1F5F6',
        borderRadius: 10,
        marginBottom: 10,
    },
    statusIcon: {
      width: 25,
      height: 25,
      resizeMode:'contain'
  },
  warningIcon: {
      tintColor: COLORS.main,
  },
    documentInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    documentIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    documentText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.black,
    },
});

export default styles;

