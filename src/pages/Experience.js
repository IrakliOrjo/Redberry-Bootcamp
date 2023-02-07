import React from 'react'

import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Vector from '../images/Vector.svg'
import success from '../images/success.png'
import error from '../images/error.png'

const Experience = (props) => {

   const schema = yup.object().shape({
        position: yup.string().required('required!!').min(2),
        company: yup.string().required('required!!').min(2),
        startDate: yup.mixed().test("Date is required", value => value.length > 0,),
        endDate: yup.mixed().required().test("Date is required", value => value.length > 0,),
        description: yup.string().required('Description required')
    
    
    });

    const { register, handleSubmit, setError, formState: { errors } } = useForm({
          resolver: yupResolver(schema)
     })

     console.log(props.startDate)

     const onSubmit = (data) => {
        console.log(data)
        console.log("submited")
        
    }

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
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col relative justify-around  w-[52.875em] h-[7.625em] pl-5 mb-[1rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>თანამდებობა</p>
                <input className={`w-[49.875em] h-[3em] border-[#BCBCBC]
                ${(()=> {
                    if(props.position.length > 0){
                        if(props.position.length == 1){
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
                value={props.position}
                onChange={(event) =>props.change(event)}
                />

                {props.position.length >= 2  && <img src={success} className='absolute top-[3.4rem] right-11' alt='success validation' />}       
                {props.position.length > 0 && props.position.length == 1 && <img src={error} className='absolute top-[3.2rem] -right-1' alt='error validation' />}
                {errors.position?.message && props.position.length == 0 && <img src={error} className='absolute top-[3.2rem] -right-1' alt='error validation' />}
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 სიმბოლო</p>
            </div>
            <div className='flex flex-col relative justify-around  w-[52.875em] h-[7.625em] pl-5 mb-[1rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>დამსაქმებელი</p>
                <input className={`w-[49.875em] h-[3em] border-[#BCBCBC]
                 ${(()=> {
                    if(props.company.length > 0){
                        if(props.company.length == 1){
                            return 'border-[#EF5050] focus:outline-[#EF5050]'

                        }else{
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }
                     }
                    if(errors.company?.message){
                            return 'border-[#EF5050] focus:outline-[#EF5050]'
                        }
                    } )()}
                border rounded-[4px] pl-4`} 
                placeholder="დამსაქმებელი" 
                type='text'
                name='company'
                {...register("company")}
                value={props.company}
                onChange={(event) =>props.change(event)}
                />
                {props.company.length >= 2  && <img src={success} className='absolute top-[3.4rem] right-11' alt='success validation' />}       
                {props.company.length > 0 && props.company.length == 1 && <img src={error} className='absolute top-[3.2rem] -right-1' alt='error validation' />}
                {errors.company?.message && props.company.length == 0 && <img src={error} className='absolute top-[3.2rem] -right-1' alt='error validation' />}
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 სიმბოლო</p>
            </div>
        <div className='flex gap-[8px] mb-7'>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col relative gap-1'>
                <p className='text-[1rem] font-[600]   tracking-wide'>დაწყების რიცხვი</p>
                <input className={`w-[371px] h-[48px] border mb-0 tracking-wide
                border-[#BCBCBC]
                ${(()=> {
                    if(props.startDate.match(/^\d{4}/)){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }
                    
                    if(errors.startDate?.message){
                       
                            return 'border-[#EF5050] focus:outline-[#EF5050]'

                        }                     
                    
                     } )()}
                rounded-[4px] pl-4`}
                name='startDate'
                {...register("startDate")}
                value={props.startDate}
                onChange={(event) =>props.change(event)}
                type="date" />
                
                
                {errors.startDate?.message && !props.startDate.match(/^\d{4}/)  && <p className='text-[red] absolute top-[5rem]'>შეიყვანეთ თარიღი</p>}              
                </div>
                
            </div>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col relative gap-1'>
                <p className='text-[1rem] font-[600]   tracking-wide'>დამთავრების რიცხვი</p>
                <input className={`w-[371px] h-[48px] border 
                border-[#BCBCBC] 
                ${(()=> {
                    if(props.endDate.match(/^\d{4}/)){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }
                    
                    if(errors.endDate?.message){
                       
                            return 'border-[#EF5050] focus:outline-[#EF5050]'

                        }                     
                    
                     } )()}
                rounded-[4px] pl-4`}
                placeholder='მუმლაძე'
                name='endDate'
                {...register("endDate")}
                value={props.endDate}
                onChange={(event) =>props.change(event)}
                type="date" />
                
                
                {errors.endDate?.message && !props.endDate.match(/^\d{4}/)  && <p className='text-[red] absolute top-[5rem]'>შეიყვანეთ თარიღი</p>}

                </div>
            </div>
        </div>
        <div>
            <div className='flex flex-col relative justify-around  w-[52.875em] h-[10.5em]  pl-5 mb-[3.2rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>აღწერა</p>
                <textarea className={`w-[49.875em] h-[7.6875em] border-[#BCBCBC]
                 ${(()=> {
                    if(props.description.length >0){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }
                    
                    if(errors.description?.message){
                       
                            return 'border-[#EF5050] focus:outline-[#EF5050]'

                        }                     
                    
                     } )()}
                border rounded-[4px] pl-4 pt-2 resize-none`}
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                name='description'
                value={props.description}
                {...register("description")}
                onChange={(event) =>props.change(event)}
                
                ></textarea>
                    
                
                {errors.description?.message && props.description.length == 0 && <img src={error} className='absolute top-[5.5rem] -right-1' alt='error validation' />}
            </div>
            <div className='w-[49.875em] mt-2 mb-[3.8em] bg-[#BCBCBC] ml-5 h-[1px]'></div>
            
        <button className='bg-[#62A1EB] w-[18.0625em] h-[3em] 
        ml-5 mb-[6.2rem] rounded-[4px] text-[#FFFFFF] font-[500]'>მეტი გამოცდილების დამატება</button>
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