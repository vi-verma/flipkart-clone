import classes from './CartItems.module.css';
import { Fragment } from "react";


const CartItems = (props) => {
    const items = props.cartItemsCtx;

    const onIncrementHandeler = (itemToIncrease) => { 
        items.addItem(itemToIncrease);
    };
    const onDecrementHandeler = (itemToDecrement) => {
        // console.log(itemToDecrement.id, 'cart item rem')
        items.removeItem(itemToDecrement.id)
    } ;     
    const onRemoveHandler = (itemToRemove) => {
        // console.log(itemToRemove.id, 'cart item rem')
        items.deleteItem(itemToRemove.id)
    } ; 

    const cartItems = props.cartItemsCtx;
    const productInCart = cartItems.items.map((item) => {
        return(
            <div className={classes.product} key={item.id}>
                <div className={classes.product_image}>
                    <img src={item.url} alt={item.id}></img>
                    <div className={classes.quantity_button}>
                        <button onClick={() => onDecrementHandeler(item)}>-</button>
                        <p>{item.quantity}</p>
                        {/* {console.log(item, "each item")} */}
                        <button onClick={() => onIncrementHandeler(item)}>+</button>
                    </div>
                </div>
                <div className={classes.item_description}>
                    {/* <p className={classes.item_name}>{item.title.shortTitle}</p> */}
                    <p className={classes.price}>{item.price.cost}</p>
                    <p className={classes.item_detail}>{item.title.longTItle}</p>
                    <button type="button" onClick={() => onRemoveHandler(item)}>Remove</button>
                </div>

                <div className={classes.delevery_status}>
                    <p>delevery by 2 sept </p>
                </div>

            </div>
        );
    });


    return(
        <Fragment>
            {productInCart}
        </Fragment>
    );
};

export default CartItems;