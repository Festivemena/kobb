import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/router";
import KS from '../../assets/ksblack.png'
import Pp from '../../assets/Ellipse66.png'

const Update = () => {
  const router = useRouter()
  return (
    <div className='w-full h-full'>
    <div className='w-full items-center h-2/3 justify-center text-center '>
        <Image src={KS} quality={100} alt='kosbis Logo' width={53} height={57} />
        <div className='text-[20px] pt-[13px] text-center text-[#212427] font-semibold'>Pick a Profile Picture</div>
        <div className='text-[12px] text-[#212427] text-center'>let your friends recognize you</div>
        <div className='pt-[50px]'>
         {/* change to image input */}
        <Image src={Pp} quality={100} alt='kosbis Logo' className='relative' width={191} height={191} />
        </div>
    </div>
    <div className='bottom-0 bg-[#FFFFFF] sticky h-[137px] mt-[275px] border-[#C4C4C4] border-t-[1px] w-full'>
      <div className='flex justify-between pt-[26px]'>
        <div onClick={() => router.push('/')} className='w-[96px] border-[#0EAD69] border-[1px] rounded-[32px] text-center text-[16px] text-[#0EAD69] py-[8px] h-[40px]'>Skip</div>
        <div onClick={() => router.push('/updatebio')} className='w-[96px] bg-[#0EAD69] rounded-[32px] text-center text-[16px] text-white py-[8px] h-[40px]'>Next</div>
      </div>
    </div>
    </div>
  )
}

export default Update