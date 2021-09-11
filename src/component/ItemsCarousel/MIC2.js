import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import classes from './MIC.module.css';
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
// import { Fragment } from 'react';

const MultiItemCarousel = ( ) => {
    return(
        <div className={classes.multi}>
            <Card title='Top Fashion style' subTitle='Trending style'>
                <Slider slidesToShow={7}>
                    <ItemCard src={item1}/>
                    <ItemCard src={item2}/>
                    <ItemCard src={item3}/>
                    <ItemCard src={item4}/>
                    <ItemCard src={item5}/>
                    <ItemCard src={item6}/>
                    <ItemCard src={item7}/>
                    <ItemCard src={item8}/>
                </Slider>
            </Card>
            </div>
    );

};

export default MultiItemCarousel;