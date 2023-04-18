import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';




export const AuthContex = createContext(null);
const Auth = getAuth(app);
const googleProvider = new GoogleAuthProvider;

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true)

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password)
    };
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password)
    };
    const singIngoogle = () => {
        return signInWithPopup(Auth, googleProvider);
    }

    const logOut = () => {
        return signOut(Auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser);
            setLoding(false)
        })
        return () => {
            unsubscribe()
        }

    }, []);

    const authInfo = {
        user,
        singIngoogle,
        loding,
        creatUser,
        signIn,
        logOut
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default Provider;