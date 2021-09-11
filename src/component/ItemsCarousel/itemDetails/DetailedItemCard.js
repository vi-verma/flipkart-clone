import cart from '../../../img/shopping-cart.svg';
import classes from './DetailedItemCard.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';


const DeatiledItemCard = (props) => {
    const cartCtx = useContext(CartContext);
    // console.log(props)
    const onAddToCartHandeler =(item )=>{
        item.quantity = 1;
        cartCtx.addItem(item);
        // console.log(item, "detailed item")
    };

    return(
    <div className={classes.card}>
        <div className={classes.item_display}>
            <img className={classes.item_image} src={props.viewItem.detailUrl} alt={props.alt || 'img'}></img>
            <div className={classes.cart_button}>
                <button type='button' onClick={() => onAddToCartHandeler(props.viewItem)}>
                    <img src={cart} alt='cartsvg' width="30px"/>
                        Add to cart
                </button>
                <button>
                    BUY NOW 
                </button>
            </div>
        </div>
        <div className={classes.item_info}>
            <p>{props.viewItem.detailTitle}</p>
            <p>{props.viewItem.description}</p>
            {/* <p>{props.viewItem.price.mrp}</p> */}
        </div>
    </div>
    )
}; 

export default DeatiledItemCard;