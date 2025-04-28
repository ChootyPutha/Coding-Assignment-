import React, { useEffect, useState } from "react";
import { View, StyleSheet, } from 'react-native';
import IconContainer from "../../components/atoms/Iconcontainer/Iconcontainer";
import { useRestoreUserInfo } from "../../hooks/useRestoreUserInfo";
import { delay } from "../../utills/delay";

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

/**
 * SplashScreen Component
 * Displays the app logo while restoring user info after a short delay.
 */
const SplashScreen = () => {

    const [startRestore, setStartRestore] = useState(false);
   const { loading } = useRestoreUserInfo(startRestore); //Only start after 2s delay
    useEffect(() => {
        /**
         * Starts restoring user info after a 2 second splash screen display.
         */
        const initiateRestore = async () => {
            await delay(2000); // 2s delay
            setStartRestore(true); // trigger user restore
        };

        initiateRestore();
    }, []); 

    return (
        <View style={styles.container}>
            <IconContainer/>
        </View>
    )
};

export default SplashScreen;