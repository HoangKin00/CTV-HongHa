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
      <li className='headerItem__menu'>
        <Link to={props.link} onClick={handleLogout}>
          {props.name}
        </Link>
      </li>
    </>
  );
};

export default HeaderItem;
