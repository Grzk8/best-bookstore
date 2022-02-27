import React, {Component} from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer';
import SideDrawer from './SideDrawer/SideDrawer';
import MenuItems from './MenuItems/MenuItems'

class Navigation extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    render() {
        return (<>

            <Header drawerToggleClicked={this.sideDrawerToggleHandler} basket={this.props.basket}/>
            <MenuItems/>
            <SideDrawer open={this.state.showSideDrawer}
             closed={this.sideDrawerClosedHandler}
             basket={this.props.basket}/>
            <div className="container">
                <div className="mainWindow">
                    {this.props.children}
                </div>
            </div>
            <Footer />
        </>);
    };
};

export default Navigation;