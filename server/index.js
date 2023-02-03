import  express  from "express";
import mongoose from "mongoose";
import User from './model/User.js'
import dotenv from 'dotenv';
import FoodItem from "./model/Fooditem.js";
import Table from "./model/Table.js";
import Order from "./model/Order.js";
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
    success: true,
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
            success:true,
            message:"Login succesfull",
             data:existingUser
        })
    }else{
        return res.json({
            success:false,
            message:"invalid email or password",
           
        })
    }
})

app.post('/createFoodItem',async(req,res)=>{
    const {title, description,imgurl, price, category} = req.body;

    const foodItem = new FoodItem({
      title: title,
      description: description,
      imgurl: imgurl,
      price: price,
      category: category
    });

    const saveFoodItem = await foodItem.save()
    res.json({
        sucess:true,
        message:"Food item created succesfully",
        data:saveFoodItem
    })
})


// http://localhost:5000/foodItemsByCategory?category=pizza
app.get("/foodItemsByCategory", async (req,res)=>{
  const {category} = req.query;
  const foodItems = await FoodItem.find({
    category: { $regex: category, $options: "i" },
  });
  res.json({
    sucess:true,
    message:"food item fetch successfully",
    data:foodItems
  })
});

// http://localhost:5000/foodItems?title=pizza
app.get("/foodItems", async(req,res)=>{
  const {title} = req.query;
  const foodItems = await FoodItem.find({title: {$regex: title, $options:'i'}
  })
  res.json({
    sucess:true,
    message:"food item fetch successfully",
    data:foodItems
  })
});

app.get("/allfoodItems", async (req, res) => {
  const foodItems = await FoodItem.find();
  res.json({
    sucess: true,
    message: "food item fetch successfully",
    data: foodItems,
  });
});

app.post("/createTable", async (req,res) =>{
  const {tableNumber,occupied} = req.body
  const existingTable = await Table.findOne({ tableNumber: tableNumber });
  if(existingTable){
    res.json({
      sucess:false,
      message:"User already exists"
    })
  }

  const table = new Table({
    tableNumber: tableNumber,
    occupied: false,
  });

  const savedTable = await table.save()

  res.json({
    sucess:true,
    message:"Table created successfully",
    data:savedTable
  })
})

app.post("/bookTable", async (req, res) => {
   const {tableNumber,userId} = req.body;
   const existingTable = await Table.findOne({tableNumber: tableNumber });

   if(existingTable && existingTable.occupied){
    res.json({
      success: false,
      message: "Table already occupied",
    });
    
   }

   if(existingTable){
     existingTable.occupied=true;
     existingTable.occupiedBy =userId;
     await existingTable.save()
   }
   res.json({
    sucess:true,
    message:"Table book successfully",
    data:existingTable
   })
});

app.post("/unbookTable", async(req,res)=>{
  const {tableNumber} = req.body;
  const existingTable = await Table.findOne({tableNumber: tableNumber});


  if(existingTable){
    existingTable.occupied=false,
    existingTable.occupiedBy=null,
    await existingTable.save()
  }

    res.json({
      sucess:true,
      message:"Table unbook successfully",
      data:existingTable
    })


});


app.get("/availableTable", async (req, res) => {
  const availableTable = await Table.find({occupied:false});

  res.json({
    sucess:true,
    message:"available tables fetch sucessfully",
    data:availableTable
  })

  
});

  
app.post("/orderFoodItems", async(req,res)=>{
  const {userId,tableNumber,items} = req.body;


  const totalOrders = await Order.countDocuments();
  const orderId = totalOrders + 1;
  const order = new Order({
    orderId: orderId,
    userId: userId,
    tableNumber: tableNumber,
    items: items,
  });
  const savedOrder = await order.save();
  res.json({
    success: true,
    message: "Order placed successfully",
    data: savedOrder
  });
})

app.get("/order", async(req,res)=>{
  const {orderId} = req.query;
  const order = await Order.findOne({orderId:orderId});

  res.json({
    success:true,
    message:"order fetch successfully",
    data:order
  })
})

app.get("/orderByUserId", async(req,res)=>{
  const {userId} = req.query;
  const orders = await Order.findOne({userId:userId});
  res.json({
    success:true,
    message:"Orders fetch successfully",
    data:orders
  })

})
  


//api end


const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`${PORT} is running`)
})


