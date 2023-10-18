import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Shared/Navbar/Firebase/firebase";
import { PropTypes } from 'prop-types';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true);


    // User Authentication,
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
            console.log(currentUser);
            setLoader(false);
        })

        return () => {
            unSubscribe();
        };
    }, [])

    // Sign in with google
    const googleSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    };
    
    // create User with email and password.
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // sign in with email and password.
    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign Out
    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    };

    

    const authInfo = {
        user,
        loader,
        googleSignIn,
        createUser,
        signIn,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
