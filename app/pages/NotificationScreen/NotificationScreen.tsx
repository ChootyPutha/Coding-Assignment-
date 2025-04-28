import React from "react";
import { View, StyleSheet, StatusBar, Image, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNotificationPermissions } from "../../hooks/useNotificationPermissions";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/NavigationTypes";

const isDarkMode = false;

const backgroundStyle = {
    backgroundColor: isDarkMode ? '#FFF' : '#000',
};

const NoficationScreen = () => {

    const { status, isLoading } = useNotificationPermissions();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleAllowNotifications = () => {
        if (status === 'granted') {
            navigation.replace('HomeScreen');
        } else if (status === 'denied') {
            Alert.alert(
                'Permission Denied',
                'Please enable notifications manually in Settings.',
                [{ text: 'OK' }]
            );
        } else {
            Alert.alert('Requesting Permission...', 'Please wait.');
        }
    };

    if (isLoading) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, width: '100%', height: '100%', paddingTop: 15 }}>
            <View style={styles.container}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <View style={styles.formHolder}>
                    <View style={styles.formContainer}>
                        <View>
                            <Image source={require('../../assets/notif.png')} style={styles.images} />
                        </View>
                        <View style={styles.cardItemContainer}>
                            <Text style={styles.titelText}>
                                Get the most out of Blott ✅
                            </Text>
                        </View>

                        <View style={styles.cardItemContainer}>
                            <Text style={styles.infoText}>
                                Allow notifications to stay in the loop with your payments, requests and groups.
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonHolder}>
                        <TouchableOpacity style={styles.buttonwrapper} onPress={()=>{handleAllowNotifications();}}>
                            <Text style={styles.buttonText}>
                                Continue
                            </Text>
                        </TouchableOpacity>
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
    titelText: {
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: '700',
        color: '#000',
        textAlign: 'center',
    },
    infoText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '400',
        color: '#000',
        textAlign: 'center',
    },
    formHolder: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        width: '90%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardItemContainer: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonHolder: {
        width: '90%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonwrapper: {
        width: '100%',
        height: '60%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
    },
    images : {
        width : 100,
        height : 100,
        resizeMode : 'contain'
    }



});

export default NoficationScreen;
