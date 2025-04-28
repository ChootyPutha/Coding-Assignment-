import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../pages/SplashScreen/SplashScreen';
import LegalInfoScreen from '../pages/LegalInfoScreen/LegalInfoScreen';
import NotificationScreen from '../pages/NotificationScreen/NotificationScreen';
import HomeScreen from '../pages/HomeScreen/HomeScreen';

import { RootStackParamList } from '../types/NavigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
    return (
      
    );
  }

export default RootStack;
