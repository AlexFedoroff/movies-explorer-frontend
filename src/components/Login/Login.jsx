import { useState } from 'react';
import {
  React,
  Link, Navigate,
} from 'react-router-dom';
import './Login.css';
import headerLogo from '../../images/header_logo.svg';
import { APP_MSGS } from '../../utils/data';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [pwd, setPwd] = useState('');
  const [isPwdValid, setIsPwdValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [pwdError, setPasswordError] = useState('');

  function handleEmailChange(e) {
    const input = e.target;
    setEmail(input.value);
    const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(input.value);
    setIsEmailValid(validEmail);
    if (!validEmail) {
      setEmailError(APP_MSGS.WRONG_EML_ERR);
    } else {
      setEmailError('');
    }
  }

  function handlePwdChange(e) {
    const input = e.target;
    setPwd(input.value);
    setIsPwdValid(input.validity.valid);
    if (!isPwdValid) {
      setPasswordError(input.validationMessage);
    } else {
      setPasswordError('');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin(email, pwd);
  }

  if (props.isLoggedIn) {
    return (
      <Navigate to="/movies" />
    );
  }

  return (
    <main className="login__popup login__popup_opened">
      <div className="login__container">
        <Link className="login__logo" to="/">
          <img src={headerLogo} alt="logo" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" name="login-form" onSubmit={handleSubmit}>
          <label className="login__label" htmlFor="email-input">
            E-Mail
            <input
              type="text"
              className="login__field"
              id="email-input"
              placeholder="Имя"
              name="name"
              onChange={handleEmailChange}
              required
            />
          </label>
          <p className="login__input-error">{emailError}</p>
          <label className="login__label" htmlFor="pwd-input">
            Пароль
            <input
              type="password"
              className="login__field"
              id="pwd-input"
              placeholder="password"
              name="password"
              onChange={handlePwdChange}
              required
            />
          </label>
          <p className="login__input-error">{pwdError}</p>
          <div className="login__btns-container">
            <button
              className={`login__btn ${!(isEmailValid && isPwdValid) ? 'login__btn_disabled' : ''}`}
              type="submit"
              disabled={!(isEmailValid && isPwdValid)}
            >
              Войти
            </button>
            <span className="login__unregged-lbl">
              <span>Еще не зарегистрированы?</span>
              <Link to="/signup" className="login__lnk-register">
                Регистрация
              </Link>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
}
