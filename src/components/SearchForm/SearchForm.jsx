/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './SearchForm.css';
import { React, useState } from 'react';
import { useLocation } from 'react-router-dom';
import searchIcon from '../../images/search_icon.svg';
import findIcon from '../../images/find_icon.svg';
import { APP_MSGS } from '../../utils/data';

export default function SearchForm(props) {
  const location = useLocation();
  const url = location.pathname;

  const [movieReq, setMovieReq] = useState(url === '/movies' && localStorage.getItem('searchMovieReq') ? localStorage.getItem('searchMovieReq') : '');
  const [isReqValid, setIsReqValid] = useState(true);

  let defaultValue = localStorage.getItem('searchMovieReq') ? localStorage.getItem('searchMovieReq') : '';
  const storedChecked = localStorage.getItem('shortMoviesChecked') ? localStorage.getItem('shortMoviesChecked') : 'false';
  let defaultChecked = (storedChecked === 'true');

  if (url === '/saved-movies') {
    defaultValue = '';
    defaultChecked = false;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isReqValid) {
      props.handleSearch(movieReq);
    } else {
      props.setPopupMessageOpen({
        isOpen: true,
        successful: false,
        text: APP_MSGS.REQUEST_LENGTH_ERR,
      });
    }
  }

  function handleChange(e) {
    const input = e.target;
    setMovieReq(input.value);
    if (input.value.length < 2) {
      setIsReqValid(false);
    } else {
      setIsReqValid(true);
    }
  }

  return (
    <section className="searchform">
      <div className="searchform__container">
        <form className="searchform__form" onSubmit={handleSubmit}>
          <img src={searchIcon} alt="иконка поиска" className="searchform_search-icon" />
          <input
            type="text"
            className="searchform__input"
            id="searchform__input"
            placeholder="Фильм"
            name="input"
            defaultValue={defaultValue}
            onChange={handleChange}
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
          <input
            type="checkbox"
            name="toggle"
            className="searchform__toggle"
            defaultChecked={defaultChecked}
            onChange={props.handleShortFilms}
            id="searchform-toggle"
          />
          <label className="searchform__short-label" htmlFor="toggle">
            Короткометражки
          </label>
        </div>
      </div>
    </section>
  );
}
