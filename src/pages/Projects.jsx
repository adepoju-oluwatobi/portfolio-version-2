import React from 'react';
import NetflixCloneImg from '../assets/netflix-clone-image.png';

function Projects() {
  return (
    <div className='container'>
      <h1 className='heading'>Projects</h1>
      <div className='projects pb-10 lg:grid-col-2'>
       <div>
       <img className='rounded-xl' src={NetflixCloneImg} alt="" />
       </div>
      <div className='md:flex gap-8'>
      <div className='md:w-[50%]'>
       <p className='sub-heading'>Netflix Clone</p>
        <p className='description'>A project to polish my skill in fetching API and using the css framework ”Tailwind” as a main styling tool. This project took 2 days to complete and i am still working on it to make it better.</p>
       </div>
        <div>
        <p className='sup-heading'>Technologies</p>
        <ul className='text-xs md:text-sm lg:text-lg'>
          <li>React Js</li>
          <li>Tailwind CSS</li>
          <li>Typescript</li>
        </ul>
        </div>
      </div>
       <div className='mt-4'>
      <a href='https://github.com/Hue-Ray/netflix-project'>
      <button className='btn bg-black p-2 px-4 mr-4 rounded-lg text-white font-light text-xs md:text-sm lg:text-lg'>View Code</button>
      </a>
       <a href='https://netflix-project-dusky.vercel.app/'>
       <button className='btn border-2 p-2 px-4 rounded-lg text-black font-light text-xs md:text-sm lg:text-lg'>View Demo</button> 
       </a>
       </div>
      </div>
    </div>
  )
}

export default Projects