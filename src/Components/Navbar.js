import React, {useState} from 'react'
import './components.css'
import { Link } from "react-router-dom";
function Navbar() {
    const [cathov, setcathov] = useState('none');
    const setcatf = () => {
        setcathov('flex');
    }
    const setcatn = () => {
        setcathov('none');
    }
    const [prohov, setprohov] = useState('none');
    const setprof = () => {
        setprohov('flex');
    }
    const setpron = () => {
        setprohov('none');
    }
        return(
        <>
            <nav className='navb'>
                <div className='navlogo'>
                    <h3>Shopify</h3>
                </div>
                <div className='navitem'>
                    <ul className='navitems'>
                        <li className='active-nav'><Link to="/">Home</Link></li>
                        <li onMouseOver={setcatf}>Shop By Categories</li>
                        <li id='cat'><Link to="#">Products</Link></li>
                    </ul>
                </div>
                <div className="search">
                    <input type="search" id="" placeholder='Search for products, brands and more'/>
                </div>
                <div className='navicons'>
                    <span>
                        <i onMouseOver={setprof} class="fa-regular fa-user"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </span>
                </div>
            </nav>

            {/* categories */}
            <div onMouseOver={setcatf} onMouseLeave={setcatn} className={`cat-div-${cathov}`}>
                <div className='catdiv-1'>
                </div>
                <div className="category">
                    <div className="main-cat">
                        <p>Electronics</p>
                    </div>
                    <div className="main-cat main-cat-m">
                        <p>Beauty and Personal Care</p>
                    </div>
                    <div className="main-cat main-cat-m">
                        <p>Men's Fashion</p>
                    </div>
                    <div className="main-cat">
                        <p>Women's Fashion</p>
                    </div>
                </div>
                <div className='catdiv-2'></div>
            </div>

            {/* Profile */}
            <div onMouseOver={setprof} onMouseLeave={setpron} className={`profile-${prohov}`}>
                <p><strong>Welcome</strong></p>
                <p>To access account and manage orders</p>
                <Link className='link' to="/Login"><button className='button-17 btn-c5'>Login/Signup</button></Link>
            </div>
        </>
    )
}

export default Navbar