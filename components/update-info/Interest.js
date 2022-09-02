import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/router";
import KS from '../../assets/ksblue.png'
import COM from '../../assets/Rectangle896.png'

const Interest = () => {
  const router = useRouter()
  return (
    <div className='w-full h-full'>
    <div className='w-full items-center justify-center text-center '>
        <Image src={KS} quality={100} alt='kosbis Logo' width={53} height={57} />
        <div className='text-[20px] pt-[13px] text-left text-[#212427] font-semibold'>Select Your Interest</div>
        <div className='text-[12px] text-[#212427] text-left'>Select at leat 3 interest to personlize your experience on kosbisi app. they will be easily accessible to you.</div>
       <div className='grid-cols-3 py-[12px] grid gap-[12px]'>
         <div >
           <div className=' flex'>
           <input type="checkbox" className='absolute mr-2' />
           <Image quality={100} src={COM} width={97} className='' height={78} alt='community'/>
           </div>
         </div>
         <div >
           <div className='relative'>
           <Image quality={100} src={COM} width={97} height={78} alt='community'/>
           </div>
         </div>
         <div >
           <div className='relative'>
           <Image quality={100} src={COM} width={97} height={78} alt='community'/>
           </div>
         </div>
         <div >
           <div className='relative'>
           <Image quality={100} src={COM} width={97} height={78} alt='community'/>
           </div>
         </div>
         <div >
           <div className='relative'>
           <Image quality={100} src={COM} width={97} height={78} alt='community'/>
           </div>
         </div>
         <div >
           <div className='relative'>
           <Image quality={100} src={COM} width={97} height={78} alt='community'/>
           </div>
         </div>
         <div >
           <div className='relative'>
           <Image quality={100} src={COM} width={97} height={78} alt='community'/>
           </div>
         </div>
         <div >
           <div className='relative'>
           <Image quality={100} src={COM} width={97} height={78} alt='community'/>
           </div>
         </div>
         <div >
           <div className='relative'>
           <Image quality={100} src={COM} width={97} height={78} alt='community'/>
           </div>
         </div>
         <div >
           <div className='relative'>
           <Image quality={100} src={COM} width={97} height={78} alt='community'/>
           </div>
         </div>
         <div >
           <div className='relative'>
           <Image quality={100} src={COM} width={97} height={78} alt='community'/>
           </div>
         </div>
         <div >
           <div className='relative'>
           <Image quality={100} src={COM} width={97} height={78} alt='community'/>
           </div>
         </div>
         <div >
           <div className='relative'>
           <Image quality={100} src={COM} width={97} height={78} alt='community'/>
           </div>
         </div>
         <div >
           <div className='relative'>
           <Image quality={100} src={COM} width={97} height={78} alt='community'/>
           </div>
         </div>
         <div >
           <div className='relative'>
           <Image quality={100} src={COM} width={97} height={78} alt='community'/>
           </div>
         </div>
       </div>
    </div>
    <div className='bottom-0 sticky bg-[#FFFFFF] h-[137px] mt-[275px] border-[#C4C4C4] border-t-[1px] w-full'>
      <div className='flex bg-[#FFFFFF] justify-between pt-[26px]'>
        <div onClick={() => router.push('/')} className='w-[96px] border-[#0EAD69] border-[1px] rounded-[32px] text-center text-[16px] text-[#0EAD69] py-[8px] h-[40px]'>Skip</div>
        <div onClick={() => router.push('/')} className='w-[96px] bg-[#0EAD69] rounded-[32px] text-center text-[16px] text-white py-[8px] h-[40px]'>Next</div>
      </div>
    </div>
    </div>
  )
}

export default Interest