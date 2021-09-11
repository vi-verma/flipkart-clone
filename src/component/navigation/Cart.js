import classes from './Cart.module.css'; 
import CartContext from '../store/cart-context';
import { useContext } from 'react';
import CartItems from './CartItems';

const Cart = () => {
    const cartItemsCtx = useContext(CartContext);
    const itemCount = cartItemsCtx.totalItems;
    const amount = cartItemsCtx.totalAmount;
    // console.log(cartItemsCtx,' cart')

    return(<>
    <div className={classes.cart_summery}>
        <div className={classes.cart_items_summry}>
            <div className={classes.title}>
                <p>My Cart(3)</p> 
                <p>Enter PIN code  check</p>
            </div>
            <div className={classes.items}>
                <CartItems  cartItemsCtx={cartItemsCtx}/>
            </div>
            <div className={classes.order_button}>
                <button>PLACE ORDER</button>
            </div>

        </div>

                
        <div className={classes.price_summry}>
            <div className={classes.price_title}>
                <p>PRICE DETAILS</p>
            </div>
            <div className={classes.price_description}>
                <p className={classes.price}>Price({ itemCount}) <span>{"price"}</span></p>
                <p className={classes.discount}>Discount <span>{"discount"}</span></p>
                <p className={classes.dc} >Delevery charges <span>{"charge"}</span></p>
                <p className={classes.amount}>Total Amount <span>{ amount}</span></p>

            </div>
        </div>
    </div>
       
    </>
    );
};

export default Cart;