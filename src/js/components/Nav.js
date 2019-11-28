import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
class Nav extends React.Component {
    render() {
        console.log(this.props.basket)
        return (
            <>

                <header>
                    <div className='headerMain'>
                        <div className='logo'><li className="menuItem"><NavLink to="/" activeClassName="active"><span className="logoBB">Best</span><span>BooK</span ><span className="logoBB">Store</span></NavLink></li></div>
                        <div className='menu'>
                            <ul className='menuList'>
                                <li className="menuItem"><NavLink to="/aboutUs" activeClassName="active">O nas</NavLink></li>
                                <li className="menuItem"><NavLink to="/deliveryCost" activeClassName="active">Koszt dostawy</NavLink></li>
                                <li className="menuItem"><NavLink to="/selfPickup" activeClassName="active">Odbiór osobisty</NavLink></li>
                                <li className="menuItem"><NavLink to="/contact" activeClassName="active">Kontakt</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </header>


                <main>
                    <div className="container">
                        <aside>
                            <div className="containerAside">
                                <ul className="asideList">
                                    <li className="asideItem bascet"><NavLink to="/bascet" activeClassName="active">Koszyk<div className="basketLogo"></div><p>{this.props.basket? this.props.basket.length : 0} produktów</p><p> {this.props.basket ? this.props.basket.reduce((x, y) => x+y.price, 0).toFixed(2):0} zł</p></NavLink></li>
                                    <li className="asideItem itemList"><NavLink to="/sf" activeClassName="active">Sience - fiction</NavLink></li>
                                    <li className="asideItem itemList"><NavLink to="/popularSience" activeClassName="active">Popularnonaukowe</NavLink></li>
                                    <li className="asideItem itemList"><NavLink to="/comic" activeClassName="active">Komiksy</NavLink></li>
                                    <li className="asideItem itemList"><NavLink to="/thiller" activeClassName="active">Kryminał</NavLink></li>
                                </ul>
                            </div>
                        </aside>
                        <section>
                                {this.props.children}
                        </section>
                    </div>
                </main>


                <footer>
                    <div className="footerMain">
                        <div className="rights">
                            <div className="logo logosmall">Best<span>BooK</span>Store</div>
                            <div className="bestbookstoreRights">2019 BestBooKStore sp z o.o. All rights reserved</div>
                        </div>
                        <div className="media">
                            <a href="https://twitter.com"><img src="../../images/Twitter.svg"></img></a>
                            <a href="https://facebook.com"><img src="../../images/Facebook.svg"></img></a>
                        </div>

                    </div>
                </footer>
            </>

        )
    }

}

export default Nav;

