import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

function NavigationBarLinks() {

    const { user, setUser } = useContext(AppContext)

    const handleLogout = (e:any) => {
        if(user.isLogin){
            const logoutMsg = window.confirm("Are you sure you want to log out?")
            if(logoutMsg) {
                setUser({...user, isLogin: false})
            }else {
                e.preventDefault()
            }
        }
    }

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
                    onClick={handleLogout}
                ><i className="fa fa-sign-in" aria-hidden="true"></i>{user.isLogin ? 'Log out' : 'Log in'}
                </NavLink>
            </li>
        </ul>
    )
}

export default NavigationBarLinks