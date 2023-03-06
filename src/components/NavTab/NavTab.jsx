import { React } from 'react-router-dom';
import './NavTab.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HashLink as Link } from 'react-router-hash-link';

export default function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <li>
          <Link to="/#about-project" className="navtab__link">
            О проекте
          </Link>
        </li>
        <li>
          <Link to="/#techs" className="navtab__link">
            Технологии
          </Link>
        </li>
        <li>
          <Link to="/#about-me" className="navtab__link">
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}
