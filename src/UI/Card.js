import classes from './Card.module.css';

const Card = (props) => {
    return(
        <div className={classes.card}>
            <div className={classes.title}>
                <div >
                    <p className={classes.title_name}>
                        {props.title}
                    </p>
                    <p className={classes.sub_title__name}>
                        {props.subTitle}
                    </p>
                </div >
                <div>
                    <button 
                    onClick={props.onClick} 
                    className={classes.view_btn}
                    >
                        view All
                    </button>
                </div>
            </div>

            <div className={classes.items}>
                {props.children}
            </div>
        </div>
    );
};

export default Card;