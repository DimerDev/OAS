import React from 'react';
//import logo from './img/logoOAS.jpg';
import './App.css';
import Header from './components/Header/header';
import Home from './components/Home/Home.jsx';

const App = () => {
   return (
      <div className="App">
         <Header />
         <Home />
      </div>
   );
}

export default App;