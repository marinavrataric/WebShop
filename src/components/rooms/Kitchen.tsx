import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

function Kitchen() {

    const { product } = useContext(AppContext)

    const kitchenProducts = product.kitchen.map((item: any) => {
        return (
            <div className="card" key={item.id}>
                <Link to={{
                    pathname: `/kitchen/${item.id}`,
                    state: item
                }}>
                    <img src={item.image} alt="bedroom-img" className="item-img" />
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">{item.price.amount.toFixed(2)} {item.price.unit}</p>
                </Link>
            </div>
        )
    })

    return (
        <div className="kitchen page">
            <p className="page-title">Kitchen</p>
            <div className="products">
                {kitchenProducts}
            </div>
        </div>
    )
}

export default Kitchen