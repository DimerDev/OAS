import React from 'react';
import logo from '../../../img/logoOAS.jpg';
import s from './NavBar.module.css';


const Navbar = () => {


   return (
      <div className={s.container}>
         <div className={s.img}>
            <img src={logo} alt='logo' className={s.logo} />
            <h2>Комунальне підприємство Харківської обласної ради</h2>
            <h1>"Обласний аптечний склад"</h1>
         </div>

         <div className={s.navItem}>
            <div >Головна</div>
            <div >Структура</div>
            <div >Публічна інформація</div>
            <div >Керівництво</div>
            <div >Соціальні програми</div>
            <div >Контакти</div>
         </div>
      </div>
   )


}

export default Navbar;




