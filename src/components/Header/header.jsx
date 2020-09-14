import React from 'react';
import logo from '../../img/logoOAS.jpg';
import c from './header.module.css';
import TopBar from './TopBar/TopBar';


const Header = () => {
   return (
      <div className='header'>
         <TopBar />
         <div className='logo-nav'></div>
      </div>
   );
}


export default Header;