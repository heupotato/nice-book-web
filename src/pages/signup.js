import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { useState } from 'react';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Validator from '../services/validator';

function SignUp(){
    const [state, setState] = useState(
        {
            username: '',
            email: '',
            password: '', 
            errors: {}
        }
    );
    
    const requiredWith = (value, field, state) => (!state[field] && !value) || !!value;

    const rules = [
        {
          field: 'username',
          method: 'isEmpty',
          validWhen: false,
          message: 'The username field is required.',
        },
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

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value,
        });
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await setState({
            ...state, 
            errors: validator.validate(state)
        })
        var isValidated = true; 
        if (state.errors.username != ''){
            toast.error(state.errors.username,{
                position: toast.POSITION.BOTTOM_LEFT
            }); 
            isValidated = false; 
        }
        if (state.errors.email != ''){
            toast.error(state.errors.email,{
                position: toast.POSITION.BOTTOM_LEFT
            }); 
            isValidated = false; 
        }
        if (state.errors.password != ''){
            toast.error(state.errors.password,{
                position: toast.POSITION.BOTTOM_LEFT
            }); 
            isValidated = false; 
        }
        if (isValidated == true)
            toast.success("Signup successfully 👌",{
                position: toast.POSITION.BOTTOM_LEFT
            });
        else toast.error("Invalid inputs! Please try again 🤯",{
            position: toast.POSITION.BOTTOM_LEFT
        })
        console.log(state); 
    };

    return(
        <div className='yellow-background signup'>
            <ToastContainer />
            <div className='dialog-bg center'>
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
                            <Link to='#'  style={{ textDecoration: 'none', color:'#FCBD10'}}>Signup</Link> </h4>
                        </div>
                    </div>

                    <div className='signup-form'>

                        <h1 className='title'>SIGN UP</h1>
                        <h5 className='subtitle'>Already have an account? {' '}
                        <Link to ='/login' style={{color:'#FCBD10'}}>Log in</Link></h5>

                        <div className="form-group input-icons">
                            <i class="fa fa-envelope-o icon fa-2x" aria-hidden="true"></i>
                            <input type="text" className="form-control input input-field" name="email" 
                            id="email" placeholder="Email" onChange={handleChange}/>
                            <i class="fa fa-user-o icon fa-2x" aria-hidden="true"></i>
                            <input type="text" className="form-control input input-field" name="username" 
                            id="username" placeholder="Username" onChange={handleChange}/>
                            <i class="fas fa-lock  icon fa-2x"></i>
                            <input type="password" className="form-control input input-field" name="password" 
                            id="password" placeholder="Password" onChange={handleChange}/>
                        </div>

                        <button type="button" class="btn btn-primary btn-lg button-center" onClick={handleSubmit}>Sign Up</button>
                        <h5 className="subtitle forgot-pass"><Link to = '#' style={{color:'grey'}}>Forgot your password?</Link></h5>
                    </div>
                </div>
            </div>   
        </div>
    ); 
}

export default SignUp; 