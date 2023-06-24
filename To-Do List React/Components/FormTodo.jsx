import React,{useState,useEffect} from "react";
import '../App.css';
import ListTodo from "../Components/ListTodo";


function FormTodo(){

    let [state,changeState]=useState("");
    let [state2,changeState2]=useState("");

    let [store,changeStore]=useState([]);
  

     function handleClick(){
         let obj={
            task:state,
            pri:state2
         }

         changeStore([...store,obj])
         
     }
   
  return(
      <div>
       <input className="inputeBox" type="text" placeholder="Enter Task"  onChange={(event)=>{
           changeState(event.target.value)
       }}></input>
       <select className="selectBox" onChange={(event)=>{
        changeState2(event.target.value)
      
       }}>
        <option>Set Priority</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
       </select>
       <br></br>
       <button className="buttonBox" onClick={handleClick}>ADD</button>

        {
             store.length>0 ? <ListTodo item={store}/> : <h3>NO TASKS</h3>
        }
      </div>
    


  )


     
}

export default FormTodo;