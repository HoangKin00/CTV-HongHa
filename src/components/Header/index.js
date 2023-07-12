import React from 'react';
import { PUBLIC_URL } from '../../utils/const';
import { dropdownheader } from '../../routes/route';
import HeaderItem from '../HeaderItem';
import './header.scss';

export const Header = () => {
  return (
    <div className='header'>
      <div className='header__box'>
        <div className='header__des'>Cộng tác viên</div>
        <div className='header__content'>
          <p>Phạm Thanh Hoa</p>
          <div className='header__user'>
            <img src={`${PUBLIC_URL}/icons/user.svg`} alt='' />
          </div>
          <div className='header__dropdown'>
            <ul>
              {dropdownheader.map((item) => (
                <HeaderItem key={item.name} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
