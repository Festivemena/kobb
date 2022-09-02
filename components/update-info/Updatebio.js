import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/router";
import KS from '../../assets/ksblack.png'

const Updatebio = () => {
  const router = useRouter()
  return (
    <div className='w-full h-full'>
    <div className='w-full items-center h-2/3 justify-center text-center '>
        <Image src={KS} quality={100} alt='kosbis Logo' width={53} height={57} />
        <form>
        <div className='text-[20px] pt-[13px] text-center text-[#212427] font-semibold'>Set Your Profile Name </div>
        <div className='pt-[24px]'>
         <input type="text" className='w-full px-[28px]  h-[48px] rounded-[8px] border-[#C4C4C4] border-[1px]' placeholder='Name'/>
        </div>
        <div className='text-[20px] pt-[13px] text-center text-[#212427] font-semibold'><div className='text-[20px] pt-[13px] text-center text-[#212427] font-semibold'>Set Your Profile Name </div>
        <div className='pt-[24px]'>
         <textarea type="text" className='w-full px-[28px]  h-[119px] rounded-[8px] border-[#C4C4C4] border-[1px]' placeholder='Bio'/>
        </div></div>
        <div className='bottom-0 bg-[#FFFFFF] sticky h-[137px] mt-[275px] border-[#C4C4C4] border-t-[1px] w-full'>
      <div className='flex justify-between pt-[26px]'>
        <div onClick={() => router.push('/')} className='w-[96px] border-[#0EAD69] border-[1px] rounded-[32px] text-center text-[16px] text-[#0EAD69] py-[8px] h-[40px]'>Skip</div>
        <div onClick={() => router.push('/category')} className='w-[96px] bg-[#0EAD69] rounded-[32px] text-center text-[16px] text-white py-[8px] h-[40px]'>Next</div>
      </div>
    </div>
    </form>
    </div>
    </div>
  )
}

export default Updatebio