import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './stylesheet.css'
import Home from './Home';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Switch>
      <Route path = "/" exact component = {Home} />
      <Route path = "/search" component = {App} />
    </Switch>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


