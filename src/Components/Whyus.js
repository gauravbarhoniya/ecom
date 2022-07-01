import React from 'react'
import r1 from './r1.jpg'
import r2 from './r2.jpg'
import r3 from './r3.jpg'

export default function Whyus() {
  return (
      <div className='whyus'>
          <div className='wu-text'>
              <h2>Why Choose Us?</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quibusdam.</p>
          </div>
          <div className='reasons'>
              <div className='reasons-card'>
                  <div className='rimg-div'>
                      <img className='r-img' src={r1}/>
                  </div>
                  <div>
                      <h4>Best Brands</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, et?</p>
                  </div>
              </div>
              <div className='reasons-card'>
                  <div className='rimg-div'>
                      <img className='r-img' src={r2}/>
                  </div>
                  <div>
                      <h4>Huge Discounts</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, et?</p>
                  </div>
              </div>
              <div className='reasons-card'>
                  <div className='rimg-div'>
                      <img className='r-img' src={r3}/>
                  </div>
                  <div>
                      <h4>15 Days Return</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, et?</p>
                  </div>
              </div>
          </div>
          <div className='numbers'>
              <div className="num-card">
                  <h4>40+</h4>
                  <p>International Brands</p>
              </div>
              <div className="num-card">
                  <h4>200+</h4>
                  <p>International Brands</p>
              </div>
              <div className="num-card">
                  <h4>400+</h4>
                  <p>International Brands</p>
              </div>
          </div>
      </div>
  )
}
