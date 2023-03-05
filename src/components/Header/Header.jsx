import { React } from 'react';
import './Header.css';
import headerLogo from '../../images/header_logo.svg';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <section className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
      <Navigation />
    </section>
  );
}
