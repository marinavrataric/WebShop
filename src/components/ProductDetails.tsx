import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

interface Product {
    id: number,
    name: string,
    image: string,
    price: {
        amount:
        number,
        unit: string
    }
}

function ProductDetails() {

    const location = useLocation<Product>()

    const [currentValue, setCurrentValue] = useState(1)

    const handleKeypress = ((e: any) => {
        const characterCode = e.key
        if (characterCode === 'Backspace') return

        const characterNumber = Number(characterCode)
        if (characterNumber >= 0 && characterNumber <= 9) {
            if (e.currentTarget.value && e.currentTarget.value.length) {
                return
            } else if (characterNumber === 0) {
                e.preventDefault()
            }
        } else {
            e.preventDefault()
        }
    })

    return (
        <div className="user page">
            <div className="top-div">
                <div className="div-img">
                    <img src={location.state.image} alt="img" className="product-img" />
                </div>

                <div className="div-cart">
                    <p className="details-name">{location.state.name}</p>
                    <p className="details-amount">{location.state.price.amount.toFixed(2)} {location.state.price.unit}</p>
                    <p className="details-id">ID: {location.state.id}</p>
                    <input
                        type="number"
                        placeholder="1"
                        className="input-cart"
                        onChange={(e: any) => setCurrentValue(e.target.value)}
                        onKeyDown={handleKeypress}
                        min="1"
                    />
                    <button className="details-add-btn"
                    ><i className="fa fa-cart-plus"></i>Add to Cart
                    </button>
                </div>
            </div>

            <div className="div-about">
                <p className="about-name">About this product</p>
                <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                </p>
                <button className="details-delete-btn"
                ><i className="fa fa-trash"></i>Delete Product
                </button>
            </div>
        </div>
    )
}

export default ProductDetails