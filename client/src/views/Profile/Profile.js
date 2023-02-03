import React, { useState, useEffect } from "react";
import { loginrequired } from "../../util/Loginrequired";

import "./Profile.css"

const Profile = () => {

     const [curruntuser, setCurrentuser] = useState({});

     useEffect(() => {
       const currentuser = JSON.parse(localStorage.getItem("currentuser"));
       setCurrentuser(currentuser);
     }, []);

     useEffect(() => {
       if (!curruntuser) {
         loginrequired();
       }
     }, [curruntuser]);


  return (
    <div>Profile</div>
  )
}

export default Profile