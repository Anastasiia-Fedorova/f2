import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import loginimg from '../../img/loginimg.jpg';
import '../LoginPage/LoginPage.styles.css'
import './RegistrationPage.styles.css'
import { store } from '../../store/store';
import { actionAuthLogin } from '../../store/reducers/authReducer';
import eyeopen from '../../img/eyeopen.svg';
import eyeclosed from '../../img/eyeclosed.svg';




export const RegistrationForm = () => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
//!
      const [errors, setErrors] = useState({});
      // Валідація email
      const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      };
      // Валідація пароля
      const validatePassword = (value) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        return passwordRegex.test(value);
      };
        // Обробка зміни поля password
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    
    if (!validatePassword(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        text: 'Password must be at least 8 characters, include uppercase, lowercase, and special characters.',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        text: '',
      }));
    }
  };

    //!


    const postForm = async (event)  =>{

      event.preventDefault();
      const data = {
        name: login,
        email,
        password
      };
    
      try {
        const response = await fetch('https://fintracker-cpbg.onrender.com/signup', {
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
          store.dispatch(actionAuthLogin(result));
          console.log('Done ' + result.user_id);
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Error:', error);
      } 
    }
    return <>
      <div className='login-outer'>
        <div className='login-img'>
          <img src={loginimg} alt='img'/>
        </div>
        <form onSubmit={postForm} className="login-container">
          <h2 className="login-title">Welcome back to FinTracker</h2>
          <p className="login-subtitle">Create account</p>

          <div className="input-group">
            <input
              type="text"
              className="login-input"
              placeholder="Anna"
              required
              value={login} onChange={e => setLogin(e.target.value)}
            />
            <label className="login-label">Name</label>
          </div>

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

          <div className="input-group input-group-password">
            <input
            type={showPass ? 'text' : 'password'}
            className="login-input"
            placeholder="***********"
            required
            value={password} 
            onChange={e =>{
              handlePasswordChange(e)
            }
            }
          />
          <label className="login-label">Password</label>
          <div onClick={() => setShowPass(!showPass)}>
              <img
              className="password-toggle"
              src={showPass ? eyeopen : eyeclosed }
              />
          </div>

        </div>
        <p className="error-message">{errors.text}</p>

        <button type='submit' className="login-button">
          SIGN UP
        </button>

        <p className="signup-text">
        Already have an account? <a href="signin">Sign in</a>
        </p>
      </form>
    </div>

    </>  }
  