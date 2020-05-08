import React, { useState } from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import ConfirmForm from './ConfirmForm'
import Success from './Success'
import { UserContext } from '../../context/UserContext'

function SignUp() {

    const [userInfo, setUserInfo] = useState(
        {
            firstName: '', 
            lastName: '', 
            password: '',
            email: '', 
            address: '', 
            city: '', 
            phone: ''
        }
    )

    const [step, setStep] = useState(1)

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    const switchComponent = () => {
        switch (step) {
            case 1: return <Form1 />
            case 2: return <Form2 />;
            case 3: return <ConfirmForm />;
            case 4: return <Success />;
            default: return <Form1 />
        }
    }

    return (
        <div>
            <UserContext.Provider value={{
                step,
                prevStep,
                nextStep,
                userInfo,
                setUserInfo
            }}>
                {switchComponent()}
            </UserContext.Provider>
        </div>
    )
}
export default SignUp