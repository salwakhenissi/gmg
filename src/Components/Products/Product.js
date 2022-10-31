import React from 'react';
import './Product.css' ;
import { useStateValue } from "../../StateProvider";

 
function Product({product}) {
  const[{ basket }, dispatch ] = useStateValue () ; 
 
  const addToBasket = () => {
    dispatch ( { 
      type : 'ADD_TO_BASKET' , 
      item : { 
        id : product.id , 
        title : product.title, 
        image : product.image , 
        price : product.price , 
       
      } , 
    }) ; 

  } ; 

  return (
    <div className='products '>
      <div className='product_info'>
      <p>{product.title} </p>
      <p className='product_price'>
        <small>$</small>
        <strong>{product.price}</strong>
      </p>
      
      </div>
     
      <img src={product.image}/>
      <button onClick = {addToBasket}>
        Add to Basket 
      </button>
 
    </div>
  )
}
 
export default Product
