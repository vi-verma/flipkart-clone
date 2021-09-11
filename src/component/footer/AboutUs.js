import classes from './AboutUs.module.css';
import sellImg from '../../img/sell.svg';
import giftImg from '../../img/gift.svg';


const AboutUs = () => {
    return(

        <div className={classes.AboutUs}>
            <div className={classes.aboutus_detail}>
            <div>
                <p>ABOUT</p>
                <p>Contact Us</p>
                <p>About Us</p>
                <p>Careers</p>
                <p>Flipkart Stories</p>
                <p>Press</p>
                <p>Flipkart Wholesale</p>
                <p>Corporate Information</p>
            </div>
            <div>
                <p>HELP</p>
                <p>Payments</p>
                <p>Shipping</p>
                <p>Cancellation & Returns</p>
                <p>FAQ</p>
                <p>Report Infringement</p>
            </div>
            <div>
                <p>POLICY</p>
                <p>Return Policy</p>
                <p>Terms Of Use</p>
                <p>Security</p>
                <p>Privacy</p>
                <p>Sitemap</p>
                <p>EPR Compliance</p>
            </div>
            <div>
                <p>SOCIAL</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>YouTube</p>
            </div>
            <div>
                <p>Mail Us:</p>
                <p>Flipkart Internet Private Limited,</p>
                <p>Buildings Alyssa, Begonia &</p>
                <p>Clove Embassy Tech Village,</p>
                <p>Outer Ring Road, Devarabeesanahalli Village,</p>
                <p>Bengaluru, 560103,</p>
                <p>Karnataka, India</p>
            </div>
            <div>
                <p>Registered Office Address:</p>
                <p>Flipkart Internet Private Limited,</p>
                <p>Buildings Alyssa, Begonia &</p>
                <p>Clove Embassy Tech Village,</p>
                <p>Outer Ring Road, Devarabeesanahalli Village,</p>
                <p>Bengaluru, 560103,</p>
                <p>Karnataka, India</p>
                <p>CIN : U51109KA2012PTC066107</p>
                <p>
                    Telephone:&nbsp;
                    <a href='tel:18002029898'>1800 202 9898</a>
                </p>
            </div>
            </div>
            <div className={classes.bottom}>
                <div>
                    <img src={sellImg} alt='sell img'></img>
                    <p>Sell On Flipkart</p>
                </div>
                <div>
                    <img src={giftImg} alt='gift'/>
                    <p>Advertise</p>
                </div>
                <div><p>Gift Cards</p></div>
                <div><p>Help Center</p></div>
                <div><p>2007-2021 Flipkart.com</p></div>
            </div>
        </div>
    );
};

export default AboutUs;
















