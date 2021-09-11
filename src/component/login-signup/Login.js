import { Link } from 'react-router-dom';
import classes from './Login.module.css';
import loginImg from '../../img/login-signup/login_img.png';

const Login = () => {
    return(
        <div className={classes.login}>
            <div className={classes.login_info}>
                <div>
                    <p className={classes.login_title}>
                        Login
                    </p>
                    <p className={classes.content}>
                        Get access to your Orders, Wishlist and Recommendations
                    </p>
                </div>
                <div>
                    <img src={loginImg} alt='' ></img>    
                </div>
            </div>
            <div className={classes.login_form}>
                
                <div className="form-floating mb-3" >
                    <input type="text" class="form-control" id="floatingInput" placeholder="Enter Email/Mobile number"/>
                    <label for="floatingInput">Enter Email/Mobile number</label>
                </div>
                <div className="form-floating">
                    <input type="password"  className="form-control" id="floatingPassword" placeholder="Enter Password"/>
                    
                    <button type='button' >Forgot? </button>
                    <label for="floatingPassword">Enter Password</label>
                </div>  

                <p>By continuing, you agree to Flipkart's 
                &nbsp;<Link> Terms of Use </Link>
                    <span> &nbsp;and </span>
                    <Link> Privacy Policy </Link>
                </p>
                <button className={classes.login_btn} type='button'>Login</button>
                <p>OR</p>
                <button className={classes.otp_btn} type='button'>
                    Request OTP
                </button>
                <div>
                    <Link>
                        New to Flipkart? Create an account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;