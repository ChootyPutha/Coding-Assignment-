import { useAppContext, UserInfo } from '../context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/NavigationTypes';

export const useSaveUserInfo = () => {
    const { setUserInfo } = useAppContext();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
    const saveUserInfo = async (user: UserInfo) => {
        console.log("user info ---- ",JSON.stringify(user));
      try {
        await AsyncStorage.setItem('userInfo', JSON.stringify(user));
        setUserInfo(user);
        navigation.replace('NotificationScreen'); // naviagte to notificationscreen
      } catch (e) {
        console.error('Saving user info failed', e);
      }
    };
  
    return { saveUserInfo };
  };