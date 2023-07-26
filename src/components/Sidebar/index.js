import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../utils/const';
import './sidebar.scss';

const Sidebar = ({ isActive }) => {
  return (
    <div className={isActive ? 'sidebar' : 'click'}>
      <div className='sidebar__logo'>
        <img src={`${PUBLIC_URL}/icons/logo.svg`} alt='' />
      </div>
      <div className='sidebar__menu'>
        <ul>
          <Link to={'/customer-list'} className='sidebar__text'>
            <img src={`${PUBLIC_URL}/icons/customer.svg`} alt='' />
            Khách hàng
          </Link>
          <Link to={'/booking'} className='sidebar__text'>
            <img src={`${PUBLIC_URL}/icons/file-regular.svg`} alt='' />
            Booking
          </Link>
          <Link to={'/payment'} className='sidebar__text'>
            <img src={`${PUBLIC_URL}/icons/service.svg`} alt='' />
            Payment
          </Link>
          <Link to={'/invoice'} className='sidebar__text'>
            <img src={`${PUBLIC_URL}/icons/report.svg`} alt='' />
            Phiếu chi hoa hồng
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
