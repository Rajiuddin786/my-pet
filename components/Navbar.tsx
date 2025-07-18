import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SignIn from '@/components/buttons/sign-in'
import LogOut from '@/components/buttons/log-out'
import { auth } from "@/app/api/auth/auth"
import Logo from '@/public/logo.jpg'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Navbar = async () => {
    const session = await auth();
    return (
        <nav className='flex justify-between align-items-center bg-black p-4 text-white'>
            <div className="logo">
                <Link href="/">
                    <Image src={Logo} alt="Logo" width={50} height={50} className='rounded-full' />
                </Link>
            </div>
            <div>
                {session ? (
                    <div className="flex items-center space-x-6 pt-1" >
                        <Link href='/'>Home</Link>
                        <Link href='/shops'>Shops</Link>
                        <Link href={`/profile/${session.user.id}`}>{session.user.name}</Link>
                        <LogOut />
                    </div>
                ) : (
                    <SignIn />
                )}
            </div>
        </nav>
    )
}

export default Navbar