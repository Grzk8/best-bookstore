import React from 'react';
import {NavLink} from 'react-router-dom';

const asideItems = () => {
    return (
        <ul className={asideItems}>
            <li className="asideItem itemList"><NavLink to="/sf" activeClassName="active">Sience - fiction</NavLink></li>
            <li className="asideItem itemList"><NavLink to="/popularSience" activeClassName="active">Popularnonaukowe</NavLink></li>
            <li className="asideItem itemList"><NavLink to="/comic" activeClassName="active">Komiksy</NavLink></li>
            <li className="asideItem itemList"><NavLink to="/thiller" activeClassName="active">Kryminał</NavLink></li>
        </ul>
    );
};

export default asideItems;