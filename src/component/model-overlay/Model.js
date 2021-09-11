import { Fragment } from 'react';
import classes from './Model.module.css';
import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';


const Backdrop = (props) => {
    const history = useHistory();

const handeler =()=> {
    history.goBack();
}
    
    return <button onClick={handeler}>
    <div className={classes.overlay}/>;
    </button>
};

const ModelOverlay = (props) => {
    return(
        <div className={classes.model}>
            <div className={classes.content}>
                  {props.children}
            </div>
        </div>      
    );
};

const Model = (props) => {
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop>{props.children}</Backdrop>,
            document.getElementById('overlay'))}
            {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, document.getElementById('overlay'))}
        </Fragment>
    );
};
export default Model;