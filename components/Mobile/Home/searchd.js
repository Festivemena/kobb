import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useRouter } from "next/router";

 const Searchd = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const router = useRouter()

  return (
    <div>
      <div className="  ">
          <FaSearch  onClick={toggleDrawer} className="w-[20px] h-[25px] pt-1 text-[#9597A1]"/> 
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        style={{
          background: "#FFFFFF",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "2",
          padding: "20px 30px",
          
        }}
        size='75px'
        overlayColor='#D9D9D9'
        direction="top"
      >
          <div className="flex">
              <label className="pr-4">Search</label>
        <input 
            placeholder='Search'
            type='text'
            className='bg-[#9597A1] px-4 rounded-lg items-end  font-normal text-[#9597A1] w-full h-8'
          /></div>
      </Drawer>
    </div>
  );
};

export default Searchd