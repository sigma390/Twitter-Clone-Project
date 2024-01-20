"use client"

import { FeedCard } from '@/components/FeedCard/FeedCard';
import { Sidebar } from '@/components/Sidebar';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import Image from 'next/image'
import { title } from 'process';
import { useCallback } from 'react';


export default function Home() {
  const handleLoginWithGoogle = useCallback((cred:CredentialResponse)=>{},[])
  return (
    <div>

<div className='grid grid-cols-12 h-screen w-screen px-72'>
      <Sidebar/>
      <div className=' col-span-6 border-r-[1px] border-l-[1px] border-[#2f3336] h-screen overflow-y-scroll'>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        
        <FeedCard/>
      </div>
      <div className='col-span-3 p-5'>
        <div className='p-5 bg-slate-700 rounded-lg justify-items-center'>
          <h1 className=' text-2xl ' >New To twitter ?</h1>
        <GoogleLogin onSuccess={(cred)=>{console.log(cred)}}></GoogleLogin>
        </div>
      


      </div>
      
    </div>




    </div>
    
  )
}
