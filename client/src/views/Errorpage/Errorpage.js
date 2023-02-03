import React from 'react'
import "./errorpage.css"

const Errorpage = () => {
    function goback(){
        window.location.href="/"
    }
  return (
    <>
      <div className='error'>
        <h1>
          404 error page
        </h1>
        <button type="button" onClick={goback} className="btn btn-primary backbtn">
         
          Back to home
        </button>
      </div>
    </>
  );
}

export default Errorpage