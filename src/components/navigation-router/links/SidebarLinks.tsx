import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

function SidebarLinks() {

    const { setVisible } = useContext(AppContext)

    return (
        <ul className="sidebar-ul">
            <div>
                <nav className="sidebar-nav">
                    <li className="sidebar-li">
                        <NavLink
                            to="/livingroom"
                            className="inactive side-nav"
                            onClick={() => setVisible(false)}
                        >Living Room</NavLink>
                    </li>
                    <li className="sidebar-li">
                        <NavLink
                            to="/bedroom"
                            className="inactive side-nav"
                            onClick={() => setVisible(false)}
                        >Bedroom</NavLink>
                    </li>
                    <li className="sidebar-li">
                        <NavLink
                            to="/kitchen"
                            className="inactive side-nav"
                            onClick={() => setVisible(false)}
                        >Kitchen</NavLink>
                    </li>
                    <li className="sidebar-li">
                        <NavLink
                            to="/diningroom"
                            className="inactive side-nav"
                            onClick={() => setVisible(false)}
                        >Dining room</NavLink>
                    </li>
                    <li className="sidebar-li">
                        <NavLink
                            to="/bathroom"
                            className="inactive side-nav"
                            onClick={() => setVisible(false)}
                        >Bathroom</NavLink>
                    </li>
                    <li className="sidebar-li">
                        <NavLink
                            to="/office"
                            className="inactive side-nav"
                            onClick={() => setVisible(false)}
                        >Office</NavLink>
                    </li>
                    <li className="sidebar-li">
                        <NavLink
                            to="/outdoor"
                            className="inactive side-nav"
                            onClick={() => setVisible(false)}
                        >Outdoor</NavLink>
                    </li>
                </nav>
            </div>
        </ul>
    )
}

export default SidebarLinks