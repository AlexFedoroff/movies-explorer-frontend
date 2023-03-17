/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import {
  Route, Routes, useLocation, useNavigate,
} from 'react-router-dom';
import { React, useState, useEffect } from 'react';

import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Account from '../Account/Account';
import Auth from '../../utils/Auth';
import Api from '../../utils/Api';
import PopupMessage from '../PopupMessage/PopupMessage';
import CurrentUserContext from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import NotFound from '../NotFound/NotFound';
import { APP_MSGS } from '../../utils/data';

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const [isPopupMessageOpen, setPopupMessageOpen] = useState({
    isOpen: false,
    successful: true,
    text: '',
  });

  function closePopupMessage() {
    setPopupMessageOpen({ ...isPopupMessageOpen, isOpen: false });
  }

  function handleLogin(email, pwd) {
    Auth.signIn(email, pwd)
      .then(() => {
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch(() => {
        setLoggedIn(false);
        setCurrentUser({});
        setPopupMessageOpen({
          isOpen: true,
          successful: false,
          text: APP_MSGS.AUTH_ERR,
        });
      });
  }

  function handleRegister(email, password, name) {
    Auth.signUp(email, password, name)
      .then((user) => {
        if (user._id) {
          handleLogin(email, password);
        }
      })
      .catch((err) => {
        setPopupMessageOpen({
          isOpen: true,
          successful: false,
          text: err.message,
        });
      });
  }

  function handleEditProfile(name, email) {
    Api.editProfile(name, email)
      .then((user) => {
        setCurrentUser(user);
        setPopupMessageOpen({
          isOpen: true,
          successful: true,
          text: APP_MSGS.DATA_CHANGED_SUCCESS,
        });
      })
      .catch((err) => {
        let errMsg = APP_MSGS.PROFILE_CHANGE_ERR;
        if (err.status === 409) {
          errMsg = APP_MSGS.EMAIL_CHANGE_CONFLICT;
        }
        setPopupMessageOpen({
          isOpen: true,
          successful: false,
          text: errMsg,
        });
      });
  }

  function handleLogOut() {
    Auth
      .signOut()
      .then(() => {
        setCurrentUser({});
        setLoggedIn(false);
        localStorage.clear();
        navigate('/');
      })
      .catch((err) => setPopupMessageOpen({
        isOpen: true,
        successful: false,
        text: err.message,
      }));
  }

  function handleSaveMovie(movie) {
    Api
      .addMovie(movie)
      .then((res) => {
        setSavedMoviesList([res, ...savedMoviesList]);
      })
      .catch((err) => setPopupMessageOpen({
        isOpen: true,
        successful: false,
        text: err,
      }));
  }

  function handleDeleteMovie(movie) {
    const savedMovie = savedMoviesList.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId,
    );
    Api
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMoviesList.filter((m) => {
          if (movie.id === m.movieId || movie.movieId === m.movieId) {
            return false;
          }
          return true;
        });
        setSavedMoviesList(newMoviesList);
      })
      .catch((err) => setPopupMessageOpen({
        isOpen: true,
        successful: false,
        text: err.message,
      }));
  }

  // saved movies
  useEffect(() => {
    if (isLoggedIn && currentUser._id) {
      Api
        .getMovies()
        .then((data) => {
          const savedMovies = data.filter((m) => m.owner === currentUser._id);
          setSavedMoviesList(savedMovies);
        })
        .catch((err) => setPopupMessageOpen({
          isOpen: true,
          successful: false,
          text: err,
        }));
    }
  }, [isLoggedIn]);

  // getting user info
  useEffect(() => {
    if (isLoggedIn) {
      Api.getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          setLoggedIn(false);
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  // check auth
  useEffect(() => {
    const url = location.pathname;
    Api.getUserInfo()
      .then((user) => {
        setLoggedIn(true);
        setCurrentUser(user);
        navigate(url);
      })
      .catch(() => {
        setLoggedIn(false);
        navigate('/');
      });
  }, []);
  // return from 404 page
  function handleBack() {
    navigate(-2);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route
            exact
            path="/signin"
            element={(
              <Login
                handleLogin={handleLogin}
                isLoggedIn={isLoggedIn}
              />
          )}
          />
          <Route
            exact
            path="/signup"
            element={(
              <Register
                handleRegister={handleRegister}
                isLoggedIn={isLoggedIn}
              />
          )}
          />
          <Route exact path="/" element={<Main />} />
          <Route
            exact
            path="/movies"
            element={(
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Movies
                  isLoggedIn={isLoggedIn}
                  setIsLoading={setIsLoading}
                  isLoading={isLoading}
                  setPopupMessageOpen={setPopupMessageOpen}
                  savedMoviesList={savedMoviesList}
                  onSaveClick={handleSaveMovie}
                  onDeleteClick={handleDeleteMovie}
                />
              </ProtectedRoute>
          )}
          />
          <Route
            exact
            path="/saved-movies"
            element={(
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedMovies
                  isLoggedIn={isLoggedIn}
                  savedMoviesList={savedMoviesList}
                  onDeleteClick={handleDeleteMovie}
                  setPopupMessageOpen={setPopupMessageOpen}
                />
              </ProtectedRoute>
              )}
          />
          <Route
            exact
            path="/profile"
            element={(
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Account
                  handleLogOut={handleLogOut}
                  handleEditProfile={handleEditProfile}
                />
              </ProtectedRoute>
          )}
          />
          <Route
            path="*"
            element={
              <NotFound handleBack={handleBack} />
          }
          />
        </Routes>
        <Footer />
        <PopupMessage
          status={isPopupMessageOpen}
          onClose={closePopupMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}
