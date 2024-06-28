import { NextResponse } from "next/server";
import connect from "@/app/lib/mongoose";
import User from "@/app/models/User";

export async function POST ( req : Request ) {

    await connect();

    const { name, email, password } = await req.json();

    try {
        const newUser = await User.create({name , email, password});
        return NextResponse.json(newUser);

    } catch (error) {
        console.error("Error adding user:", error);
        return NextResponse.json({ error: 'Failed to add user' }, { status: 500 });
    }
}