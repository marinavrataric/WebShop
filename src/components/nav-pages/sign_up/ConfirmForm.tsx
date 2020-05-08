import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

function ConfirmForm() {

    const { nextStep, prevStep, userInfo } = useContext(UserContext)

    return (
        <div className="about page">
            <p className="user-title">Confirm</p>
            <p className="confirm-title">First name</p>
            <p className="confirm-text">
                {userInfo.firstName}
            </p>
            <p className="confirm-title">Last name</p>
            <p className="confirm-text">
                {userInfo.lastName}
            </p>
            <p className="confirm-title">Email</p>
            <p className="confirm-text">
                {userInfo.email}
            </p>
            <p className="confirm-title">Address</p>
            <p className="confirm-text">
                {userInfo.address}
            </p>
            <p className="confirm-title">City</p>
            <p className="confirm-text">
                {userInfo.city}
            </p>
            <p className="confirm-title">Phone number</p>
            <p className="confirm-text">
                {userInfo.phone}
            </p>
            <button className="btn-back" onClick={() => prevStep()}>Back</button>
            <button className="btn-next" onClick={() => nextStep()}>Confirm</button>
        </div>
    )
}

export default ConfirmForm