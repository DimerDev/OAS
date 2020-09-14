import React from 'react';
import logo from '../../../img/logoOAS.jpg';
import s from './NavBar.module.css';


const Navbar = () => {
   return (
      <div className={s.container}>
         <div className={s.img}>
            <img src={logo} alt='logo' />
         </div>
         <div className={s.navItem}>Головна</div>
         <div className={s.navItem}>Структура</div>
         <div className={s.navItem}>Публічна інформація</div>
         <div className={s.navItem}>Керівництво</div>
         <div className={s.navItem}>Соціальні програми</div>
         <div className={s.navItem}>Контакти</div>
      </div>
   )
}

export default Navbar;