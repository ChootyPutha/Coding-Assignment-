import React, { createContext, useState, useContext, ReactNode } from 'react';
import AppContextType from '../types/AppContextTypes';
import UserInfo from '../types/UserTypes';

const AppContext = createContext<AppContextType | undefined>(undefined);


/**
 * A React Context Provider for the AppContext.
 * It holds the user's information and provides it to any nested components.
 * 
 * @param {{ children: ReactNode }} props
 * @prop {ReactNode} children - The children components to which the context
 *   will be provided.
 * 
 * @returns { JSX.Element } - The context provider element.
 * 
 * @example
 * <AppProvider>
 *   <HomeScreen />
 * </AppProvider>
 */
export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

    return (
        <AppContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </AppContext.Provider>
    );
};


/**
 * A custom hook to access the app context.
 * This hook returns the current app context, which includes the user's information.
 * It throws an error if the hook is not used within an AppProvider.
 */
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export { UserInfo };

