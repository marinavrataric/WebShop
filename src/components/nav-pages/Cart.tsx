import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

function Cart() {

    const { productList, dispatch, totalAmountRounded, user } = useContext(AppContext)

    const products = productList.map((item: any) => {
        return (
            <div className="shop-cart">
                <img src={item.image} alt="img" className="cart-img" />
                <div className="right-div">
                    <p className="item-name">{item.name}</p>
                    <p className="item-amount">{item.counter} x {item.price.amount.toFixed(2)} {item.price.unit}</p>
                    <button className="cart-btn-delete"
                        onClick={() => dispatch({ type: 'DELETE_ITEM', payload: item })}
                    >x</button>
                </div>
            </div>
        )
    })

    const handlePay = () => {
        !user.isLogin && alert('You must be logged in')
    }

    return (
        <div className="cart page">
            {products.length === 0 ? <p className="empty-title">Your cart is empty</p> : products}
            <div className="cart-total-div">
                <p className="cart-subtotal">Sub total: {totalAmountRounded} kn</p>
                <Link to={user.isLogin ? '/cart/payment' : '/cart'}>
                    <button
                        onClick={handlePay}
                        className="cart-btn-pay"
                        disabled={totalAmountRounded === '0.00'}
                    >
                        <i className="fa fa-shopping-cart fa-shop"></i>Pay
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Cart