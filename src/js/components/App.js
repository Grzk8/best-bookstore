import React, {Component} from "react";
import {
    HashRouter,
    Route,
} from 'react-router-dom';
import Main from './Main';
import AboutUs from './AboutUs';
import DeliveryCost from './DeliveryCost';
import SelfPickup from './SelfPickup';
import Contact from './Contact';
import Bascet from './Bascet';
import Sf from './Sf';
import PopularSience from './PopularSience';
import Comic from './Comic';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <>
                    <Route exact path='/' component={Main} />
                    <Route path='/aboutUs' component={AboutUs} />
                    <Route path='/deliveryCost' component={DeliveryCost} />
                    <Route path='/selfPickup' component={SelfPickup} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/bascet' component={Bascet} />
                    <Route path='/sf' component={Sf} />
                    <Route path='/popularsience' component={PopularSience} />
                    <Route path='/comic' component={Comic} />

                </>
            </HashRouter>
        )
    }
}

export default App;