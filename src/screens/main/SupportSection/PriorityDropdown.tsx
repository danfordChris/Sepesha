import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

type Props = {
  selected: string;
  onSelect: (value: string) => void;
};

const priorities = ['Low', 'Medium', 'High'];

const PriorityDropdown: React.FC<Props> = ({selected, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value.toLowerCase());
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={styles.selector}>
        <Text style={styles.selectedText}>
          {selected
            ? selected.charAt(0).toUpperCase() + selected.slice(1)
            : 'Select Priority'}
        </Text>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdown}>
          {priorities.map(priority => (
            <TouchableOpacity
              key={priority}
              onPress={() => handleSelect(priority)}
              style={styles.option}>
              <Text style={styles.optionText}>{priority}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 5,
  },
  selector: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  selectedText: {
    color: '#333',
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 5,
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

export default PriorityDropdown;
