import React from 'react'
import prod1 from './1.png'
export default function Product() {
    return (
        <div className='featured-products'>
            <div className='product'>
                <div className='product-img2'>
                    <img src={prod1} alt="" />
                </div>
                <div className='product-description'>
                    <h1>Lorem ipsum podium</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias nulla dicta ex! Cupiditate quae eligendi corrupti facere eius hic porro, impedit quasi magnam!</p>
                    <button className='button-17 btn-c3'>Buy Now</button>
                </div>
            </div>

            <div className='product'>

                <div className='product-description'>
                    <h1>Lorem ipsum podium</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias nulla dicta ex! Cupiditate quae eligendi corrupti facere eius hic porro, impedit quasi magnam!</p>
                    <button className='button-17 btn-c3'>Buy Now</button>
                </div>
                <div className='product-img2'>
                    <img src={prod1} alt="" />
                </div>
            </div>

            <div className='product'>
                <div className='product-img'>
                    <img src={prod1} alt="" />
                </div>
                <div className='product-description'>
                    <h1>Lorem ipsum podium</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias nulla dicta ex! Cupiditate quae eligendi corrupti facere eius hic porro, impedit quasi magnam!</p>
                    <button className='button-17 btn-c3'>Buy Now</button>
                </div>
            </div>

        </div>
    )
}
