import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
	username:{
type :String,
unique:true, 
required:true
	},
	password:{
		type:String, 
		required:true
	},
	post:[{
		type : mongoose.Schema.Types.ObjectId,
		ref:"Post"
	}]
},
{
	timestamps:true
})

export default mongoose.model("User", UserSchema)