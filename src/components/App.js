import React, {Component} from "react";
import {
    HashRouter,
    Route,
} from 'react-router-dom';
import Main from './MenuInfo/Main';
import AboutUs from './MenuInfo/AboutUs/AboutUs';
import SelfPickup from './MenuInfo/SelfPickup/SelfPickup';
import Contact from './/MenuInfo/Contact/Contact';
import Description from './MenuInfo/Categories/Description';
import Category from "./MenuInfo/Categories/Category";
import OrderCompleted from './Basket/Form/OrderCompleted';
import Navigation from './Navigation/Navigation';
import Basket from './Basket/Basket';
import Search from './MenuInfo/Search/Search';
import Login from './MenuInfo/Login/Login';

class App extends Component {
    state = {
        basket: []
    };

    addBook = (book) =>{
        this.setState({
            basket: [...this.state.basket, book]

        });
    };

    removeBook = (id) =>{
        const newBasket = this.state.basket.filter(r => {
            return r.id !== id;
        });
        this.setState({
            basket: newBasket
        });
    };

    render() {
        return (
            <div className="navigation">
            <HashRouter>
                <Navigation basket={this.state.basket}>
                        <Route exact path='/' render={props=><Main {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                        <Route path='/aboutUs' render={props=><AboutUs {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                        <Route path='/selfPickup' render={props=><SelfPickup {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                        <Route path='/contact' render={props=><Contact {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                        <Route path='/search' render={props=><Search {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                        <Route path='/basket' render={props=><Basket {...props} removeBook={this.removeBook} addBook={ this.addBook} basket={this.state.basket} />}/>
                        <Route path='/sf' render={props=><Category {...props} addBook={ this.addBook} basket={this.state.basket} category="s-f"/>}/>
                        <Route path='/popularsience' render={props=><Category {...props} addBook={ this.addBook} basket={this.state.basket} category="popularnonaukowe"/>}/>
                        <Route path='/comic' render={props=><Category {...props} addBook={ this.addBook} basket={this.state.basket} category="komiksy"/>}/>
                        <Route path='/thiller' render={props=><Category {...props} addBook={ this.addBook} basket={this.state.basket} category="thiller"/>}/>
                        <Route path='/description/:id' render={props=><Description {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                        <Route path='/orderCompleted' render={props=><OrderCompleted {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                        <Route path='/login' render={props=><Login {...props} addBook={ this.addBook} basket={this.state.basket} />}/>
                </Navigation>
            </HashRouter>
            </div>

        );
    };
};

export default App;