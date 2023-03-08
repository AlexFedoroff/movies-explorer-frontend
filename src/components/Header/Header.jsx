import { React } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import headerLogo from '../../images/header_logo.svg';
import Navigation from '../Navigation/Navigation';

export default function Header({ isLoggedIn }) {
  const location = useLocation();
  let showHeader = true;

  if (location.pathname.match(/sign.*/g)) {
    showHeader = false;
  }

  // temporary for review
  if (location.pathname.match(/movies.*/g)) {
    // eslint-disable-next-line no-param-reassign
    isLoggedIn = true;
  }

  return (
    <header className={`header ${!showHeader ? 'header_hidden' : ''}`}>
      <Link to="/">
        <img className="header__logo" src={headerLogo} alt="Логотип" />
      </Link>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}
