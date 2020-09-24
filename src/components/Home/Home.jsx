import React from 'react';
import s from './home.module.css'

const Home = () => {
   const arrImg = ['DL.jpg', 'Vacine.jpg', 'kitchen.jpeg', 'Zbyt.jpg', 'Help.jpeg'];



   return (
      <div className={s.home}>
         {arrImg.map((item) => {
            let style = {
               background: `url(${item})`
            }
            return < div className={s.bgItem} style={style} >123213123</ div>
         })}
      </div>
   );
}


export default Home;