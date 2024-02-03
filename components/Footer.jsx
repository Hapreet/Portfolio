import React from 'react'
import cv from '../assets/cv.png'
import { TypeAnimation } from 'react-type-animation';


const resume = 'http://localhost:5173/newcv.pdf' 

function Footer() {
  return (
    <div className='mt-[100px] bg-[#0a192f] w-full h-screen flex justify-center items-center'>
        <div className='flex justify-center h-[400px] w-full bg-white-600 box-sizing border-box;'>
            <div name="CV" className='pt-10 text-gray-300'>
            <TypeAnimation
      sequence={[
       
        'Click to download My CV',
        1000, 
        'In PDF format',
        1000
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
                <img onClick={()=>{downloadFileAtURL(resume)}} className='mt-10 w-20 mx-auto shadow-md shadow-[#040c16] hover:scale-110 duration-500' src={cv}></img>
              
            </div>
        </div>
         
    </div>
  )
}

export default Footer
   