import { React } from 'react-router-dom';
import './NavTab.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HashLink } from 'react-router-hash-link';

export default function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <li>
          <HashLink to="/#about-project" className="navtab__link">
            О проекте
          </HashLink>
        </li>
        <li>
          <HashLink to="/#techs" className="navtab__link">
            Технологии
          </HashLink>
        </li>
        <li>
          <HashLink to="/#about-me" className="navtab__link">
            Студент
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}
