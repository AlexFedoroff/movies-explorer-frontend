import { React } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <section className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__links-container">
        <p className="footer__year">© 2023</p>
        <div className="footer__links">
          <a className="footer__link footer__link_yandex" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          <a className="footer__link footer__link_github" href="https://github.com/">Github</a>
        </div>
      </div>
    </section>
  );
}
