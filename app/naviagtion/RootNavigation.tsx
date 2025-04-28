import SplashScreen from '../pages/SplashScreen/SplashScreen';
import LegalInfoScreen from '../pages/LegalInfoScreen/LegalInfoScreen';
import NotificationScreen from '../pages/NotificationScreen/NotificationScreen';
import HomeScreen from '../pages/HomeScreen/HomeScreen';

import { RootStackParamList } from '../types/NavigationTypes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer as NavContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <NavContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LegalInfoScreen" component={LegalInfoScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavContainer>
  );
}

export default RootStack;