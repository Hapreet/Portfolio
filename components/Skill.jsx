import React from 'react'
import skill1 from '../assets/aws.png';
import skill2 from '../assets/css.png';
import skill3 from '../assets/firebase.png';
import skill4 from '../assets/github.png';
import skill5 from '../assets/html.png';
import skill6 from '../assets/javascript.png';
import skill7 from '../assets/tailwind.png';
import skill8 from '../assets/react.png';
import skill9 from '../assets/node.png';
import skill10 from '../assets/mongo.png';


const Skill = () => {
  return (
   <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 '>
    <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full  h-full'>
          <div >
                {/* This is for text  */}
               <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience </p>
               <p className='py-4'>// These  are the technologies I've worked  with </p>
              
          </div>

          <div className='w-full grid grid-cols-5 sm:grid-col-4 gap-4 text-center py-8'>
              
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                     <img  className='w-20 mx-auto'src={skill1} alt = "HTMl icons"/>
                     <p className='my-4'> HTML </p>
              </div>

               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

                     <img  className='w-20 mx-auto'src={skill2} alt = "HTMl icons"/>
                     <p className='my-4'> HTML </p>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

<img  className='w-20 mx-auto'src={skill3} alt = "HTMl icons"/>
<p className='my-4'> HTML </p>
</div>

<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

<img  className='w-20 mx-auto'src={skill4} alt = "HTMl icons"/>
<p className='my-4'> HTML </p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

<img  className='w-20 mx-auto'src={skill5} alt = "HTMl icons"/>
<p className='my-4'> HTML </p>
</div>

<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

<img  className='w-20 mx-auto'src={skill6} alt = "HTMl icons"/>
<p className='my-4'> HTML </p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

<img  className='w-20 mx-auto'src={skill7} alt = "HTMl icons"/>
<p className='my-4'> HTML </p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

<img  className='w-20 mx-auto'src={skill8} alt = "HTMl icons"/>
<p className='my-4'> HTML </p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

<img  className='w-20 mx-auto'src={skill9} alt = "HTMl icons"/>
<p className='my-4'> HTML </p>
</div>

<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>

<img  className='w-20 mx-auto'src={skill10} alt = "HTMl icons"/>
<p className='my-4'> HTML </p>
</div>
               

          </div>
    </div>

   </div>
  )
}

export default Skill