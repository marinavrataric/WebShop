import { createContext } from "react";

export const UserContext = createContext({
    nextStep: () => { },
    prevStep: () => { },
    step: 1,
    userInfo: {
        firstName: '', 
        lastName: '', 
        password: '',
        email: '', 
        address: '', 
        city: '', 
        phone: ''
    },
    setUserInfo: (userInfo: {
        firstName: string, 
        lastName: string, 
        password: string,
        email: string,
        address: string, 
        city: string, 
        phone: string
    }) => { }
})