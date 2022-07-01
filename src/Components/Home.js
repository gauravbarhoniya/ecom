import React from 'react'
import Navbar from "./Navbar";
import Whyus from "./Whyus";
import Landing from "./Landing";
import Product from "./Product"


export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="main-land">
    <Landing/>
    </div>
    <Whyus/>
    <hr/>
    <Product/>
    </>
  )
}

