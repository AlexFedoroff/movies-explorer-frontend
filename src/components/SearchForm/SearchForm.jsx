/* eslint-disable jsx-a11y/label-has-associated-control */
import './SearchForm.css';
import { React } from 'react-router-dom';
import searchIcon from '../../images/search_icon.svg';
import findIcon from '../../images/find_icon.svg';

export default function SearchForm() {
  return (
    <div className="searchform">
      <div className="searchform__container">
        <form className="searchform__form">
          <img src={searchIcon} alt="иконка поиска" className="searchform_search-icon" />
          <input
            type="text"
            className="searchform__input"
            id="searchform__input"
            placeholder="Фильм"
            name="input"
            required
          />
          <button
            className="searchform__find-btn"
            type="submit"
          >
            <img src={findIcon} alt="иконка поиска" />
          </button>

        </form>
        <div className="searchform__short-movies">
          <input type="checkbox" name="toggle" className="searchform__toggle" id="searchform-toggle" />
          <label className="searchform__short-label" htmlFor="toggle">
            Короткометражки
          </label>
        </div>
      </div>
    </div>
  );
}
