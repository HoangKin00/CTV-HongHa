import React from 'react';
import { Link } from 'react-router-dom';
import './headerItem.scss';
const HeaderItem = (props) => {
  return (
    <>
      <Link to={props.link}>
        <li className='headerItem__menu'>{props.name}</li>
      </Link>
    </>
  );
};

export default HeaderItem;
