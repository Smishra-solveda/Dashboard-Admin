import mongoose from "mongoose";

const visitorsSchema = new mongoose.Schema({
    visitors:Number,
    location:String,
    device:String,
    premiumUserNo:Number,
    month:String
},
{
    timestamps:true,
}
)

const Visitor = mongoose.models.visitors || mongoose.model("Visitors",visitorsSchema);

export default Visitor;