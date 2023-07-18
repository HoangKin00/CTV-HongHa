import React, { useState } from 'react';
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
          <Link to={'/service-list'} className='sidebar__text'>
            <img src={`${PUBLIC_URL}/icons/service.svg`} alt='' />
            Dịch vụ
          </Link>
          <Link to={'/report-service'} className='sidebar__text'>
            <img src={`${PUBLIC_URL}/icons/report.svg`} alt='' />
            Báo cáo Dịch vụ
          </Link>
          <Link to={'/report-finance'} className='sidebar__text'>
            <img src={`${PUBLIC_URL}/icons/report.svg`} alt='' />
            Báo cáo Tài chính
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
