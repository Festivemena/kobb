import Image from 'next/image'
import React, {useState}  from 'react'
import { useRouter } from "next/router";
import { auth } from '../../firebaseconfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import KS from '../../assets/ksblack.png'

const Signup = () => {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSignUp(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Your are registered");
        router.push("/updatepic");
      })
      .catch((error) => {
        alert(error.message);
        setError(
          "Make password more than 6 characters and format email properly"
        );
        // ..
      });
  }
  return (
    <div className='w-full h-full'>
        <div className='w-full items-center justify-center text-center '>
            <Image src={KS} quality={100} alt='kosbis Logo' width={53} height={57} />
            <div className='text-[20px] pt-[13px] text-center text-[#212427] font-semibold'>Create Your  account</div>
        </div>
        <div>
            <form className='pt-[49px] px-[28px]' onSubmit={handleSignUp}>
            {error && (
          <p className="text-center text-xs mt-3 text-red-400">{error}</p>
        )}
                <input type="text" className='w-full px-[28px] h-[48px] rounded-[8px] border-[#C4C4C4] border-[1px]' placeholder='Name'/>
                <div className='pt-[24px]'>
                <input type="text" className='w-full px-[28px]  h-[48px] rounded-[8px] border-[#C4C4C4] border-[1px]'value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email address'/>
                </div>
                <div className='pt-[24px]'>
                <input type="password" className='w-full px-[28px]  h-[48px] rounded-[8px] border-[#C4C4C4] border-[1px]' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
                </div>
                <div className='pt-[5px] text-[10px] px-[37px] pt-[115px] text-justify'>By signing up, you agree to the Terms of Service and privacy Policy, including Cookie Use. kosbis may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keepng your account secure and personalizing our services, including ads. Learn more. Others will be able to find you by email or phone number, when provided, unless you choose otherwise here.</div>
                <input
          type="submit"
          placeholder='SignUp'
          className="mt-[58px] text-center h-[48px] px-4 rounded-xl w-full text-white bg-[#0EAD69]"
        />
            </form>
        </div>
    </div>
  )
}

export default Signup



