import React, { useEffect } from "react";
import { View, StyleSheet, Text } from 'react-native';
import IconContainer from "../../components/atoms/Iconcontainer/Iconcontainer";
import { useRestoreUserInfo } from "../../hooks/useRestoreUserInfo";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import { RootStackParamList } from "../../types/NavigationTypes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        height : '100%',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const SplashScreen = () => {

    const { loading } = useRestoreUserInfo();

   // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        const timer = setTimeout(() => {
            // Navigate to your target screen after 3 seconds
          //  navigation.replace('LegalInfoScreen');
        }, 3000);

        // Clean up the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []); //navigation

    return (
        <View style={styles.container}>
            <IconContainer/>
        </View>
    )
};

export default SplashScreen;