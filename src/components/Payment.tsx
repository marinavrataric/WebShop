import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'

function Payment() {

    const { totalAmountRounded } = useContext(AppContext)
    const newUser = localStorage.getItem('new user')
    const newUserObj = newUser && JSON.parse(newUser)

    return (
        <div className="page page-payment">
            <div className="payment">
                <div className="success">
                    <i className="fa fa-star"></i>
                    <div className="div-right">
                        <p className="success-title">Success!</p>
                        <p className="success-payment">Dear {newUserObj.firstName}, your order and payment has been accepted.</p>
                        <p className="success-mail">We will send you payment confirmation on your email address:
                            <span style={{ fontStyle: 'italic' }}> {newUserObj.email}</span>
                        </p>
                        <p className="success-address">Your package is arriving on address:
                            <span style={{ fontStyle: 'italic' }}> {newUserObj.address}, {newUserObj.city}</span>
                        </p>
                    </div>
                </div>
                <div className="payed-amount">
                    <p className="success-subtotal">Sub total: {totalAmountRounded} kn</p>
                </div>
            </div>
        </div>
    )
}

export default Payment