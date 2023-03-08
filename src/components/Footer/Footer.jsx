import { React } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__links-container">
        <p className="footer__year">© 2023</p>
        <ul className="footer__links">
          <li className="footer__link footer__link_yandex">
            <a className="footer__link-url" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          </li>
          <li className="footer__link footer__link_github">
            <a className="footer__link-url" href="https://github.com/" target="_blank" rel="noreferrer">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
