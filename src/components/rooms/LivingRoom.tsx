import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'

function LivingRoom() {

    const { product } = useContext(AppContext)

    const livingRoomProducts = product.livingRoom.map((item: any) => {
        return (
            <div className="card" key={item.id}>
                <Link to={{
                    pathname: `/livingroom/${item.id}`,
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
        <div className="livingroom page">
            <p className="page-title">LivingRoom</p>
            <div className="products">
                {livingRoomProducts}
            </div>
        </div>
    )
}

export default LivingRoom