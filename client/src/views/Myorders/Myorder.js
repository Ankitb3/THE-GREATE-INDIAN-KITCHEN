import React,{useState,useEffect} from 'react'
import { loginrequired } from "../../util/Loginrequired";

import "./myorder.css"

const Myorder = () => {
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
    <div>Myorder</div>
  )
}

export default Myorder