import React from 'react'
import './components.css'
import logvector from './Login-vector.png'
import Navbar from './Navbar'

export default function Login() {
  return (
    <>
      <Navbar/>
      <div className="log-main">
        <div className="log-full">
          <div className="log-half log-half1">
            <form>
              <h4>Login</h4>
              <div><input type="email" className="log-input" placeholder="e-mail" /></div>
              <div><input type="password" className="log-input" placeholder="password" /></div>
              <div className='rem-for'>
                <div className="remb">
                  <input type="checkbox" className='remb-me' name="Remember" />
                  <label className='remb-label' htmlFor="Remember">Remember me</label>
                </div>
                <div className="forgot">
                  <a href='/'>Forgot password?</a>
                </div>
              </div>
              <button className='button-17 btn-c4'>Login</button>
              <div className="no-accnt">
              <p>Don't have an account yet,&nbsp;</p>
              <a href="/">Sign up</a>
              </div>
            </form>
          </div>
          <div className="log-half log-half2">
            <img src={logvector} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
