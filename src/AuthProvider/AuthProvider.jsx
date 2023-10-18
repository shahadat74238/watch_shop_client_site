import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const user = "shahadat";

    const authInfo = {
        user,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;