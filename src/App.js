import React from 'react';

import Logo from './images/LOGO-023.png'
import Logo2 from './images/LOGO-401.png'

import PersonalInfo from './pages/PersonalInfo';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Resume from './components/Resume'



function App() {
  return (
    <div className="flex">
      <Education />
      <Resume />

      {/*
      <div className='flex flex-col bg-[url("./images/background.png")] min-h-[100vh] 
      object-cover pt-[1.5625em] justify-center items-center' >
        <img className='absolute top-[25px] left-[70px] ' src={Logo} alt='logo'/>
        <div className='absolute top-[89px] w-[93%]  mx-auto  h-[2px] bg-[#1A1A1A]'></div>
        
        <div className='absolute w-[299px] h-[299px] bg-[url("./images/LOGO-401.png")] top-[26.5625em] left-[67.25em] mix-blend-multiply z-0'>
          
        </div>
        <img className='absolute hidden top-[19.5625em] left-[57.25em] mix-blend-multiply' src={Logo2} alt='logo2' />
        <button className='bg-[#1A1A1A] rounded-[8px] 
        w-[29rem] h-[3.75rem] text-white font-[500] text-[20px] relative '>რეზიუმეს დამატება</button>
      
      </div>
      */}
    </div>
  );
}

export default App;
