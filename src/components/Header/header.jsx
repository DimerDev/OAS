import React from 'react';
import c from './header.module.css';
import Navbar from './NavBar/NavBar';
import TopBar from './TopBar/TopBar';


const Header = () => {
   return (
      <div className='header'>
         <TopBar />
         <Navbar />
      </div>
   );
}


export default Header;