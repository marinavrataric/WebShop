import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

function Bedroom() {

    const { product } = useContext(AppContext)

    const bedroomProducts = product.bedroom.map((item: any) => {
        return (
            <div className="card" key={item.id}>
                <Link to={{
                    pathname: `/bedroom/${item.id}`,
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
        <div className="bedroom page">
            <p className="page-title">Bedroom</p>
            <div className="products">
                {bedroomProducts}
            </div>
        </div>
    )
}

export default Bedroom