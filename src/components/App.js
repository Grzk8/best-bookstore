import React, { Component, useState } from "react";
import { HashRouter, Route } from 'react-router-dom';
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

const App = () => {
    const [basket, setBasket] = useState([]);

    const addBook = (book) => {
        setBasket(basket => [...basket, book]);
    };

    const removeBook = (id) => {
        const newBasket = basket.filter(r => {
            return r.id !== id;
        });
        setBasket(newBasket)
    };

    return (
        <div className="navigation">
            <HashRouter>
                <Navigation basket={basket}>
                    <Route exact path='/' render={props => <Main {...props} addBook={addBook} basket={basket} />} />
                    <Route path='/aboutUs' render={props => <AboutUs {...props} addBook={addBook} basket={basket} />} />
                    <Route path='/selfPickup' render={props => <SelfPickup {...props} addBook={addBook} basket={basket} />} />
                    <Route path='/contact' render={props => <Contact {...props} addBook={addBook} basket={basket} />} />
                    <Route path='/search' render={props => <Search {...props} addBook={addBook} basket={basket} />} />
                    <Route path='/basket' render={props => <Basket {...props} removeBook={removeBook} addBook={addBook} basket={basket} />} />
                    <Route path='/sf' render={props => <Category {...props} addBook={addBook} basket={basket} category="s-f" />} />
                    <Route path='/popularsience' render={props => <Category {...props} addBook={addBook} basket={basket} category="popularnonaukowe" />} />
                    <Route path='/comic' render={props => <Category {...props} addBook={addBook} basket={basket} category="komiksy" />} />
                    <Route path='/thiller' render={props => <Category {...props} addBook={addBook} basket={basket} category="thiller" />} />
                    <Route path='/description/:_id' render={props => <Description {...props} addBook={addBook} basket={basket} />} />
                    <Route path='/orderCompleted' render={props => <OrderCompleted {...props} addBook={addBook} basket={basket} />} />
                    <Route path='/login' render={props => <Login {...props} addBook={addBook} basket={basket} />} />
                </Navigation>
            </HashRouter>
        </div>

    );

};

export default App;