import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

function Bathroom() {

    const { product } = useContext(AppContext)

    const bathroomProducts = product.bathroom.map((item: any) => {
        return (
            <div className="card" key={item.id}>
                <Link to={{
                    pathname: `/bathroom/${item.id}`,
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
        <div className="bathroom page">
            <p className="page-title">Bathdroom</p>
            <div className="products">
                {bathroomProducts}
            </div>
        </div>
    )
}

export default Bathroom