import { React } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';
import './Promo.css';

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента
          <br />
          {' '}
          факультета Веб-разработки.
        </h1>
        <NavTab />
      </div>
    </section>
  );
}
