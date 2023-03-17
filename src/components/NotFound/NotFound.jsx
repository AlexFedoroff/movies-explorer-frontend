import './NotFound.css';
import { React } from 'react-router-dom';

export default function NotFound(props) {
  return (
    <main className="notfound">
      <div className="notfound__container">
        <span className="notfound__code">404</span>
        <span className="notfound__text">Страница не найдена</span>
      </div>
      <button className="notfound__btn" onClick={props.handleBack}>
        Назад
      </button>
    </main>
  );
}
