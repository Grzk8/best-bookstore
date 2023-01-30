import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Layout/Logo/Logo';
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import BasketButton from "../../Layout/BasketButton/BasketButton";
import UserButton from '../../Layout/UserButton/UserButton';
import Search from "../../Layout/Search/Search";
import UserSublist from '../../Layout/User-sublist/User-sublist';
import { AuthContext } from '../../Layout/Auth/auth-context';

const header = props => {
    const auth = useContext(AuthContext);
    const [showSublist, setShowSublist] = useState(false);

    const sublistToggleHandler = () => {
        setShowSublist(prevState => !prevState);
    };

    const sublistClosedHandler = () => {
        setShowSublist(false);
    };

    return (
        <div className='header'>
            <div className='header_main'>
                <DrawerToggle clicked={props.drawerToggleClicked} />
                <div className='header_logo_container'>
                    <Logo fontSize='2em' />
                </div>
                <div className='search_desktop_only'>
                    <Search />
                </div>
                <div className='header_buttons_container'>
                    <div className='header_buttons_item auth'>
                        <UserButton sublistToggleClicked={sublistToggleHandler} />
                    </div>
                    <div className='header_buttons_item basket'>
                        <BasketButton basket={props.basket} totalPrice={props.totalPrice} />
                    </div>
                    <UserSublist
                            open={showSublist}
                            closed={sublistClosedHandler}
                        />
                </div>
            </div>
            <div className='header_menu'>
                <div className='header_search_container search_mobile_only'>
                    <Search />
                </div>
            </div>

        </div>
    );
};

export default header;


    // let fontSize = null;
    // let crit = "(max-width: 700px)";
    // let mobile = window.matchMedia(crit).matches

    // if (mobile) {
    //     fontSize = '2em'
    // } else {
    //     fontSize = '2em'
    // };

    // let links = (
    //     <>
    //         <NavLink to="/login" className='auth' activeClassName="active">Zaloguj się</NavLink>
    //         <NavLink to="/signup" className='auth' activeClassName="active">Załóż konto</NavLink>
    //     </>
    // );

    // if (auth.isLoggedIn) {
    //     links = (
    //         <>
    //             <NavLink to="/" className='auth' onClick={auth.logout} activeClassName="active">wyloguj się</NavLink>
    //             <p> Moje konto</p>
    //         </>
    //     );
    // }