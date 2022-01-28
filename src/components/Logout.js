import React, { useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";


const Logout = ({setLoggedIn})=> {  
    const { push } = useHistory()
    useEffect(() => {
        axiosWithAuth().post('/logout')
        .then(resp => { 
            localStorage.removeItem('token')
            push('/')
        })
        .catch(err => {
            push('/')
        })
        .finally(setLoggedIn(false))
    })
    return(<div></div>);
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.