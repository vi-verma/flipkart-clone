import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import img1 from '../img/Cimg1.jpg';
import img2 from '../img/Cimg2.jpg';
import img3 from '../img/Cimg3.jpg';
import img4 from '../img/Cimg4.jpg';
import classes from './Carousel1.module.css';

const Carousel1 = ( ) => {
    return(
        <div className={classes.carousel}>
            {/* <h1>Carusel</h1> */}
            <Slider autoplay={true} autoplaySpeed={1000} dots initialSlide={3}>
                <div>
                    <img src={img1} alt='img'  />
                </div>
                <div>
                    <img src={img2} alt='img'/>
                </div>
                <div>
                    <img src={img3} alt='img'/>
                </div>
                <div>
                    <img src={img4} alt='img'/>
                </div>
            </Slider>
        </div>
    );

};

export default Carousel1;