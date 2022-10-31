import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProducts, getProducts } from "../JS/actions/productActions";


function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  useEffect(() => {
      dispatch(getProducts(dispatch));
  }, [dispatch,products]);
  console.log(products);
    return (
        <div>
          
            {
             
                products.map((product) => {
                    return (
                        <div key={product.id}>
                           <h1>
                           {product.title}
                            </h1> 
                            {product.author}
                            <button
                                onClick={() =>
                                  
                                    dispatch(deleteProducts(product.id))
                                }
                            >
                                Delete
                            </button>
                            {}
                            <Link to={`/update/${product.id}`}>
                                <button>Edit</button>
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ProductList;