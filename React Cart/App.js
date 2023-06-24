import "./App.css";
import data from "./db.json";
import Product from "./components/Product";
import { useState } from "react";
function App() {
   let [value,changeValue]=useState(0)

   function handleQty(id,state){
  
        var x=data.map((elem)=>{
            if(elem.id==id){
               elem.quantity=state;
               
            }

            return elem;
        })  
        let c=0;
      let y= x.forEach(function(elem){
               c=c+(elem.price*elem.quantity)
       })
     console.log(c);
     changeValue(c);
            
   }



  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/*  map through the  data and pass props to the Product component */
               data.map((elem)=>{
                    return <Product name={elem.name} price={elem.price} quantity={elem.quantity}
                        id={elem.id} handleQty={handleQty} />
               })
      
      
      }
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */
                 
          <h1>Total: {value}</h1>
      }
      </h1>
    </div>
  );
}

export default App;
