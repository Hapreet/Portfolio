import React from 'react';
import work1 from '../assets/projects/realestate.jpg';
import work2 from '../assets/projects/workImg.jpeg';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>work</p>
          <p className='py-6 text-gray-300'>// Check out some of my recent work </p>
        </div>

        <div 
        
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div
          style={{ backgroundImage: `url(${work2})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Naver Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='pt-8 text-center'> React js Application </span>
              <div>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href=''>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>

                </a>
              </div>
            </div>
          </div>

          <div
          style={{ backgroundImage: `url(${work1})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Naver Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='pt-8 text-center'> React js Application </span>
              <div>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href=''>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>

                </a>
              </div>
            </div>
          </div>


          <div
          style={{ backgroundImage: `url(${work2})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Naver Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='pt-8 text-center'> React js Application </span>
              <div>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href=''>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>

                </a>
              </div>
            </div>
          </div>

          <div
          style={{ backgroundImage: `url(${work2})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Naver Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='pt-8 text-center'> React js Application </span>
              <div>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href=''>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>

                </a>
              </div>
            </div>
          </div>
 
          <div
          style={{ backgroundImage: `url(${work2})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Naver Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='pt-8 text-center'> React js Application </span>
              <div>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href=''>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>

                </a>
              </div>
            </div>
          </div>


          <div
          style={{ backgroundImage: `url(${work2})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Naver Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='pt-8 text-center'> React js Application </span>
              <div>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href=''>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>

                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Work;
