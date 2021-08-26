
import classes from './Card';

const ItemCard = (props) => {
    return(
        <div className={classes.card}>
            <img src={props.src} alt={props.alt || ''}/>
            <p >{'props.itemName'}</p>
            <p>₹{'props.itemPrice'}</p>
            <p>{'props.info'}</p>
        </div>
    );
}

export default ItemCard;