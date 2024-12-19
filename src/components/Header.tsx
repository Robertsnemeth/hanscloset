"use client"

import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from './ui/button'
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;


function Header() {
  return (
    <nav className='flex justify-between p-4 border border-b-2 border-primary'>
      <h1 className='text-2xl font-bold text-primary'>Hansy&apos;s Closet</h1>
      <div className='flex gap-2'>
        <SignedOut>
        <SignInButton>
            <Button variant="ghost">Sign In</Button>
        </SignInButton>
        </SignedOut>
        <SignedIn>
        <SignOutButton>
            <Button variant="outline">Sign Out</Button>
        </SignOutButton>
        </SignedIn>
        <IKImage urlEndpoint={urlEndpoint} path="default-image.jpg" width={400} height={400} alt="Alt text" />
      </div>
  </nav>  )
}

export default Header