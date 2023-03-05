import { React, useState } from 'react';
import {
  Link, useLocation,
} from 'react-router-dom';

import useWindowWidth from '../../utils/CustomHooks';
import './Navigation.css';
import burgerIcon from '../../images/burger_icon.svg';
import Burger from '../Burger/Burger';

export default function Navigation() {
  const location = useLocation();
  const isLandingOpen = location.pathname === '/';
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  let showBurgerIcon = false;

  function openBurger() {
    setBurgerOpen(true);
  }
  function closeBurger() {
    setBurgerOpen(false);
  }

  const width = useWindowWidth();

  if ((width < 769 && !isLandingOpen) || (width < 501 && isLandingOpen)) {
    showBurgerIcon = true;
  }

  return (
    <nav className="navigation">
      <ul className={`navigation__list_movies ${isLandingOpen || showBurgerIcon ? 'navigation__list_hidden' : ''}`}>
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
          <Link to="/signup" className={`navigation__link ${isLandingOpen ? '' : 'navigation__link_hidden'}`}>
            Регистрация
          </Link>
        </li>
        <li>
          <Link to="/signin" className={`navigation__link navigation__link_active ${isLandingOpen ? '' : 'navigation__link_hidden'}`}>
            Войти
          </Link>
        </li>
        <li>
          <Link to="/profile" className={`navigation__link navigation__link_account ${isLandingOpen || showBurgerIcon ? 'navigation__link_hidden' : ''}`}>
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
