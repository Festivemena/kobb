import FooterOption from "./footeroption";
import { BsPlusCircle, BsPlusCircleFill, BsChatFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";

import { FaHamburger } from "react-icons/fa";
import { BiPlus, BiMenu, BiPlusCircle } from "react-icons/bi";
import Link from "next/link";
import MyModal from "./dialog";
import { useState } from "react";
import { useRouter } from "next/router";
import { AiFillCloseCircle } from 'react-icons/ai';
import { DrawerMenu } from "../../../container/sidebar";


const style = {
  navContainer: `flex bg-[#FFFFFF] sticky border-[#C4C4C4] border-[1px] bottom-0 px-2 py-2 h-12 justify-between`,
}

function Footer() {
  const router = useRouter()
  return (
<div className={style.navContainer}>
<FaBell className="text-lg text-black"/>
        <MyModal/>
      <BsChatFill onClick={() => router.push('/chats')} className="text-black text-lg"/>   
    </div>
   ) 
  }

export default Footer