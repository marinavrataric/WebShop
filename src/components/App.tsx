import React, { useState } from 'react'
import { AppContext } from './context/AppContext'
import NavigationRouter from './navigation-router/NavigationRouter'

function App() {

    const [visible, setVisible] = useState(false)

    return (
        <div>
            <AppContext.Provider value={{
                visible, setVisible
            }}>
                <NavigationRouter />
            </AppContext.Provider>
        </div>
    )
}

export default App