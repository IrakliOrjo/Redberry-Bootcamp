import React from 'react'

const AddExperience = () => {
  return (
    <div>
<div className='flex flex-col relative justify-around  w-[52.875em] h-[7.625em] pl-5 mb-[1rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>თანამდებობა</p>
                <input className={`w-[49.875em] h-[3em] border-[#BCBCBC]
                
                border rounded-[4px] pl-4`}
                placeholder="დეველოპერი, დიზაინერი, ა.შ." 
                type='text'
                
                
                
                />

                
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 სიმბოლო</p>
            </div>
            <div className='flex flex-col relative justify-around  w-[52.875em] h-[7.625em] pl-5 mb-[1rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>დამსაქმებელი</p>
                <input className={`w-[49.875em] h-[3em] border-[#BCBCBC]
                 
                border rounded-[4px] pl-4`} 
                placeholder="დამსაქმებელი" 
                type='text'
              />
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 სიმბოლო</p>
            </div>
        <div className='flex gap-[8px] mb-7'>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col relative gap-1'>
                <p className='text-[1rem] font-[600]   tracking-wide'>დაწყების რიცხვი</p>
                <input className={`w-[371px] h-[48px] border mb-0 tracking-wide
                border-[#BCBCBC]
                
                rounded-[4px] pl-4`}
                
                type="date" />
                
                
                
                </div>
                
            </div>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col relative gap-1'>
                <p className='text-[1rem] font-[600]   tracking-wide'>დამთავრების რიცხვი</p>
                <input className={`w-[371px] h-[48px] border 
                border-[#BCBCBC] 
                
                rounded-[4px] pl-4`}
                placeholder='მუმლაძე'
               
                type="date" />
                
                
               
                </div>
            </div>
        </div>
        <div>
            <div className='flex flex-col relative justify-around  w-[52.875em] h-[10.5em]  pl-5 mb-[3.2rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>აღწერა</p>
                <textarea className={`w-[49.875em] h-[7.6875em] border-[#BCBCBC]
                 
                border rounded-[4px] pl-4 pt-2 resize-none`}
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
               
                
                ></textarea>
                    
                
               
            </div>
            <div className='w-[49.875em] mt-2 mb-[3.8em] bg-[#BCBCBC] ml-5 h-[1px]'></div>
            
       
        </div>

     

    </div>
  )
}

export default AddExperience