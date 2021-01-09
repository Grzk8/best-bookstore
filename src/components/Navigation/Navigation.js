import React, {Component} from 'react';
import MainMenu from './Toolbar/MainMenu';
import AsideMenu from './Toolbar/AsideMenu';
import Footer from './Footer/Footer';

class Nav extends React.Component {
    render() {
        return (<>
            <MainMenu />
            <div className="container">
                <AsideMenu basket={this.props.basket}/>
                <section>
                    {this.props.children}
                </section>
            </div>
            <Footer />
        </>);
    };
};

export default Nav;

