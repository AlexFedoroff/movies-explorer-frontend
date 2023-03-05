import { React } from 'react-router-dom';
import './Techs.css';

export default function Techs() {
  return (
    <section className="techs">
      <div className="techs__header">
        <h2 className="techs__title">Технологии</h2>
      </div>
      <div className="techs__containter">
        <p className="techs__descr-title">7 технологий</p>
        <p className="techs__descr">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__navigation-list">
          <li>
            <a href="yandex.ru" className="techs__navigation-link">
              HTML
            </a>
            <a href="yandex.ru" className="techs__navigation-link">
              CSS
            </a>
            <a href="yandex.ru" className="techs__navigation-link">
              JS
            </a>
            <a href="yandex.ru" className="techs__navigation-link">
              React
            </a>
            <a href="yandex.ru" className="techs__navigation-link">
              Git
            </a>
            <a href="yandex.ru" className="techs__navigation-link">
              Express.js
            </a>
            <a href="yandex.ru" className="techs__navigation-link">
              mongoDB
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
