
import connectToDB from "@/database";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

const authOptions = {
    providers:[
        GoogleProvider({
            clientId:"828540328008-ek2q99nivdph0ee1cvhnurb86gjsmg7r.apps.googleusercontent.com",
            clientSecret: "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",
        }),
    ],
    callbacks:{
        async Signin({user, account}){
            if(account.provider === "google"){
                const {name, email} = user;
                try{
                    await connectToDB();
                    const isUserExist = await User.findOne({email});
                    
                    if(!isUserExist){
                        const res = await fetch("http://localhost:3000/api/user",{
                            method: "POST",
                            headers: {
                                "Content-Type":"application/json",
                            },
                            body: JSON.stringify({name, email}),
                        });
                        if(res.success){
                            return user;
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            return user
        },
    },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};