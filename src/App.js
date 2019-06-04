import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/store'>Store</Link>

      {routes}
      
    </div>
  );
}

export default App;
