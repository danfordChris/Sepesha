import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import { COLORS } from '../../../utils/Constants/Colors';

type City = {
  region_id: string;
  name: string;
};

type Props = {
  cities: City[];
  selectedRegionId: string;
  onSelect: (regionId: string, name: string) => void;
};

const CityDropdown: React.FC<Props> = ({
  cities,
  selectedRegionId,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedCity = cities.find(city => city.region_id === selectedRegionId);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={styles.selector}>
        <Text style={styles.selectedText}>
          {selectedCity ? selectedCity.name : 'Select City'}
        </Text>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdown}>
          <FlatList
            nestedScrollEnabled
            data={cities}
            keyExtractor={item => item.region_id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  onSelect(item.region_id, item.name);
                  setIsOpen(false);
                }}
                style={styles.option}>
                <Text style={styles.optionText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 20,
    marginBottom: 15,
  },
  selector: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    borderColor:'#e8e8e8',
    justifyContent:'center',
    borderWidth:1,
    height:60
  },
  selectedText: {
    color: '#333',
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 5,
    maxHeight: 200,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    color: '#555',
  },
});

export default CityDropdown;
