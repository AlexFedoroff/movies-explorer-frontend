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

  return (
    <section className={`header ${!showHeader ? 'header_hidden' : ''}`}>
      <Link to="/">
        <img className="header__logo" src={headerLogo} alt="Логотип" />
      </Link>
      <Navigation isLoggedIn={isLoggedIn} />
    </section>
  );
}
