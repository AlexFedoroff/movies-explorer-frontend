import { React } from 'react';
import MoviesCardsList from '../MoviesCardsList/MoviesCardsList';
import './SavedMovies.css';

export default function SavedMovies() {
  return (
    <div className="saved-movies">
      <MoviesCardsList />
    </div>
  );
}
