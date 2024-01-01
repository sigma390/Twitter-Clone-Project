import { FeedCard } from '@/components/FeedCard/FeedCard';
import { Sidebar } from '@/components/Sidebar';
import Image from 'next/image'
import { title } from 'process';


export default function Home() {
  return (
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
      <div className='col-span-3'></div>
    </div>
  )
}
