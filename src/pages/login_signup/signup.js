import React, { Component, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Validator from '../../services/validator';
import AuthService from '../../api-services/auth-service';
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

function SignUp() {
  const [modalIsOpen, setIsOpen] = React.useState(false); //Modal
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState();

  const history = useHistory();

  useEffect(() => {
    setErrors({
      username: 'The username field is required.',
      email: 'The email is required.',
      password: 'The password field is required.',
    });
  }, []);

  const requiredWith = (value, field, state) =>
    (!state[field] && !value) || !!value;

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
      args: [{ min: 8 }],
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
    setErrors(
      validator.validate({
        ...state,
        [evt.target.name]: value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    var isValidated = true;
    // console.log(isValidated);
    // console.log(errors);

    if (Object.entries(errors).length === 0) {
      const res = await AuthService.signup(
        state.email,
        state.username,
        state.password
      );
      console.log(res.message);
      if (JSON.stringify(res.message) == '"REGISTER_SUCCESS"') {
        toast.success('Signup successfully 👌', {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        let email = state.email;
        history.push({
          pathname: '/verify',
          state: email,
        });
      } else if (JSON.stringify(res.message) == '"EMAIL_ALREADY_EXIST"') {
        openModal();
      }
    } else {
      if (errors.username !== '') {
        toast.error(errors.username, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        isValidated = false;
        console.log('username');
      }
      if (errors.email !== '') {
        toast.error(errors.email, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        isValidated = false;
        console.log('email');
      }
      if (errors.password !== '') {
        toast.error(errors.password, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        isValidated = false;
        console.log('password');
      }
    }
  };

  //Modal function
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='yellow-background signup'>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h1>Error</h1>
        <div className='line'></div>
        <div
          style={{
            marginBottom: '30px',
            marginTop: '30px',
            fontFamily: 'Montserrat',
            fontSize: '22px',
          }}
        >
          Email already exists!
        </div>
        <div className='line'></div>
        <button
          className='btn btn-primary btn-lg button-center'
          onClick={closeModal}
        >
          OK
        </button>
      </Modal>
      <ToastContainer />
      <div className='dialog-bg center'>
        <div className='signup-background'>
          <img src='/nice-book-web/images/sign-up.png'></img>
        </div>
        <div>
          <div className='block-center'>
            <div>
              <img src='/nice-book-web/images/Logo.png'></img>
            </div>
            <div>
              <h4 style={{ marginRight: '20px' }}>
                <Link
                  to='/login'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Login{' '}
                </Link>{' '}
                &nbsp;&nbsp;
                <Link
                  to='#'
                  style={{ textDecoration: 'none', color: '#FCBD10' }}
                >
                  Signup
                </Link>{' '}
              </h4>
            </div>
          </div>

          <div className='signup-form'>
            <h1 className='title'>SIGN UP</h1>
            <h5 className='subtitle'>
              Already have an account?{' '}
              <Link to='/login' style={{ color: '#FCBD10' }}>
                Log in
              </Link>
            </h5>

            <div className='form-group input-icons'>
              <i class='fa fa-envelope-o icon fa-2x' aria-hidden='true'></i>
              <input
                type='text'
                className='form-control input input-field'
                name='email'
                id='email'
                placeholder='Email'
                onChange={handleChange}
              />
              <i class='fa fa-user-o icon fa-2x' aria-hidden='true'></i>
              <input
                type='text'
                className='form-control input input-field'
                name='username'
                id='username'
                placeholder='Username'
                onChange={handleChange}
              />
              <i class='fas fa-lock  icon fa-2x'></i>
              <input
                type='password'
                className='form-control input input-field'
                name='password'
                id='password'
                placeholder='Password'
                onChange={handleChange}
              />
            </div>

            <button
              type='button'
              class='btn btn-primary btn-lg button-center'
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <h6 className='subtitle forgot-pass'>
              <Link to='/forgot-password' style={{ color: 'grey' }}>
                Forgot your password?
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
