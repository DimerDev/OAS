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
            <span>
               <FaMapMarkerAlt size={20} className={styl.icon} />
               м. Харків, вул.Громадянська, 25
            </span>
         </div>
         <div className={styl.item}>

            <FaPhoneAlt size={20} className={styl.icon} />
            <span>
               Макетингово-інформаційний відділ т. (057) 758-40-28, (27), (29)
            </span>
         </div>
         <div className={styl.item}>
            <span>
               <FaMailBulk size={20} className={styl.icon} />
            gorp.marketing@ukr.net
            </span>
         </div>
         <div className={styl.item}>
            <span>
               <FaRegClock size={20} className={styl.icon} />
            ПН-ПТ:      9 - 17
            </span>
         </div>


      </div >
   );
}

export default TopBar;