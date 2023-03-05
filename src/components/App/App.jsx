import { Switch, Route } from 'react-router-dom';
import { React } from 'react';
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
  // const windowWidth = useWindowWidth();
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/profile">
          <Account />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
/*
 <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/profile">
          <Account />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
      </Switch>
*/
