import React from 'react'
import Image from 'next/image'
import { useRouter } from "next/router";
import pp from '../assets/Ellipse49.png'
import { auth } from "../firebaseconfig";
import { useAuthState } from 'react-firebase-hooks/auth';
import {BsChat } from 'react-icons/bs'
import { signOut } from "firebase/auth";

const signout = () => {
  function handleLogOut(e) {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        alert("you are logged out");
        router.push("/login");
      })
      alert((error) => {
        // An error happened.
      });
  }
  const [user] = useAuthState(auth);

    const router = useRouter()
   
  return (
    <div >
        <div className='flex text-center'>
        <Image src={user.photoURL} quality={100} onClick={() => router.push('/')} height={64} width={64} />
        <div className='pl-4 pt-4 text-center'>{user.displayName}</div>
        </div>
   
    <div onClick={() => router.push('/profile')} className='text-green-700'>Profile</div>
    <div onClick={() => router.push('/advertise')}>Advertise</div>
    <div onClick={() => router.push('/')}>Downloads</div>
    <div onClick={() => router.push('/')}>Saved</div>
    <div onClick={() => router.push('/wallet')}>Wallet</div>
    <div onClick={() => router.push('/login')}>Login</div>
    <div onClick={() => router.push('/')}>Settings</div>
    <div>
    <form onSubmit={handleLogOut}>
          <button className="bg-teal-800 w-full mt-2 tracking-wide p-1 focus:outline-none rounded-xl font-bold text-teal-50 text-center">
            <BsChat/>
          </button>
        </form>
    </div>
    </div> 
  )
}

export default signout