import React, { Component, useState, useEffect } from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthService from '../../api-services/auth-service';

function Verify(){
    const location = useLocation();
    console.log(location.state); //NOTE: Nếu cần email gọi location.state

    const [state, setState]  = useState();

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
        const res = await AuthService.verifyCode(location.state, state.verifyCode);
        if(JSON.stringify(res.message) == "\"VERIFY_ACCOUNT_SUCCESS\"") {
            toast.success("Signup successfully 👌 Redirecting...",{
                position: toast.POSITION.BOTTOM_LEFT});
            setTimeout(() => {
                history.push({
                    pathname: '/login',
                });
            }, 3000);
        }
        else{
            toast.error("Verify code is not true!",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }



    const handleResendCode = async (e) => {
        e.preventDefault();
        const res = await AuthService.resendCode(location.state);
        if(JSON.stringify(res.message) == "\"RESEND_VERIFY_CODE_SUCCESS\"") {
            toast.success("A new code has been resent!",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    return(
        <div className='yellow-background signup'>
            <ToastContainer />
            <div className='dialog-bg-verify'>
                <div className='signup-background'>
                    <img src='./images/sign-up.png' ></img>
                </div>
                <div>
                    <div className='block-center'>
                        <div>
                            <img src='./images/Logo.png'></img>
                        </div>
                        <div>
                            <h4 style={{marginRight:'20px'}}><Link to='/login'  style={{ textDecoration: 'none', color:'black'}}>Login </Link> &nbsp;&nbsp;
                                <Link to='signup'  style={{ textDecoration: 'none', color:'#FCBD10'}}>Signup</Link> </h4>
                        </div>
                    </div>

                    <div className='signup-form'>
                        <h1 className='title'>SIGN UP</h1>
                        <h5 className='subtitle'>Already have an account? {' '}
                            <Link to ='/login' style={{color:'#FCBD10'}}>Log in</Link></h5>

                        <div className="blank"></div>
                        <div className="form-group input-icons">
                            <input type="text" className="form-control input input-field" name="verifyCode"
                                   id="verifyCode" placeholder="Verify code" onChange={handleChange}/>
                        </div>
                        <div className="blank"></div>
                        <div className="blank"></div>
                        <button type="button" class="btn btn-primary btn-lg button-center" onClick={handleSubmit}>Verify</button>
                        <h6 className="subtitle forgot-pass"
                            style={{color: 'grey', marginTop: '40px', cursor: 'pointer'}}
                            onClick={handleResendCode}
                        >Resend a verify passcode</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Verify;
