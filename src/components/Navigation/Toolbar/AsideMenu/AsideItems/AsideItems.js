import React from 'react';
import {NavLink} from 'react-router-dom';

const asideItems = () => (
     <ul className={asideItems}>
         <NavLink to="/sf" activeClassName="active"><li className="asideItem itemList">Sience - fiction</li></NavLink>
        <NavLink to="/popularSience" activeClassName="active"><li className="asideItem itemList">Popularnonaukowe</li></NavLink>
        <NavLink to="/comic" activeClassName="active"><li className="asideItem itemList">Komiksy</li></NavLink>
        <NavLink to="/thiller" activeClassName="active"><li className="asideItem itemList">Kryminał</li></NavLink>
    </ul>
);

export default asideItems;