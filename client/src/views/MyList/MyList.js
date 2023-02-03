import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./MyList.css"
import { myFoodListItems } from '../../util/Mylist'

const MyList = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center">MyList</h1>
      <div className="my-list-container mt-3">
        {myFoodListItems.map((item, index) => {
          return (
            <div>
              <h6>Name:{item.name}</h6>
              <h6>Quantity:{item.quantity}</h6>
              <h6>Price:{item.price}</h6>
              <h6>Total:{item.Total}</h6>
              <hr />
            </div>
          );
        })}
        <button type="button" className="btn btn-primary ms-3">
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default MyList