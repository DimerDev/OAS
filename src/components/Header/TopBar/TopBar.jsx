import React from 'react';
import styl from './TopBar.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';

const TopBar = () => {
   return (
      <div className={styl.container}>
         <div className={styl.item}>
            <FaMapMarkerAlt size={20} className={styl.icon} />
             м. Харків, вул.Громадянська, 25
         </div>
         <div className={styl.item}>
            <FaPhoneAlt size={20} className={styl.icon} />
               Макетингово-інформаційний відділ т. (057) 758-40-28, (27), (29)
         </div>
         <div className={styl.item}>
            <FaMailBulk size={22} className={styl.icon} />
            gorp.marketing@ukr.net
         </div>
         <div className={styl.item}>
            <FaRegClock size={20} className={styl.icon} />
            ПН-ПТ:      9 - 17
         </div>
      </div >
   );
}

export default TopBar;