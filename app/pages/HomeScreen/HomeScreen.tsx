import React from "react";
import { View, StyleSheet, StatusBar,  } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const isDarkMode = false;

const backgroundStyle = {
    backgroundColor: isDarkMode ? '#FFF' : '#000',
};

const HomeScreen = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <StatusBar
                        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                        backgroundColor={backgroundStyle.backgroundColor}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default HomeScreen;