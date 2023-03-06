import { React, Link } from 'react-router-dom';
import './Burger.css';
import closeIcon from '../../images/close_icon.svg';

export default function Burger({ isBurgerOpen, onClose }) {
  const burgerClassName = `burger ${isBurgerOpen ? 'burger_open' : ''}`;

  return (
    <div className={burgerClassName}>
      <div className="burger__left-bar" />
      <nav className="burger__menu-container">
        <img className="burger__close-icon" src={closeIcon} alt="иконка закрытия меню" onClick={onClose} />
        <ul className="burger__navigation-list">
          <li>
            <Link to="/" className="burger__navigation-link" onClick={onClose}>
              Главная
            </Link>
          </li>
          <li>
            <Link to="/movies" className="burger__navigation-link burger__navigation-link_active" onClick={onClose}>
              Фильмы
            </Link>
          </li>
          <li>
            <Link to="/saved-movies" className="burger__navigation-link" onClick={onClose}>
              Сохраненные
            </Link>
          </li>
          <li className="burger__navigation-item_account">
            <Link to="/profile" className="burger__navigation-link burger__navigation-link_account" onClick={onClose}>
              Аккаунт
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
