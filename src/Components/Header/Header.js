import React from 'react' ;
import './Header.css' ;
import { Link } from "react-router-dom";


function Header() {

  return (
    <div className='header'>
      <Link to="/">
      <img  className ="header_logo" src="https://zupimages.net/up/22/24/pdk0.png"/>
        </Link>

   <div className='header-search'>
   <input className='header_searchINPUT ' type= "text" />
   <img  className ="icon-search" src=" https://zupimages.net/up/22/23/6vdl.png"/>

   </div>
   
   <div className='header_nav'>
    <Link to='/login'> 
   <div className='header_option' >
   <span className='header_optionLinOone'> hello user </span>
   <span className='header_optionLinTwo'> Sign In</span>
 
   </div>
   </Link>
   <Link to='/UpdateProduct'> 
   <div className='header_option' >
   <span className='header_optionLinOone'> Retruns  </span>
   <span className='header_optionLinTwo'> Orders </span>
 
   </div>
   </Link>
   <Link to='/Home'> 
   <div className='header_option' >
   <span className='header_optionLinOone'> Our </span>
   <span className='header_optionLinTwo'> products</span>
 
   </div>
   </Link>

   <Link to="/Profile">
   <div className="header_optionBasket" >
   <img  className ="icon-search" src=" https://zupimages.net/up/21/15/lymm.png"/>
   <span className ='header_optionLineTwo header_basketcount'>
    
   </span>
   </div>
   </Link>
 
   </div>
 
    </div>
  )
}
 
export default Header ; 