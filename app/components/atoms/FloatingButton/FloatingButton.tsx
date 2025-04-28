import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FloatingButtonProps } from "../../../types/FloatingButtonPropsTypes";

const FloatingButton: React.FC<FloatingButtonProps> = ({ onPress }) => (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
      <Ionicons name="chevron-forward" size={30} color="white" />
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
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
})


  export default FloatingButton;