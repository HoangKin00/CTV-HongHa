import React from 'react';
import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../utils/const';
import './collaborator.scss';

const Collaborator = () => {
  return (
    <div className='collaborator'>
      <div className='collaborator__title'>
        <span>Thông tin</span>
      </div>
      <div className='collaborator__box'>
        <Link to={`/infomation`} className='collaborator__item'>
          <img src={`${PUBLIC_URL}/icons/info.svg`} alt='' />
          <p>Thông tin tài khoản</p>
        </Link>
        <Link to={`/contract`} className='collaborator__item'>
          <img src={`${PUBLIC_URL}/icons/contract.svg`} alt='' />
          <p>Hợp đồng</p>
        </Link>
      </div>
    </div>
  );
};

export default Collaborator;
