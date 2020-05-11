import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'

function Form1() {

    const { nextStep, userInfo, setUserInfo } = useContext(UserContext)

    const handleFirstname = (e: any) => setUserInfo({ ...userInfo, firstName: e.target.value })
    const handleLastname = (e: any) => setUserInfo({ ...userInfo, lastName: e.target.value })
    const handleEmail = (e: any) => setUserInfo({ ...userInfo, email: e.target.value })

    const [validMsg, setValidMsg] = useState({firstName: '', lastName: '', email: ''})

    const handleValidation = () => {
        let firstNameMsg = ''
        let lastNameMsg = ''
        let emailMsg = ''

        if(userInfo.firstName === '') firstNameMsg = 'Invalid first name'
        if(userInfo.lastName === '') lastNameMsg = 'Invalid last name'
        if(!userInfo.email.includes('@') || !userInfo.email.includes('.')) emailMsg = 'Invalid email'

        setValidMsg({firstName: firstNameMsg, lastName: lastNameMsg, email: emailMsg})

        return (firstNameMsg === '' && lastNameMsg === '' && emailMsg === '')
    }

    return (
        <div className="about page">
            <p className="user-title">Sign up</p>
            <input
                type="text"
                className="about-input"
                placeholder="First Name"
                onChange={handleFirstname}
                value={userInfo.firstName}
            />
            <p className="valid">{validMsg.firstName}</p>
            <input
                type="text"
                className="about-input"
                placeholder="Last Name"
                onChange={handleLastname}
                value={userInfo.lastName}
            />
            <p className="valid">{validMsg.lastName}</p>
            <input
                type="text"
                className="about-input"
                placeholder="Email"
                onChange={handleEmail}
                value={userInfo.email}
            />
            <p className="valid">{validMsg.email}</p>
            <button
                className="btn-next"
                onClick={() => handleValidation() && nextStep()}
            >Go</button>
        </div>
    )
}

export default Form1