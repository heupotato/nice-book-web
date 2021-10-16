import React, {Component, useEffect, useState} from "react";
import {Link, userHistory} from "react-router-dom";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Validator from '../services/validator';
import AuthService from '../api-services/auth-service';
import axios from 'axios';
import Modal from 'react-modal';

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

function Login() {
    const [modalIsOpen, setIsOpen] = React.useState(false); //Modal
    const [isChecked, setIsChecked] = useState(false);
    const [errors, setErrors] = useState();
    const [state, setState] = useState(
        {
            email: '',
            password: '',
        }
    );

    useEffect(() => {
        setErrors({
            email: 'The email is required.',
            password: 'The password field is required.'})
    }, [])

    const requiredWith = (value, field, state) => (!state[field] && !value) || !!value;

    const rules = [
        {
            field: 'email',
            method: 'isEmpty',
            validWhen: false,
            message: 'The email field is required.',
        },
        {
            field: 'email',
            method: 'isEmail',
            validWhen: true,
            message: 'The email must be a valid email address.',
        },
        {
            field: 'password',
            method: 'isEmpty',
            validWhen: false,
            message: 'The password field is required.',
        },
        {
            field: 'password',
            method: 'isLength',
            args: [{min: 8}],
            validWhen: true,
            message: 'The password must be at least 8 characters.',
        },
    ];
    var validator = new Validator(rules);

    const handleChange = (val) => {
        setState({
            ...state,
            [val.target.name]: val.target.value,
        });
        setErrors(validator.validate({
            ...state,
            [val.target.name]: val.target.value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        var isValidated = true;
        console.log(errors);

        if (Object.entries(errors).length === 0){
            const res = await AuthService.login(state.email, state.password);
            console.log(res.message)

            if(JSON.stringify(res.message) == "\"LOGIN_SUCCESS\"") {
                toast.success("Login successfully! 🎉",{
                    position: toast.POSITION.BOTTOM_LEFT
                });
            }
            else if((JSON.stringify(res.message) == "\"INCORECT_PASSWORD\"" || JSON.stringify(res.message) == "\"INCORECT_EMAIL\"")){
                openModal();
            }
        }
        else {
            if (errors.email !== '' ){
                toast.error(errors.email,{
                    position: toast.POSITION.BOTTOM_LEFT
                });
                isValidated = false;
                console.log('email');
            }
            if (errors.password !== ''){
                toast.error(errors.password,{
                    position: toast.POSITION.BOTTOM_LEFT
                });
                isValidated = false;
                console.log('password');
            }
        }
    }

    //Modal function
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return(
        <div className='yellow-background signup'>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h1>Error</h1>
                <div className="line"></div>
                <div style={{marginBottom: '30px', marginTop: '30px', fontFamily: 'Montserrat', fontSize: '22px'}}>Your email or password is not correct! Please try again...</div>
                <div className="line"></div>
                <button className="btn btn-primary btn-lg button-center" onClick={closeModal}>OK</button>
            </Modal>
            <ToastContainer/>
            <div className='dialog-bg center'>
                <div className='signup-background'>
                    <img src='./images/login.png'></img>
                </div>
                <div>
                    <div className='block-center'>
                        <div>
                            <img src='./images/Logo.png'></img>
                        </div>
                        <div>
                            <h4 style={{marginRight: '20px'}}><Link to='#' style={{textDecoration: 'none', color: '#FCBD10'}}>Login </Link> &nbsp;&nbsp;
                                <Link to='/signup' style={{textDecoration: 'none', color: 'black'}}>Signup</Link></h4>
                        </div>
                    </div>

                    <div className='signup-form'>

                        <h1 className='title'>LOG IN</h1>
                        <h5 className='subtitle'>Don't have an account? {' '}
                            <Link to='/signup' style={{color: '#FCBD10'}}>Sign up</Link></h5>

                        <div className="form-group input-icons">
                            <i className="fa fa-envelope-o icon fa-2x" aria-hidden="true"></i>
                            <input type="text" className="form-control input input-field" name="email" id="email" placeholder="Email" onChange={handleChange}/>
                            <i className="fas fa-lock  icon fa-2x"></i>
                            <input type="password" className="form-control input input-field" name="password" id="password" placeholder="Password" onChange={handleChange}/>

                            <div className="remember-checkbox" onClick={() => setIsChecked(!isChecked)}>
                                <input className="checkbox" type="checkbox" checked={isChecked} />
                                <h6><div className="checkbox-text">Remember me?</div></h6>
                            </div>
                        </div>

                        <button type="button" className="btn btn-primary btn-lg button-center" onClick={handleSubmit}>Login</button>
                        <h6 className="subtitle forgot-pass"><Link to='#' style={{color: 'grey'}}>Forgot your password?</Link></h6>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;
