import Image from 'next/image'
import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import KosbisBG from '../../assets/kosbis.png'
import { auth } from '../../firebaseconfig'

const Signin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className='flex-col w-full h-full items-center justify-center text-center'>
        <div className='pt-[48px] '>
        <Image src={KosbisBG} alt='kb' width={53} height={57} className=''/>
        </div>
        <div className='pt-4' >
        <button onClick={() => signInWithGoogle("", {prompt: "select_account"})}>Sign In with Google</button>
        </div>
    </div>
  )
}

export default Signin