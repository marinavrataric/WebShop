import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

function DiningRoom() {
    
    const { product } = useContext(AppContext)

    const diningRoomProducts = product.diningRoom.map((item: any) => {
        return (
            <div className="card" key={item.id}>
                <Link to={{
                    pathname: `/diningroom/${item.id}`,
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
        <div className="diningroom page">
            <p className="page-title">Dining room</p>
            <div className="products">
                {diningRoomProducts}
            </div>
        </div>
    )
}

export default DiningRoom