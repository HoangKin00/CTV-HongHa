import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import './home.scss';

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive(!isActive);
  };
  return (
    <div className='home'>
      <div className={isActive ? 'home__sidebar' : 'home__click'}>
        <Sidebar isActive={isActive} />
      </div>
      <div className='home__box'>
        <div className='home__header'>
          <Header handleClick={handleClick} isActive={isActive} />
        </div>
        <div className='home__main'>
          <Outlet />
          <div className={isActive ? 'home__activebg' : 'home__bg'}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
