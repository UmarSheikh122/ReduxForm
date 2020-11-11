import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, useHistory, IndexRoute } from 'react-router-dom'
import Contact from './Contact'
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// ReactDOM.render((
//   <Router>
//      <Route path = "/" component = {App}>
//         {/* <IndexRoute component = {Home} /> */}
//         <Route path = "/contact" component = {Contact} />
//      </Route>
//   </Router>
// ), document.getElementById('root'))
