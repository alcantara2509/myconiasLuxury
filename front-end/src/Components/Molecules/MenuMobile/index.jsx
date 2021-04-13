/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HamburgerMenuComp } from '../../Atoms';
import { logoSecondary } from '../../../assets';
import { MenuContent } from '../../Organisms';
import './style.css';

const MenuMobile = () => {
  const [menuToggle, setMenuToggle] = useState('menu-content-container');

  const handleClickToggle = () => {
    if (menuToggle === 'menu-content-container') {
      setMenuToggle('menu-content-container-on');
    }
    if (menuToggle === 'menu-content-container-on') {
      setMenuToggle('menu-content-container');
    }
  };

  return (
    <section className="menu-mobile-container" id="top">
      <section className="menu-mobile-content">
        <Link to="/" className="link-logo-menu">
          <img src={logoSecondary} alt="logo" className="logo-menu-mobile" />
        </Link>
        <button type="button" className="menu-hamb-btn" onClick={handleClickToggle}>
          <HamburgerMenuComp />
        </button>
      </section>
      <MenuContent toggle={menuToggle} />
    </section>
  );
};

export default MenuMobile;
