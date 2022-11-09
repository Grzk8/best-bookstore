import React, { useCallback, useState } from "react";
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
import Login from './Layout/Auth/Login/Login';
import Signup from './Layout/Auth/Signup/Signup';
import { AuthContext } from "./Layout/Auth/auth-context";

const App = () => {
    const [token, setToken] = useState(false);
    const [userId, setUserId] = useState(false);
    const [basket, setBasket] = useState([]);

    const login = useCallback((uid, token) => {
        setToken(token);
        setUserId(uid);
        localStorage.setItem(
            'userData',
            JSON.stringify({ userId: uid, token: token })
        );
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
    }, []);

    const addBook = (book) => {
        setBasket(basket => [...basket, book]);
    };

    const removeBook = (id) => {
        const removedFromBasket = basket.filter(r => {
            return r._id !== id;
        });
        setBasket(removedFromBasket);
    };

    let auth = (
        <>
            <Route path='/login' render={props => <Login {...props} basket={basket} />} />
            <Route path='/signup' render={props => <Signup {...props} basket={basket} />} />
        </>
    );

    if (token) {
        auth = null;
    };

    const routes = <>
        <Route exact path='/' render={props => <Main {...props} addBook={addBook} basket={basket} />} />
        <Route path='/aboutUs' render={props => <AboutUs {...props} basket={basket} />} />
        <Route path='/selfPickup' render={props => <SelfPickup {...props} basket={basket} />} />
        <Route path='/contact' render={props => <Contact {...props} basket={basket} />} />
        <Route path='/search' render={props => <Search {...props} addBook={addBook} basket={basket} />} />
        <Route path='/basket' render={props => <Basket {...props} removeBook={removeBook} basket={basket} />} />
        <Route path='/sf' render={props => <Category {...props} addBook={addBook} basket={basket} category="s-f" />} />
        <Route path='/popularsience' render={props => <Category {...props} addBook={addBook} basket={basket} category="popularnonaukowe" />} />
        <Route path='/comic' render={props => <Category {...props} addBook={addBook} basket={basket} category="komiksy" />} />
        <Route path='/thiller' render={props => <Category {...props} addBook={addBook} basket={basket} category="thiller" />} />
        <Route path='/description/:_id' render={props => <Description {...props} basket={basket} />} />
        <Route path='/orderCompleted' render={props => <OrderCompleted {...props} basket={basket} />} />
        {auth}
    </>

    return (
        <AuthContext.Provider value={{ isLoggedIn: !!token, token: token, userId: userId, login: login, logout: logout }}>
            <div className="navigation">
                <HashRouter>
                    <Navigation basket={basket}>
                        {routes}
                    </Navigation>
                </HashRouter>
            </div>
        </AuthContext.Provider>
    );
};

export default App;