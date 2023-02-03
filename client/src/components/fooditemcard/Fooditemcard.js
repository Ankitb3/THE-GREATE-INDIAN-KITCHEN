import React from 'react'
import "./Fooditemcard.css"
import { useState,useEffect } from 'react';
import swal from 'sweetalert';
import {FaMinus, FaPlus} from "react-icons/fa"
const Fooditemcard = ({ imgUrl, category, description ,title,price}) => {

  const [count,setCount] = useState(0);
  useEffect(()=>{
    
  })
  const decreament=()=>{
   if(count==0){
    setCount(0)
   }else{
     setCount(count-1);
   }
  }
  
   const increament = () => {
     setCount(count + 1);
   };



   async function addtolist(){
   const listobj={
    name:title,
    price:price,
    quantity:count,
    Total:`${count*price}`
   }

   const existinglist = JSON.parse(localStorage.getItem("list")) || []
   existinglist.push(listobj);
    await swal("Added successfully!", `${listobj.name}`, "success");

    window.location.reload()
     
   localStorage.setItem("list", JSON.stringify(existinglist));




   }
  return (
    <>
      <div className="col md-3 fditem">
        <div className="food-item-card">
          <div>
            <img src={imgUrl} alt="img" />
          </div>
          <p>Title:₹ {title}</p>
          <p>Price:₹ {price}</p>
          <p>category: {category}</p> <p>Description:{description}</p>
          <div className="quantity-section">
            <span className="qt-icon" onClick={decreament}>
              <FaMinus />
            </span>
            <span>{count}</span>
            <span className="qt-icon" onClick={increament}>
              <FaPlus />
            </span>
          </div>
          <div className="add-to-list">
            <button type="button" onClick={addtolist}>
              Add to list
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fooditemcard