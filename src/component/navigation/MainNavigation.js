import classes from './MainNavigation.module.css';
import search_img from '../../img/search.svg';
import shopping_Cart_img from '../../img/shopping-cart.svg';
import { Link } from 'react-router-dom';

import CartContext from '../store/cart-context';
import { useContext } from 'react';

const MainNavigaton = () => {
    const cartCtx = useContext(CartContext) ;
    const noOfItemOnCart =cartCtx.totalItems;
    
    return(
        <div className={classes.navigation}>
            <div className={classes.logo}>
                <Link to='/home'>
                    <p>
                        Flipkart
                    </p>
                </Link>
                <div className={classes.plus}>
                    <Link to='/plus-membership'>
                        <span>
                            Explore
                        </span> 
                        <span> plus</span>
                        <span>
                            <img 
                            src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png' 
                            alt='plus img'
                            />
                        </span>
                    </Link>
                </div>
            </div>
            <div className={classes.search_inp}>
                <input type='text' placeholder='Search for product brands and more' />
                <span>
                    <img src={search_img}  alt='find img'/>
                </span>
            </div>
            <div className={classes.login_btn}>
                <Link to='/login'>
                    Login
                </Link> 
            </div>
            <div className={classes.more}>
                <button type='button'>
                    More
                </button> 
            </div>
            <div className={classes.cart}>

                <Link to='/cart'>
                    <span>
                        <img src={shopping_Cart_img} alt='shopping cart'/>
                    </span>
                    <span className={classes.quantity}>
                        {noOfItemOnCart}  
                    </span>
                    <span>
                        Cart
                    </span>
                </Link> 
                
            </div>
        </div>
    );
};

export default MainNavigaton;