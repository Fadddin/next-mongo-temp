import { NextResponse } from "next/server";
import connect from "@/app/lib/mongoose";
import User from "@/app/models/User";

export async function GET() {
    await connect();

    try {
        const users = await User.find({});
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({error})
    }
}