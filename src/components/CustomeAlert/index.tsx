import {Alert} from 'react-native';

const CustomAlert = ({message}: any) => {
  Alert.alert('Sepesha', message, [{text: 'OK'}], {
    cancelable: false,
  });
};

export default CustomAlert;
