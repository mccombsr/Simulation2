import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import routes from './routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <nav className='nav'>
          <div className='link-wrap'>
            <Link className='links' to='/'>Dashboard</Link>
            <Link className='links' to='/wizard'>Wizard</Link>
          </div>
        </nav>
        {routes}
      </div>
    );
  }
}

export default App;
