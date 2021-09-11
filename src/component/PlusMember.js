import classes from './PlusMember.module.css'

import im1 from '../img/plus/myCoinBalImg.jpg';
import im2 from '../img/plus/rewardImg.jpg';

import im01 from '../img/plus/Non-Member.jpg';
import im02 from '../img/plus/Non-Member3.jpg';
import im03 from '../img/plus/Non-Member2.jpg';
import im04 from '../img/plus/nonplus_DT_banner.jpg';
import im05 from '../img/plus/Non-Member_07.jpg';
import im06 from '../img/plus/Non-Member_08.jpg';
import im07 from '../img/plus/Rp1.jpg';
import im08 from '../img/plus/Non-Member_10.jpg';
import faqimg from '../img/plus/Desktop_Non-Member.jpg';


const PlusMember = () => {
    return(
        <div className={classes.plus}>
            <img src={im1} alt=''></img>
            <img src={im2} alt=''></img>

            <img src={im01}  alt=''></img>
            <img src={im02}  alt=''></img>
            <img src={im03}  alt=''></img>
            <img src={im04}  alt=''></img>
            <img src={im05}  alt=''></img>
            <img src={im06}  alt=''></img>
            <img src={im07}  alt=''></img>
            <img src={im08}  alt=''></img>
            <img src={faqimg} alt=''></img>
        </div>
    );
};

export default PlusMember;