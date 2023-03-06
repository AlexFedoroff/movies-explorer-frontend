import { Route, Routes } from 'react-router-dom';
import { React, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
// import useWindowWidth from 'react-hook-use-window-width';

import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Account from '../Account/Account';

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  // временное решение
  function logIn() {
    setLoggedIn(true);
  }

  function logOut() {
    setLoggedIn(true);
  }

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/profile" element={<Account logOut={logOut} />} />
        <Route exact path="/signin" element={<Login logIn={logIn} />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/saved-movies" element={<SavedMovies />} />
      </Routes>
      <Footer />
    </div>
  );
}
