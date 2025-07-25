import React, { use } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import LogOut from '@/components/buttons/log-out'
import { auth } from "@/app/api/auth/auth"
import Logo from '@/public/logo.jpg'
import LogInButton from '@/components/buttons/log-in';
import LocateShopButton from '@/components/buttons/locateshopbutton';
import { RegisterUser } from '@/models/userDB';



const Navbar = async () => {
    const session = await auth();
    await RegisterUser();
    const {user:{id,image,name}} = session || { user: { id: '', image: '', name: '' } };
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
                        <LocateShopButton shops="Shops"/>
                        <Link href={`/profile/${id}`}>{name}</Link>
                        <LogOut />
                    </div>
                ) : (
                    <div className="flex items-center space-x-6 pt-1">
                        <LogInButton/>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar