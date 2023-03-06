import React, { useEffect, useRef, useState } from 'react'
import Keycloak from 'keycloak-js'
const useAuth = () => {

    const isRunRef = useRef(false)

    const [loggedIn, setLoggedIn] = useState(false)

    const keyCloakHandler = () => {
        const keycloak = new Keycloak({
            url: process.env.REACT_APP_KEYCLOAK_URL,
            realm: process.env.REACT_APP_KEYCLOAK_REALM!,
            clientId: process.env.REACT_APP_KEYCLOAK_CLIENTID!,
                  })
        keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
            setLoggedIn(authenticated)
        }).catch((err) => {
            console.log(err)
            alert('failed to initialize auth');
        });
    }
    useEffect(() => {
        if (isRunRef.current) return  // in order to prevent reloading if user authenticated 
        isRunRef.current = true
        keyCloakHandler()
    }, [])
    return loggedIn

}

export default useAuth