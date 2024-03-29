import React, { createContext, useState, useEffect } from 'react';

import AuthService from "../services/AuthService";


export const AuthContext = createContext();

//Without this AuthProvider component, whenever I refresh, it'll directly go to PrivateRoute and Navbar with isAuth == false

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
   

    useEffect(() => {
        AuthService.isAuthenticated().then((jsonData) => {
            console.log("...isAuthenticated() function...", jsonData)
            setIsAuth(jsonData.isAuthenticated);
            setUser(jsonData.user);
            setIsLoaded(true)

        })
    }, [])

    return (
        <React.Fragment>
            {
                isLoaded ?
                    (<AuthContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
                        {children}
                    </AuthContext.Provider>) :
                    (<div className="text-center">Loading...</div>)
            }
        </React.Fragment>
    )
}