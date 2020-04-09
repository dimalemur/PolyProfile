import React from 'react';
import './regnavbar.pcss';
import logo from '../../../source/images/icons/logo.svg';
import menu from '../../../source/images/icons/menu.svg';

export const Regnavbar = (props) => (
  <div className='Navbar Regnavbar Regcontent-Navbar' >
    <div className='Navbar-Logo'>
      <div className='Logo-Logo'>
        <img src={logo} alt='' />
      </div>
      <div className='Logo-Text'>
        <span className='Logo_first'>Личный кабинет</span>
        <span className='Logo_second' >Студентов и преподавателей</span>
      </div>
    </div>
    <div className='Menu-Icon'>
      <img id='Ficon' src={menu} alt='' />
    </div>
  </div>
);
