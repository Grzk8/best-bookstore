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
        return (
            <>

                <header>
                    <div className='headerMain'>
                        <div className='logo'><li className="menuItem"><NavLink to="/" activeClassName="active">BooKStore</NavLink></li></div>
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
                                    <li className="asideItem bascet"><NavLink to="/bascet" activeClassName="active">Koszyk<div className="basketLogo"></div><p>0 produktów</p><p>0 zł</p></NavLink></li>
                                    <li className="asideItem itemList"><NavLink to="/sf" activeClassName="active">Sience - fiction</NavLink></li>
                                    <li className="asideItem itemList"><NavLink to="/popularSience" activeClassName="active">Popularnonaukowe</NavLink></li>
                                    <li className="asideItem itemList"><NavLink to="/comic" activeClassName="active">Komiksy</NavLink></li>
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
                        <div className="rights"></div>
                        <div className="media"></div>

                    </div>
                </footer>
            </>

        )
    }

}

export default Nav;