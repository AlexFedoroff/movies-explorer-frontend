import { React } from 'react';
import MoviesCardsList from '../MoviesCardsList/MoviesCardsList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

export default function SavedMovies() {
  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardsList saved />
    </div>
  );
}
