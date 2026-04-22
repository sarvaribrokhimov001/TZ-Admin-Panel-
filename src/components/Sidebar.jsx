import React from 'react';
import "../styles/Sidebar.css";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar__container'>
        <ul className='sidebar__links'>
            <li> <NavLink className={'sidebar__link'} to="/products"> Products </NavLink> </li>
            <li> <NavLink className={'sidebar__link'} to="/users"> Users </NavLink> </li>
            <li> <NavLink className={'sidebar__link'} to="/cars"> Cars </NavLink> </li>
        </ul>
    </div>
  )
}
export default Sidebar