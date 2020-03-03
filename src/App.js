import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//import componente
import News from './components/News'
import Videos from './components/Videos'

function App() {
  return (
    <div className="App">
      
        <div className='header'>
          <News></News>
          <Videos></Videos>
        </div>
      
    </div>
  );
}

export default App;
