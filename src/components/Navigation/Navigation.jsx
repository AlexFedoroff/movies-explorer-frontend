/* eslint-disable max-len */
import { React, useState } from 'react';
import {
  Link, useLocation,
} from 'react-router-dom';

import useWindowWidth from '../../utils/CustomHooks';
import './Navigation.css';
import burgerIcon from '../../images/burger_icon.svg';
import Burger from '../Burger/Burger';

export default function Navigation({ isLoggedIn }) {
  const location = useLocation();
  const isLandingOpen = location.pathname === '/';
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  let showBurgerIcon = false;
  let hiddenNavLink = '';

  function openBurger() {
    setBurgerOpen(true);
  }
  function closeBurger() {
    setBurgerOpen(false);
  }

  const width = useWindowWidth();

  if ((width < 769 && !isLandingOpen)) {
    showBurgerIcon = true;
  }
  if (isLoggedIn || !isLandingOpen) {
    hiddenNavLink = 'navigation__link_hidden';
  }

  return (
    <nav className="navigation">
      <ul className={`navigation__list-movies ${!isLoggedIn || showBurgerIcon ? 'navigation__list-movies_hidden' : ''}`}>
        <li>
          <Link to="/movies" className="navigation__link navigation__link_movies">
            Фильмы
          </Link>
        </li>
        <li>
          <Link to="/saved-movies" className="navigation__link navigation__link_movies">
            Сохраненные фильмы
          </Link>
        </li>
      </ul>
      <ul className="navigation__list">
        <li>
          <Link to="/signup" className={`navigation__link ${hiddenNavLink}`}>
            Регистрация
          </Link>
        </li>
        <li>
          <Link to="/signin" className={`navigation__link navigation__link_active ${hiddenNavLink}`}>
            Войти
          </Link>
        </li>
        <li>
          <Link to="/profile" className={`navigation__link navigation__link_account ${!isLoggedIn || showBurgerIcon ? 'navigation__link_hidden' : ''}`}>
            Аккаунт
          </Link>
        </li>
      </ul>
      <img className={`navigation__burger ${showBurgerIcon ? '' : 'navigation__burger_state'}`} src={burgerIcon} alt="иконка меню" onClick={openBurger} />
      <Burger
        isBurgerOpen={isBurgerOpen}
        onClose={closeBurger}
      />
    </nav>
  );
}
/*
<Link to="/signup" className={`navigation__link ${isLandingOpen ? '' : 'navigation__link_hidden'}`}>
<Link to="/profile" className={`navigation__link navigation__link_account ${isLandingOpen || showBurgerIcon || isLoggedIn ? 'navigation__link_hidden' : ''}`}></Link>
*/
