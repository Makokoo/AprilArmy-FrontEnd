import React from 'react';
import car1 from './assets/images/thumbnail.jpg';
import './assets/css/App.css';

//import componente
import News from './components/News'
import Videos from './components/Videos'
import Galery from './components/Galery'
import LastPosts from './components/LastPosts'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Galery></Galery>
      <LastPosts></LastPosts>
      <News></News>
      <Videos></Videos>
    </div>
  );
}

export default App;
