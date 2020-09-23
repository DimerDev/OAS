import React from 'react';
import logo from '../../../img/logoOAS.jpg';
import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';






const Navbar = () => {


   return (

      <div className={s.container}>
         <div className={s.img}>
            <img src={logo} alt='logo' className={s.logo} />
            <h2>Комунальне підприємство Харківської обласної ради</h2>
            <h1>"Обласний аптечний склад"</h1>
         </div>

         <div className={s.navItem}>
            <NavLink to=''>Головна</NavLink>
            <NavLink to='Architecture'>Структура</NavLink>
            <NavLink to='Inform'>Публічна інформація</NavLink>
            <div>Керівництво</div>
            <NavLink to='Programs'>Соціальні програми</NavLink>
            <NavLink to='Contact'>Контакти</NavLink>
         </div>
      </div>

   )


};

export default Navbar;




