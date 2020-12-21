import React from 'react';
import Provider from '../i18n/Provider';

import { useSelector } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { selectedLanguage } from '../redux/selectors';

import Home from './pages/Home';
import Error404 from './pages/Error404';

import Header from './ui/Header';

import '../sass/index.scss';

function App() {
  const language = useSelector(selectedLanguage);

  return (
    <Provider locale={language}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="*" component={Error404} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
