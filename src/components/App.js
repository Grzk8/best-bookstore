import React, { useCallback, useState, useEffect } from "react";
import { HashRouter, Route } from 'react-router-dom';
import Main from './MenuInfo/Main';
import AboutUs from './MenuInfo/AboutUs/AboutUs';
import SelfPickup from './MenuInfo/SelfPickup/SelfPickup';
import Description from './MenuInfo/Categories/Description';
import Category from "./MenuInfo/Categories/Category";
import Orders from './MenuInfo/Orders/Orders';
import OrderCompleted from "./Basket/OrderCompleted";
import Navigation from './Navigation/Navigation';
import Basket from './Basket/Basket';
import Search from './MenuInfo/Search/Search';
import Login from './Layout/Auth/Login/Login';
import Signup from './Layout/Auth/Signup/Signup';
import UpdateData from './MenuInfo/UpdateData/UpdateData';
import Newest from "./MenuInfo/Newest/Newest";
import Sale from "./MenuInfo/Sale/Sale";
import { AuthContext } from "./Layout/Auth/auth-context";

const App = () => {
    const [token, setToken] = useState(false);
    const [userId, setUserId] = useState(false);
    const [basket, setBasket] = useState([]);
    const [searchingValue, setSearchingValue] = useState('');
    const [isSubmmited, setIsSubmitted] = useState(false);

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
        localStorage.removeItem('userData');
    }, []);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (storedData && storedData.token) {
            login(storedData.userId, storedData.token);
        }
    }, [login]);

    const searching = (value) => {
        setSearchingValue(value);
    };

    const submitSearchForm = () => {
        setIsSubmitted(prevState => !prevState);
    }

    const addBook = (book) => {
        setBasket(basket => [...basket, book]);
    };

    const removeBook = (id) => {
        const removedFromBasket = basket.filter(r => {
            return r._id !== id;
        });
        setBasket(removedFromBasket);
    };

    const clearBasket = () => {
        setBasket([])
    };

    let auth = (
        <>
            <Route path='/login' render={props => <Login {...props} basket={basket} />} />
            <Route path='/signup' render={props => <Signup {...props} basket={basket} />} />
        </>
    );

    const routes = <>
        <Route exact path='/' render={props => <Main {...props} addBook={addBook} basket={basket} />} />
        <Route path='/aboutUs' render={props => <AboutUs {...props} basket={basket} />} />
        <Route path='/selfPickup' render={props => <SelfPickup {...props} basket={basket} />} />
        <Route path='/search' render={props => <Search {...props} addBook={addBook} basket={basket} searchingValue={searchingValue} isSubmmited={isSubmmited} submitSearchForm={submitSearchForm} />} />
        <Route path='/basket' render={props => <Basket {...props} removeBook={removeBook} clearBasket={clearBasket} basket={basket} />} />
        <Route path='/sf' render={props => <Category {...props} addBook={addBook} basket={basket} category="s-f" />} />
        <Route path='/popularsience' render={props => <Category {...props} addBook={addBook} basket={basket} category="popularnonaukowe" />} />
        <Route path='/comic' render={props => <Category {...props} addBook={addBook} basket={basket} category="komiksy" />} />
        <Route path='/thiller' render={props => <Category {...props} addBook={addBook} basket={basket} category="thiller" />} />
        <Route path='/description/:_id' render={props => <Description {...props} basket={basket} />} />
        <Route path='/orders' render={props => <Orders {...props} addBook={addBook} basket={basket} />} />
        <Route path='/updatedata' render={props => <UpdateData {...props} addBook={addBook} basket={basket} />} />
        <Route path='/ordercompleted' render={props => <OrderCompleted {...props} addBook={addBook} basket={basket} />} />
        <Route path='/newest' render={props => <Newest {...props} addBook={addBook} basket={basket} />} />
        <Route path='/sale' render={props => <Sale {...props} addBook={addBook} basket={basket} />} />

        {auth}
    </>

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                userId: userId,
                login: login,
                logout: logout
            }}>

            <div className="navigation">
                <HashRouter>
                    <Navigation
                        basket={basket}
                        searchingValue={searchingValue}
                        searching={searching}
                        submitSearchForm={submitSearchForm}
                    >
                        {routes}
                    </Navigation>
                </HashRouter>
            </div>
        </AuthContext.Provider>
    );
};

export default App;