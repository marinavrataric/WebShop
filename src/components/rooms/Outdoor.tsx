import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

function Outdoor() {

    const { product } = useContext(AppContext)

    const outdoorProducts = product.outdoor.map((item: any) => {
        return (
            <div className="card" key={item.id}>
                <Link to={{
                    pathname: `/outdoor/${item.id}`,
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
        <div className="outdoor page">
            <p className="page-title">Outdoor</p>
            <div className="products">
                {outdoorProducts}
            </div>
        </div>
    )
}

export default Outdoor