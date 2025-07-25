
import React from 'react'
import LocateShopButton from '@/components/buttons/locateshopbutton'
import LogInButton from '@/components/buttons/log-in'
import {auth} from "@/app/api/auth/auth"

const Main =async () => {
  const session =await auth();
  return (
    <main className='flex items-center justify-center h-screen bg-gray-100'> 
        {session ? (
          <LocateShopButton shops="📍 Locate Shop"/>
        ):(
          <LogInButton/>
        )}
    </main>
  )
}

export default Main