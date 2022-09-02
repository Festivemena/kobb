import React from 'react'
import { BsArrowBarUp } from 'react-icons/bs'
import DrawerMenu from '../container/sidebar'
const Wallet = () => {
  return (
      <div className='h-screen bg-white'>
    <div className='bg-[#0EAD69] rounded-b-[24px] text-white items-center justify-center text-center h-[267px] w-full'>
       <div className='pt-[32.67px] font-semibold text-[16px]'>Tips Balance</div>
       <div className='pt-[7px] text-[36px] font-bold'>40,000</div>
       <div className='pt-[12px] text-[10px] font-normal'>+20 new tips</div>
       <div className='mt-[30px] bg-white w-full justify-between h-[56px] rounded-[12px]'>
           {/* <div className='text-[#0EAD69] flex-1'>
               <div><BsArrowBarUp/></div>
               <div>Send</div>
           </div>
           <div className='text-[#0EAD69] flex-1'>
               <div className='rounded-full bg-[#0EAD69] text-center items-center justify-center w-6 h-6'><BsArrowBarUp className='text-white'/></div>
               <div>Export to Wallet</div>
           </div>
           <div className='text-[#0EAD69] flex-1'>
               <div><BsArrowBarUp/></div>
               <div>Convert</div>
           </div> */}
       </div>
        
    </div>
    <div className='bottom-0 bg-white tems-center justify-center sticky'>
        <DrawerMenu/>
        </div>
    </div>
  )
}

export default Wallet