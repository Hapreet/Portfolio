import React,{useState} from 'react';

import {FaBars, FaTimes ,FaGithub , FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import logo from '../assets/logo1.png'

const Navbar = () => {
  const [nav,setNav]=useState(false)
  const handleClick   = () =>setNav(!nav)
  return (
    <div className="  text-gray-300 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]">
      <div>
        <img  className='w-[50px] 'src={logo} alt ="harry "/>
       </div>
       {/* menu*/}
    
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Contact</li>
            <li>Teach_up</li>
        </ul>
       
       {/*Hamburger */}
       <div  onClick={handleClick} className='md:hidden z-10'>
        {!nav ?<FaBars />:<FaTimes />}
       </div>
       {/* Mobile Menu*/}
       <ul className = {!nav ? 'hidden' :' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skill</li>
            <li className='py-6 text-4xl'>Contact</li>
            <li className='py-6 text-4xl'>Teach_up</li>
        </ul>

        {/*Social icons */}
        <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
              <a className='p-4 flex justify-between  items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600' href ="/">
                Linkedin <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
              <a className='p-4 flex justify-between  items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]' href ="/">
                Github <FaGithub size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
              <a className='p-4 flex justify-between  items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]' href ="/">
                Facebook <FaFacebook size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
              <a className='p-4 flex justify-between  items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]' href ="/">
                Resume <BsFillPersonLinesFill size={30}/>
              </a>
            </li>
          </ul>

        </div>
       
   </div>
  )
}

export default Navbar