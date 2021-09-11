
import classes from './ItemCard.module.css';

const ItemCard = (props) => {
    return(
        <div className={classes.card}>
            <img src={props.src} alt={props.alt || ''}/>
            <div>
            <p className={classes.product}>{props.title}</p>
            <p className={classes.price}>₹ {props.price}</p>
            <p className={classes.info}>{props.info}</p>
            </div>
        </div>
    );
}

export default ItemCard;