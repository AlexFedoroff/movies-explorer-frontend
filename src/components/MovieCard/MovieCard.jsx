import './MovieCard.css';
import { React } from 'react-router-dom';
// import saveIcon from '../../images/save_icon.svg';
import sampleImage from '../../images/sample_image.png';

export default function MoviesCard({ saved }) {
  return (
    <div className="movie-card">
      <div className="movie-card__title-conainer">
        <p className="movie-card__title">33 слова о дизайне</p>
        <p className="movie-card__duration">1ч 47м</p>
        <button
          type="button"
          className={`movie-card__save-icon movie-card__save-icon_${
            saved ? 'saved' : 'save'
          }`}
          /* onClick={saved ? handleRemoveSaved : handleSave} */
          aria-label={`${
            saved ? 'Удалить из сохранённых' : 'Сохранить фильм'
          }`}
          title={`${
            saved ? 'Удалить из сохранённых' : 'Сохранить фильм'
          }`}
        />
      </div>
      <img className="movie-card__image" src={sampleImage} alt="изображение из фильма" />

    </div>
  );
}
