import React from 'react'

import { FaXTwitter } from "react-icons/fa6";
import { LuHome } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { MdOutlineNotifications } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { TbSquareForbid2 } from "react-icons/tb";
import { RiFileList2Line } from "react-icons/ri";
import { IoBookmarkSharp } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { CgMoreO } from "react-icons/cg";




interface twitterSidebarButton{
    title:string;
    icon:React.ReactNode;
  }
  
  const SidebarIcons :twitterSidebarButton[] = [
    {
      title:'Home ',
      icon:<LuHome className='font-bold'/>
    },
    {
      title:'Explore',
      icon: <IoSearch />
    },
    {
      title:'Notifications',
      icon: <MdOutlineNotifications />
    }
    ,
    {
      title:'Messages',
      icon: <HiOutlineMail />
    },
    {
      title:'Grok',
      icon: <TbSquareForbid2 />
    },
    {
      title:'Lists',
      icon: <RiFileList2Line />
    }
    ,
    {
      title:'Bookmarks',
      icon: <IoBookmarkSharp />
    },
    {
      title:'Communities',
      icon: < BsFillPeopleFill /> 
    },
    {
      title:'Premium',
      icon: <FaXTwitter />
    },
    {
      title:'Profile',
      icon: <VscAccount />
    },
    {
      title:'More',
      icon: <CgMoreO />
    }
  
  
  
  
  ]

export const Sidebar = () => {
  return (
    <div className=' col-span-3 pt-1 '>
        <div className ='text-3xl h-fit hover:bg-[#191919] rounded-full p-2.5 cursor-pointer transition-all w-fit ml-3 '>
        <FaXTwitter />

        </div>
        <div className='mt-4  font-TwitterChirp   text-[20px]'>
          <ul>
          {SidebarIcons.map(item=>
          <li className='flex justify-start items-center gap-5 hover:bg-[#191919] rounded-full px-5 py-2 cursor-pointer transition-all w-fit mt-2 mb-2' key={item.title} >
            <span className=' text-3xl'>{item.icon}</span>
            <span>{item.title}</span>
          </li>

)}
          </ul>
          <button className='bg-[#1d9bf0] hover:bg-[#1d9bf0]   rounded-full p-4 cursor-pointer transition-all w-full mt-6 mr-9'><span className='hover:bg-inherit font-bold'>Post</span></button>
          
        </div>
        
      </div>
  )
}
