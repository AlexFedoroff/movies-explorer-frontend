import { React } from 'react-router-dom';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav className="portfolio__navigation">
        <ul className="portfolio__navigation-list">
          <li className="portfolio__navigation-item">
            <a href="https://github.com/AlexFedoroff/how-to-learn" className="portfolio__navigation-link">
              Статичный сайт
              <span className="portfolio__navigation-link-arrow ">↗</span>
            </a>
          </li>
          <li className="portfolio__navigation-item">
            <a href="https://github.com/AlexFedoroff/russian-travel" className="portfolio__navigation-link">
              Адаптивный сайт
              <span className="portfolio__navigation-link-arrow ">↗</span>
            </a>
          </li>
          <li className="portfolio__navigation-item">
            <a href="https://github.com/AlexFedoroff/react-mesto-api-full" className="portfolio__navigation-link portfolio__navigation-link_noborder">
              Одностраничное приложение
              <span className="portfolio__navigation-link-arrow ">↗</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
