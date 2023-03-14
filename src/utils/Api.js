/* eslint-disable max-len */
import { BACKEND_URL } from './data';

class Api {
  constructor({ address, headers }) {
    this.address = address;
    this.headers = headers;
  }

  doFetch(path, methodParam, bodyObj) {
    return fetch(`${this.address}${path}`, {
      method: methodParam,
      headers: this.headers,
      withCredentials: true,
      credentials: 'include',
      body: bodyObj ? JSON.stringify(bodyObj) : undefined,
    })
      .then(this.checkRes);
  }

  // eslint-disable-next-line class-methods-use-this
  checkRes(res) {
    if (!res.ok) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject(res);
    }
    return res.json();
  }

  // Информация о пользователе
  getUserInfo() {
    return this.doFetch('/users/me', 'GET');
  }

  // Изменение информации о пользователей
  editProfile(name, email) {
    return this.doFetch('/users/me', 'PATCH', { name, email });
  }

  // Получение списка фильмов
  getMovies() {
    return this.doFetch('/movies', 'GET');
  }

  addMovie(data) {
    return this.doFetch('/movies', 'POST', {
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      // image: data.image.url,
      image: `https://api.nomoreparties.co${data.image.url}`,
      trailerLink: data.trailerLink,
      thumbnail: data.thumbnail ? data.thumbnail : `https://api.nomoreparties.co${data.image.url}`,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    });
  }

  deleteMovie(_id) {
    return this.doFetch(`/movies/${_id}`, 'DELETE');
  }
}

const api = new Api({
  address: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
