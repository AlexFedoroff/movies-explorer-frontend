import './MovieCard.css';
import { React } from 'react-router-dom';
import saveIcon from '../../images/save_icon.svg';
import sampleImage from '../../images/sample_image.png';

export default function MoviesCard() {
  return (
    <div className="movie-card">
      <div className="movie-card__title-conainer">
        <p className="movie-card__title">33 слова о дизайне</p>
        <p className="movie-card__duration">1ч 47м</p>
        <img className="movie-card__save-icon" src={saveIcon} alt="иконка сохранения фильма" />
      </div>
      <img className="movie-card__image" src={sampleImage} alt="изображение из фильма" />
    </div>
  );
}
