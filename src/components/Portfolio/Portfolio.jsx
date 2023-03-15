import { React } from 'react-router-dom';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav className="portfolio__navigation">
        <ul className="portfolio__navigation-list">
          <li className="portfolio__navigation-item">
            <a href="https://alexfedoroff.github.io/how-to-learn/" className="portfolio__navigation-link" target="_blank" rel="noreferrer">
              Статичный сайт
              <span className="portfolio__navigation-link-arrow ">↗</span>
            </a>
          </li>
          <li className="portfolio__navigation-item">
            <a href="https://alexfedoroff.github.io/russian-travel/" className="portfolio__navigation-link" target="_blank" rel="noreferrer">
              Адаптивный сайт
              <span className="portfolio__navigation-link-arrow ">↗</span>
            </a>
          </li>
          <li className="portfolio__navigation-item">
            <a href="https://github.com/AlexFedoroff/react-mesto-api-full.git" className="portfolio__navigation-link portfolio__navigation-link_noborder" target="_blank" rel="noreferrer">
              Одностраничное приложение
              <span className="portfolio__navigation-link-arrow ">↗</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
