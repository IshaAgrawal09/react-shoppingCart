import React,{ useState} from 'react'
import "./Nav.css"
import { Link } from "react-router-dom";
const Nav = (props) => {
  
  return (
    <div className='nav'>
        <div className='first'>
            <div>Order Tracking</div>
            <div>English</div>
            <div>USd</div>
        </div>
        <hr />
        <div className='NavItem'>
            <div className='logo'>
                <Link to="/"><img src='https://klbtheme.com/machic/wp-content/uploads/2021/08/logo-dark.png' alt=''/></Link>
                
            </div>
            <div className='cart'>
           <Link to="/Cart"><i className="fa-solid fa-cart-shopping"><span id='num'>{props.number}</span></i></Link>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Nav