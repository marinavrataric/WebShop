import React, { useContext, CSSProperties } from 'react'
import { AppContext } from '../../context/AppContext'
import SidebarLinks from './SidebarLinks'
import NavigationBarLinks from './NavigatonBarLinks'

function Links() {

    const { visible, setVisible } = useContext(AppContext)

    const hideSideBar: CSSProperties = {
        visibility: "hidden",
        opacity: 0
    }

    const showSideBar: CSSProperties = {
        visibility: "inherit",
        opacity: 0.9
    }

    return (
        <div>
            <nav className="sidebar" style={!visible ? hideSideBar : showSideBar}>
                <SidebarLinks />
            </nav>
            <nav className="navbar">
                <button
                    className="menu-btn"
                    onClick={() => setVisible(!visible)}
                ><i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <NavigationBarLinks />
            </nav>
        </div>
    )
}

export default Links