import React,{useState,useEffect} from 'react'
import { loginrequired } from '../../util/Loginrequired';
const Booktable = () => {
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
    <h1>Booktable</h1>
  )
}

export default Booktable