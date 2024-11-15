import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './LoginPage.styles.css'
import loginimg from '../../img/loginimg.jpg';
import eyeopen from '../../img/eyeopen.svg';
import eyeclosed from '../../img/eyeclosed.svg';
import { store } from '../../store/store';
import { actionAuthLogin } from '../../store/reducers/authReducer';


export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const postForm = async (event)  =>{

      event.preventDefault();
      const data = {
        email,
        password
      };
    
      try {
        const response = await fetch('https://fintracker-cpbg.onrender.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
    
        if (!response.ok) {
          throw new Error('Failed to sign up');
        }
    
        const result = await response.json()
        if (result) {
          let user_id = result;
          store.dispatch(actionAuthLogin(user_id));
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage('User not found. Wrong email or password');
      }
      
    }

    return (
      <div className='login-outer'>
        <div className='login-img'>
          <img src={loginimg} alt='img'/>
        </div>
        <form onSubmit={postForm} className="login-container">
          <h2 className="login-title">Welcome back to FinTracker</h2>
          <p className="login-subtitle">Sign in here</p>

          <div className="input-group">
            <input
              type="email"
              className="login-input"
              placeholder="anna@gmail.com"
              required
              value={email} onChange={e => setEmail(e.target.value)}
            />
            <label className="login-label">Email</label>
          </div>

          <div className="input-group">
            <input
            type={showPass ? 'text' : 'password'}
            className="login-input"
            placeholder="***********"
            required
            value={password} onChange={e => {
              setErrorMessage('');
              setPassword(e.target.value)
            }}
          />
          <label className="login-label">Password</label>
            <div onClick={() => {
              setShowPass(!showPass);
            }}>
              <img
              className="password-toggle"
              
              src={showPass ? eyeopen : eyeclosed }
              />
            </div>
        </div>
        <p className='error-messade-login'>{errorMessage}</p>

        <button className="login-button" type='submit'>
          SIGN IN
        </button>

        <p className="signup-text">
          Don't have an account yet? <a href="signup">Sign up</a>
        </p>
      </form>
    </div>
    )}
  