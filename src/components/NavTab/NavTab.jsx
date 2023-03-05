import { Link, React } from 'react-router-dom';
import './NavTab.css';

export default function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <li>
          <Link to="/#" className="navtab__link">
            О проекте
          </Link>
        </li>
        <li>
          <Link to="/#" className="navtab__link">
            Технологии
          </Link>
        </li>
        <li>
          <Link to="/#" className="navtab__link">
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
}
