
import { StyleSheet, } from 'react-native';
import { AppProvider } from './app/context/AppContext';
import RootStack from './app/naviagtion/RootNavigation';
import NoInternetBanner from './app/components/atoms/NoInternetBanner/NoInternetBanner';


/**
 * App Component
 * 
 * Serves as the root component of the application. Wraps the entire app in the `AppProvider`
 * context to provide global state management. Includes a `NoInternetBanner` to display
 * connectivity status and the main `RootStack` for navigation.
 */
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
