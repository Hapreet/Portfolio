import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
       
        <div className='max-w-[1000px] px-8 mx-auto  flex flex-col justify-center h-full'>
        <p className='text-pink-600'>
        Hii my name is Harry </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Harpreet  Singh</h1>
        <h2 className='text-4xl sm:texxt-7xl font-bold text-[#8892b0]'>Full stack developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'> I'm a full stack developer  specializing in building ( and  ocassionally designing) exceptional digital  experiences. currently , Im focussed on building responsive   full stack web  applications.</p>
        
        <div>
            <button className=' group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'> view work 
           <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='  ml-4'/>
           </span> 
            </button>
        </div>
     
       
   
     </div>
    </div>
  )
}

export default Home