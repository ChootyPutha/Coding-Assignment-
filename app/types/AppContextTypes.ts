import UserInfo from "./UserTypes";

type AppContextType = {
    userInfo: UserInfo | null;
    setUserInfo: (userInfo: UserInfo) => void;
};

export default AppContextType;