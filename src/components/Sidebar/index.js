import React from 'react';
import { NavLink } from 'react-router-dom';
import { PUBLIC_URL } from '../../utils/const';
import './sidebar.scss';

const Sidebar = ({ handleClick, isActive }) => {
  return (
    <div className={isActive ? 'sidebar' : 'click'}>
      <div className='sidebar__logo'>
        <img src={`${PUBLIC_URL}/icons/logo.svg`} alt='' />
      </div>
      <div className='sidebar__menu'>
        <ul>
          <NavLink to={'/customer-list'} className='sidebar__text' onClick={handleClick}>
            <i className="icon-users-2"></i>
            Khách hàng
          </NavLink>
          <NavLink to={'/booking'} className='sidebar__text' onClick={handleClick}>
            <i className="icon-doc-inv"></i>
            Booking
          </NavLink>
          <NavLink to={'/payment'} className='sidebar__text' onClick={handleClick}>
            <i className="icon-list-bullet"></i>
            Payment
          </NavLink>
          <NavLink to={'/invoice'} className='sidebar__text' onClick={handleClick}>
            <i className="icon-check"></i>
            Phiếu chi hoa hồng
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
