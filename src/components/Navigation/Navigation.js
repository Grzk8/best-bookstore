import React, { useState } from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer';
import SideDrawer from './SideDrawer/SideDrawer';
import MenuItems from './MenuItems/MenuItems'

const Navigation = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(prevState => !prevState)
    };

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    };

    return (
        <div className="container">
            <Header drawerToggleClicked={sideDrawerToggleHandler} basket={props.basket} />
            <MenuItems />
            <SideDrawer open={showSideDrawer}
                closed={sideDrawerClosedHandler}
                basket={props.basket} />
            <div className="container">
                <div className="mainWindow">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Navigation;