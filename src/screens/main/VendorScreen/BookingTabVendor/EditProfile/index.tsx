import React, { useState, useEffect } from 'react';
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
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import ImageCropPicker from 'react-native-image-crop-picker';
import { AppDispatch, RootState } from '../../../../../redux/store/store';
import { COLORS } from '../../../../../utils/Constants/Colors';
import CustomButton from '../../../../../components/CustomButton';
import CustomInput from '../../../../../components/CustomInput';
import styles from './styles';
import { IMAGE } from '../../../../../utils/Constants/Images';
import CustomHeader from '../../../../../components/CustomHeader';
import { getProfileUser, updateProfile } from '../../../../../redux/slices/apiSlice';
import PhoneNumberInput from '../../../../../components/PhoneNumberInput';
import CountryCodePicker from '../../../../../components/CountryCodePicker';
import CityDropdown from '../../../LuggageScreen/CitySelect';
import DatePicker from 'react-native-date-picker';

const EditProfile: React.FC = ({ navigation, route }: any) => {
    const insets = useSafeAreaInsets();
    const [selected, setSelected] = useState(false);
    const profileData = useSelector((state: RootState) => state.API.data.getProfileUserResposne);
    const userData = useSelector((state: RootState): any => state.user.userData);
    const [loading, setLoading] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const userRole = profileData?.data?.[0]?.role || userData?.data?.role || 'customer';

    const cities = [
        { region_id: '1', name: 'Dar es salaam' },
        { region_id: '2', name: 'Arusha' },
        { region_id: '3', name: 'Shinyanga' },
        { region_id: '4', name: 'Morogoro' },
        { region_id: '5', name: 'Mbeya' },
        { region_id: '6', name: 'Iringa' },
        { region_id: '7', name: 'Geita' },
        { region_id: '8', name: 'Mwanza' },
        { region_id: '9', name: 'Kilimanjaro' },
        { region_id: '10', name: 'Pwani' },
        { region_id: '11', name: 'Lindi' },
        { region_id: '12', name: 'Mtwara' },
        { region_id: '13', name: 'Tanga' },
        { region_id: '14', name: 'Manyara' },
        { region_id: '15', name: 'Tabora' },
        { region_id: '16', name: 'Mara' },
        { region_id: '17', name: 'Kigoma' },
        { region_id: '18', name: 'Rukwa' },
        { region_id: '19', name: 'Simiyu' },
        { region_id: '20', name: 'Unguja' },
        { region_id: '21', name: 'Pemba' },
        { region_id: '22', name: 'Songea' },
        { region_id: '23', name: 'Kagera' },
        { region_id: '24', name: 'Singida' },
        { region_id: '25', name: 'Dodoma' },
        { region_id: '27', name: 'Katavi' },
        { region_id: '28', name: 'Ruvuma' },
    ];

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        selectedCode: '+255',
        modalVisible: false,
        businessDescription: '',
        licenseNumber: '',
    });

    const [selectedRegionId, setSelectedRegionId] = useState<string>('');
    const [selectedCityName, setSelectedCityName] = useState('');
    const [datePickerOpen, setDatePickerOpen] = useState(false);
    const [licenseExpiryDate, setLicenseExpiryDate] = useState<Date>(new Date());
    const [image, setImage] = useState<string | null>(null);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (profileData?.data?.[0]) {
            const profile = profileData.data[0];
            
            setState({
                firstName: profile.name || '',
                lastName: profile.sname || '',
                email: profile.email || '',
                phoneNumber: profile.phone || '',
                selectedCode: profile.phonecode ? `+${profile.phonecode}` : '+255',
                modalVisible: false,
                businessDescription: profile.business_description || '',
                licenseNumber: profile.driver_license_number || '',
            });

            setImage(profile.profile_photo || null);

            // Handle region initialization
            if (profile.region_id) {
                const regionId = profile.region_id.toString();
                setSelectedRegionId(regionId);
                const city = cities.find(c => c.region_id === regionId);
                if (city) {
                    setSelectedCityName(city.name);
                }
            }

            if (profile.license_expiry_date) {
                setLicenseExpiryDate(new Date(profile.license_expiry_date));
            }
        }
    }, [profileData]);

    const handleRegionSelect = (regionId: string, name: string) => {
        setSelectedRegionId(regionId);
        setSelectedCityName(name);
    };

    const openCountryPicker = () => {
        setState(prev => ({ ...prev, modalVisible: true }));
    };

    const handleSelectCode = (code: string) => {
        setState(prev => ({
            ...prev,
            selectedCode: code,
            modalVisible: false,
        }));
    };

    const OpenGallery = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setSelected(true);
            setImage(image.path);
        }).catch(error => {
            console.log(error);
            if (error.message === 'User did not grant library permission.') {
                Alert.alert(
                    'Gallery Permission Required',
                    'Please allow Gallery access to upload a picture. You can adjust this in your device settings.',
                    [
                        { text: 'Settings', onPress: () => Linking.openSettings() },
                        { text: 'OK' },
                    ]
                );
            }
        });
    };

    const OpenCamera = () => {
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setSelected(true);
            setImage(image.path);
        }).catch(error => {
            console.log(error);
            if (error.message === 'User did not grant camera permission.') {
                Alert.alert(
                    'Camera Permission Required',
                    'Please allow camera access to upload a picture. You can adjust this in your device settings.',
                    [
                        { text: 'Settings', onPress: () => Linking.openSettings() },
                        { text: 'OK' },
                    ]
                );
            }
        });
    };

    const showImagePickerOptions = () => {
        Alert.alert(
            'Select Image',
            'Choose an option to upload a profile picture',
            [
                { text: 'Open Gallery', onPress: OpenGallery },
                { text: 'Open Camera', onPress: OpenCamera },
                { text: 'Cancel', style: 'cancel' }
            ]
        );
    };

    const handleDateConfirm = (date: Date) => {
        setDatePickerOpen(false);
        setLicenseExpiryDate(date);
    };

    const handleDateCancel = () => {
        setDatePickerOpen(false);
    };

    const handleSave = async () => {
        if (!state.firstName.trim()) {
            Alert.alert('Validation Error', 'First name is required.');
            return;
        }

        setLoading(true);
        try {
            const formData = new FormData();
            const userId = userData?.data?.uid || '';

            // Only append fields that have values
            if (state.firstName) formData.append('first_name', state.firstName);
            if (state.lastName) formData.append('last_name', state.lastName);
            if (state.email) formData.append('email', state.email);
            if (state.phoneNumber) formData.append('phone', state.phoneNumber);
            if (state.selectedCode) formData.append('phonecode', state.selectedCode.replace('+', ''));
            
            // Append empty values for required fields if not provided
            formData.append('middle_name', '');
            
            if (selectedRegionId) {
                formData.append('region_id', selectedRegionId);
            }

            if (userRole === 'vendor' && state.businessDescription) {
                formData.append('business_description', state.businessDescription);
            } else {
                formData.append('business_description', '');
            }

            if (userRole === 'driver') {
                formData.append('licence_number', state.licenseNumber || '');
                formData.append('licence_expiry', licenseExpiryDate ? licenseExpiryDate.toISOString().split('T')[0] : '');
            } else {
                formData.append('licence_number', '');
                formData.append('licence_expiry', '');
            }

            if (image) {
                const uniqueImageName = `profile_${Date.now()}.jpg`;
                formData.append('profile_photo', {
                    uri: image,
                    name: uniqueImageName,
                    type: 'image/jpg',
                });
            }

            const result = await dispatch(updateProfile({ userId, formData }));

            if (result?.payload?.status === true) {
                await dispatch(getProfileUser(userId));
                Alert.alert('Success', 'Profile updated successfully');
                navigation.goBack();
            } else {
                Alert.alert('Error', result?.payload?.message || 'Failed to update profile');
            }
        } catch (error) {
            console.log('Profile update error:', error);
            Alert.alert('Error', 'An error occurred while updating profile');
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: COLORS.white }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        >
            <View style={{ flex: 1, paddingTop: insets.top }}>
                <CustomHeader
                    btnBack={() => navigation.goBack()}
                    text={'Edit Profile'}
                    arrowImage={IMAGE.LEFT}
                />

                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <TouchableOpacity onPress={showImagePickerOptions}>
                        <View style={styles.boxPicture}>
                            <Image
                                resizeMode="cover"
                                style={{
                                    width: image ? 150 : 60,
                                    height: image ? 150 : 60,
                                    borderRadius: image ? 100 : 30,
                                }}
                                source={
                                    image
                                        ? { uri: image }
                                        : profileData?.data?.[0]?.profile_photo
                                            ? { uri: profileData.data[0].profile_photo }
                                            : IMAGE.PP
                                }
                                onError={() => setImage(null)}
                            />
                        </View>
                    </TouchableOpacity>

                    <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 10 }}>
                        <Image style={{ width: 20, height: 20, marginRight: 10 }} source={IMAGE.cam} />
                        <Text style={styles.txtHeading1}>Upload a Profile Picture</Text>
                    </View>

                    <View style={styles.nameContainer}>
                        <CustomInput
                            value={state.firstName}
                            onChangeText={text => setState(prev => ({ ...prev, firstName: text }))}
                            placeholder="First Name"
                            style={styles.halfInput}
                        />
                        <CustomInput
                            value={state.lastName}
                            onChangeText={text => setState(prev => ({ ...prev, lastName: text }))}
                            placeholder="Last Name"
                            style={styles.halfInput}
                        />
                    </View>

                    <CustomInput
                        value={state.email}
                        onChangeText={text => setState(prev => ({ ...prev, email: text }))}
                        placeholder="Email Address"
                        keyboardType="email-address"
                        style={{ marginBottom: 15, marginHorizontal: 20 }}
                        autoCapitalize="none"
                    />

                    <View style={{ marginHorizontal: 20 }}>
                        <PhoneNumberInput
                            selectedCode={state.selectedCode}
                            phoneNumber={state.phoneNumber}
                            setPhoneNumber={(phoneNumber: string) => 
                                setState(prev => ({ ...prev, phoneNumber }))
                            }
                            openCountryPicker={openCountryPicker}
                        />

                        <CountryCodePicker
                            modalVisible={state.modalVisible}
                            setModalVisible={(modalVisible: boolean) => 
                                setState(prev => ({ ...prev, modalVisible }))
                            }
                            handleSelectCode={handleSelectCode}
                        />
                        
                        <CityDropdown
                            cities={cities}
                            selectedRegionId={selectedRegionId}
                            selectedCityName={selectedCityName}
                            onSelect={handleRegionSelect}
                        />
                    </View>

                    {userRole === 'vendor' && (
                        <CustomInput
                            value={state.businessDescription}
                            onChangeText={text => setState(prev => ({ ...prev, businessDescription: text }))}
                            placeholder="Business Description"
                            multiline
                            numberOfLines={3}
                            style={{ marginBottom: 15, marginHorizontal: 20, height: 80 }}
                        />
                    )}

                    {userRole === 'driver' && (
                        <>
                            <CustomInput
                                value={state.licenseNumber}
                                onChangeText={text => setState(prev => ({ ...prev, licenseNumber: text }))}
                                placeholder="Driver License Number"
                                style={{ marginBottom: 15, marginHorizontal: 20 }}
                            />

                            <TouchableOpacity 
                                onPress={() => setDatePickerOpen(true)}
                                style={{ 
                                    marginHorizontal: 20, 
                                    marginBottom: 15,
                                    padding: 15,
                                    borderWidth: 1,
                                    borderColor: COLORS.LIGHT_GREY,
                                    borderRadius: 5
                                }}
                            >
                                <Text style={{ 
                                    color: licenseExpiryDate ? COLORS.black : COLORS.LIGHT_GREY,
                                    fontSize: 16
                                }}>
                                    {licenseExpiryDate 
                                        ? `License Expiry: ${licenseExpiryDate.toLocaleDateString()}`
                                        : 'Select License Expiry Date'}
                                </Text>
                            </TouchableOpacity>

                            <DatePicker
                                modal
                                open={datePickerOpen}
                                date={licenseExpiryDate || new Date()}
                                mode="date"
                                minimumDate={new Date()}
                                onConfirm={handleDateConfirm}
                                onCancel={handleDateCancel}
                                theme={Platform.OS === 'android' ? 'light' : 'auto'}
                            />
                        </>
                    )}

                    <CustomButton
                        title={loading ? "Saving..." : "Save"}
                        onPress={handleSave}
                        style={{ 
                            marginHorizontal: 20, 
                            backgroundColor: loading ? COLORS.LIGHT_GREY : COLORS.main, 
                            marginTop: 20
                        }}
                        textStyle={{ color: COLORS.white }}
                        disabled={loading}
                    />
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
};

export default EditProfile;