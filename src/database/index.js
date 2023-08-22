import mongoose from "mongoose";

 const connectToDB = async () => {
  try {
    await mongoose.connect(
      // "mongodb+srv://sangammukherjee2022:sangammukherjee2023@cluster0.fca1inn.mongodb.net/"
      "mongodb+srv://shashwat:11223344@cluster0.8e6yml0.mongodb.net/Admin_Dashboard"
    );
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
