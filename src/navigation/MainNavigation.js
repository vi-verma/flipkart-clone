import classes from './MainNavigation.module.css';
import search_img from '../img/search.svg';
import shopping_Cart_img from '../img/shopping-cart.svg';


const MainNavigaton = () => {
    return(
        <div className={classes.navigation}>
            <div className={classes.logo}>
                <p>
                    Flipkart
                </p>
                <p className={classes.plus}>
                    Explore <span> plus</span>
                    <span>
                        <img 
                        src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png' 
                        alt='plus img'
                        />
                    </span>
                </p>
            </div>
            <div className={classes.search_inp}>
                <input type='text' placeholder='Search for product brands and more' />
                <span>
                    <img src={search_img}  alt='find img'/>
                </span>
            </div>
            <div className={classes.login_btn}>
                <button type='button'>
                    Login
                </button> 
            </div>
            <div className={classes.more}>
                <button type='button'>
                    More
                </button> 
            </div>
            <div className={classes.cart}>
                <button type='button'>
                    <span>
                        <img src={shopping_Cart_img} alt='shopping cart'/>
                    </span>
                    Cart
                    <span>
                        3   
                    </span>
                </button> 
            </div>
        </div>
    );
};

export default MainNavigaton;