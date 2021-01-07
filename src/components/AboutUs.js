import React, {Component} from 'react';
import Nav from './Nav';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class AboutUs extends Component {
    render(

    ) {
        return <>
            <Nav basket={this.props.basket}>
                <p className="headerStyle">Jesteśmy nową na rynku, lecz prężnie rozwijającą się księgarnią.<br></br>Stale zwiększamy swój asortyment abyś zawsze mógł znaleźć coś dla siebie.<br></br>  <span className="logoBB">Best</span><span>BooK</span ><span className="logoBB">Store</span> tworzy dobrze zorganizowany zespół, który zaangażowaniem i energią w każdym dniu sprawia,<br></br> że księgarnia wysyłkowa buduje dobrą renomę</p>
                <div className="booksImage"></div>
            </Nav>
        </>;
    }
}

export default AboutUs;