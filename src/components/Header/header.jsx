import React from 'react';
import styl from './header.module.css';
import Navbar from './NavBar/NavBar';
import TopBar from './TopBar/TopBar';


const Header = () => {
   return (
      <div className={styl.Header}>
         <TopBar />
         <Navbar />
      </div>
   );
}


export default Header;