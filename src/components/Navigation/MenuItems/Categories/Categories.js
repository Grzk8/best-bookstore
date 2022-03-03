import React from 'react';
import {NavLink} from 'react-router-dom';

const categoties = () => (
     <ul className='categoties'>
        <NavLink to="/sf" activeClassName="active"><li className="categoriesItem itemList">Sience - fiction</li></NavLink>
        <NavLink to="/popularSience" activeClassName="active"><li className="categoriesItem itemList">Popularnonaukowe</li></NavLink>
        <NavLink to="/comic" activeClassName="active"><li className="categoriesItem itemList">Komiksy</li></NavLink>
        <NavLink to="/thiller" activeClassName="active"><li className="categoriesItem itemList">Kryminał</li></NavLink>
    </ul>
);

export default categoties;