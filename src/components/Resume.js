import React from 'react'

import Mail from '../images/mail.svg'
import Phone from '../images/Group.svg'
import Avatar from '../images/avatar.png'

const Resume = (props) => {
  return (
    <div>
        <div className='flex flex-col justify-around pt-11 pl-[4em]'>
            <div className=''>
                <h1 className='text-[#F93B1D] tracking-wide
                 font-[700] text-[2.125rem] mb-4'>{props.firstName} {props.lastName}</h1>
                <div className='mb-1'>
                {props.email && <img className='inline-block mr-2' src={Mail} alt='mail-icon' />}
                <p className='inline-block text-[#1A1A1A] font-medium text-[1.1rem]'>{props.email}</p>
                </div>
            
                <div className='mb-6'>
                {props.mobile && <img className='inline-block mr-2' src={Phone} alt='phone-icon' />}
                <p className='text-[#1A1A1A] inline-block font-medium text-[1.1rem]'>{props.mobile}</p>
                </div>
                
            </div>
            <p className='text-[#F93B1D] text-[1.2rem] tracking-wide mb-3 font-[700]'>{props.about && 'ჩემ შესახებ'}</p>
            <p className='max-w-[432px] text-[#1A1A1A] font-medium text-[1.1rem]'>{props.about} </p>
        
        {props.firstName && props.lastName && props.email && props.mobile && <div className='border w-[45.375em] mx-auto mt-5'></div>}
        </div>
        <img className='absolute hidden rounded-full
        left-[98.3125em] top-[2em]' src={Avatar} alt='avatar'/>
        <div className='flex flex-col justify-around pt-5 pl-[4em]'>
            <div>
                <p className='text-[#F93B1D] text-[1.2rem] tracking-wide mb-3 font-[700]'>{props.position && 'გამოცდილება'}</p>
                <p className='text-[1rem] font-semibold tracking-wide
                 text-[#1A1A1A] mb-1'>{props.position}</p>
                <p className='text-[#909090] mb-2'>{props.startDate} {props.endDate}</p>
                <p className='w-[41.375em] text-[#000000] text-[1.1rem] font-[500]'>{props.description}</p>
                     {props.position && <div className='border w-[45.375em] mx-auto mt-7'></div>}
            </div>
        </div>
        <div className='flex flex-col justify-around pt-5 pl-[4em]'>
            <div>
                <p className='text-[#F93B1D] text-[1.2rem] tracking-wide mb-3 font-[700]'>{props.education && 'განათლება'}</p>
                <p className='text-[1rem] font-semibold tracking-wide
                 text-[#1A1A1A] mb-1'>{props.education}</p>
                <p className='text-[#909090] mb-3'>{props.educationEndDate}</p>
                <p className='w-[41.375em] text-[#000000] text-[1.1rem] font-[500]'>{props.educationDescription} </p>
                     {props.education && <div className='border w-[45.375em] mx-auto mt-7'></div>}
            </div>
        </div>

    </div>
  )
}

export default Resume