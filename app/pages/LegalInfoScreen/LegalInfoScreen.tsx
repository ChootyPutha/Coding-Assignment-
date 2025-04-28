import React, { useState } from "react";
import { View, StyleSheet, StatusBar, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSaveUserInfo } from "../../hooks/useSaveUserInfo";

const isDarkMode = false;

const backgroundStyle = {
    backgroundColor: isDarkMode ? '#FFF' : '#000',
};

const LegalInfoScreen = () => {

    const [firstName, setFirstName] = useState('Your legal');
    const [lastName, setLastName] = useState('name');

    const { saveUserInfo } = useSaveUserInfo();

    const handleSubmit = () => {
        const user = {
          firstName: firstName,
          lastName: lastName,
        };
        saveUserInfo(user);
      };

    return (
        <SafeAreaView style={{ flex: 1, width: '100%', height: '100%', paddingTop: 15 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // You can adjust this if header overlaps
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.container}>
                        <StatusBar
                            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                            backgroundColor={backgroundStyle.backgroundColor}
                        />

                        <View style={styles.titelHodler}>
                            <View style={styles.titelContainer}>
                                <Text style={styles.titelText}>{`${firstName} ${lastName}`}</Text>
                            </View>
                        </View>

                        <View style={styles.infoHolder}>
                            <View style={styles.infoTextContainer}>
                                <Text style={styles.infoText}>
                                    We need to know a bit about you so that we can create your account.
                                </Text>
                            </View>
                        </View>

                        <View style={styles.formHolder}>
                            <View style={styles.formElemenent}>
                                <TextInput style={styles.formInputs} placeholder="First Name" onChangeText={(text) => setFirstName(text)} />
                            </View>
                            <View style={styles.formElemenent}>
                                <TextInput style={styles.formInputs} placeholder="Last Name" onChangeText={(text) => setLastName(text)} />
                            </View>
                        </View>

                    </View>
                    {/* Floating Button */}
                    <TouchableOpacity style={styles.floatingButton} onPress={() => {alert('Button Pressed'); handleSubmit();}}>
                        <Ionicons name="chevron-forward" size={30} color="white" />
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: '#fff',
        paddingBottom: 100, // To prevent overlap with floating button
    },
    titelHodler: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titelContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 20,
    },
    titelText: {
        fontSize: 30,
        fontWeight: '700',
        color: '#000',
        fontFamily: 'Roboto',
    },
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
        color: '#000',
    },
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
        borderBottomColor: '#000',
        paddingVertical: 8,
        fontSize: 18,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        backgroundColor: '#b8aef8',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
});

export default LegalInfoScreen;
