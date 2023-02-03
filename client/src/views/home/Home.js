import React, {useEffect,useState} from 'react'
import Fooditemcard from "../../components/fooditemcard/Fooditemcard"
import axios from "axios"
import { loginrequired } from '../../util/Loginrequired'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {

  const [curruntuser,setCurrentuser] = useState({})
  const [searchtext,setSearchtext] = useState("")
  const [currentFoodItems,setCurrentFoodItems] = useState([])


  async function fetchallitems(){
    const response = await axios.get("/allfoodItems");
    setCurrentFoodItems(response.data.data)
  }

  async function fetchspecificitems(){
    const response = await axios.get(`/foodItems?title=${searchtext}`);
        setCurrentFoodItems(response.data.data);

  }
  useEffect(() => {
    if(searchtext.length>0){
        
         fetchspecificitems();
    }
    else{
      fetchallitems();
    }

  }, [searchtext]);

 useEffect(()=>{
    const currentuser = JSON.parse(localStorage.getItem("currentuser"))
    setCurrentuser(currentuser)
 },[])

  function logout(){
    localStorage.removeItem("currentuser");
    window.location.href = "/login"
  }
   
   
  
  useEffect(() => {
    if(!curruntuser){
      loginrequired()
    }
  }, [curruntuser]);
 
  return (
    <>
      <Navbar user={curruntuser?.name}  />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="form-control p-2 mt-4"
          value={searchtext}
          onChange={(e) => setSearchtext(e.target.value)}
        />
      </div>
      <div className="food-items-result">
        <div className="row">
          {currentFoodItems?.map((fooditem, index) => {
            return (
              <Fooditemcard
                imgUrl={fooditem.imgurl}
                title={fooditem.title}
                category={fooditem.category}
                description={fooditem.description}
                price={fooditem.price}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <button type="button" className="btn btn-primary " onClick={logout}>
        Logout
      </button>
    </>
  );
}

export default Home