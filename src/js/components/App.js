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
import l1 from './l1';
import l2 from './l2';
import l3 from './l3';

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
                    <Route path='/l1' component={l1} />
                    <Route path='/l2' component={l2} />
                    <Route path='/l3' component={l3} />

                </>
            </HashRouter>
        )
    }
}

export default App;