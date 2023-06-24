// import module.css here;

import "./product.module.css";
import { useState,useEffect  } from "react";


const Product = ({name,price,quantity,id,handleQty}) => {
    let [state,changeState]=useState(quantity);

//    function handleQty1(){
//        changeState(prev=>prev+1);
//       //  handleQty(state)
//    }

//    function handleQty2(){
//     changeState(prev=>prev-1);
//     // handleQty()
// }

   useEffect(()=>{
    handleQty(id,state)   
   },[state])


  return (
    <>
      <div data-testid="product-container">
        <h2 data-testid="product-name">{name}</h2>
        <h2 data-testid="product-price">{price}</h2>
        <button data-testid="quantity-increment" onClick={()=>{
          changeState(prev=>prev+1);
            // handleQty(id,state)
        }}>+</button>
        <h2 data-testid="product-quantity">{state}</h2>
        <button data-testid="quantity-decrement" onClick={()=>{
          changeState(prev=>prev-1);
          //  handleQty(id,state)
        }} disabled={state<=0}>-</button>
      </div>
    </>
  );
};
export default Product;
