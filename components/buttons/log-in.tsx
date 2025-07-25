'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


const LogInButton = () => {
    const [loding, setLoading] = React.useState(false);
    const handleClick = () => {
        setLoading(true);
        // Add any additional logic for handling login here
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Simulate a delay for loading state
    };
    return (
        <Link href="/login">
            <Button onClick={handleClick}>{loding ? "LogIn..." : "LogIn"}</Button>
        </Link>

    )
}

export default LogInButton