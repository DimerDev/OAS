import React from 'react';
import s from './home.module.css'

const Home = () => {



   return (
      <div className={s.home}>
         <div className={s.bgItem}>1</div>
         <div className={s.bgItem}>2</div>
         <div className={s.bgItem}>3</div>
         <div className={s.bgItem}>4</div>
         <div className={s.bgItem}>5</div>
      </div>
   );
}


export default Home;