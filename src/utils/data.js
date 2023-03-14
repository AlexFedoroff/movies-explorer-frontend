const BACKEND_URL = 'http://localhost:2900';
const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export { BACKEND_URL, MOVIES_URL };

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
