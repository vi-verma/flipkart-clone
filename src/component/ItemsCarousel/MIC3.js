import {products} from '../store/content-item';
import Card from '../../UI/Card';
import ItemCard from '../../UI/ItemCard';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


const MIC3 = (props) => {
    const onViewItem = (item) => {
        props.setViewItem(item);
        // console.log(item)
    };

    const itemList = products.map(product =>
        <div key={product.id} onClick ={() => onViewItem(product)}> 
        <Link to='/item'> 
        <ItemCard 
        src={product.url}
        title={product.title.shortTitle}
        price={product.price.cost} 
        info={product.tagline}
        />
        </Link>
        </div>
        );

    return(
        <div >
            <Card title='Big Sale' subTitle='Get upto 70% discount'>
                <Slider slidesToShow={5}>
                {itemList}
                </Slider>
            </Card>
        </div>
    );
} ;

export default MIC3;