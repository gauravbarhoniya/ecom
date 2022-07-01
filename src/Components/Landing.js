import React from 'react'
import './components.css'
import { Link } from "react-router-dom";
export default function Landing() {
    return (
        <div className='hero'>
            <div className='landing-text'>
                <h1>
                    FLAT 50% OFF
                </h1>
                <h4>
                    on first order
                </h4>
                <h6>
                    So what are you waiting for? Hurry up! Register now.
                </h6>
            </div>
            <div>
                <Link className='link' to="#"><button className='button-17 btn-c1'>Register Now</button></Link>
                <Link className='link' to="/Login"><button className='button-17 btn-c2'>Login</button></Link>
            </div>
        </div>
    )
}

