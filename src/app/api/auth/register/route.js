
import { NextResponse } from "next/server";
import connect from '@/utilities/db'
import User from "@/models/User";
import bcrypt from "bcryptjs"


export const POST = async (request)=>{

    
    try{ 
const {name , email , password}= await request.json();

await connect();
 

// storing password in hash form into database

const hashedPassword = await bcrypt.hash(password , 5);

// creating new user with these data 
const  newUser = new User ({
    name,
     email , 
    password: hashedPassword,
});





        // saving new user into mongodb
        await newUser.save()

        return new NextResponse("user has been created ",{
            status : 201,
        });
       }   catch(err){
        
            return new NextResponse(err.message ,{
                 status : 500,

        });
    }
};
