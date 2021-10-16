import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

function Login() {
    const [state, setState] = useState(
        {
            username: '',
            password: '',
        }
    )

    return(
        <div className='yellow-background'>
            <div className='dialogLoginBg2 center-position'>
                <div className="imageLogo">
                    <img className="imgLogoNoBg" src='./images/imgLogin.png'/>
                </div>
                <div className="submitForm">
                    <div className="headerLogin">
                        <img src='./images/Logo.png'></img>
                        <div>
                            <h4 style={{margin:'20px', marginLeft: '130px'}}><Link to='/signup'  style={{ textDecoration: 'none', color:'#FCBD10'}}>Login </Link> &nbsp;&nbsp;
                            <Link to='#'  style={{ textDecoration: 'none', color:'black'}}>Signup</Link> </h4>
                        </div>
                    </div>
                    <div className='blank'></div>
                    <div className='login-form'>
                        <h1 className='login-title'>LOG IN</h1>
                        <h5 className='login-subtitle'>Don't have an account? {' '} <Link to ='/signup' style={{color:'#FCBD10'}}>Sign up</Link></h5>

                        <div className="form-group input-icons">
                            <i className="fa fa-user-o label-icon fa-2x" aria-hidden="true"></i>
                            <input type="text" className="form-control input-login input-field-login" name="username"
                                   id="username" placeholder="Username" />
                            <i className="fas fa-lock  icon fa-2x"></i>
                            <input type="password" className="form-control input-login input-field-login" name="password"
                                   id="password" placeholder="Password" />
                        </div>

                        <div className="remember-checkbox">
                            <input className="checkbox" type="checkbox"/>
                            <h6><div className="checkbox-text">Remember me?</div></h6>
                        </div>

                        <button type="button" className="btn btn-primary btn-lg button-center">Login</button>
                        <h5 className="subtitle forgot-pass"><Link to='#' style={{color: 'grey'}}>Forgot your password?</Link></h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
