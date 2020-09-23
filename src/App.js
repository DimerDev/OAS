import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Home from './components/Home/Home.jsx';
import Contact from './Pages/Contact';
import Inform from './Pages/Inform';
import Architecture from './Pages/Architecture';
import Programs from './Pages/Programs';


const App = () => {
   return (
      <BrowserRouter>
         <div className="App">
            <Header />
            <Home />
            <Route path='/Contact' component={Contact} />
            <Route path='/Inform' component={Inform} />
            <Route path='/Architecture' component={Architecture} />
            <Route path='/Programs' component={Programs} />

         </div>
      </BrowserRouter>
   );
}

export default App;