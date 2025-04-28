import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useAppContext, UserInfo } from '../context/AppContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/NavigationTypes';

export const useRestoreUserInfo = () => {
    const { setUserInfo } = useAppContext();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const restoreUser = async () => {
          try {
            const jsonValue = await AsyncStorage.getItem('userInfo');
            if (jsonValue != null) {
              const user: UserInfo = JSON.parse(jsonValue);
              console.log("user info ++++++ ",JSON.stringify(user));
              setUserInfo(user);
              navigation.replace('HomeScreen'); // User found, go to Home
            } else {
              navigation.replace('LegalInfoScreen'); // User not found, go to Legal
            }
          } catch (e) {
            console.error('Failed to restore user info', e);
          } finally {
            setLoading(false);
          }
        };
    
        restoreUser();
      }, []);

      return { loading };
        
    }