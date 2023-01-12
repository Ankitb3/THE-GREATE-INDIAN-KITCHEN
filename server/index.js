import  express  from "express";
import mongoose from "mongoose";
import User from './model/User.js'
import dotenv from 'dotenv';
dotenv.config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL,()=>{
    console.log('connected to mongodb')
})

//api start

app.post('/signup',async(req,res)=>{
  const { name, email, phone, password, role } = req.body;
  // first validation start here
  const emptyarr = [];
  if (!name) emptyarr.push("name");
  if (!email) emptyarr.push("email");
  if (!phone) emptyarr.push("phone");
  if (!password) emptyarr.push("password");
  if (!role) emptyarr.push("role");

  if (emptyarr.length > 0) {
    return res.json({
      sucess: false,
      message: `${emptyarr.join(",")} is reuired`,
    });
  }

  // first validation end here

  //email validation start here
  const existinguser = await User.findOne({ email: email });
  if (existinguser) {
    return res.json({
      sucess: false,
      message: "email already exists",
    });
  }
  //email validation end here

  //phone validation start here
  const existinguserphone = await User.findOne({ email: email });
  if (existinguserphone) {
    return res.json({
      sucess: false,
      message: "phone already exists",
    });
  }
  //phone validation end here

  const user = new User({
    name: name,
    email: email,
    phone: phone,
    password: password,
    role: role,
  });

  const saveduser = user.save();
  res.send({
    sucess: true,
    message: "created succesfuly",
    data: saveduser,
  });
})


app.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.json({
            sucess:false,
            message:"email and password is required"
        })
    }

    const existingUser = await User.findOne({email:email,password:password})

    if(existingUser){
        return res.json({
            sucess:true,
            message:"Login succesfull",
             data:existingUser
        })
    }else{
        return res.json({
            sucess:false,
            message:"invalid email or password",
           
        })
    }
})
//api end


const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`${PORT} is running`)
})


