import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TitleProps } from '../../../types/TitlePropsTypes';

const Title: React.FC<TitleProps> = ({ firstName, lastName }) => (
    <View style={styles.titelHodler}>
      <View style={styles.titelContainer}>
        <Text style={styles.titelText}>{`${firstName} ${lastName}`}</Text>
      </View>
    </View>
  );

const styles = StyleSheet.create({
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
});

export default Title;