/* eslint-disable no-underscore-dangle */
import { React } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';

import './Movies.css';
import MoviesCardsList from '../MoviesCardsList/MoviesCardsList';
import SearchForm from '../SearchForm/SearchForm';
import moviesApi from '../../utils/MoviesApi';
import CurrentUserContext from '../../context/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import { filterMovies, filterShortMovies } from '../../utils/MovieFilters';

export default function Movies(props) {
  const currentUser = useContext(CurrentUserContext);

  const [shortMovies, setShortMovies] = useState(true); // short movies check box state
  const [initialMovies, setInitialMovies] = useState([]); // movies from distant server
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);
  const [areAllMovies, setAreAllMovies] = useState([]);

  function handleSetFilteredMovies(movies, userQuery, shortMoviesCheckbox) {
    const moviesList = filterMovies(movies, userQuery, shortMoviesCheckbox);
    if (moviesList.length === 0) {
      props.setPopupMessageOpen({
        isOpen: true,
        successful: false,
        text: 'Ничего не найдено',
      });
      setNothingFound(true);
    } else {
      setNothingFound(false);
    }
    setInitialMovies(moviesList);
    setFilteredMovies(
      shortMoviesCheckbox ? filterShortMovies(moviesList) : moviesList,
    );
    localStorage.setItem('movies', JSON.stringify(moviesList));
  }

  // searching by user request
  function handleSearch(inputValue) {
    localStorage.setItem('searchMovieReq', inputValue);
    localStorage.setItem('shortMoviesChecked', shortMovies);

    if (areAllMovies.length === 0) {
      props.setIsLoading(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          setAreAllMovies(movies);
          handleSetFilteredMovies(
            movies,
            inputValue,
            shortMovies,
          );
        })
        .catch(() => props.setPopupMessageOpen({
          isOpen: true,
          successful: false,
          text: 'Ошибка при запросе',
        }))
        .finally(() => props.setIsLoading(false));
    } else {
      handleSetFilteredMovies(areAllMovies, inputValue, shortMovies);
    }
  }

  // состояние чекбокса
  function handleShortFilms() {
    setShortMovies(!shortMovies);
    if (!shortMovies) {
      setFilteredMovies(filterShortMovies(initialMovies));
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem('shortMoviesChecked', !shortMovies);
  }

  useEffect(() => {
    if (localStorage.getItem('shortMoviesChecked') === 'true') {
      setShortMovies(true);
    } else {
      setShortMovies(false);
    }
  }, [currentUser]);

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(
        localStorage.getItem('movies'),
      );
      setInitialMovies(movies);
      if (
        localStorage.getItem('shortMoviesChecked') === 'true'
      ) {
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, [currentUser]);
  return (
    <main className="movies">
      <SearchForm
        handleSearch={handleSearch}
        handleShortFilms={handleShortFilms}
        shortMovies={shortMovies}
      />

      <Preloader isOpen={props.isLoading} />

      {!nothingFound && (
      <MoviesCardsList
        moviesList={filteredMovies}
        savedMoviesList={props.savedMoviesList}
        onSaveClick={props.onSaveClick}
        onDeleteClick={props.onDeleteClick}
      />
      )}
    </main>
  );
}
