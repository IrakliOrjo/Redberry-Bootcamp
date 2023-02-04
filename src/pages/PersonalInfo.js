import React from 'react'

import Vector from '../images/Vector.svg'

const PersonalInfo = () => {
  return (
    <div className='bg-[#F9F9F9] min-h-[100vh] w-[1078px] 
    flex flex-col  items-center px-[8.6rem] pt-8'>
        {/*Head */}
        <div className='flex justify-center absolute items-center font-semibold text-2xl
         bg-white rounded-full text-[#2E2E2E] w-[40px] h-[40px]
         top-[40px] left-[48px]
         '><img src={Vector} alt='vector' /></div>
        <div className=' w-[49.875em] '>
            <h1 className='inline-block align-top float-left text-[1.8125em] font-[700] '>პირადი ინფო</h1>
            <p className='inline-block text-black mt-3 align-top float-right font-[500] text-xl'>1/3</p>
        </div>
        <div className='w-[49.875em] mt-2 mb-[4.25em] bg-black h-[1px]'></div>
        {/*Inputs */}
        <div className='flex gap-[8px] mb-8'>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col gap-1'>
                <p className='text-[1.1rem] font-[600]   tracking-wide'>სახელი</p>
                <input className='w-[371px] h-[48px] border 
                border-[#BCBCBC]  rounded-[4px] pl-4'
                placeholder='ანზორ'
                type="text" />
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 ასო, ქართული ასოები</p>
                </div>
            </div>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col gap-1'>
                <p className='text-[1.1rem] font-[600]   tracking-wide'>გვარი</p>
                <input className='w-[371px] h-[48px] border 
                border-[#BCBCBC]  rounded-[4px] pl-4'
                placeholder='მუმლაძე'
                type="text" />
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 ასო, ქართული ასოები</p>
                </div>
            </div>
        </div>
        <div className='self-start mb-8'>
            <p className='inline text-[1.125rem] font-[600] mr-5'>პირადი ფოტოს ატვირთვა</p>
            <label  className='inline-flex w-[7.85em] justify-center items-center
             text-white text-[0.85rem] tracking-wide h-[1.9875em]
              rounded-[4px] bg-[#0E80BF] cursor-pointer'>ატვირთვა<input  className=' hidden' type="file" accept="image/png, image/gif, image/jpeg" /></label>
        </div>
        <div>
            <div className='flex flex-col justify-around  w-[52.875em] h-[9.25em] pl-5 mb-[1.2rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>ჩემ შესახებ (არასავალდებულო)</p>
                <textarea className='w-[49.875em] h-[6.4375em] border-[#BCBCBC] border rounded-[4px] pl-4 pt-2 resize-none' 
                placeholder="ზოგადი ინფო შენ შესახებ"
                ></textarea>
            </div>
            <div className='flex flex-col justify-around  w-[52.875em] h-[7.625em] pl-5 mb-[1rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>ელ.ფოსტა</p>
                <input className='w-[49.875em] h-[3em] border-[#BCBCBC] border rounded-[4px] pl-4' 
                placeholder="anzor666@redberry.ge" type='email'
                ></input>
                <p className='text-[14px] text-[#686262]'>უნდა მთავრდებოდეს @redberry.ge-ით</p>
            </div>
            <div className='flex flex-col justify-around  w-[52.875em] h-[7.625em] pl-5 '>
                <p className='text-[1rem] font-[600] tracking-wide'>მობილურის ნომერი</p>
                <input className='w-[49.875em] h-[3em] border-[#BCBCBC] border rounded-[4px] pl-4' 
                placeholder="+995 551 12 34 56" type='tel'
                ></input>
                <p className='text-[14px] text-[#686262]'>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
            </div>
        </div>
        <button className='absolute w-[151px] h-[48px] bg-[#6B40E3] 
        font-helvetica text-white text-[18px] 
        tracking-widest font-[500] rounded-[4px] right-[972px] bottom-[25px]'>შემდეგი</button>
    </div>
  )
}

export default PersonalInfo