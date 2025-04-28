import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * A component that displays a static text that tells the user that we need to know a bit about them so that we can create their account.
 * 
 * Props:
 * - none
 * 
 * Returns:
 * A View component that contains a View component with a Text component inside.
 * The Text component displays the text "We need to know a bit about you so that we can create your account.".
 */
const InfoText: React.FC = () => (
    <View style={styles.infoHolder}>
        <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>
                We need to know a bit about you so that we can create your account.
            </Text>
        </View>
    </View>
);
const styles = StyleSheet.create({
    infoHolder: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoTextContainer: {
        width: '90%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 20,
    },
    infoText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '400',
        color: '#737373',
    },
});

export default InfoText;