import React, { useEffect, useState } from 'react';
import { PUBLIC_URL } from '../../utils/const';
import { dropdownheader } from '../../routes/route';
import HeaderItem from '../HeaderItem';
import { useGetUser } from '../../service/collaboratorService';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './header.scss';
import { useNavigate } from 'react-router-dom';

export const Header = ({ handleClick, isActive }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('tokenCTVHH', null);
  const { dataUser, isSuccessUser, isErrorUser } = useGetUser(token);
  useEffect(() => {
    if (isSuccessUser) {
      if (dataUser.data.stage !== 1) {
        setUser(dataUser.data.result);
      }
    }
  }, [isSuccessUser, dataUser]);
  useEffect(() => {
    if (isSuccessUser) {
      if (dataUser.data.stage === 1) {
        alert(dataUser.data.massage)
        navigate('/login');
      }
    } else if (isErrorUser) {
      alert('Lỗi hệ thống. Vui lòng đăng nhập lại')
      navigate('/login');
      setToken(null);
    }
  }, [isSuccessUser, dataUser, navigate, setToken, isErrorUser])
  return (
    <div className='header'>
      <div className='header__box'>
        <div className='header__icon'>
          <div className={isActive ? 'header__click' : 'header__des'} onClick={handleClick}>
            <img src={`${PUBLIC_URL}/icons/menu-m.svg`} alt='' />
          </div>
          <div className={isActive ? 'header__des' : 'header__click'} onClick={handleClick}>
            <img src={`${PUBLIC_URL}/icons/x.svg`} alt='' />
          </div>
        </div>
        <div className='header__content'>
          {user && <p>{user.name}</p>}
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
