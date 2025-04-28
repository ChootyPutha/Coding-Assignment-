import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FormInputProps } from "../../../types/FormInputPropsTypes";

/**
 * FormInput component for input fields.
 */
const FormInput: React.FC<FormInputProps> = ({ placeholder, value, onChangeText }) => (
    <View style={styles.formElemenent}>
        <TextInput
            style={styles.formInputs}
            placeholder={placeholder}
            placeholderTextColor={'#A3A3A3'}
            value={value}
            onChangeText={onChangeText}
        />
    </View>
);

const styles = StyleSheet.create({
    formHolder: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formElemenent: {
        width: '90%',
        padding: 10,
    },
    formInputs: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#A3A3A3',
        paddingVertical: 8,
        fontSize: 18,
    },
});

export default FormInput;