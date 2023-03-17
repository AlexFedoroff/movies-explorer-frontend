// const BACKEND_URL = 'http://localhost:2900';
export const BACKEND_URL = 'https://api.alexfedoroff.students.nomoredomainsclub.ru';
export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const MOVIES_API_PREFIX = 'https://api.nomoreparties.co';

export const RESOLUTIONS = {
  desktopRes: {
    width: 1280,
    conf: {
      total: 12,
      toAdd: 3,
    },
  },
  mobileBigRes: {
    width: 1230,
    conf: {
      total: 8,
      toAdd: 2,
    },
  },
  mobileSmallRes: {
    width: 659,
    conf: {
      total: 5,
      toAdd: 2,
    },
  },
};

export const APP_MSGS = {
  AUTH_ERR: 'Ошибка авторизации',
  DATA_CHANGED_SUCCESS: 'Данные успешно изменены',
  WRONG_EML_ERR: 'Неверный формат email-адреса',
  NOT_FOUND_ERR: 'Ничего не найдено',
  REQEST_ERR: 'Ошибка при запросе',
  FIELD_EMPTY: 'Поле не должно быть пустым',
  NAME_LENGTH_ERR: 'Имя не должно быть длиной менее 2 символов',
  REQUEST_LENGTH_ERR: 'Запрос должен быть длиной не менее 2 символов',
  NAME_ERR: 'Имя может содержать только буквы, пробел или дефис',
  EML_FORMAT_ERR: 'Неверный формат эл.почты',
  PROFILE_CHANGE_ERR: 'Ошибка при изменении данных пользователя',
  EMAIL_CHANGE_CONFLICT: 'Такой email уже используется',
};

export const MIN_CARDS_TO_SHOW_MORE = 3;
export const WIDTH_TO_SHOW_BURGER = 769;
export const NAME_MIN_LENGTH = 2;
export const SHORT_MOVIE_DURATION = 40;
