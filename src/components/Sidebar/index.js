import React from 'react';
import { menu } from '../../routes/route';
import { PUBLIC_URL } from '../../utils/const';
import SidebarItem from '../SidebarItem';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__logo'>
        <img src={`${PUBLIC_URL}/icons/logo.svg`} alt='' />
      </div>
      <div className='sidebar__menu'>
        <ul>
          {menu.map((item) => (
            <SidebarItem key={item.name} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
