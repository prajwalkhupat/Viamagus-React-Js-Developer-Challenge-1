import React, { useState } from 'react';
import tree from "./tree.png";
import bg from "./bg.png";
import "./Login.css"
import amazon from "./amazon-logo.png";
import Google from "./google.jpg";
import Facebook from "./facebook.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [errorMode, setErrormode] = useState(false);
  const [errorMode2, setErrormode2] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const emailValidation = () => {
    if (!email) {
      setErrormode(true);
      setError('The email field is required');
      return false;
    } else if (email !== 'test@gmail.com') {
      setErrormode(true);
      setError('Wrong email entered');
    } else if (password !== 'test123') {
      setErrormode2(true);
      setErrorPassword('Wrong password entered');
    }

    if (password !== 'test123' && email !== 'test@gmail.com') {
      alert('Wrong Credentials');
    }
    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (emailValidation()) {
      if (email === "test@gmail.com" && password === "test123") {
        localStorage.setItem("token", "12345678jhahsaaso");
        setLoggedIn(true);
      }
    }
  };

  return (
    <div>
        
      <div>
        <img src={bg} alt=""  className='backimg' />
      </div>
      <div >

        <form onSubmit={(e) => submitForm(e)} className='formik'>

          <div className='form-header'>
            <img src={amazon} style={{width:'220px'}} />
          </div>

          <div className='form-inner-header'>
            <h4 className='form-inner-text'>Login</h4>
            <img src={tree} style={{ width: '350px' }} />
          </div>

          <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-input' /><br />
          {errorMode ? <span >{error}</span> : ''}
          <br />
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-input'  /><br />
          {errorMode2 ? <span >{errorPassword}</span> : ''}
          <input type='submit' value='Sign In' className='form-button' />
          <div className='form-after-text'>
                <p className='alignLeft'>Forgot password?</p>
                <p className='alignRight'>New User? Sign Up</p>
            </div>
          <p style={{ textAlign: 'center' }}>or</p>
          <div className='form-end-list'>
                <button type='submit' className='form-end-button'><img src={Google} style={{width:'28px',marginLeft:'-30px',marginRight:'30px',borderRadius:'5px'}}/>CONTINUE WITH GOOGLE</button>
                <button type='submit' className='form-end-button'><img src={Facebook} style={{width:'30px',marginLeft:'-10px',marginRight:'30px',borderRadius:'5px'}}/>CONTINUE WITH FACEBOOK</button>
            </div>
        </form>

      </div>

      </div>    
  );
};

export default Login;
