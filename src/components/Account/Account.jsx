import { React } from 'react-router-dom';
import { useState, useContext } from 'react';
import './Account.css';
import CurrentUserContext from '../../context/CurrentUserContext';
import { APP_MSGS, NAME_MIN_LENGTH } from '../../utils/data';

export default function Account(props) {
  const currentUser = useContext(CurrentUserContext);
  const [email, setEmail] = useState(currentUser.email);
  const [name, setName] = useState(currentUser.name);
  const [nothingChanged, setNothingChanged] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [emailError, setEmailError] = useState(' ');
  const [nameError, setNameError] = useState(' ');

  function handleChange(e) {
    const input = e.target;
    if (input.name === 'email') {
      const validEmail = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,3})$/i.test(
        input.value,
      );
      setEmail(input.value);
      setIsEmailValid(validEmail);
      if (!validEmail) {
        setEmailError(APP_MSGS.EML_FORMAT_ERR);
      } else {
        setEmailError('');
      }
    } else if (input.name === 'name') {
      const validName = /^[a-zA-Zа-яЯ-Я- ]+$/.test(input.value);
      setIsNameValid(validName);
      setName(input.value);
      if (input.value.length < 1) {
        setNameError(APP_MSGS.FIELD_EMPTY);
      } else if (input.value.length < NAME_MIN_LENGTH) {
        setNameError(APP_MSGS.NAME_LENGTH_ERR);
      } else if (!validName) {
        setNameError(APP_MSGS.NAME_ERR);
      } else {
        setNameError('');
      }
    }
    setNothingChanged((input.value === currentUser.name || input.value === currentUser.email));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleEditProfile(name, email);
    setNothingChanged(true);
  }

  return (
    <main className="account__popup account__popup_opened">
      <div className="account__container">
        <h2 className="account__title">
          Привет,
          {' '}
          {currentUser.name}
        </h2>
        <form className="account__form" name="account-form" onSubmit={handleSubmit}>
          <label className="account__label account__label_name" htmlFor="name-input">
            Имя
            <input
              type="text"
              className="account__field"
              id="name-input"
              placeholder="Имя"
              name="name"
              defaultValue={currentUser.name}
              onChange={handleChange}
              minLength="2"
              maxLength="30"
              required
            />
          </label>
          <p className="account__input-error account__input-error_name">{nameError}</p>
          <label className="account__label" htmlFor="email-input">
            E-mail
            <input
              type="email"
              className="account__field"
              id="email-input"
              placeholder="E-mail"
              name="email"
              defaultValue={currentUser.email}
              onChange={handleChange}
              required
            />
          </label>
          <p className="account__input-error account__input-error_email">{emailError}</p>
          <div className="account__btns-container">
            <button
              className={`account__btn account__btn_edit ${(nothingChanged || !isNameValid || !isEmailValid) ? 'account__btn_disabled' : ''}`}
              disabled={nothingChanged || !isNameValid || !isEmailValid}
              type="submit"
            >
              Редактировать
            </button>
          </div>
        </form>
        <button
          className="account__btn account__btn_logout"
          type="submit"
          onClick={props.handleLogOut}
        >
          Выйти из аккаунта
        </button>
      </div>
    </main>
  );
}
