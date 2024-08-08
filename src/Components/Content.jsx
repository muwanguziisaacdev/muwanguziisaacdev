import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck, faArrowDown,faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Content = () => {
  return (
    <>
        <div>
            <div className='grid lg:grid-cols-5 sm:grid-cols-1'>
                <div className='ml-4 lg:col-span-2'>
                    <h1 className='text-2xl'>✋</h1>
                    <h1 className='text-6xl font-extrabold '><span className='font-extralight'>Hello! </span>I'm Isaac</h1>
                    <div className='flex items-center justify-between my-4'>
                        <div className='max-sm:w-10 w-32 h-1 bg-white '></div>
                        <h3 className='product text-2xl'>Web Developer </h3>
                        <div><FontAwesomeIcon icon={faStar}/></div>
                    </div>
                    
                    <div className='font-extralight mt-5 mb-10'>
                        <p>Hello!I'm Isaac. I'm a <span className='font-bold'>Web developer, design thinker, creative worker</span>,</p>
                        <p>experience strategist, generative artist & human-loving introvert</p>
                    </div>
                    <div className=''>
                        <ul className='text-xl flex flex-col mb-10'>
                            <li className=''><FontAwesomeIcon icon={faCheck} className=' pr-2'/>Product must be authentic</li>
                            <li><FontAwesomeIcon icon={faCheck} className='text-2xl pr-2'/>Solve pain points elegantly</li>
                            <li><FontAwesomeIcon icon={faCheck} className='text-2xl pr-2'/>User testing, feedback, and validation</li>
                        </ul>
                        <div className='flex justify-between text-xl gap-20'>
                            <button className='px-6 py-4 text-bold rounded-full bg-white text-gray-800 border-0 hover:bg-black hover:text-gray-200 transition-all ease-out duration-500'>Let's Talk</button>
                            <button className='px-6 py-4 border-b-2 cursor-pointer '>Download Cv <FontAwesomeIcon icon={faArrowDown}/></button>
                        </div>
                    </div>
                </div>
                <div className=' max-sm:hidden w-full h-full lg:col-span-3'>
                    {/* container containing the image */}
                    <div className=' flex justify-end'>
                        <img src="02.png" alt="author" className='object-cover rounded-md grayscale'/>
                    </div>
                </div>
                
                {/* the cards for the mobile view */}
                <div className='md:hidden'>
                    <h1 className='text-2xl mt-4 ml-4 pb-1 border-b-4 border-purple-700 inline-block'>Explore</h1>
                    <div className='w-4/6 h-52 bg-gray-200 m-auto mt-4 flex flex-col p-2 rounded-md text-gray-800 shadow-lg'>
                        <h1 className='text-center text-2xl font-bold p-2'>My Projects</h1>
                        <p>See all of nice project</p>
                        <p>i have done</p>
                        <FontAwesomeIcon icon={faArrowRight} className='text-2xl p-4 w-3/6 m-auto rounded-full bg-gray-800 text-white'/>
                    </div>
                    <div className='w-4/6 h-52 bg-gray-200 m-auto mt-4 flex flex-col p-2 rounded-md text-gray-800 shadow-lg'>
                        <h1 className='text-center text-2xl font-bold p-2'>About Me</h1>
                        <p>Learn about my self</p>
                        <p>what i do</p>
                        <FontAwesomeIcon icon={faArrowRight} className='text-2xl p-4 w-3/6 m-auto rounded-full bg-gray-800 text-white'/>
                    </div>
                    <div className='w-4/6 h-52 bg-gray-200 m-auto mt-4 flex flex-col p-2 rounded-md text-gray-800 shadow-lg'>
                        <h1 className='text-center text-2xl font-bold p-2'>Contact me</h1>
                        <p>info@gmail.com</p>
                        <FontAwesomeIcon icon={faArrowRight} className='text-2xl p-4 w-3/6 m-auto rounded-full bg-gray-800 text-white'/>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Content