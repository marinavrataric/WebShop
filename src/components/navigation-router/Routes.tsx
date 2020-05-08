import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from '../nav-pages/Homepage'
import Cart from '../nav-pages/Cart'
import Login from '../nav-pages/Login'
import LivingRoom from '../rooms/LivingRoom'
import Bedroom from '../rooms/Bedroom'
import Kitchen from '../rooms/Kitchen'
import DiningRoom from '../rooms/DiningRoom'
import Bathroom from '../rooms/Bathroom'
import Office from '../rooms/Office'
import Outdoor from '../rooms/Outdoor'
import SignUp from '../nav-pages/sign_up/SignUp'
import ProductDetails from '../ProductDetails'
import Payment from '../Payment'

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/livingroom" exact component={LivingRoom} />
            <Route path="/livingroom/:id" component={ProductDetails} />
            <Route path="/bedroom" exact component={Bedroom} />
            <Route path="/bedroom/:id" component={ProductDetails} />
            <Route path="/kitchen" exact component={Kitchen} />
            <Route path="/kitchen/:id" component={ProductDetails} />
            <Route path="/diningroom" exact component={DiningRoom} />
            <Route path="/diningroom/:id" component={ProductDetails} />
            <Route path="/bathroom" exact component={Bathroom} />
            <Route path="/bathroom/:id" component={ProductDetails} />
            <Route path="/office" exact component={Office} />
            <Route path="/office/:id" component={ProductDetails} />
            <Route path="/outdoor" exact component={Outdoor} />
            <Route path="/outdoor/:id" component={ProductDetails} />
            <Route path="/cart/payment" component={Payment} />
        </Switch>
    )
}

export default Routes