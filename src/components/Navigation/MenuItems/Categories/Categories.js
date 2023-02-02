import React from 'react';
import { NavLink } from 'react-router-dom';

const categoties = () => (
    <ul className='categoties'>
        <NavLink to="/sf" activeClassName="active" category="s-f"><li className="categoriesItem itemList">sience - fiction</li></NavLink>
        <NavLink to="/popularSience" activeClassName="active" category="popularnonaukowe"><li className="categoriesItem itemList">popularnonaukowe</li></NavLink>
        <NavLink to="/comic" activeClassName="active"><li className="categoriesItem itemList">komiksy</li></NavLink>
        <NavLink to="/thiller" activeClassName="active" category="thiller"><li className="categoriesItem itemList">kryminał</li></NavLink>
    </ul>
);

export default categoties;