import React from 'react'

import Mail from '../images/mail.svg'
import Phone from '../images/Group.svg'
import Avatar from '../images/avatar.png'

const Resume = () => {
  return (
    <div>
        <div className='flex flex-col justify-around pt-11 pl-[4em]'>
            <div className=''>
                <h1 className='text-[#F93B1D] tracking-wide
                 font-[700] text-[2.125rem] mb-4'>ანზორ მუმლაძე</h1>
                <div className='mb-1'>
                <img className='inline-block mr-2' src={Mail} alt='mail-icon' />
                <p className='inline-block text-[#1A1A1A] font-medium text-[1.1rem]'>anzor666@redberry.ge</p>
                </div>
            
                <div className='mb-6'>
                <img className='inline-block mr-2' src={Phone} alt='phone-icon' />
                <p className='text-[#1A1A1A] inline-block font-medium text-[1.1rem]'>+995 597 63 45 16</p>
                </div>
                
            </div>
            <p className='text-[#F93B1D] text-[1.2rem] tracking-wide mb-3 font-[700]'>ჩემ შესახებ</p>
            <p className='max-w-[432px] text-[#1A1A1A] font-medium text-[1.1rem]'>ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ 
            ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ. </p>
        
        <div className='border w-[45.375em] mx-auto mt-5'></div>
        </div>
        <img className='absolute rounded-full
        left-[98.3125em] top-[2em]' src={Avatar} alt='avatar'/>
        <div className='flex flex-col justify-around pt-5 pl-[4em]'>
            <div>
                <p className='text-[#F93B1D] text-[1.2rem] tracking-wide mb-3 font-[700]'>გამოცდილება</p>
                <p className='text-[1rem] font-semibold tracking-wide
                 text-[#1A1A1A] mb-1'>React Native Developer, Microsoft</p>
                <p className='text-[#909090] mb-2'>2020-09-23 - 2020-09-23</p>
                <p className='w-[41.375em] text-[#000000] text-[1.1rem] font-[500]'>Experienced Javascript Native Developer 
                    with 5 years in the industry.
                     proficient withreact. 
                     Used problem-solving aptitude to encahge 
                     application performance by 14%.created 
                     data visualisation tools and integrated 
                     designs. </p>
                     <div className='border w-[45.375em] mx-auto mt-7'></div>
            </div>
        </div>
        <div className='flex flex-col justify-around pt-5 pl-[4em]'>
            <div>
                <p className='text-[#F93B1D] text-[1.2rem] tracking-wide mb-3 font-[700]'>განათლება</p>
                <p className='text-[1rem] font-semibold tracking-wide
                 text-[#1A1A1A] mb-1'>წმ. ანდრიას საპატრიარქოს სასწავლებელი, , სტუდენტი</p>
                <p className='text-[#909090] mb-3'>2020-09-23</p>
                <p className='w-[41.375em] text-[#000000] text-[1.1rem] font-[500]'>ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები.
                 რაც შემეძლო — ვქენი. კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე. 
                 მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და ჩაგიკაკუნებსო.
                  აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი? </p>
                     <div className='border w-[45.375em] mx-auto mt-7'></div>
            </div>
        </div>

    </div>
  )
}

export default Resume