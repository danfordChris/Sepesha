import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    TextInputProps,
    StyleProp,
    ViewStyle,
    Image,
} from 'react-native';
import { IMAGE } from '../../utils/Constants/Images';
import { COLORS } from '../../utils/Constants/Colors';

interface CustomInputProps extends TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    placeholderTextColor?: string;
    style?: StyleProp<ViewStyle>;
}

const CustomInput: React.FC<CustomInputProps> = ({
    value,
    onChangeText,
    placeholder,
    keyboardType = 'default',
    autoCapitalize = 'none',
    secureTextEntry = false,
    placeholderTextColor = '#B0B0B0',
    style,
    ...rest
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const clearInput = () => {
        onChangeText('');
    };

    return (
        <View
            style={[
                styles.inputContainer,
                isFocused && styles.focusedInputContainer,
                style,
            ]}
        >
            <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={placeholderTextColor}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...rest}
            />
            {value?.length > 0 && (
                <TouchableOpacity onPress={clearInput} style={styles.clearButton}>
                    <Image
                        resizeMode="contain"
                        style={{ width: 20, height: 20 }}
                        source={IMAGE.CROSS}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 12,
        paddingHorizontal: 10,
        height: 60,
        borderWidth: 1,
        borderColor: COLORS.borderColorGrey,
    },
    focusedInputContainer: {
        borderColor: COLORS.main, 
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
    clearButton: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
});

export default CustomInput;
