import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNetwork } from '../../../hooks/useNetwork';

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