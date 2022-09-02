import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { CgSidebar } from "react-icons/cg";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useRouter } from "next/router";
import Link from "next/link";
  

 const LoginMenu = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState('')
  
  const router = useRouter();

  // function handleLogin(e) {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       alert("logged In");
  //       router.push("/");
  //     })
  //     .catch((error) => {
  //       alert(error);
  //       setError('email or password not correct')
  //       // ..
  //     });
  // }
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className="  ">
          <div  onClick={toggleDrawer} className="bg-[#0EAD69] w-[315px] h-[48px] rounded-[48px] text-center text-white pt-2 "> Login </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        style={{
          background: "#FFFFFF",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "2",
          padding: "30px 30px",
          
        }}
        size='350px'
        overlayColor='#D9D9D9'
        direction="bottom"
      >
        <div className=' flex-1 '>
         <div className="text-center font-bold text-[20px] mb-4">Sign in to Kosbis</div>
         {/* <form onSubmit={handleLogin}>
         {error && <p className="text-center text-xs mt-3 text-red-400">{error}</p>}
         <input type="email" className='w-full px-[28px] mb-[14px] h-[48px] rounded-[8px] border-[#C4C4C4] border-[1px]' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email'/>
         <input type="password" className='w-full px-[28px]  h-[48px] rounded-[8px] border-[#C4C4C4] border-[1px]' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password'/>
         <Link href="/password">
         <p className="w-full text-[#0047CC] mt-[13px] text-right  text-[10px]">Forgot your Password?</p>
            </Link>
         
         <input
          type="submit"
          className="bg-[#0EAD69] w-[315px] h-[48px] rounded-[48px] mt-[23px] text-center text-white pt-2 "
        />
         </form> */}
        </div>
      </Drawer>
    </div>
  );
};

export default LoginMenu