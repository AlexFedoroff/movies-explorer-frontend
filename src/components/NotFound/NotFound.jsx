import './NotFound.css';
import { React } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__container">
        <span className="notfound__code">404</span>
        <span className="notfound__text">Страница не найдена</span>
      </div>
      <button className="notfound__btn">
        Назад
      </button>
    </div>
  );
}
