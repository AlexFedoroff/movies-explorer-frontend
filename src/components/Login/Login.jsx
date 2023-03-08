import { React, Link, useNavigate } from 'react-router-dom';
import './Login.css';
import headerLogo from '../../images/header_logo.svg';

export default function Login({ logIn }) {
  const navigate = useNavigate();

  // временное решение
  const tempLogin = () => {
    navigate('/movies');
    logIn();
  };

  return (
    <main className="login__popup login__popup_opened">
      <div className="login__container">
        <Link className="login__logo" to="/">
          <img src={headerLogo} alt="logo" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" name="login-form" onSubmit={tempLogin}>
          <label className="login__label" htmlFor="email-input">
            E-Mail
            <input
              type="text"
              className="login__field"
              id="email-input"
              placeholder="Имя"
              name="name"
              required
            />
          </label>
          <p className="login__input-error" />
          <label className="login__label" htmlFor="pwd-input">
            Пароль
            <input
              type="password"
              className="login__field"
              id="pwd-input"
              placeholder="password"
              name="password"
              required
            />
          </label>
          <p className="login__input-error" />
          <div className="login__btns-container">
            <button
              className="login__btn"
              type="submit"
            >
              Войти
            </button>
            <span className="login__unregged-lbl">
              <span>Еще не зарегистрированы?</span>
              <a href="/signup" className="login__lnk-register">
                Регистрация
              </a>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
}
