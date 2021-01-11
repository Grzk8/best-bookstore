import React, {Component} from 'react';
import MainMenu from './Toolbar/MainMenu/MainMenu';
import AsideMenu from './Toolbar/AsideMenu/AsideMenu';
import Footer from './Footer/Footer';
import SideDrawer from './SideDrawer/SideDrawer';

class Navigation extends React.Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer = false});
    };

    render() {
        return (<>
            <MainMenu />
            <SideDrawer />
            <div className="container">
                <AsideMenu basket={this.props.basket}/>
                <div className="mainWindow">
                    {this.props.children}
                </div>
            </div>
            <Footer />
        </>);
    };
};

export default Navigation;