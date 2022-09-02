import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/router";
import KS from '../../assets/kosbis.png'

const Category = () => {
  const router = useRouter()
  return (
    <div className='w-full h-full'>
    <div className='w-full items-center h-2/3 justify-center text-center '>
        <Image src={KS} quality={100} alt='kosbis Logo' width={53} height={57} />
        <form>
        <div className='text-[20px] pt-[13px] text-left text-[#212427] font-semibold'>Select your category </div>
        <div className='pt-[24px]'>
        <select className='w-full border-[#C4C4C4] border-[2px] rounded-[8px] h-[34px] pl-4'>
        <option value="Select">Select</option>
  <option value="Undergraduate">Undergraduate</option>
  <option value="Graduate">Graduate</option>
  <option value="Secondary">Secondary</option>
  <option value="Postgraduate">Postgraduate</option>
</select>
        </div>
        <div className='text-[20px] pt-[13px] text-left text-[#212427] font-semibold'>Select your School</div>
        <div className='pt-[24px]'>
        <select className='w-full border-[#C4C4C4] border-[2px] rounded-[8px] h-[34px] pl-4'>
        <option value="Select">Select</option>
  <option value="Uniben">Uniben</option>
  <option value="Graduate">Graduate</option>
  <option value="Secondary">Secondary</option>
  <option value="Postgraduate">Postgraduate</option>
</select>
        </div>
        <div className='text-[20px] pt-[13px] text-left text-[#212427] font-semibold'>Select your Faculty </div>
        <div className='pt-[24px]'>
        <select className='w-full border-[#C4C4C4] border-[2px] rounded-[8px] h-[34px] pl-4'>
        <option value="Select">Select</option>
  <option value="Undergraduate">Undergraduate</option>
  <option value="Graduate">Graduate</option>
  <option value="Secondary">Secondary</option>
  <option value="Postgraduate">Postgraduate</option>
</select>
        </div>
        <div className='text-[20px] pt-[13px] text-left text-[#212427] font-semibold'>Select your Department </div>
        <div className='pt-[24px]'>
        <select className='w-full border-[#C4C4C4] border-[2px] rounded-[8px] h-[34px] pl-4'>
        <option value="Select">Select</option>
  <option value="Undergraduate">Undergraduate</option>
  <option value="Graduate">Graduate</option>
  <option value="Secondary">Secondary</option>
  <option value="Postgraduate">Postgraduate</option>
</select>
        </div>
        <div className='bottom-0 sticky h-[137px] mt-[275px] border-[#C4C4C4] border-t-[1px] w-full'>
      <div className='flex justify-between pt-[26px]'>
        <div onClick={() => router.push('/')} className='w-[96px] border-[#0EAD69] border-[1px] rounded-[32px] text-center text-[16px] text-[#0EAD69] py-[8px] h-[40px]'>Skip</div>
        <div onClick={() => router.push('/interest')} className='w-[96px] bg-[#0EAD69] rounded-[32px] text-center text-[16px] text-white py-[8px] h-[40px]'>Next</div>
      </div>
    </div>
    </form>
    </div>
    </div>
  )
}

export default Category