import Image from 'next/image'
import React from 'react'
import { CgGoogle } from 'react-icons/cg'
import LoginP from '../../assets/loginp.png'
import LoginMenu from './bottom'
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter()
  return (
    <div className='flex bg-[#FFFFFF]'>
        <div className='w-full pt-[49.67px]'>
            <Image src={LoginP} alt='login' quality={100} height={400} width={400}/>
            <div className='text-[20px] font-bold text-[#212427] px-[46px] pt-[25px] text-center'>Connect With Your Peers in all the Schools Across the Country</div>
            <div className='w-full items-center pt-[24px] justify-center'>
            <LoginMenu/>
            <div className='pt-4'>
            <div className="">
          <div onClick={() => router.push('/signup')} className="bg-[#FFFFFF] border-2 w-[315px] h-[48px] rounded-[48px] flex items-center justify-center text-center pt-2 text-[#212427] "> <div className="pr-4"><CgGoogle/></div> Sign Up with Google </div>
      </div>
            </div>
            <div className='text-[#212427] text-[12px] text-center font-semibold pt-[14px] w-full '>By proccess you agree to the Privacy Policy and Terms & conditions</div>
            </div>
        </div>
    </div>
  )
}

export default Login