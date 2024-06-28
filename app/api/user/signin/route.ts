import { NextResponse } from "next/server";
import connect from "@/app/lib/mongoose";
import User from "@/app/models/User";

export async function POST ( req : Request ) {
    
    await(connect);

    const { email, password } = await req.json();

    try {
        const newUser = await User.findOne({email: email, password: password});

        if(!newUser) {
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
        }

        return NextResponse.json(newUser);

    } catch (error) {
        return NextResponse.json({ error: 'Failed to add user' }, { status: 500 });
    }
}