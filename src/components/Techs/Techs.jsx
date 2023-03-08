import { React } from 'react-router-dom';
import './Techs.css';

export default function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__header">
        <h2 className="techs__title">Технологии</h2>
      </div>
      <div className="techs__containter">
        <p className="techs__descr-title">7 технологий</p>
        <p className="techs__descr">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__navigation-list">
          <li>
            <a href="https://www.w3schools.com/html/" className="techs__navigation-link" target="_blank" rel="noreferrer">
              HTML
            </a>
            <a href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics" className="techs__navigation-link" target="_blank" rel="noreferrer">
              CSS
            </a>
            <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript" className="techs__navigation-link" target="_blank" rel="noreferrer">
              JS
            </a>
            <a href="https://ru.reactjs.org/" className="techs__navigation-link" target="_blank" rel="noreferrer">
              React
            </a>
            <a href="https://git-scm.com/" className="techs__navigation-link" target="_blank" rel="noreferrer">
              Git
            </a>
            <a href="https://expressjs.com/ru/" className="techs__navigation-link" target="_blank" rel="noreferrer">
              Express.js
            </a>
            <a href="https://www.mongodb.com/" className="techs__navigation-link" target="_blank" rel="noreferrer">
              mongoDB
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
