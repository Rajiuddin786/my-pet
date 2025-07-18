import React from 'react'
import { signOut } from '@/app/api/auth/auth';

export default function LogOut(){
  return (
    <form action={async ()=>{
        "use server"
        await signOut()
    }}>
        <button type="submit">Log Out</button>
    </form>
  )
}

