import { MOVIES_URL } from './data';

class MoviesApi {
  constructor(options) {
    this.options = options;
  }

  // eslint-disable-next-line class-methods-use-this
  checkRes(res) {
    if (res.ok) return res.json();
    const { status } = res;
    return res.json().then((data) => {
      const error = new Error(Object.values(data));
      error.code = status;
      throw error;
    });
  }

  getMovies() {
    return fetch(`${this.options.MOVIES_URL}`, {
      headers: this.options.headers,
    }).then(this.checkRes);
  }
}

const moviesApi = new MoviesApi({
  MOVIES_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default moviesApi;
