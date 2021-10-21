import React, { Component, useEffect } from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";
import { useState } from 'react';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Validator from '../../services/validator';
import AuthService from '../../api-services/auth-service';
import axios from 'axios';
import Modal from "react-modal";

const customStyles = {
    content: {
        width: '700px',
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
    },
};

function NewPassword(){
    const [state, setState] = useState(
        {
            code: '',
            newPassword: '',
        }
    );
    const [errors, setErrors] = useState();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        setErrors({
            code: 'The code field is required.',
            newPassword: 'The password field is required.'})
    }, [])


    const rules = [
        {
            field: 'code',
            method: 'isEmpty',
            validWhen: false,
            message: 'The code field is required.',
        },
        {
            field: 'newPassword',
            method: 'isEmpty',
            validWhen: false,
            message: 'The password field is required.',
        },
        {
            field: 'newPassword',
            method: 'isLength',
            args: [{min: 8}],
            validWhen: true,
            message: 'The password must be at least 8 characters.',
        },
    ];
    var validator = new Validator(rules);

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value,
        });
        setErrors(validator.validate({
            ...state,
            [evt.target.name]: value,
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        var isValidated = true;

        if (Object.entries(errors).length === 0){
            const res = await AuthService.resetPassword(location.state, state.code, state.newPassword);
            console.log(res.message);
            if(JSON.stringify(res.message) == "\"RESET_PASSWORD_SUCCESS\"") {
                toast.success("reset password successfully 👌",{
                    position: toast.POSITION.BOTTOM_LEFT
                });
                setTimeout(() => {
                    history.push({
                        pathname: '/login',
                    });
                }, 3000);
            }
            else if(JSON.stringify(res.message) == "\"INVALID_CODE\""){
                toast.error("Invalid code!",{
                    position: toast.POSITION.BOTTOM_LEFT
                });
            }
        }
        else {
            if (errors.code !== ''){
                toast.error(errors.code,{
                    position: toast.POSITION.BOTTOM_LEFT
                });
                isValidated = false;
                console.log('code');
            }
            if (errors.newPassword !== '' ){
                toast.error(errors.newPassword,{
                    position: toast.POSITION.BOTTOM_LEFT
                });
                isValidated = false;
                console.log('newPassword');
            }
        }
    };

    const handleResendCode = async (e) => {
        e.preventDefault();
        const res = await AuthService.resendPasswordCode(location.state);
        if(JSON.stringify(res.message) == "\"RESEND_PASSWORD_CODE_SUCCESS\"") {
            toast.success("A new code has been resent!",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    return(
        <div className='yellow-background signup'>
            <ToastContainer />
            <div className='dialog-bg center'>
                <div className='signup-background'>
                    <img src='./images/new-pass.png' ></img>
                </div>
                <div>
                    <div className='block-center'>
                        <div>
                            <img src='./images/Logo.png'></img>
                        </div>
                        <div>
                            <h4 style={{marginRight:'20px'}}><Link to='/login'  style={{ textDecoration: 'none', color:'black'}}>Login </Link> &nbsp;&nbsp;
                                <Link to='/signup'  style={{ textDecoration: 'none', color:'black'}}>Signup</Link> </h4>
                        </div>
                    </div>

                    <div className='signup-form'>
                        <h1 className='title'>RESET PASSWORD</h1>

                        <div className="form-group input-icons">
                            <i class="fa fa-envelope-o icon fa-2x" aria-hidden="true"></i>
                            <input type="text" className="form-control input input-field" value={location.state} name="email"
                                   id="email" placeholder="Email" onChange={handleChange}/>
                            <i class="fa fa-user-o icon fa-2x" aria-hidden="true"></i>
                            <input type="text" className="form-control input input-field" name="code"
                                   id="code" placeholder="Code" onChange={handleChange}/>
                            <i class="fas fa-lock  icon fa-2x"></i>
                            <input type="password" className="form-control input input-field" name="newPassword"
                                   id="newPassword" placeholder="New password" onChange={handleChange}/>
                        </div>

                        <button type="button" class="btn btn-primary btn-lg button-center" onClick={handleSubmit}>RESET</button>
                        <h6 className='subtitle forgot-pass'
                            style={{color: 'grey', marginTop: '20px', cursor: 'pointer'}}
                            onClick={handleResendCode}
                        >Resend a new code to email?</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewPassword;
