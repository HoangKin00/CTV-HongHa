import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './home.scss';

const Home = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage('tokenCTVHH', null);
  useEffect(() => {
    if (token === null) {
      navigate('/login');
    }
  }, [token, navigate])
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className='home'>
      <div className={isActive ? 'home__sidebar' : 'home__click'}>
        <Sidebar handleClick={handleClick} isActive={isActive} />
      </div>
      <div className='home__box'>
        <div className='home__header'>
          <Header handleClick={handleClick} isActive={isActive} />
        </div>
        <div className='home__main'>
          <Outlet />
          <div className={isActive ? 'home__activebg' : 'home__bg'} onClick={handleClick}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
