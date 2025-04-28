import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Rating } from 'react-native-ratings';
import { COLORS } from '../../utils/Constants/Colors';

const CustomRatingModal = ({ visible, onClose, onSubmit }:any) => {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (rating === 0) return Alert.alert('Please give a rating');
    onSubmit({ rating, description });
    setRating(0);
    setDescription('');
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Rate this driver</Text>
  
          <Rating
            type="star"
            ratingCount={5}
            imageSize={30}
            startingValue={rating}
            onFinishRating={(value: any) => setRating(value)}
            style={styles.rating}
          />
  
          <TextInput
            style={styles.input}
            placeholder="Write something..."
            multiline
            value={description}
            returnKeyType="default"
            onChangeText={setDescription}
          />
  
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
  );
};

export default CustomRatingModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000099',
    padding: 20
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center'
  },
  rating: {
    alignSelf: 'center',
    marginVertical: 10
  },
  input: {
    height: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    textAlignVertical: 'top',
    marginTop: 15
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  cancelBtn: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#aaa',
    borderRadius: 6,
    paddingVertical: 10
  },
  submitBtn: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: COLORS.main,
    borderRadius: 6,
    paddingVertical: 10
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  }
});
