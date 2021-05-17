import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import './App.css';


const HatsPage = ()=>(
  <h1>Hello</h1>
);

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route  path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
