import React, { createContext, useState, useContext, ReactNode } from 'react';
import AppContextType from '../types/AppContextTypes';
import UserInfo from '../types/UserTypes';

// const AppContext = createContext<AppContextType>({
//     userInfo: null,
//     setUserInfo: () => { },
// });

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    return (
        <AppContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export { UserInfo };

