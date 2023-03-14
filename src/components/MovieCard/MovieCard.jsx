/* eslint-disable no-underscore-dangle */
import './MovieCard.css';
import { React } from 'react';
import { useLocation } from 'react-router-dom';

export default function MoviesCard(props) {
  const location = useLocation();
  const url = location.pathname;

  // сохранение фильма
  function handleSaveClick() {
    props.onSaveClick(props.movie);
  }
  // удаление фильма
  function handleDeleteClick() {
    props.onDeleteClick(props.movie);
  }

  let iconClass = 'save';

  if (url === '/saved-movies') {
    iconClass = 'to-del';
  }
  if (url === '/movies' && props.saved) {
    iconClass = 'saved';
  }

  return (
    <li className="movie-card" key={url === '/movies' ? props.movie.id : props.movie.movieId}>
      <div className="movie-card__title-conainer">
        <p className="movie-card__title">{props.movie.nameRU}</p>
        <p className="movie-card__duration">
          {`${Math.trunc(props.movie.duration / 60) > 0 ? `${Math.trunc(props.movie.duration / 60)}ч`
            : ''} ${props.movie.duration % 60}м`}

        </p>
        <button
          type="button"
          className={`movie-card__save-icon movie-card__save-icon_${iconClass}`}
          onClick={props.saved ? handleDeleteClick : handleSaveClick}
        />
      </div>
      <img
        className="movie-card__image"
        src={url === '/movies' ? `https://api.nomoreparties.co/${props.movie.image.url}`
          : props.movie.image}
        alt={props.movie.nameRU}
      />

    </li>
  );
}
