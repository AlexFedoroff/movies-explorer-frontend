/* eslint-disable max-len */
import {
  React, useState, useEffect,
} from 'react';
import MoviesCardsList from '../MoviesCardsList/MoviesCardsList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import { filterMovies, filterShortMovies } from '../../utils/MovieFilters';
import { APP_MSGS } from '../../utils/data';

export default function SavedMovies(props) {
  const [shortMovies, setShortMovies] = useState(false); // checkbox
  const [nothingFound, setNothingFound] = useState(false); // hide if nothing is found
  const [showedMovies, setShowedMovies] = useState(props.savedMoviesList);
  const [filteredMovies, setFilteredMovies] = useState(showedMovies);

  // поиск по запросу
  function handleSearch(inputValue) {
    const moviesList = filterMovies(props.savedMoviesList, inputValue, shortMovies);
    if (moviesList.length === 0) {
      setNothingFound(true);
      props.setPopupMessageOpen({
        isOpen: true,
        successful: false,
        text: APP_MSGS.NOT_FOUND_ERR,
      });
    } else {
      setNothingFound(false);
      setFilteredMovies(moviesList);
      setShowedMovies(moviesList);
    }
  }

  // checkbox state
  function handleShortFilms() {
    if (!shortMovies) {
      setShortMovies(true);
      setShowedMovies(filterShortMovies(filteredMovies));
      if (filterShortMovies(filteredMovies).length === 0) {
        setNothingFound(true);
      } else { setNothingFound(false); }
    } else {
      setShortMovies(false);
      if (filteredMovies.length === 0) { setNothingFound(true); } else { setNothingFound(false); }
      setShowedMovies(filteredMovies);
    }
  }

  // checkbox from local storage
  useEffect(() => {
    if (shortMovies) {
      setShortMovies(true);
      setShowedMovies(filterShortMovies(props.savedMoviesList));
    } else {
      setShortMovies(false);
      setShowedMovies(props.savedMoviesList);
    }
  }, [props.savedMoviesList]);

  useEffect(() => {
    setFilteredMovies(props.savedMoviesList);
    if (!props.savedMoviesList) {
      setNothingFound(true);
      return;
    }
    if (props.savedMoviesList.length !== 0) {
      setNothingFound(false);
    } else { setNothingFound(true); }
  }, [props.savedMoviesList]);

  const hideList = (nothingFound || !showedMovies);
  // console.log(shortMovies);
  return (
    <main className="saved-movies">
      <SearchForm
        handleSearch={handleSearch}
        handleShortFilms={handleShortFilms}
        shortMovies={shortMovies}
        setPopupMessageOpen={props.setPopupMessageOpen}
      />
      {!hideList && (
        <MoviesCardsList
          moviesList={showedMovies}
          savedMoviesList={props.savedMoviesList}
          onDeleteClick={props.onDeleteClick}
        />
      )}
    </main>
  );
}
