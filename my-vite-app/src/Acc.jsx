
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Acc.css'

const signupInitialValue = {
  name: '',
  username: '',
  password: ''
};

const loginInitialValue = {
  username: '',
  password: ''
};

const Acc = () => {
  const [account, toggleAccount] = useState('login');
  const [signup, setSignup] = useState(signupInitialValue);
  const [login, setLogin] = useState(loginInitialValue);
  const navigate = useNavigate(); 

 
  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
  };


  const onSignupInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

 
  const onLoginInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    try {
    
      console.log('Signup data:', signup);
      
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

 
  const loginUser = async () => {
    try {
      
      console.log('Login data:', login);
      
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='account-container'>
      <div className='account-form'>
        {
          account === 'login' ? (
            <>
              <h2 style={{ color: "blue", fontFamily: "serif", marginTop: "10%", paddingTop: "10%", fontSize: "200%" }}>BLOGS</h2>
              <div className="form-wrapper">
                <TextField 
                  onChange={onLoginInputChange} 
                  name='username' 
                  variant="standard" 
                  label="Enter Username" 
                  style={{ width: "70%" }} 
                /><br />
                <TextField 
                  onChange={onLoginInputChange} 
                  name='password' 
                  variant="standard" 
                  label="Enter Password" 
                  type="password" 
                  style={{ width: "70%" }} 
                /><br /><br />
                <Button 
                  onClick={loginUser} 
                  variant='contained' 
                  style={{ width: "70%", borderRadius: "5%" }}
                >
                  Login
                </Button><br />
                <p style={{ color: "black", fontSize: "90%", textAlign: "center" }}>OR</p>
                <Button 
                  onClick={toggleSignup} 
                  variant='contained' 
                  style={{ width: "70%", borderRadius: "5%" }}
                >
                  New account
                </Button>
                <br /><br />
              </div>
            </>
          ) : (
            <div className="form-wrapper">
              <TextField 
                onChange={onSignupInputChange} 
                name='name' 
                variant="standard" 
                label="Enter name" 
                style={{ width: "70%" }} 
              /><br />
              <TextField 
                onChange={onSignupInputChange} 
                name='username' 
                variant="standard" 
                label="Enter Username" 
                style={{ width: "70%" }} 
              /><br />
              <TextField 
                onChange={onSignupInputChange} 
                name='password' 
                variant="standard" 
                label="Enter Password" 
                type="password" 
                style={{ width: "70%" }} 
              /><br /><br />
              <Button 
                onClick={signupUser} 
                variant='contained' 
                style={{ width: "70%", borderRadius: "5%" }}
              >
                Sign Up
              </Button><br />
              <p style={{ color: "black", fontSize: "90%", textAlign: "center" }}>OR</p>
              <Button 
                onClick={toggleSignup} 
                variant='contained' 
                style={{ width: "70%", borderRadius: "5%" }}
              >
                Already have an account
              </Button>
              <br /><br />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Acc;
