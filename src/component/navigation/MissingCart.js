import classes from './MissingCart.module.css';

const MissingCart = () => {
    return(
        <div className={classes.missing_cart}>
            <div className={classes.title}>
                My Cart
            </div>
            <div className={classes.no_contents}>
                <img src='https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' alt='missing cart img '></img>
                <p>Missing Cart Items?</p>
            </div>
        </div>
    );
}; 

export default MissingCart;