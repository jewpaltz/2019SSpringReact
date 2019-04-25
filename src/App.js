import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './components/Nav';

const Home = ()=> <h1>You are home</h1>
const About = ()=> <h1>I teach the best Web Course at New Paltz</h1>
const Friends = ()=> (<ul>
    <li>You guys</li>
    <li>All the Jewish students</li>
  </ul>)

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="container">
          <Route path="/" exact={true} component={Home} />
          <Route path="/About" component={About} />
          <Route path="/MyFriends" component={Friends} />
        </div>
      </Router>
    </div>
  );
}

export default App;
