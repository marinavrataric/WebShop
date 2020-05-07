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
import SignUp from '../nav-pages/SignUp'

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/livingroom" component={LivingRoom} />>
            <Route path="/bedroom" component={Bedroom} />
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/diningroom" component={DiningRoom} />
            <Route path="/bathroom" component={Bathroom} />
            <Route path="/office" component={Office} />
            <Route path="/outdoor" component={Outdoor} />
        </Switch>
    )
}

export default Routes