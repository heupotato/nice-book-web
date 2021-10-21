import React, { Component, useState, useEffect } from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthService from '../../api-services/auth-service';

function ForgotPassword(){
    const [state, setState]  = useState({
        email: '',
    });

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value,
        });
    };
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await AuthService.forgotPassword(state.email);
        if(JSON.stringify(res.message) == "\"FORGOT_PASSWORD_SUCCESS\"") {
                history.push({
                    pathname: '/new-password',
                    state: state.email,
                });
        }
        else if (JSON.stringify(res.message) == "\"EMAIL_NOT_FOUND\""){
            toast.error("Email is not found!",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
        else {
            toast.error("Email is not valid!",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    return(
        <div className='yellow-background signup'>
            <ToastContainer />
            <div className='dialog-bg-verify'>
                <div className='signup-background'>
                    <img src='./images/reset-pass.png' ></img>
                </div>
                <div>
                    <div className='block-center'>
                        <div>
                            <img src='./images/Logo.png'></img>
                        </div>
                        <div>
                            <h4 style={{marginRight:'20px'}}><Link to='/login'  style={{ textDecoration: 'none', color:'black'}}>Login </Link> &nbsp;&nbsp;
                                <Link to='/signup'  style={{ textDecoration: 'none', color:'black'}}> Signup</Link> </h4>
                        </div>
                    </div>
                    <div className='signup-form'>
                        <h1 className='title'>Forgot password?</h1>

                        <div className="blank"></div>
                        <div className="form-group input-icons">
                            <input type="text" className="form-control input" name="email"
                                   id="email" placeholder="Enter your email" onChange={handleChange}/>
                        </div>
                        <div className="blank"></div>
                        <div className="blank"></div>
                        <button type="button" class="btn btn-primary btn-lg button-center" onClick={handleSubmit}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
