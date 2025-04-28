import React, {useEffect, useState} from 'react';
import {
  Platform,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
  Alert,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import {AppDispatch, RootState} from '../../../redux/store/store';
import CustomHeader from '../../../components/CustomHeader';
import {COLORS} from '../../../utils/Constants/Colors';
import {IMAGE} from '../../../utils/Constants/Images';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';
import {createSupport, supportcontacts} from '../../../redux/slices/apiSlice';
import styles from './styles';
import PriorityDropdown from './PriorityDropdown';

const SupportSection: React.FC = ({navigation, route}: any) => {
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState(false);
  const [pdfAttachment, setPdfAttachment] = useState<{
    uri: string;
    name: string;
    type: string;
  } | null>(null);

  const [state, setState] = useState({
    name: '',
    message: '',
    priority: 'medium',
  });

  const dispatch = useDispatch<AppDispatch>();


 


  const selectPDF = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images], 
      });

      if (res && res[0]) {
        setSelected(true);
        setPdfAttachment({
          uri: res[0].uri,
          name: res[0].name || `support_${Date.now()}.pdf`,
          type: res[0].type || 'application/pdf',
        });
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled document picker');
      } else {
        console.error('Error picking document:', err);
        Alert.alert('Error', 'Failed to select PDF. Please try again.', [
          {text: 'OK'},
        ]);
      }
    }
  };

  const validateForm = () => {
    if (!state.name.trim()) {
      Alert.alert('Error', 'Subject is required');
      return false;
    }
    if (!state.message.trim()) {
      Alert.alert('Error', 'Message is required');
      return false;
    }
    return true;
  };

  const createSupportApi = async () => {
    if (!validateForm()) return;

    try {
      const formData = new FormData();
      formData.append('subject', state.name);
      formData.append('message', state.message); // Changed from state.name to state.message
      formData.append('priority', state.priority);
      formData.append('category', 'support');

      if (selected && pdfAttachment) {
        formData.append('attachment', {
          uri: pdfAttachment.uri,
          name: pdfAttachment.name,
          type: pdfAttachment.type,
        });
      }

      const result = await dispatch(createSupport({formData}));

      if (result?.payload?.status === true) {
        Alert.alert(
          'Success',
          result?.payload?.message || 'Support ticket created successfully!',
          [
            {
              text: 'OK',
              onPress: () => {
                setState({
                  name: '',
                  message: '',
                  priority: 'medium',
                });
                setPdfAttachment(null);
                setSelected(false);
                navigation.goBack();
              },
            },
          ],
        );
      } else {
        Alert.alert(
          'Error',
          result?.payload?.message || 'Failed to create support ticket',
          [{text: 'OK'}],
        );
      }
    } catch (error) {
      console.error('API Error:', error);
      Alert.alert(
        'Error',
        'Failed to submit support ticket. Please try again later.',
        [{text: 'OK'}],
      );
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: COLORS.white}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
      <View style={{flex: 1, paddingTop: insets.top}}>
        <CustomHeader
          btnBack={() => navigation.goBack()}
          text={'Support Ticket'}
          arrowImage={IMAGE.LEFT}
        />

        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          {/* PDF Attachment */}
          <TouchableOpacity
            onPress={selectPDF}
            style={styles.attachmentContainer}>
            <Image
              source={pdfAttachment ? IMAGE.pdfIcon : IMAGE.uploadIcon}
              style={styles.attachmentIcon}
            />
            <Text style={styles.attachmentText}>
              {pdfAttachment ? pdfAttachment.name : 'Attach PDF (optional)'}
            </Text>
            {pdfAttachment && (
              <Image source={IMAGE.check} style={styles.statusIcon} />
            )}
          </TouchableOpacity>

          {/* Input Fields */}
          <Text style={styles.inLineTxt}>Subject*</Text>
          <CustomInput
            value={state.name}
            autoCapitalize="sentences"
            onChangeText={text => setState(prev => ({...prev, name: text}))}
            placeholder="Type your subject"
            style={styles.halfInput}
          />

          <Text style={styles.inLineTxt}>Message*</Text>
          <CustomInput
            value={state.message}
            onChangeText={text => setState(prev => ({...prev, message: text}))}
            autoCapitalize="sentences"
            placeholder="Type your message"
            multiline
            numberOfLines={4}
            style={[styles.halfInput, {height: 120}]}
          />

          <Text style={styles.inLineTxt}>Priority*</Text>
          <PriorityDropdown
            selected={state.priority}
            onSelect={val => setState(prev => ({...prev, priority: val}))}
          />
          {/* <CustomInput
                        value={state.priority}
                        onChangeText={(text) => setState(prev => ({ ...prev, priority: text }))}
                        placeholder="Low/Medium/High"
                        style={styles.halfInput}
                    /> */}

          {/* Submit Button */}
          <CustomButton
            title="Submit"
            onPress={createSupportApi}
            style={{
              marginHorizontal: 20,
              backgroundColor: COLORS.main,
              marginTop: 50,
            }}
            textStyle={{color: COLORS.white}}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SupportSection;
