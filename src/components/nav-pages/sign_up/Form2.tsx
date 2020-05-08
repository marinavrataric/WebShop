import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'

function Form2() {

    const { nextStep, prevStep, userInfo, setUserInfo } = useContext(UserContext)

    const handleAddress = (e: any) => setUserInfo({ ...userInfo, address: e.target.value })
    const handleCity = (e: any) => setUserInfo({ ...userInfo, city: e.target.value })
    const handlePhone = (e: any) => setUserInfo({ ...userInfo, phone: e.target.value })
    const handlePassword = (e: any) => setUserInfo({ ...userInfo, password: e.target.value })

    const [isVisible, setIsVisible] = useState(false)

    const [validMsg, setValidMsg] = useState({ address: '', city: '', password: '' })

    const handleValidation = () => {
        let addressMsg = ''
        let cityMsg = ''
        let passwordMsg = ''

        if (userInfo.address === '') addressMsg = 'Invalid address'
        if (userInfo.city === '') cityMsg = 'Invalid city'
        if (userInfo.password.length < 4) passwordMsg = 'Password must contain at least 4 characters'

        setValidMsg({ address: addressMsg, city: cityMsg, password: passwordMsg })

        return (addressMsg === '' && cityMsg === '' && passwordMsg === '')
    }

    return (
        <div className="about page">
            <p className="user-title">Sign up</p>
            <input
                type="text"
                className="about-input"
                placeholder="Address"
                onChange={handleAddress}
                value={userInfo.address}
            />
            <p className="valid">{validMsg.address}</p>
            <input
                type="text"
                className="about-input"
                placeholder="City"
                onChange={handleCity}
                value={userInfo.city}
            />
            <p className="valid">{validMsg.city}</p>
            <input
                type="text"
                className="about-input"
                placeholder="Phone Number"
                onChange={handlePhone}
                value={userInfo.phone}
            />
            <div className="pass">
                <input
                    type={isVisible ? "text" : "password"}
                    className="about-input"
                    placeholder="Password"
                    onChange={handlePassword}
                    value={userInfo.password}
                />
                <p className="valid">{validMsg.password}</p>
                <button onClick={() => setIsVisible(!isVisible)} className="eye-btn">
                    <i className="fa fa-eye"></i>
                </button>
            </div>
            <button className="btn-back" onClick={() => prevStep()}>Back</button>
            <button className="btn-next" onClick={() => { handleValidation() && nextStep() }
            }
            >Go</button>
        </div>
    )
}

export default Form2