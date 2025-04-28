import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Image, TextInput,
  ScrollView, Modal, FlatList, KeyboardAvoidingView, Platform, Alert
} from 'react-native';
import CustomHeader from '../../../../../components/CustomHeader';
import { IMAGE } from '../../../../../utils/Constants/Images';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../../../../utils/Constants/Colors';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../redux/store/store';
import { getAllVehicles, getCategory, registerVehicle } from '../../../../../redux/slices/apiSlice';
import DocumentPicker from 'react-native-document-picker';
import { SCREEN_NAME } from '../../../../../utils/Constants/Screens';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../../../../components/Loader';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const colorOptions = {
  "white": "White",
  "black": "Black",
  "silver": "Silver",
  "gray": "Gray",
  "blue": "Blue",
  "red": "Red",
  "green": "Green",
  "yellow": "Yellow",
  "brown": "Brown",
  "gold": "Gold",
  "orange": "Orange",
  "purple": "Purple",
  "beige": "Beige",
  "maroon": "Maroon",
  "turquoise": "Turquoise",
  "pink": "Pink",
  "navy_blue": "Navy Blue",
  "teal": "Teal",
  "cream": "Cream",
  "charcoal": "Charcoal",
  "burgundy": "Burgundy",
  "ivory": "Ivory",
  "lime_green": "Lime Green",
  "magenta": "Magenta",
  "sky_blue": "Sky Blue"
};

const DocumentsAdd = ({ navigation,route }: any) => {

  const {screenType,dataValue} = route?.params || {}
  const dispatch = useDispatch<AppDispatch>();
  const getProfile = useSelector((state: RootState) => state.API.data.getProfileUserResposne);
  const inset = useSafeAreaInsets();
  const userData = useSelector((state: RootState) => state.user.userData);

  const loading = useSelector((state: RootState) => state.API.loading.registerVehicleLoading);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [imageType, setImageType] = useState('');
  const [licensce, setLicensce] = useState('');
  const [insurence, setInsurence] = useState('');
  const [licenseName, setLicenseName] = useState('');
  const [insuranceName, setInsuranceName] = useState('');

  const categoryList = useSelector((state: RootState) => state.API.data.getcategoriesResponse);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);

  const handleData = (data: any) => {
    console.log(data);
    setSelectedCategory(data);
  };

  useEffect(() => {
    dispatch(getAllVehicles);
    dispatch(getCategory());
  }, []);

  const [vehicleDetails, setVehicleDetails] = useState({
    plate_number: '',
    make: '',
    model: '',
    year: '',
    color: '',
  });

  const [selectedColor, setSelectedColor] = useState(vehicleDetails.color);
  const [modalVisible, setModalVisible] = useState(false);
  const [documents, setDocuments] = useState({
    licenseFront: null,
    vehicleInsurance: null,
  });

  const handleInputChange = (key: string, value: string) => {
    setVehicleDetails(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
    handleInputChange('color', color);
    setModalVisible(false);
  };

  const openDocumentPicker = async (type: string) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      if (res) {
        updateDocument(type, res[0].uri, res[0].name);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the document picker');
      } else {
        console.error('Error picking document:', err);
      }
    }
  };

  const updateDocument = (type: string, uri: string, name: string) => {
    console.log(type, 'type', uri);
    if (type === 'licenseFront') {
      setImageType('0');
      setLicensce(uri);
      setLicenseName(name);
      setDocuments((prev: any) => ({ ...prev, licenseFront: uri }));
    } else if (type === 'vehicleInsurance') {
      setImageType('1');
      setInsurence(uri);
      setInsuranceName(name);
      setDocuments((prev: any) => ({ ...prev, vehicleInsurance: uri }));
    }
  };

  const registerVehicleAPi = async () => {
    console.log(userData);
    const formData = new FormData();
    const token = await AsyncStorage.getItem('token');

    formData.append('plate_number', vehicleDetails.plate_number);
    formData.append('make', vehicleDetails.make);
    formData.append('model', vehicleDetails.model);
    formData.append('year', moment(selectedDate).format('yyyy'));
    formData.append('color', vehicleDetails.color);
    formData.append('created_by', 4);
    formData.append('fee_category_id', selectedCategory?.id);
    formData.append('owner_id',screenType=='register'?dataValue?.uid: userData?.data.uid);
    formData.append('driver_id',screenType=='register'?dataValue?.uid: userData?.data.uid);

    if(screenType=='register'){
      formData.append('is_verified', '1');
    }

    formData.append("attachments[0][id]", "1");
    formData.append("attachments[1][id]", "2");

    const licensceUri = licensce.replace('file://', '');
    const insurenceUri = insurence.replace('file://', '');

    formData.append("attachments[0][attachment]", {
      uri: licensceUri,
      name: licenseName || "vehicle_license.pdf",
      type: "application/pdf",
    });

    formData.append("attachments[1][attachment]", {
      uri: insurenceUri,
      name: insuranceName || "vehicle_insurance.pdf",
      type: "application/pdf",
    });

    console.log('formData', JSON.stringify(formData));
    try {
      const result = await dispatch(registerVehicle(formData));
      console.log(result, 'result');
    
      if (result.payload) {
        if(screenType=='register'){
          Alert.alert(
            "Success",
            "Vehicle registered successfully!",
            [{ text: "OK", onPress: () => navigation.navigate('BottomTab2') }]
          );
        }else{
          Alert.alert(
            "Success",
            "Vehicle registered successfully!",
            [{ text: "OK", onPress: () => navigation.goBack() }]
          );
        }
        
      }
    } catch (error) {
      console.error('Error in registerVehicleAPi:', error);
      Alert.alert(
        "Error",
        "Failed to register vehicle. Please try again.",
        [{ text: "OK" }]
      );
    }
  };

  const DocumentItem = ({ type, label, icon }) => {
    const documentUri = type === 'licenseFront' ? licensce : insurence;
    const documentName = type === 'licenseFront' ? licenseName : insuranceName;

    return (
      <TouchableOpacity
        style={styles.documentItem}
        onPress={() => openDocumentPicker(type)}
      >
        <View style={styles.documentInfo}>
          <Image source={icon} style={styles.documentIcon} />
          <View>
            <Text style={styles.documentText}>{label}</Text>
            {documentUri && (
              <Text style={styles.documentName} numberOfLines={1}>
                {documentName || (type === 'licenseFront' ? 'license.pdf' : 'insurance.pdf')}
              </Text>
            )}
          </View>
        </View>
        {documentUri ? (
          <Image source={IMAGE.check} style={styles.statusIcon} />
        ) : (
          <Image source={IMAGE.warning} style={[styles.statusIcon, styles.warningIcon]} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
         <DatePicker
                modal
                open={datePickerOpen}
                date={selectedDate}
                mode="date"
                onConfirm={(date) => {
                  setDatePickerOpen(false);
                  setSelectedDate(date);
                  handleInputChange('year', date.getFullYear().toString());
                }}
                onCancel={() => {
                  setDatePickerOpen(false);
                }}
                minimumDate={new Date(1900, 0, 1)}
                maximumDate={new Date()}
              />
      <View style={{ paddingTop: inset.top }}>
        <CustomHeader
          btnBack={() => navigation.goBack()}
          text={'Upload Documents'}
          arrowImage={IMAGE.LEFT}
        />

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
          >
            <View style={styles.vehicleInfoContainer}>
              <Text style={styles.sectionTitle}>Vehicle Details</Text>

              <TouchableOpacity
                style={styles.dropdownContainer}
                onPress={() => navigation.navigate(SCREEN_NAME.LuggageScreen, {
                  type: 'DocAdd',
                  handleData: handleData
                })}
              >
                <Text style={styles.dropdownText}>
                  {selectedCategory ? selectedCategory?.name : 'Select Category'}
                </Text>
              </TouchableOpacity>

              <TextInput
                style={styles.input}
                value={vehicleDetails.plate_number}
                onChangeText={(text) => handleInputChange('plate_number', text)}
                placeholder="Plate Number"
                placeholderTextColor={'black'}
              />

              <TextInput
                style={styles.input}
                value={vehicleDetails.make}
                onChangeText={(text) => handleInputChange('make', text)}
                placeholder="Make"
                placeholderTextColor={'black'}
              />

              <TextInput
                style={styles.input}
                value={vehicleDetails.model}
                onChangeText={(text) => handleInputChange('model', text)}
                placeholder="Model"
                placeholderTextColor={'black'}
              />
              <TouchableOpacity
                style={styles.input}
                onPress={() => setDatePickerOpen(true)}
              >
                <Text style={{ color: 'black' }}>
                  {vehicleDetails.year || 'Select Year'}
                </Text>
              </TouchableOpacity>

           
              {/* <TextInput
                style={styles.input}
                value={vehicleDetails.year}
                onChangeText={(text) => handleInputChange('year', text)}
                placeholder="Year"
                keyboardType="numeric"
                placeholderTextColor={'black'}
              /> */}

              <TouchableOpacity style={styles.dropdownContainer} onPress={() => setModalVisible(true)}>
                <Text style={styles.dropdownText}>
                  {selectedColor ? colorOptions[selectedColor] : 'Select Color'}
                </Text>
              </TouchableOpacity>

              <Modal
                transparent
                visible={modalVisible}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
              >
                <TouchableOpacity
                  style={styles.modalOverlay}
                  activeOpacity={1}
                  onPress={() => setModalVisible(false)}
                >
                  <View style={styles.modalContainer}>
                    <FlatList
                      data={Object.entries(colorOptions)}
                      keyExtractor={(item) => item[0]}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          style={styles.modalItem}
                          onPress={() => handleSelectColor(item[0])}
                        >
                          <Text style={styles.modalItemText}>{item[1]}</Text>
                        </TouchableOpacity>
                      )}
                    />
                  </View>
                </TouchableOpacity>
              </Modal>
            </View>

            <View style={styles.content}>
              <Text style={styles.sectionTitle}>Required Documents</Text>

              <DocumentItem
                type="licenseFront"
                label="Driving License"
                icon={IMAGE.dl}
              />

              <DocumentItem
                type="vehicleInsurance"
                label="Motor Vehicle Insurance"
                icon={IMAGE.dl}
              />
            </View>

            <View style={styles.bottomButtons}>
              {/* <TouchableOpacity style={styles.skipButton} onPress={() => registerVehicleAPi()}>
                <Text style={styles.skipButtonText}>Skip for Now</Text>
              </TouchableOpacity> */}

              <TouchableOpacity style={styles.continueButton} onPress={() => registerVehicleAPi()}>
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
      {loading && <Loader />}
    </View>
  );
};

export default DocumentsAdd;