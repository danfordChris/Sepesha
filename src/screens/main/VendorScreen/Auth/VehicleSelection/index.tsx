import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import styles from './styles';
import { IMAGE } from '../../../../../utils/Constants/Images';

const vehicleOptions = [
    { id: '2', label: '2 Wheeler', image: IMAGE.motorcycle },
    { id: '3', label: '3 Wheeler', image: IMAGE.auto },
    { id: '4', label: '4 Wheeler', image: IMAGE.van },
];

const VehicleSelection = ({ navigation }: any) => {
    const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Let’s Get Started</Text>
            <Text style={styles.subtitle}>Please select your preferred delivery channel</Text>

            <View style={styles.gridContainer}>
                {vehicleOptions.map((vehicle) => (
                    <TouchableOpacity
                        key={vehicle.id}
                        style={[
                            styles.vehicleBox,
                            selectedVehicle === vehicle.id && styles.selectedVehicleBox
                        ]}
                        onPress={() => setSelectedVehicle(vehicle.id)}
                    >
                        <Image
                            source={vehicle.image}
                            style={[
                                styles.vehicleImage,
                                selectedVehicle === vehicle.id && styles.selectedVehicleImage
                            ]}
                        />
                        <Text
                            style={[
                                styles.vehicleText,
                                selectedVehicle === vehicle.id && styles.selectedVehicleText
                            ]}
                        >
                            {vehicle.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity
                style={[styles.nextButton, !selectedVehicle && styles.disabledButton]}
                onPress={() => navigation.navigate('NextScreen')}
                disabled={!selectedVehicle}
            >
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

export default VehicleSelection;
