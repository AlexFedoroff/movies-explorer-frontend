import './MoviesCardsList.css';
import { React } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

export default function MoviesCardsList({ saved }) {
  return (
    <section className="movies-cards-list">
      <ul className="movies-cards-list__container">
        <MovieCard savedMovies={saved} isCardSaved={false} />
        <MovieCard savedMovies={saved} isCardSaved />
        <MovieCard savedMovies={saved} isCardSaved={false} />
        <MovieCard savedMovies={saved} isCardSaved={false} />
        <MovieCard savedMovies={saved} isCardSaved={false} />
      </ul>
      <button className="movies-cards-list__more-btn">
        Еще
      </button>
    </section>
  );
}
