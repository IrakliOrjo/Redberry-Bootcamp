import React, {useState} from 'react'

import AddExperience from '../components/AddExperience';

import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Vector from '../images/Vector.svg'

import { useNavigate } from 'react-router-dom'

import success from '../images/success.png'
import error from '../images/error.png'

import Sum from '../components/Sum'

import { format } from 'date-fns'

const Experience = (props) => {


    

    const navigate = useNavigate()

   const schema = yup.object().shape({
        position: yup.string().required('required!!').min(2),
        employer: yup.string().required('required!!').min(2),
        start_date: yup.mixed().test("Date is required", value => value.length > 0,),
        due_date: yup.mixed().required().test("Date is required", value => value.length > 0,),
        description: yup.string().required('Description required')
    });

    const { register, handleSubmit, setError, formState: { errors } } = useForm({
          resolver: yupResolver(schema)
     })

    function change(event) {
    props.setData(prevFormData => {
     const updatedExperiences = prevFormData.experiences.map(experience => {
      if (Object.keys(experience).includes(event.target.name)) {
        return {
          ...experience,
          [event.target.name]: event.target.value
        };
      }
      return experience;
    });

    return {
      ...prevFormData,
      experiences: updatedExperiences
    };
  });
        
        
    }
    


     console.log(props.data.experiences[0].employer)

     function move() {
    
    setTimeout(() => localStorage.clear(), 500) 
     setTimeout(() => navigate('/'), 1000);
 
  }

     const onSubmit = (data) => {
        console.log(data)
        navigate('/education');
        
    }

  return (
    <div className='bg-[#F9F9F9] min-h-[100vh] w-[1078px] 
    flex flex-col  items-center px-[8.6rem] pt-8'>
        {/*Head */}
        <div className='flex justify-center absolute items-center font-semibold text-2xl
         bg-white rounded-full text-[#2E2E2E] w-[40px] h-[40px]
         top-[40px] left-[48px]
         '><div className=' cursor-pointer' onClick={move}><img src={Vector} alt='vector' /></div></div>
        <div className=' w-[49.875em] '>
            <h1 className='inline-block align-top float-left text-[1.8125em] font-[700] '>გამოცდილება</h1>
            <p className='inline-block text-black mt-3 align-top float-right font-[500] text-xl'>2/3</p>
        </div>
        <div className='w-[49.875em] mt-2 mb-[4.25em] bg-black h-[1px]'></div>
        {/*Inputs */}
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col relative justify-around  w-[52.875em] h-[7.625em] pl-5 mb-[1rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>თანამდებობა</p>
                <input className={`w-[49.875em] h-[3em] border-[#BCBCBC]
                ${(()=> {
                    if(props.data?.experiences[0]?.position.length > 0){
                        if(props.data?.experiences[0]?.position.length == 1){
                            return 'border-[#EF5050] focus:outline-[#EF5050]'

                        }else{
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }
                   
                     }
                     if(errors.position?.message){
                            return 'border-[#EF5050] focus:outline-[#EF5050]'
                        }

                    } )()}
                border rounded-[4px] pl-4`}
                placeholder="დეველოპერი, დიზაინერი, ა.შ." 
                type='text'
                name='position'
                {...register("position")}
                value={props.data?.experiences[0].position}
                onChange={(event) =>change(event)}
                />

                {props.data?.experiences[0].position.length >= 2  && <img src={success} className='absolute top-[3.4rem] right-11' alt='success validation' />}       
                {props.data?.experiences[0].position.length > 0 && props.data?.experiences[0].position.length == 1 && <img src={error} className='absolute top-[3.2rem] -right-1' alt='error validation' />}
                {errors.position?.message && props.data?.experiences[0].position.length == 0 && <img src={error} className='absolute top-[3.2rem] -right-1' alt='error validation' />}
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 სიმბოლო</p>
            </div>
            <div className='flex flex-col relative justify-around  w-[52.875em] h-[7.625em] pl-5 mb-[1rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>დამსაქმებელი</p>
                <input className={`w-[49.875em] h-[3em] border-[#BCBCBC]
                 ${(()=> {
                    if(props.data.experiences[0]?.employer?.length > 0){
                        if(props.data.experiences[0].employer.length == 1){
                            return 'border-[#EF5050] focus:outline-[#EF5050]'

                        }else{
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }
                     }
                    if(errors.employer?.message){
                            return 'border-[#EF5050] focus:outline-[#EF5050]'
                        }
                    } )()}
                border rounded-[4px] pl-4`} 
                placeholder="დამსაქმებელი" 
                type='text'
                name='employer'
                {...register("employer")}
                value={props.data.experiences[0].employer}
                onChange={(event) =>change(event)}
                />
                {props.data.experiences[0].employer.length >= 2  && <img src={success} className='absolute top-[3.4rem] right-11' alt='success validation' />}       
                {props.data.experiences[0].employer.length > 0 && props.data.experiences[0].employer.length == 1 && <img src={error} className='absolute top-[3.2rem] -right-1' alt='error validation' />}
                {errors.employer?.message && props.data.experiences[0].employer.length == 0 && <img src={error} className='absolute top-[3.2rem] -right-1' alt='error validation' />}
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 სიმბოლო</p>
            </div>
        <div className='flex gap-[8px] mb-7'>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col relative gap-1'>
                <p className='text-[1rem] font-[600]   tracking-wide'>დაწყების რიცხვი</p>
                <input className={`w-[371px] h-[48px] border mb-0 tracking-wide
                border-[#BCBCBC]
                ${(()=> {
                    if(props.data.experiences[0].start_date.match(/^\d{4}/)){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }
                    
                    if(errors.startDate?.message){
                       
                            return 'border-[#EF5050] focus:outline-[#EF5050]'

                        }                     
                    
                     } )()}
                rounded-[4px] pl-4`}
                name='start_date'
                {...register("start_date")}
                value={props.data.experiences[0].start_date}
                onChange={(event) =>change(event)}
                type="date" />
                
                
                {errors.startDate?.message && !props.data.experiences[0].start_date.match(/^\d{4}/)  && <p className='text-[red] absolute top-[5rem]'>შეიყვანეთ თარიღი</p>}              
                </div>
                
            </div>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col relative gap-1'>
                <p className='text-[1rem] font-[600]   tracking-wide'>დამთავრების რიცხვი</p>
                <input className={`w-[371px] h-[48px] border 
                border-[#BCBCBC] 
                ${(()=> {
                    if(props.data.experiences[0].due_date.match(/^\d{4}/)){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }
                    
                    if(errors.endDate?.message){
                       
                            return 'border-[#EF5050] focus:outline-[#EF5050]'

                        }                     
                    
                     } )()}
                rounded-[4px] pl-4`}
                placeholder='მუმლაძე'
                name='due_date'
                {...register("due_date")}
                value={props.data.experiences[0].due_date}
                onChange={(event) =>change(event)}
                type="date" />
                
                
                {errors.endDate?.message && !props.data.experiences[0].due_date.match(/^\d{4}/)  && <p className='text-[red] absolute top-[5rem]'>შეიყვანეთ თარიღი</p>}

                </div>
            </div>
        </div>
        
            <div className='flex flex-col relative justify-around  w-[52.875em] h-[10.5em]  pl-5 mb-[3.2rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>აღწერა</p>
                <textarea className={`w-[49.875em] h-[7.6875em] border-[#BCBCBC]
                 ${(()=> {
                    if(props.data.experiences[0].description.length >0){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }
                    
                    if(errors.description?.message){
                       
                            return 'border-[#EF5050] focus:outline-[#EF5050]'

                        }                     
                    
                     } )()}
                border rounded-[4px] pl-4 pt-2 resize-none`}
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                name='description'
                value={props.data.experiences[0].description}
                {...register("description")}
                onChange={(event) =>change(event)}
                
                ></textarea>
                    
                
                {errors.description?.message && props.data.experiences[0].description.length == 0 && <img src={error} className='absolute top-[5.5rem] -right-1' alt='error validation' />}
            </div>
            <div className='w-[49.875em] mt-2 mb-[3.8em] bg-[#BCBCBC] ml-5 h-[1px]'></div>
               
                     
            
            
        <div className='flex flex-col justify-start w-[52.875em]'>     
            <button className='bg-[#62A1EB] w-[18.0625em] h-[3em] 
                  mb-[6.2rem] rounded-[4px] ml-5 text-[#FFFFFF] font-[500]'
                >მეტი გამოცდილების დამატება</button>
            <div className='flex flex-row-reverse justify-between ml-5 pr-5 mb-[4.0625em]'>
                <a href='/education'><button type='submit' className=' w-[151px] h-[48px] bg-[#6B40E3] 
                    font-helvetica text-white text-[18px] 
                    tracking-widest font-[500] rounded-[4px] right-[972px]  bottom-[25px]'>შემდეგი</button></a>
                <a href='/experience'><button className=' w-[113px] h-[48px] bg-[#6B40E3] 
                    font-helvetica text-white text-[18px] 
                    tracking-widest font-[500] rounded-[4px] left-[130px]  bottom-[25px]'>უკან</button></a>
            </div>
        </div>        
        </form>  

        
    </div>
  )
}

export default Experience