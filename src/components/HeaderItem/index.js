import React from 'react';
import { Link } from 'react-router-dom';
import './headerItem.scss';
const HeaderItem = (props) => {
  const handleLogout = () => {
    if (props.name === 'Đăng xuất') {
      localStorage.removeItem('tokenCTVHH');
    }
  }
  return (
    <>
      <Link to={props.link} onClick={handleLogout}>
        <li className='headerItem__menu'>{props.name}</li>
      </Link>
    </>
  );
};

export default HeaderItem;
