import React,{useState} from 'react'

import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useNavigate, useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";

import Vector from '../images/Vector.svg'
import success from '../images/success.png'
import error from '../images/error.png'


const PersonalInfo = (props) => {


    const navigate = useNavigate()
    
 
    const phoneRegex = /^\+\995\s?5\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/
    const schema = yup.object().shape({
    name: yup.string().required('required!!').matches(/[ა-ჰ]{2}/),
    image: yup.mixed().required('required').test('file', 'File is required', (value) => {
    return value.length > 0;
  }),
    surname: yup.string().required('required!!').matches(/[ა-ჰ]{2}/),
    email: yup.string().email('required!!').test("msut end with redberry", value => value.endsWith('redberry.ge')),
    phone_number: yup.string().required('Number required').matches(/^\+\995\s?5\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/),
    
    
});
    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    

    

   
    const onSubmit = (data) => {
    
        console.log(data)
       
         navigate('/experience');
     
        
    }

     function change(event) {
    props.setData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
        
        
    }

   

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    const reader = new FileReader();
    
    reader.readAsDataURL(image);
 
  
    reader.onload = () => {
    
     props.setData({...props.data,image: reader.result});
 
     
    }

 
  };
  
  function move() {
    
    setTimeout(() => localStorage.clear(), 500) 
     setTimeout(() => navigate('/'), 1000);
 
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
                <input className={`w-[371px] h-[48px] border outline-0
                border-[#BCBCBC]  rounded-[4px] pl-4
                ${(()=> {
                    if(props.data?.name?.length > 0){
                        if(props.data.name.match(/^[ა-ჰ]{2,}$/)){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }else{
                            return 'border-[#EF5050] focus:outline-[#EF5050]'
                        }
                    }
                    if(errors.name?.message){
                        return 'border-[#EF5050] focus:outline-[#EF5050]'
                    }
                })()}
                `}
                placeholder='ანზორ'
                {...register("name")}
               
                type="text"
                name="name"
                onChange={(event) =>change(event)}
                value={props.data?.name}
                 />
                 
                 {props.data?.name?.length > 0 && props.data?.name?.match(/^[ა-ჰ]{2,}$/) && <img src={success} className='absolute top-11 right-2' alt='success validation' />}
                 {props.data?.name?.length > 0 && !props.data?.name?.match(/^[ა-ჰ]{2,}$/) && <img src={error} className='absolute top-11 -right-8' alt='error validation' />}
                 {props.data?.name?.length <= 0 && errors.name?.message && <img src={error} className='absolute top-11 -right-8' alt='error validation' />}
                 
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 ასო, ქართული ასოები</p>
                
             
                
                
                </div>
            </div>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col gap-1 relative'>
                <label><p className='text-[1.1rem] font-[600]   tracking-wide'>გვარი</p></label>
                <input className={`w-[371px] h-[48px] border focus:outline-[#858181]
                border-[#BCBCBC]  rounded-[4px] pl-4
                    ${(()=> {
                    if(props.data?.surname?.length > 0){
                        if(props.data?.surname?.match(/^[ა-ჰ]{2,}$/)){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }else{
                            return 'border-[#EF5050] focus:outline-[#EF5050]'
                        }
                    }
                    if(errors.surname?.message){
                        return 'border-[#EF5050] focus:outline-[#EF5050]'
                    }
                })()}
                `}
                placeholder='მუმლაძე'
                type="text"
                name="surname"
                {...register("surname")}
                onChange={(event) =>change(event)}
                value={props.data?.surname}
                 />
                 {props.data?.surname?.length > 0 && props.data?.surname?.match(/^[ა-ჰ]{2,}$/) && <img src={success} className='absolute top-11 right-2' alt='success validation' />}
                 {props.data?.surname?.length > 0 && !props.data?.surname?.match(/^[ა-ჰ]{2,}$/) && <img src={error} className='absolute top-11 -right-8' alt='error validation' />} 
                 {props.data?.surname?.length <= 0 && errors.surname?.message && <img src={error} className='absolute top-11 -right-8' alt='error validation' />}
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 ასო, ქართული ასოები</p>
                </div>
            </div>
        </div>
        <div className='self-start mb-8 pl-5 relative'>
            <p className='inline text-[1.125rem] font-[600] mr-5'>პირადი ფოტოს ატვირთვა</p>
            
            <label  className='inline-flex  w-[7.85em] justify-center items-center
             text-white text-[0.85rem] tracking-wide h-[1.9875em]
              rounded-[4px] bg-[#0E80BF] cursor-pointer pr-9 pl-9'
              >ატვირთვა
              <input id="file" 
              
              name='image'
              {...register("image")}
              type="file" 
              accept="image/png, image/gif, image/jpeg" 
              onChange={(e) => handleImageChange(e)}
              
             
              /></label>
              {errors.image?.message && <img src={error} className='absolute top-[0.4rem] right-[27.5rem]' alt='success validation' />}
              
             
              
              
        </div>
        <div>
            <div className='flex flex-col justify-around  w-[52.875em] h-[9.25em] pl-5 mb-[1.2rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>ჩემ შესახებ (არასავალდებულო)</p>
                <textarea className='w-[49.875em] h-[6.4375em] border-[#BCBCBC] border rounded-[4px] pl-4 pt-2 resize-none focus:outline-[#858181]' 
                placeholder="ზოგადი ინფო შენ შესახებ"
                name='about'
                value={props.data?.about}
                {...register("about")}
                onChange={(event) =>change(event)}
                ></textarea>
            </div>
            <div className='flex relative flex-col justify-around   w-[52.875em] h-[7.625em] pl-5 mb-[1rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>ელ.ფოსტა</p>
                <input className={`w-[49.875em] h-[3em] border-[#BCBCBC]
                ${(()=> {
                    if(props.data?.email?.length > 0){
                        if(props.data?.email?.endsWith('@redberry.ge') && (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(props.data.email)){
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
                onChange={(event) =>change(event)}
                name="email"
                
                value={props.data?.email}
                ></input>
                {props.data?.email?.endsWith('@redberry.ge') && (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(props.data?.email) && <img src={success} className='absolute top-[3.4rem] right-10' alt='success validation' />}
                {!props.data?.email?.endsWith('@redberry.ge') && props.data?.email?.length > 0 && <img src={error} className='absolute top-[3.4rem] -right-2' alt='error validation' />}
                {props.data?.email?.length == 0 && errors.email?.message && <img src={error} className='absolute top-[3.4rem] -right-2' alt='error validation' />}
                {!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(props.data?.email) && props.data?.email.length > 0 && <img src={error} className='absolute top-[3.4rem] -right-2' alt='success validation' />}
                <p className='text-[14px] text-[#686262]'>უნდა მთავრდებოდეს @redberry.ge-ით</p>
                 
            </div>
            <div className='flex flex-col relative justify-around  w-[52.875em] h-[7.625em] pl-5 '>
                <p className='text-[1rem] font-[600] tracking-wide'>მობილურის ნომერი</p>
                <input className={`w-[49.875em] h-[3em] border-[#BCBCBC] 
                ${(()=> {
                    if(props.data?.phone_number.length > 0){
                        if(props.data?.phone_number?.match(/^\+\995\s?5\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/)){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }else{
                            return 'border-[#EF5050] focus:outline-[#EF5050]'
                        }
                    }
                    if(errors.phone_number?.message){
                        return 'border-[#EF5050] focus:outline-[#EF5050]'
                    }
                })()}
                border rounded-[4px] pl-4 focus:outline-[#858181]`} 
                placeholder="+995 551 12 34 56" 
                {...register("phone_number")}
                type='tel'
                onChange={(event) =>change(event)}
                name='phone_number'
               
                value={props.data?.phone_number}
                ></input>
                {props.data?.phone_number?.length > 0 && props.data?.phone_number?.match(/^\+\995\s?5\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/) && <img src={success} className='absolute top-[3.4rem] right-10' alt='success validation' />}
                {props.data?.phone_number?.length > 0 && !props.data?.phone_number?.match(/^\+\995\s?5\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/) && <img src={error} className='absolute top-[3.2rem] -right-1' alt='error validation' />}
                 {props.data?.phone_number?.length == 0 && errors.phone_number?.message && <img src={error} className='absolute top-[3.2rem] -right-1' alt='error validation' />}
                <p className='text-[14px] text-[#686262]'>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
            </div>
        </div>
        <button className='absolute w-[151px] h-[48px] bg-[#6B40E3] 
        font-helvetica text-white text-[18px] 
        tracking-widest font-[500] rounded-[4px] right-[972px] bottom-[25px]'
        type='submit'
        >შემდეგი</button>
        </form>
    </div>
  )
}

export default PersonalInfo