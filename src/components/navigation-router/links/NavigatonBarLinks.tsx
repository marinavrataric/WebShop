import React from 'react'
import { NavLink } from 'react-router-dom'

function NavigationBarLinks() {
    return (
        <ul className="navbar-ul">
            <li className="navbar-li">
                <NavLink
                    to="/"
                    exact
                    className="inactive"
                    activeClassName="active"
                ><i className="fa fa-home" aria-hidden="true"></i>Home
                </NavLink>
            </li>
            <li className="navbar-li">
                <NavLink
                    to="/cart"
                    className="inactive"
                    activeClassName="active"
                ><i className="fa fa-shopping-cart" aria-hidden="true"></i>Cart
                </NavLink>
            </li>
            <li className="navbar-li">
                <NavLink
                    to="/signup"
                    className="inactive"
                    activeClassName="active"
                ><i className="fa fa-user" aria-hidden="true"></i>Sign up
                </NavLink>
            </li>
            <li className="navbar-li">
                <NavLink
                    to="/login"
                    className="inactive"
                    activeClassName="active"
                ><i className="fa fa-sign-in" aria-hidden="true"></i>Log in
                </NavLink>
            </li>
        </ul>
    )
}

export default NavigationBarLinks