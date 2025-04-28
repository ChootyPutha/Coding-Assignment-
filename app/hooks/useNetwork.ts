import NetInfo from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

/**
 * Custom hook to monitor network connectivity status.
 * 
 * Utilizes NetInfo to listen for connectivity changes and updates the 
 * `isConnected` state accordingly. Returns the current connectivity status.
 * 
 * @returns An object containing:
 * - `isConnected`: A boolean indicating whether the device is connected to the internet.
 */

export function useNetwork() {
    const [isConnected, setIsConnected] = useState<boolean>(true);
  
    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener(state => {
        setIsConnected(state.isConnected ?? false);
      });
  
      return () => unsubscribe();
    }, []);
  
    return { isConnected };
  }
  