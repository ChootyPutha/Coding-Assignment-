import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNetwork } from '../../../hooks/useNetwork';


/**
 * A component that displays a banner indicating that there is no internet connection.
 * It uses the `useNetwork` hook to determine if the user has an internet connection.
 * If the user has an internet connection, the component will not render anything.
 * Otherwise, it will render a red View with a white Text component inside,
 * displaying the text "No Internet Connection".
 */
export default function NoInternetBanner() {
    const { isConnected } = useNetwork();
  
    if (isConnected) return null;
  
    return (
      <View style={styles.container}>
        <View style={styles.holder}>
            <Text style={styles.text}>No Internet Connection</Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      alignItems: 'center',
      justifyContent:'center',
      position: 'absolute',
      top: 50,
      width: '100%',
      zIndex: 999,
    },
    holder : {
        backgroundColor: 'red',
        width: '90%',
        height : '100%',
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      fontFamily:'Roboto',
      fontSize: 18
    },
  });