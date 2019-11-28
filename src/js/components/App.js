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
import Thiller from './Thiller';
import Form from './Form';
import Description from './Description';
import OrderCompleted from './OrderCompleted';

class App extends Component {
    state = {
        basket: []
    }

    addBook = (book) =>{
        this.setState({
            basket: [...this.state.basket, book]

        })
        

    }
    render() {
        return (
            <HashRouter>
                <>
                    <Route exact path='/' render={props=><Main {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                    <Route path='/aboutUs' render={props=><AboutUs {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                    <Route path='/deliveryCost' render={props=><DeliveryCost {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                    <Route path='/selfPickup' render={props=><SelfPickup {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                    <Route path='/contact' render={props=><Contact {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                    <Route path='/bascet' render={props=><Bascet {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                    <Route path='/sf' render={props=><Sf {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                    <Route path='/popularsience' render={props=><PopularSience {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                    <Route path='/comic' render={props=><Comic {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                    <Route path='/thiller' render={props=><Thiller {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                    <Route path='/description/:id' render={props=><Description {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                    <Route path='/orderCompleted' render={props=><OrderCompleted {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                </>
            </HashRouter>
        )
    }
}

export default App;