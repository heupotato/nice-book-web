import React, { Component } from 'react';
import { Link, useLocation} from "react-router-dom";
import { useState } from 'react';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Verify(){

    const location = useLocation(); 

    console.log(location.state); 
    //NOTE: Nếu cần email gọi biến location.state.email
    const [state, setState]  = useState(); 

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value,
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(state); 
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
                    </div>
                </div>
            </div>   
        </div>
    ); 
}

export default Verify; 
