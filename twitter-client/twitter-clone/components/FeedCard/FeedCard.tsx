import React, { ReactNode } from 'react'
import { IoSearch } from 'react-icons/io5';
import Image from 'next/image';

import { BiMessageRounded } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { IoIosStats } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { FiShare } from "react-icons/fi";




export const FeedCard:React.FC = () => {
  return (
    <div className='border border-r-0 border-l-0 border-b-0 border-[#2f3336] p-4 hover:bg-zinc-950 transition-all cursor-pointer'>
        <div className='grid grid-cols-12 gap-3'>
            <div className='col-span-1'>
              <Image className='rounded-full' height={50} width ={50}src='https://media.licdn.com/dms/image/D4E03AQH5dp81RBo9cg/profile-displayphoto-shrink_200_200/0/1702394801332?e=1709769600&v=beta&t=Kxbqurb5z6OXxT84F19OrooamOHnHwBzEXMwRAmib_4' alt='user Iamge'/>
            </div>
            <div className='col-span-11'>
              <h5 className='font-bold'>Omkar Patil</h5>
              <p>In which programming language did you write your first line of code?
                I expect to see a lot of C++, Pascal, JavaScript, and Python 😉</p>
                <div className='flex justify-between mt-4 text-xl'>
                  <div>
                    <BiMessageRounded/>
                  </div>
                  <div>
                  <BiRepost/>
                </div>
                <div>
                  <CiHeart/>
                </div>
                <div>
                  <IoIosStats/>
                </div>
                <div className='flex justify-evenly mr-3'>
                  <FaRegBookmark className='flex justify-normal'/>
                  <span className='flex justify-end ml-4'><FiShare/></span>
                </div>
            </div>


        </div>


    </div>
    </div>
  )
}
