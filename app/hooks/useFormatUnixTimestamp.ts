import { useCallback } from 'react';

export const useFormatUnixTimestamp = () => {
    const formatUnixTimestamp = useCallback((timestamp: number) => {
      const date = new Date(timestamp * 1000);
  
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();
  
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
  
      const monthName = monthNames[monthIndex];
  
      return `${day} ${monthName} ${year}`;
    }, []);
  
    return { formatUnixTimestamp };
  };