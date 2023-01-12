import { Schema,model } from "mongoose";

const userschema = new Schema({
    name:String,
    email:String,
    phone:String,
    password:String,
    role:String
},{timestamps:true})

const User = model("User", userschema);
export default User;