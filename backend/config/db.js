import mongoose from "mongoose";

 export const connectDB=async()=>{
    await mongoose.connect(
      "mongodb+srv://manerajat01:QBWZ0vd7OKh9NYHD@cluster0.a8hri.mongodb.net/Food-Delivery-App"
    ).then(()=>console.log("DB connected "))
}