import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';


const MOCK_USER={
  username: 'admin@gmail.com',
  password: '1234'
}

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('false');
  const [loginFailed, setLoginFailed] = useState('');

  const navigate = useNavigate();

  const handLogin =(e)=>{
    e.preventDefault();
    if(username === MOCK_USER.username && password === MOCK_USER.password){
      setLogin('false');
      setLoginFailed('');
      window.alert('login successful');
      navigate('/admin');
    }else{
      setLoginFailed('incorrect email or password');
    }
  };
  return (
    <div className='login_wrap'>
      <Navbar></Navbar>
      <div className="login_con">
        <div className="login_content">

          <form onSubmit={handLogin}>
            <div className="email_con">
              <label htmlFor="Reg_Email">Email:</label>
              <input 
                type="email" 
                name="Reg_Email" 
                id="Reg_Email" 
                placeholder='use admin@gmail.com' 
                required
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
              />
            </div>
            <div className="password_con">
              <label htmlFor="Reg_passW">Password:</label>
              <input 
                type="password" 
                name="Reg_passW" 
                id="Reg_passW" 
                placeholder='use 1234'
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
            <p className='forget_para'><Link to="/reset">forget password ?</Link></p>
            {loginFailed && <p className='error_para'>{loginFailed}</p>}
            <div className='login_btn_para'>
              <input type="submit" value="Login" className='login_btn' />
            </div>
          </form>
         
        </div>
      </div>
      <div className="other_login_opt">
        <div className="otherlog_opt_head">
          <h2>or sign-in with </h2>
        </div>
        <div className="log_opt_con">
          <a href="#" className='facebook_btn'>
            <span className='fb_logo'></span>
            <p>continue with facebook</p>
          </a>
          <a href="#" className='google_btn'>
            <span className='gog_logo'></span>
            continue with google
          </a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Login
