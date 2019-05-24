import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage';
import './App.css';

class App extends Component {

  render(){

    return (
      <div className="App">
        <main className="App-main">
          <Route exact path={'/'} component={LandingPage}/>
        </main>
      </div>
    );

  }

}

export default App;
