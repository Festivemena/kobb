import React from 'react';
import { useRouter } from "next/router";
import { bubble as Menu } from 'react-burger-menu';

export default props => {
  const router = useRouter()
  return (
    <Menu>
      <div onClick={() => router.push('/profile')} className='text-green-700'>Profile</div>
              <h1 onClick={() => router.push('/advertise')}>Advertise</h1>
              <p onClick={() => router.push('/')}>Downloads</p>
              <p onClick={() => router.push('/')}>Saved</p>
              <p onClick={() => router.push('/wallet')}>Wallet</p>
              <p onClick={() => router.push('/login')}>Login</p>
              <p onClick={() => router.push('/')}>Settings</p>
    </Menu>
  );
};