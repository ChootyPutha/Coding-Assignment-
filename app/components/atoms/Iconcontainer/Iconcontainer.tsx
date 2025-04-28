import React from 'react';
import { Image, ImageProps, StyleSheet, View } from 'react-native';
import logo from '../../../assets/logo.png';
import ComponentTypes from '../../../types/ComponentTypes';

const styles = StyleSheet.create({
    logo: {
        width: 188,
        height: 188,
        backgroundColor: '#000'
    },
});


/**
 * IconContainer Component
 * 
 * Renders a logo image within a container. Accepts additional styling and image properties.
 * 
 * Props:
 * - style: An optional style object to override or extend the default logo style.
 * - ...props: Additional ImageProps such as accessibilityLabel, accessibilityHint, 
 *   and accessibilityRole to provide better accessibility information.
 */

function IconContainer({ style, ...props }: ComponentTypes & ImageProps) {
    return (
        <View>
            <Image
                testID="icon-image"
                source={logo}
                style={style ? [styles.logo, style] : styles.logo}
                resizeMode="contain"
                accessibilityLabel={props.accessibilityLabel}
                accessibilityHint={props.accessibilityHint}
                accessibilityRole={props.accessibilityRole}
                {...props}
            />
        </View>
    );
}

export default IconContainer;