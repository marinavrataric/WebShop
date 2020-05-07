import React, { useState } from 'react'
import { AppContext } from './context/AppContext'
import NavigationRouter from './navigation-router/NavigationRouter'
import data from "./data/products.json"

function App() {

    const [visible, setVisible] = useState(false)
    const [product] = useState<any>(data)

    return (
        <div>
            <AppContext.Provider value={{
                visible, setVisible,
                product
            }}>
                <NavigationRouter />
            </AppContext.Provider>
        </div>
    )
}

export default App