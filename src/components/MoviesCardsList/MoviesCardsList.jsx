import './MoviesCardsList.css';
import { React } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

export default function MoviesCardsList({ saved }) {
  return (
    <div className="movies-cards-list">
      <div className="movies-cards-list__container">
        <MovieCard saved={saved} />
        <MovieCard saved={saved} />
        <MovieCard saved={saved} />
        <MovieCard saved={saved} />
        <MovieCard saved={saved} />
      </div>
      <button className="movies-cards-list__more-btn">
        Еще
      </button>
    </div>
  );
}
