import connectToDB from "@/database";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        connectToDB();
        const { name, email } = await req.json();
        const newUser = await User.create({name, email});
        if(newUser){
            return NextResponse.json({
                success: true,
                message: "User Registered Successfully",
            });
        } else {
            return NextResponse.json({
                success: true,
                message: "failed to register the user!"
            })
        }
    } catch(e) {
        console.log(e);
        return NextResponse.json({
            success: false,
            message: "Something went wrong!",
        });
    }
}