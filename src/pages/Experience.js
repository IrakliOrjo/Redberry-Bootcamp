import React from 'react'

import Vector from '../images/Vector.svg'

const Experience = () => {
  return (
    <div className='bg-[#F9F9F9] min-h-[100vh] w-[1078px] 
    flex flex-col  items-center px-[8.6rem] pt-8'>
        {/*Head */}
        <div className='flex justify-center absolute items-center font-semibold text-2xl
         bg-white rounded-full text-[#2E2E2E] w-[40px] h-[40px]
         top-[40px] left-[48px]
         '><a href='/info'><img src={Vector} alt='vector' /></a></div>
        <div className=' w-[49.875em] '>
            <h1 className='inline-block align-top float-left text-[1.8125em] font-[700] '>გამოცდილება</h1>
            <p className='inline-block text-black mt-3 align-top float-right font-[500] text-xl'>2/3</p>
        </div>
        <div className='w-[49.875em] mt-2 mb-[4.25em] bg-black h-[1px]'></div>
        {/*Inputs */}
        <div className='flex flex-col justify-around  w-[52.875em] h-[7.625em] pl-5 mb-[1rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>თანამდებობა</p>
                <input className='w-[49.875em] h-[3em] border-[#BCBCBC] border rounded-[4px] pl-4' 
                placeholder="დეველოპერი, დიზაინერი, ა.შ." type='email'
                ></input>
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 სიმბოლო</p>
            </div>
            <div className='flex flex-col justify-around  w-[52.875em] h-[7.625em] pl-5 mb-[1rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>დამსაქმებელი</p>
                <input className='w-[49.875em] h-[3em] border-[#BCBCBC] border rounded-[4px] pl-4' 
                placeholder="დამსაქმებელი" type='email'
                ></input>
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 სიმბოლო</p>
            </div>
        <div className='flex gap-[8px] mb-7'>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col gap-1'>
                <p className='text-[1rem] font-[600]   tracking-wide'>დაწყების რიცხვი</p>
                <input className='w-[371px] h-[48px] border tracking-wide
                border-[#BCBCBC]  rounded-[4px] pl-4'
                
                type="date" />
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 ასო, ქართული ასოები</p>
                </div>
            </div>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col gap-1'>
                <p className='text-[1rem] font-[600]   tracking-wide'>დამთავრების რიცხვი</p>
                <input className='w-[371px] h-[48px] border 
                border-[#BCBCBC]  rounded-[4px] pl-4'
                placeholder='მუმლაძე'
                type="date" />
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 ასო, ქართული ასოები</p>
                </div>
            </div>
        </div>
        <div>
            <div className='flex flex-col justify-around  w-[52.875em] h-[10.5em]  pl-5 mb-[3.2rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>აღწერა</p>
                <textarea className='w-[49.875em] h-[7.6875em] border-[#BCBCBC] border rounded-[4px] pl-4 pt-2 resize-none' 
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                ></textarea>
            </div>
            <div className='w-[49.875em] mt-2 mb-[3.8em] bg-[#BCBCBC] ml-5 h-[1px]'></div>
            
        <button className='bg-[#62A1EB] w-[18.0625em] h-[3em] 
        ml-5 mb-[6.2rem] rounded-[4px] text-[#FFFFFF] font-[500]'>მეტი გამოცდილების დამატება</button>

        <div className='flex flex-row-reverse justify-between ml-5 pr-5 mb-[4.0625em]'>
            <a href='/education'><button className=' w-[151px] h-[48px] bg-[#6B40E3] 
                font-helvetica text-white text-[18px] 
                tracking-widest font-[500] rounded-[4px] right-[972px]  bottom-[25px]'>შემდეგი</button></a>
            <a href='/experience'><button className=' w-[113px] h-[48px] bg-[#6B40E3] 
                font-helvetica text-white text-[18px] 
                tracking-widest font-[500] rounded-[4px] left-[130px]  bottom-[25px]'>უკან</button></a>
        </div>

        </div>
        
    </div>
  )
}

export default Experience