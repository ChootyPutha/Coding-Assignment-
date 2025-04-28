import { useState } from "react";

/**
 * Hook to manage first name and last name states for the LegalInfo screen.
 */
export const useLegalInfo = () => {
    const [firstName, setFirstName] = useState('Your legal Name');
    const [lastName, setLastName] = useState('');
  
    return {
      firstName,
      lastName,
      setFirstName,
      setLastName,
    };
  };