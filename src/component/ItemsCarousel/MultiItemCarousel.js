import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import classes from './MultiItemCarousel.module.css';
import Card from '../../UI/Card'
import ItemCard from '../../UI/ItemCard';
import item1 from '../../img/item1.jpeg';
import item2 from '../../img/item2.jpeg';
import item3 from '../../img/item3.jpeg';
import item4 from '../../img/item4.jpeg';
import item5 from '../../img/item5.jpeg';
import item6 from '../../img/item6.jpeg';
import item7 from '../../img/item7.jpeg';
import item8 from '../../img/item8.jpeg';
import sideImg from '../../img/sideImg.jpg';
// import { Fragment } from 'react';

const MultiItemCarousel = ( ) => {
    return(
        <div className={classes.multi}>
        <div className={classes.item_templet}>
            <Card title='Top Fashion style'>
                <Slider slidesToShow={4}>
                    <ItemCard src={item1}/>
                    <ItemCard src={item2}/>
                    <ItemCard src={item3}/>
                    <ItemCard src={item4}/>
                    <ItemCard src={item5}/>
                    <ItemCard src={item6}/>
                    <ItemCard src={item7}/>
                    <ItemCard src={item8}/>
                    {/* <div>
                        <img src={item1} alt='img'  />
                    </div>
                    <div>
                        <img src={item2} alt='img'/>
                    </div>
                    <div>
                        <img src={item3} alt='img'/>
                    </div>
                    <div>
                        <img src={item4} alt='img'/>
                    </div>
                    <div>
                        <img src={item5} alt='img'  />
                    </div>
                    <div>
                        <img src={item6} alt='img'/>
                    </div>
                    <div>
                        <img src={item7} alt='img'/>
                    </div>
                    <div>
                        <img src={item8} alt='img'/>
                    </div> */}
                </Slider>
            </Card>
        </div>
            <div className={classes.side_img}>
                <img src={sideImg} alt='additional side img ' />
            </div>
            </div>
    );

};

export default MultiItemCarousel;