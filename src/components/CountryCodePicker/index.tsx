import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COUNTRY_CODES } from '../../utils/JSON';

const CountryCodePicker = ({
  handleSelectCode,
  setModalVisible,
  modalVisible,
}: any) => {
  const { top } = useSafeAreaInsets();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCodes = COUNTRY_CODES.filter(
    code =>
      code.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.dial_code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal
      transparent={false}
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Country code</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for a country"
              placeholderTextColor="#999"
              onChangeText={setSearchTerm}
              value={searchTerm}
            />
          </View>
        </View>

        {/* FlatList */}
        <FlatList
          data={filteredCodes}
          showsVerticalScrollIndicator={true}
          keyExtractor={item => item.code}
          style={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSelectCode(item.dial_code)}
              style={styles.codeItem}
            >
              <View style={styles.row}>
                <View style={styles.flagContainer}>
                  <Text style={styles.flag}>{item.flag}</Text>
                </View>
                <Text style={styles.countryName}>{item.name}</Text>
                <Text style={styles.dialCode}>{item.dial_code}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    backgroundColor: '#F2F2F7',
    borderBottomWidth: 0,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    left: 16,
    padding: 8,
  },
  closeButtonText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#F2F2F7',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E5EA',
    borderRadius: 10,
    padding: 8,
  },
  searchIcon: {
    marginRight: 8,
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 17,
    color: '#000',
    padding: 0,
  },
  list: {
    backgroundColor: '#FFF',
  },
  codeItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C6C6C8',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagContainer: {
    width: 30,
    marginRight: 12,
  },
  flag: {
    fontSize: 24,
  },
  countryName: {
    flex: 1,
    fontSize: 17,
    color: '#000',
  },
  dialCode: {
    fontSize: 17,
    color: '#8E8E93',
    marginLeft: 8,
  },
});

export default CountryCodePicker;
