import { NativeStackScreenProps } from '@react-navigation/native-stack';
export type RootStackParamList = {
    SplashScreen: undefined;
    HomeScreen: undefined;
    LegalInfoScreen: undefined;
    NotificationScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;