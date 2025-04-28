import React, { useState } from "react";
import { View, StyleSheet, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSaveUserInfo } from "../../hooks/useSaveUserInfo";
import { useLegalInfo } from "../../hooks/useLegalInfo";
import Title from "../../components/molecules/Title/Title";
import InfoText from "../../components/atoms/InfoText/InfoText";
import FormInput from "../../components/atoms/FormInput/FormInput";
import FloatingButton from "../../components/atoms/FloatingButton/FloatingButton";

const isDarkMode = false;

const backgroundStyle = {
    backgroundColor: isDarkMode ? '#FFF' : '#000',
};

const LegalInfoScreen: React.FC = () => {
    const { firstName, lastName, setFirstName, setLastName } = useLegalInfo();
    const { saveUserInfo } = useSaveUserInfo();
  
    const handleSubmit = () => {
      if (firstName.length > 0 && lastName.length > 0) {
        const user = { firstName, lastName };
        saveUserInfo(user);
      } else {
        Alert.alert(
          'Validation Error',
          'Please enter your name, we need to know a bit about you so that we can create your account.',
          [{ text: 'OK' }]
        );
      }
    };
  
    return (
      <SafeAreaView style={{ flex: 1, width: '100%', height: '100%', paddingTop: 15 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
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
  
              <Title firstName={firstName} lastName={lastName} />
              <InfoText />
  
              <View style={styles.formHolder}>
                <FormInput
                  placeholder="First Name"
                  value={firstName}
                  onChangeText={setFirstName}
                />
                <FormInput
                  placeholder="Last Name"
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>
            </View>
  
            <FloatingButton onPress={handleSubmit} />
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
        color: '#737373',
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
        borderBottomColor: '#A3A3A3',
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
