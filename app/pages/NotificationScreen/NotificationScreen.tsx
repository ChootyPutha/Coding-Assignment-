import React from "react";
import { View, StyleSheet, StatusBar, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const isDarkMode = false;

const backgroundStyle = {
    backgroundColor: isDarkMode ? '#FFF' : '#000',
};

const NoficationScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, width: '100%', height: '100%', paddingTop: 15 }}>
            <View style={styles.container}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <View style={styles.formHolder}>
                    <View>
                        <Text style={styles.infoText}>
                            Get the most out of Blott ✅
                        </Text>
                        <Text style={styles.infoText}>
                            Allow notifications to stay in the loop with your payments, requests and groups.
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: '#fff',
        paddingBottom: 100, // To prevent overlap with floating button
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '400',
        color: '#000',
    },
    formHolder: {
        width: '100%',
        height : '40%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'green'
    },


});

export default NoficationScreen;
