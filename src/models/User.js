import mongoose from  "mongoose";


const {Schema} = mongoose;

const Userschema = new Schema({

    name : {
        type : String,
        unique: true ,
        required : true,
    } ,

    email :{
        type : String,
        unique : true,
        required : true,
    }
,
    password:{
        type : String,
        required : true,

    } ,


} , {timestamps :true});



if (mongoose.connection.models['User']) {
    delete mongoose.connection.models['User'];
}

const User = mongoose.model.User || mongoose.model("User", Userschema);
export default User ;