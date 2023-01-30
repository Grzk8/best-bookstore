import React, {useContext} from "react"
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Layout/Auth/auth-context';
import Background from '../Background/Background';


const UserSublist = props => {
    const auth = useContext(AuthContext);

    let attachedClasses = ['header_buttons_item-user_sublist', 'close'];
    if (props.open && auth.isLoggedIn) {
        attachedClasses = ['header_buttons_item-user_sublist', 'open']
    };

    return (<>
        <Background show={props.open} clicked={props.closed}/>
        <ul className={attachedClasses.join(' ')} onClick={props.closed} >
            <li><NavLink to="/updatedata" className="user" activeClassName="active">Zmiana danych</NavLink></li>
            <li><NavLink to="/orders" className="user" activeClassName="active">Moje zamówienia</NavLink></li>
            <li><NavLink to="/" className="user" activeClassName="active" onClick={auth.logout}>Wyloguj się</NavLink></li>
        </ul>
    </>)
};

export default UserSublist;