/* eslint-disable max-len */
import { React } from 'react-router-dom';
import './AboutProject.css';

export default function Promo() {
  return (
    <section className="aboutproject" id="about-project">
      <div className="aboutproject__header">
        <h2 className="aboutproject__title">О проекте</h2>
      </div>
      <div className="aboutproject__grid-text">
        <p className="aboutproject__plan-title aboutproject__plan-title_first">Дипломный проект включал 5 этапов</p>
        <p className="aboutproject__plan-title aboutproject__plan-title_second">На выполнение диплома ушло 5 недель</p>
        <p className="aboutproject__plan-description aboutproject__plan-description_first">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className="aboutproject__plan-description aboutproject__plan-description_second">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="aboutproject__grid-graph">
        <div className="aboutproject__grid-graph-cell aboutproject__grid-graph-cell-back">1 неделя</div>
        <div className="aboutproject__grid-graph-cell aboutproject__grid-graph-cell-front">4 недели</div>
        <div className="aboutproject__grid-graph-cell aboutproject__grid-graph-cell-title">Back-end</div>
        <div className="aboutproject__grid-graph-cell aboutproject__grid-graph-cell-title">Front-end</div>
      </div>
    </section>
  );
}
