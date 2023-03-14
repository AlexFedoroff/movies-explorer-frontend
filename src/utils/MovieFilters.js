function filterShortMovies(movies) {
  return movies.filter((movie) => movie.duration <= 40);
}

function filterMovies(movies, userReq, shortMoviesCheckbox) {
  const moviesByUserReq = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userMovie = userReq.toLowerCase().trim();
    return movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1;
  });

  if (shortMoviesCheckbox) {
    return filterShortMovies(moviesByUserReq);
  }
  return moviesByUserReq;
}

export { filterMovies, filterShortMovies };
