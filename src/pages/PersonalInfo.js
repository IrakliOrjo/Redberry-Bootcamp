import React from 'react'

import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


import Vector from '../images/Vector.svg'
import success from '../images/success.png'
import error from '../images/error.png'


const PersonalInfo = (props) => {
    
 
    const phoneRegex = /^\+\995\s?5\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/
    const schema = yup.object().shape({
    firstName: yup.string().required('required!!').matches(/[ა-ჰ]{2}/),
    lastName: yup.string().required('required!!').matches(/[ა-ჰ]{2}/),
    isAvatar: yup.mixed().test("photo is required", value => value.length > 0,),
    email: yup.string().email('required!!').test("msut end with redberry", value => value.endsWith('redberry.ge')),
    mobile: yup.string().required('Number required').matches(/^\+\995\s?5\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/)
    
    
});
    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    console.log(errors.isAvatar?.message)
    console.log(errors.firstName?.message)
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
         '><img src={Vector} alt='vector' /></div>
        <div className=' w-[49.875em] '>
            <h1 className='inline-block align-top float-left text-[1.8125em] font-[700] '>პირადი ინფო</h1>
            <p className='inline-block text-black mt-3 align-top float-right font-[500] text-xl'>1/3</p>
        </div>
        <div className='w-[49.875em] mt-2 mb-[4.25em] bg-black h-[1px]'></div>
        {/*Inputs */}
            <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex gap-[8px] mb-8'>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col gap-1 relative'>
                <label><p className='text-[1.1rem] font-[600]   tracking-wide'>სახელი</p></label>
                <input className={`w-[371px] h-[48px] border  focus:outline-[#858181]  
                border-[#BCBCBC]  rounded-[4px] pl-4
                ${(()=> {
                    if(props.firstName.length > 0){
                        if(props.firstName?.match(/^[ა-ჰ]{2,}$/)){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }else{
                            return 'border-[#EF5050] focus:outline-[#EF5050]'
                        }
                    }
                    if(errors.firstName?.message){
                        return 'border-[#EF5050] focus:outline-[#EF5050]'
                    }
                })()}
                `}
                placeholder='ანზორ'
                {...register("firstName")}
               
                type="text"
                name="firstName"
                onChange={(event) =>props.change(event)}
                value={props.firstName}
                 />
                 
                 {props.firstName.length > 0 && props.firstName?.match(/^[ა-ჰ]{2,}$/) && <img src={success} className='absolute top-11 right-2' alt='success validation' />}
                 {props.firstName.length > 0 && !props.firstName?.match(/^[ა-ჰ]{2,}$/) && <img src={error} className='absolute top-11 -right-8' alt='error validation' />}
                 {props.firstName.length <= 0 && errors.firstName?.message && <img src={error} className='absolute top-11 -right-8' alt='error validation' />}
                 
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 ასო, ქართული ასოები</p>
                
                
                </div>
            </div>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col gap-1 relative'>
                <label><p className='text-[1.1rem] font-[600]   tracking-wide'>გვარი</p></label>
                <input className={`w-[371px] h-[48px] border focus:outline-[#858181]
                border-[#BCBCBC]  rounded-[4px] pl-4
                    ${(()=> {
                    if(props.lastName.length > 0){
                        if(props.lastName?.match(/^[ა-ჰ]{2,}$/)){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }else{
                            return 'border-[#EF5050] focus:outline-[#EF5050]'
                        }
                    }
                    if(errors.lastName?.message){
                        return 'border-[#EF5050] focus:outline-[#EF5050]'
                    }
                })()}
                `}
                placeholder='მუმლაძე'
                type="text"
                name="lastName"
                {...register("lastName")}
                onChange={(event) =>props.change(event)}
                value={props.lastName}
                 />
                 {props.lastName.length > 0 && props.lastName?.match(/^[ა-ჰ]{2,}$/) && <img src={success} className='absolute top-11 right-2' alt='success validation' />}
                 {props.lastName.length > 0 && !props.lastName?.match(/^[ა-ჰ]{2,}$/) && <img src={error} className='absolute top-11 -right-8' alt='error validation' />} 
                 {props.lastName.length <= 0 && errors.lastName?.message && <img src={error} className='absolute top-11 -right-8' alt='error validation' />}
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 ასო, ქართული ასოები</p>
                </div>
            </div>
        </div>
        <div className='self-start mb-8 pl-5 relative'>
            <p className='inline text-[1.125rem] font-[600] mr-5'>პირადი ფოტოს ატვირთვა</p>
            
            <label  className='inline-flex  w-[7.85em] justify-center items-center
             text-white text-[0.85rem] tracking-wide h-[1.9875em]
              rounded-[4px] bg-[#0E80BF] cursor-pointer'
              >ატვირთვა
              <input  className=' hidden'
              name='isAvatar' 
              {...register("isAvatar")}
              type="file" accept="image/png, image/gif, image/jpeg" 
              /></label>
              {errors.isAvatar?.message && <img src={error} className='absolute top-[0.4rem] right-[27.5rem]' alt='success validation' />}
             
              
              
        </div>
        <div>
            <div className='flex flex-col justify-around  w-[52.875em] h-[9.25em] pl-5 mb-[1.2rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>ჩემ შესახებ (არასავალდებულო)</p>
                <textarea className='w-[49.875em] h-[6.4375em] border-[#BCBCBC] border rounded-[4px] pl-4 pt-2 resize-none focus:outline-[#858181]' 
                placeholder="ზოგადი ინფო შენ შესახებ"
                name='about'
                value={props.about}
                {...register("about")}
                onChange={(event) =>props.change(event)}
                ></textarea>
            </div>
            <div className='flex relative flex-col justify-around   w-[52.875em] h-[7.625em] pl-5 mb-[1rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>ელ.ფოსტა</p>
                <input className={`w-[49.875em] h-[3em] border-[#BCBCBC]
                ${(()=> {
                    if(props.email.length > 0){
                        if(props.email?.endsWith('@redberry.ge') && (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(props.email)){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }else{
                            return 'border-[#EF5050] focus:outline-[#EF5050]'
                        }
                    }
                    if(errors.email?.message){
                        return 'border-[#EF5050] focus:outline-[#EF5050]'
                    }
                })()}
                border rounded-[4px] pl-4 focus:outline-[#858181]`} 
                placeholder="anzor666@redberry.ge" 
                {...register("email")}
                type='email'
                onChange={(event) =>props.change(event)}
                name="email"
                
                value={props.email}
                ></input>
                {props.email?.endsWith('@redberry.ge') && (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(props.email) && <img src={success} className='absolute top-[3.4rem] right-10' alt='success validation' />}
                {!props.email?.endsWith('@redberry.ge') && props.email.length > 0 && <img src={error} className='absolute top-[3.4rem] -right-2' alt='error validation' />}
                {props.email.length == 0 && errors.email?.message && <img src={error} className='absolute top-[3.4rem] -right-2' alt='error validation' />}
                {!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(props.email) && props.email.length > 0 && <img src={error} className='absolute top-[3.4rem] -right-2' alt='success validation' />}
                <p className='text-[14px] text-[#686262]'>უნდა მთავრდებოდეს @redberry.ge-ით</p>
                 
            </div>
            <div className='flex flex-col relative justify-around  w-[52.875em] h-[7.625em] pl-5 '>
                <p className='text-[1rem] font-[600] tracking-wide'>მობილურის ნომერი</p>
                <input className={`w-[49.875em] h-[3em] border-[#BCBCBC] 
                ${(()=> {
                    if(props.mobile.length > 0){
                        if(props.mobile?.match(/^\+\995\s?5\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/)){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }else{
                            return 'border-[#EF5050] focus:outline-[#EF5050]'
                        }
                    }
                    if(errors.mobile?.message){
                        return 'border-[#EF5050] focus:outline-[#EF5050]'
                    }
                })()}
                border rounded-[4px] pl-4 focus:outline-[#858181]`} 
                placeholder="+995 551 12 34 56" 
                {...register("mobile")}
                type='tel'
                onChange={(event) =>props.change(event)}
                name='mobile'
               
                value={props.mobile}
                ></input>
                {props.mobile?.length > 0 && props.mobile?.match(/^\+\995\s?5\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/) && <img src={success} className='absolute top-[3.4rem] right-10' alt='success validation' />}
                {props.mobile?.length > 0 && !props.mobile?.match(/^\+\995\s?5\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/) && <img src={error} className='absolute top-[3.2rem] -right-1' alt='error validation' />}
                 {props.mobile?.length == 0 && errors.mobile?.message && <img src={error} className='absolute top-[3.2rem] -right-1' alt='error validation' />}
                <p className='text-[14px] text-[#686262]'>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
            </div>
        </div>
        <button className='absolute w-[151px] h-[48px] bg-[#6B40E3] 
        font-helvetica text-white text-[18px] 
        tracking-widest font-[500] rounded-[4px] right-[972px] bottom-[25px]'>შემდეგი</button>
        </form>
    </div>
  )
}

export default PersonalInfo