import {
  React,
  Link,
  Navigate,
} from 'react-router-dom';
import { useState } from 'react';

import './Register.css';
import headerLogo from '../../images/header_logo.svg';

export default function Register(props) {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [name, setName] = useState('');
  const [isEmailValid, setIsValidEmail] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPwdValid, setIsPwdValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [pwdError, setPwdError] = useState('');

  function handleNameChange(e) {
    const input = e.target;
    const validName = /^[a-zA-Zа-яА-Я- ]+$/.test(input.value);
    setIsNameValid(validName);
    if (input.value.length < 1) {
      setNameError('Поле не должно быть пустым');
    } else if (input.value.length < 2) {
      setNameError('Имя не должно быть длиной менее 2 символов');
    } else if (!validName) {
      setNameError('Имя может содержать только буквы, пробел или дефис');
    } else {
      setNameError('');
    }
    setName(input.value);
  }

  function handleEmailChange(e) {
    const input = e.target;
    const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(
      input.value,
    );
    setEmail(input.value);
    setIsValidEmail(validEmail);
    if (!validEmail) {
      setEmailError('Неверный формат эл.почты');
    } else {
      setEmailError('');
    }
  }

  function handlePasswordChange(e) {
    const input = e.target;
    setPwd(input.value);
    setIsPwdValid(input.validity.valid);
    if (!isPwdValid) {
      setPwdError(input.validationMessage);
    } else {
      setPwdError('');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister(email, pwd, name);
  }

  if (props.isLoggedIn) {
    return (
      <Navigate to="/" />
    );
  }

  return (
    <main className="register__popup register__popup_opened">
      <div className="register__container">
        <Link className="register__logo" to="/">
          <img src={headerLogo} alt="logo" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" name="register-form" onSubmit={handleSubmit}>
          <label className="register__label" htmlFor="name-input">
            Имя
            <input
              type="text"
              className="register__field"
              id="name-input"
              placeholder="Имя"
              name="name"
              minLength="2"
              maxLength="30"
              value={name}
              onChange={handleNameChange}
              required
            />
          </label>
          <p className="register__input-error">{nameError}</p>
          <label className="register__label" htmlFor="email-input">
            E-mail
            <input
              type="email"
              className="register__field"
              id="email-input"
              placeholder="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
          <p className="register__input-error">{emailError}</p>
          <label className="register__label" htmlFor="pwd-input">
            Пароль
            <input
              type="password"
              className="register__field"
              id="pwd-input"
              placeholder="password"
              name="password"
              value={pwd}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <p className="register__input-error">{pwdError}</p>
          <div className="register__btns-container">
            <button
              className={`register__btn ${!(isEmailValid && isPwdValid && isNameValid) ? 'register__btn_disabled' : ''}`}
              disabled={!(isEmailValid && isPwdValid && isNameValid)}
              type="submit"
            >
              Зарегистрироваться
            </button>
            <span className="register__unregged-lbl">
              <span>Уже зарегистрированы?</span>
              <Link to="/signin" className="register__login-link">
                Войти
              </Link>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
}
