import { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';
import { NotificationPermissionStatus } from '../types/NotificationPermissionStatusTypes';

/**
 * Custom hook to manage notification permissions for the app.
 * 
 * This hook checks and requests notification permissions on app load.
 * 
 * @returns An object containing:
 * - `status`: A string indicating the current notification permission status.
 * - `isLoading`: A boolean indicating whether the permission check is in progress.
 * 
 * @remarks
 * - This hook should be used on a physical device, as the Expo Go app does not support
 *   push notifications in the simulator.
 */
export const useNotificationPermissions = () => {
    const [status, setStatus] = useState<NotificationPermissionStatus>('undetermined');
    const [isLoading, setIsLoading] = useState<boolean>(true);
  
    useEffect(() => {
      const checkAndRequestPermissions = async () => {
        if (!Device.isDevice) {
          console.warn('Must use physical device for Push Notifications');
          setIsLoading(false);
          return;
        }
  
        try {
          const existingPermissions = await Notifications.getPermissionsAsync();
          let finalStatus = existingPermissions.status as NotificationPermissionStatus;
  
          if (finalStatus !== 'granted') {
            const request = await Notifications.requestPermissionsAsync();
            finalStatus = request.status as NotificationPermissionStatus;
          }
  
          setStatus(finalStatus);
        } catch (error) {
          console.error('Error checking notification permissions:', error);
        } finally {
          setIsLoading(false);
        }
      };
  
      checkAndRequestPermissions();
    }, []);
  
    return { status, isLoading };
  };