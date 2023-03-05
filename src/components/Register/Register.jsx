import { React } from 'react-router-dom';
import './Register.css';
import headerLogo from '../../images/header_logo.svg';

export default function Register() {
  return (
    <div className="register__popup register__popup_opened">
      <div className="register__container">
        <img className="register__logo" src={headerLogo} alt="logo" />
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" name="register-form">
          <label className="register__label" htmlFor="name-input">
            Имя
            <input
              type="text"
              className="register__field"
              id="name-input"
              placeholder="Имя"
              name="name"
              required
            />
          </label>
          <p className="register__input-error" />
          <label className="register__label" htmlFor="email-input">
            E-mail
            <input
              type="email"
              className="register__field"
              id="email-input"
              placeholder="email"
              name="email"
              required
            />
          </label>
          <p className="register__input-error" />
          <label className="register__label" htmlFor="pwd-input">
            Пароль
            <input
              type="password"
              className="register__field"
              id="pwd-input"
              placeholder="password"
              name="password"
              required
            />
          </label>
          <p className="register__input-error">Что-то пошло не так...</p>
          <div className="register__btns-container">
            <button
              className="register__btn"
              type="submit"
            >
              Зарегистрироваться
            </button>
            <span className="register__unregged-lbl">
              <span>Уже зарегистрированы?</span>
              <a href="/signin" className="register__login-link">
                Войти
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
