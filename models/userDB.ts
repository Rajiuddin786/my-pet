import { auth } from "@/app/api/auth/auth";
import clientPromise from "@/lib/db";

export async function RegisterUser(){
    const session = await auth();
    const client = await clientPromise;
    const db = client.db("userDB");
    const user = db.collection("users");
    user.insertOne(session.user)
}