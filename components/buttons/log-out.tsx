import React from 'react'
import { signOut } from '@/app/api/auth/auth';
import { Button } from "@/components/ui/button";

export default function LogOut(){
  return (
    <form action={async ()=>{
        "use server"
        await signOut()
    }}>
        <Button type="submit">Log Out</Button>
    </form>
  )
}

