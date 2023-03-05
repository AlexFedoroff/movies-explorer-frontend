import { React } from 'react-router-dom';
import './Account.css';

export default function Account() {
  return (
    <div className="account__popup account__popup_opened">
      <div className="account__container">
        <h2 className="account__title">Привет, Александр</h2>
        <form className="account__form" name="account-form">
          <label className="account__label account__label_name" htmlFor="name-input">
            Имя
            <input
              type="text"
              className="account__field"
              id="name-input"
              placeholder="Имя"
              name="name"
              value="Александр"
              required
            />
          </label>
          <label className="account__label" htmlFor="email-input">
            E-mail
            <input
              type="email"
              className="account__field"
              id="email-input"
              placeholder="E-mail"
              name="email"
              value="test@email.com"
              required
            />
          </label>
          <div className="account__btns-container">
            <button
              className="account__btn account__btn_edit"
              type="submit"
            >
              Редактировать
            </button>
            <button
              className="account__btn account__btn_logout"
              type="submit"
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
