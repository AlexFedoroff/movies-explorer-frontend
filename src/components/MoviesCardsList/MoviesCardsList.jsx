/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import './MoviesCardsList.css';
import { useState, useEffect } from 'react';
import { React, useLocation } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';
import { RESOLUTIONS, MIN_CARDS_TO_SHOW_MORE } from '../../utils/data';
import useWindowWidth from '../../utils/CustomHooks';

export default function MoviesCardsList(props) {
  const location = useLocation();
  const url = location.pathname;
  const windowWidth = useWindowWidth();
  const { desktopRes, mobileBigRes, mobileSmallRes } = RESOLUTIONS;
  const [isMount, setIsMount] = useState(true);
  const [displayMovieList, setDisplayMovieList] = useState([]);
  const [cardsToDisplay, setCardsToDisplay] = useState({ total: desktopRes.total, toAdd: desktopRes.toAdd });

  function showMoreBtn() {
    if (!displayMovieList || url !== '/movies') {
      return false;
    }
    // if there is something left to show
    if ((displayMovieList.length > MIN_CARDS_TO_SHOW_MORE) && (props.moviesList.length >= (cardsToDisplay.toAdd + displayMovieList.length) - 1)) {
      return true;
    }
    return false;
  }

  function isMovieSaved(movies, movie) {
    const res = movies.find((item) => item.movieId === (movie.id || movie.movieId));
    return !!res;
  }

  function handleClickMoreBtn() {
    const displayed = displayMovieList.length;
    const extended = displayed + cardsToDisplay.toAdd;

    if ((props.moviesList.length - displayed) > 0) {
      const newCards = props.moviesList.slice(displayed, extended);
      setDisplayMovieList([...displayMovieList, ...newCards]);
    }
  }

  // movies depends on screen resolution
  useEffect(() => {
    if (url === '/movies') {
      if (windowWidth > desktopRes.width) {
        setCardsToDisplay(desktopRes.conf);
      } else if (windowWidth <= desktopRes.width && windowWidth > mobileSmallRes.width) {
        setCardsToDisplay(mobileBigRes.conf);
      } else {
        setCardsToDisplay(mobileSmallRes.conf);
      }
      setIsMount(false);
    }
  }, [windowWidth, isMount, url]);

  useEffect(() => {
    if (props.moviesList.length) {
      const res = props.moviesList.filter((item, i) => i < cardsToDisplay.total);
      setDisplayMovieList(res);
    }
  }, [props.moviesList, cardsToDisplay.total]);

  if (props.isLoading) return (<Preloader />);

  const moviesToRender = (url === '/movies') ? displayMovieList : props.moviesList;

  return (
    <section className="movies-cards-list">
      <ul className="movies-cards-list__container">
        {moviesToRender.map((movie) => (
          <MovieCard
            key={movie._id || movie.id}
            saved={isMovieSaved(props.savedMoviesList, movie)}
            onSaveClick={props.onSaveClick}
            onDeleteClick={props.onDeleteClick}
            movie={movie}
          />
        ))}
      </ul>
      <button
        className={`movies-cards-list__more-btn ${!showMoreBtn() ? 'movies-cards-list__more-btn_hidden' : ''}`}
        onClick={handleClickMoreBtn}
      >
        Еще
      </button>
    </section>
  );
}
//
