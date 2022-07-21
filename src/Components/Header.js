import React from 'react'
import Product from './Product'

const Header = (props) => {
  return (
    <>    <div className='header'>
        <div className='content'>
            <h1>The feature of Health</h1>
            <h2>Shopping with Style</h2>
            <p>Big Screens in incredibly slim designs in your hand.</p>
            <button>Shop Now</button>
        </div>
      </div>
      <Product setNumber = {props.setNumber} list = {props.list} addCart = {props.addCart} setAddCart = {props.setAddCart}/>
      </>

  )
}

export default Header