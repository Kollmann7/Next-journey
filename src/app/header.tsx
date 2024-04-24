/* eslint-disable react/jsx-no-undef */
"use client"

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { LogOut , LogIn} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image';
import Link from "next/link";



function AccountDropdown() {
    const session = useSession()

    const isLoggedIn = !!session.data
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="link">
            <Avatar className="mr-2">
                <AvatarImage src={session.data?.user?.image ?? ''} alt="Porfile Picture"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
                {session.data?.user?.name}
            </Button>    
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuSeparator />
            {isLoggedIn? 
            (<DropdownMenuItem onClick={ () => { signOut() }} > <LogOut className="mr-4"/> Sign out</DropdownMenuItem> )          
            : 
            (<DropdownMenuItem onClick={ () => { signIn("google") }}> <LogIn className="mr-4"/> Sign in</DropdownMenuItem>)}
                  
        </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function Header() {
    return (
        <header className="dark:bg-gray-900 bg-gray-100 container mx-auto py-4">
            <div className="flex justify-between item-center">
                <Link href="/" className="flex items-center gap-2 text-xl hover:text-red-200">
                    <Image src="/NextJouney-logo.png" width="80" height="80" alt="logo" />
                    Next Journey
                </Link>
                <div className="flex items-center gap-2">
                    <AccountDropdown />
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}