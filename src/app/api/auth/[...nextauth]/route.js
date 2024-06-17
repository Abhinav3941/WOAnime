import NextAuth from "next-auth/next";

import GoogleProvider from "next-auth/providers/google";
import  CredentialsProvider  from "next-auth/providers/credentials";
import connect from "@/utilities/db";
import User from "@/models/User";
import bcrypt from "bcrypt";
import Email from "next-auth/providers/email";

const handler=NextAuth({
    providers:[
        GoogleProvider({

            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider(
           { id:"credentials",
            name :"credentials",

            // we check user exist in db or not 


            async authorize(credentials){

                await connect()

                try{
                    const user = await User.findOne({email:credentials.email})

                    if(user){
                        // check pass
                        const iscorrpass =await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if(iscorrpass){
                            return user
                        }else{
                            throw new Error("wrong credentials");

                        }



                    }else{
                        throw new Error("user not found")
                    }

                }catch(err){
                    throw new Error(err)

                }

            }
}
        )
    ] ,
    pages:{
        error:"dashboard/login"
    },
});

export { handler as GET , handler as POST}