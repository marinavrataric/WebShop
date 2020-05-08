import React, { useState, useReducer } from 'react'
import { AppContext } from './context/AppContext'
import NavigationRouter from './navigation-router/NavigationRouter'
import data from "./data/products.json"

interface User {
    email: string,
    password: string,
    isLogin: boolean
}

function App() {

    const [visible, setVisible] = useState(false)

    const [product] = useState<any>(data)

    const [productList, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case 'ADD_ITEM':
                const noDoubleItems = state.filter((item: any) => item.id !== action.payload.id)
                return [...noDoubleItems, action.payload]

            case 'DELETE_ITEM':
                return state.filter((item: any) => item.id !== action.payload.id)

            default:
                return state
        }
    }, [])

    let totalAmount = 0
    productList.forEach((item: any) => {
        totalAmount = totalAmount + (item.price.amount * item.counter)
    });

    const totalAmountRounded = totalAmount.toFixed(2)

    return (
        <div>
            <AppContext.Provider value={{
                visible, setVisible,
                product,
                productList, dispatch,
                totalAmountRounded
            }}>
                <NavigationRouter />
            </AppContext.Provider>
        </div>
    )
}

export default App