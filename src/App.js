import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Index from './pages/Home/index';
import Results from './pages/Results/index'
import MovieDetail from './pages/MovieDetail'

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Index} />
        <Route path='/results' component={Results} />
        <Route path='/movie/:id' component={MovieDetail}/>
      </div>
    </Router>
  </Provider>
);

App.prototype = {
  store: PropTypes.object.isRequired
};

export default App;
