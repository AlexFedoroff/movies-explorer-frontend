/* eslint-disable max-len */
import { React } from 'react-router-dom';
import './AboutMe.css';
import myPhoto from '../../images/myPhoto.png';

export default function AboutMe() {
  return (
    <section className="aboutme">
      <div className="aboutme__header">
        <h2 className="aboutme__title">Студент</h2>
      </div>
      <div className="aboutme__grid">
        <div className="aboutme__grid_cell-info">
          <div className="aboutme__info">
            <p className="aboutme__name">Александр</p>
            <p className="aboutme__post">IT-менеджер, 43 года</p>
            <p className="aboutme__description">
              Начал кодить с 12 лет. Закончил факультет электротехники и приоборостроения СГТУ (г.Саратов), живу в г.Санкт-Петербурге, работаю в структуре Газпрома.
              У меня есть жена и дочь. Я увлекаюсь музыкой и пауэрлифтингом.
              Прошел курс веб-разработки, чтобы замедлить старение мозга, а еще, чтобы разговаривать на одном языке со своими web-разработчиками.
            </p>
          </div>
          <a className="aboutme__github" href="https://github.com/AlexFedoroff">Github</a>
        </div>
        <div className="aboutme__grid_cell-photo">
          <img className="aboutme__photo" src={myPhoto} alt="фотография автора" />
        </div>
      </div>
    </section>
  );
}
