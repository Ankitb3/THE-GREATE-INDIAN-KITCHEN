import { Schema,model } from "mongoose";

const foodItemSchema = new Schema({
  title: String,
  description: String,
  imgurl: String,
  price: String,
  category: String,
});

const FoodItem = model("FoodItem", foodItemSchema);
export   default FoodItem