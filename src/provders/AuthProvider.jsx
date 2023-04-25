import React from 'react';
import { createContext } from 'react';
import {getAuth} from 'firebase/auth';
import app from '../../firebase-config/firebase-config-init';


export const AuthContext=createContext(null);

const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const user= null;
    
    const AuthInfo={
        user,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;