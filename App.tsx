import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './app/pages/SplashScreen/SplashScreen';
import LegalInfoScreen from './app/pages/LegalInfoScreen/LegalInfoScreen';
import NoficationScreen from './app/pages/NotificationScreen/NotificationScreen';
import { AppProvider } from './app/context/AppContext';
import RootStack from './app/naviagtion/RootNavigation';
import NoInternetBanner from './app/components/atoms/NoInternetBanner/NoInternetBanner';

export default function App() {
  return (
    <AppProvider>
      <NoInternetBanner />
      <RootStack />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
