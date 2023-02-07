import React from 'react'

import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Vector from '../images/Vector.svg'
import success from '../images/success.png'
import error from '../images/error.png'



const Education = (props) => {

    const schema = yup.object().shape({
        education: yup.string().required('required!!').min(2),
        grade: yup.string().required('required!!'),
        educationEndDate: yup.mixed().test("Date is required", value => value.length > 0,),
        educationDescription: yup.string().required('Description required')
        
    
    
    });

    const { register, handleSubmit, setError, formState: { errors } } = useForm({
          resolver: yupResolver(schema)
     })

     

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
         '><a href='/experience'><img src={Vector} alt='vector' /></a></div>
        <div className=' w-[49.875em] '>
            <h1 className='inline-block align-top float-left text-[1.8125em] font-[700] '>განათლება</h1>
            <p className='inline-block text-black mt-3 align-top float-right font-[500] text-xl'>3/3</p>
        </div>
        <div className='w-[49.875em] mt-2 mb-[4.25em] bg-black h-[1px]'></div>
        {/*Inputs */}
            <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col relative justify-around  w-[52.875em] h-[7.625em] pl-5 mb-[1rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>სასწავლებელი</p>
                <input className={`w-[49.875em] h-[3em] border-[#BCBCBC] 
                ${(()=> {
                    if(props.education.length > 0){
                        if(props.education.length == 1){
                            return 'border-[#EF5050] focus:outline-[#EF5050]'

                        }else{
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }
                   
                     }
                     if(errors.education?.message){
                            return 'border-[#EF5050] focus:outline-[#EF5050]'
                        }

                    } )()}
                border rounded-[4px] pl-4`} 
                placeholder="სასწავლებელი" 
                type='text'
                name='education'
                 {...register("education")}
                value={props.education}
                onChange={(event) =>props.change(event)}
                ></input>
                {props.education.length >= 2  && <img src={success} className='absolute top-[3.4rem] right-11' alt='success validation' />}       
                {props.education.length > 0 && props.education.length == 1 && <img src={error} className='absolute top-[3.2rem] -right-1' alt='error validation' />}
                {errors.education?.message && props.education.length == 0 && <img src={error} className='absolute top-[3.2rem] -right-1' alt='error validation' />}
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 სიმბოლო</p>
            </div>
            
        <div className='flex gap-[8px] mb-5'>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col gap-1'>
                <p className='text-[1rem] font-[600]  tracking-wide'>ხარისხი</p>
                <select className={`w-[371px] h-[48px] border tracking-wide
                border-[#BCBCBC] 
                ${(()=> {
                    if(props.grade.length > 0){
                        return 'border-[#98E37E] focus:outline-[#98E37E]'
                    }
                     if(errors.grade?.message){
                            return 'border-[#EF5050] focus:outline-[#EF5050]'
                        }

                    } )()}
                rounded-[4px] pl-4 `}
                name='grade'
               
                 {...register("grade")}
                value={props.grade}
                onChange={(event) =>props.change(event)}
                >
                    <option value='' disabled defaultValue>აირჩიე ხარისხი</option>
                    <option value="საშუალო სკოლის დიპლომი">საშუალო სკოლის დიპლომი</option>
                    <option value="ზოგადსაგანმანათებლო დიპლომი">ზოგადსაგანმანათებლო დიპლომი</option>
                    <option value="ბაკალავრი">ბაკალავრი</option>
                    <option value="მაგისტრი">მაგისტრი</option>
                    <option value="დოქტორი">დოქტორი</option>
                    <option value="ასოცირებული ხარისხი">ასოცირებული ხარისხი</option>
                    <option value="სტუდენტი">სტუდენტი</option>
                    <option value="კოლეჯი(ხარისხის გარეშე)">კოლეჯი(ხარისხის გარეშე)</option>
                    <option value="სხვა">სხვა</option>
                </select>
                
                </div>
            </div>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col gap-1'>
                <p className='text-[1rem] font-[600]   tracking-wide'>დამთავრების რიცხვი</p>
                <input className={`w-[371px] h-[48px] border 
                border-[#BCBCBC]  rounded-[4px] pl-4
                ${(()=> {
                    if(props.educationEndDate.match(/^\d{4}/)){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }
                    
                    if(errors.educationEndDate?.message){
                       
                            return 'border-[#EF5050] focus:outline-[#EF5050]'

                        }                     
                    
                     } )()}
                `}
                placeholder='მუმლაძე'
                type="date" 
                name='educationEndDate'
                 {...register("educationEndDate")}
                value={props.educationEndDate}
                onChange={(event) =>props.change(event)}
                />
                
                </div>
            </div>
        </div>
        <div>
            <div className='flex flex-col justify-around  w-[52.875em] h-[14em]  pl-5 mb-[3.2rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>აღწერა</p>
                <textarea className={`w-[49.875em] h-[11.1875em] border-[#BCBCBC]
                ${(()=> {
                    if(props.educationDescription.length >0){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }
                    
                    if(errors.educationDescription?.message){
                       
                            return 'border-[#EF5050] focus:outline-[#EF5050]'

                        }                     
                    
                     } )()}
                border rounded-[4px] pl-4 pt-2 resize-none`} 
                placeholder="განათლების აღწერა"
                name='educationDescription'
                 {...register("educationDescription")}
                value={props.educationDescription}
                onChange={(event) =>props.change(event)}
                ></textarea>
            </div>
            <div className='w-[49.875em] mt-2 mb-[3.8em] bg-[#BCBCBC] ml-5 h-[1px]'></div>
            
        <button className='bg-[#62A1EB] w-[18.0625em] h-[3em] 
        ml-5 mb-[6.2rem] rounded-[4px] text-[#FFFFFF] font-[500]'>სხვა სასწავლებლის დამატება</button>

        <div className='flex flex-row-reverse justify-between ml-5 pr-5 mb-[4.0625em]'>
            <a href='/resume'><button className=' w-[151px] h-[48px] bg-[#6B40E3] 
                font-helvetica text-white text-[18px] 
                tracking-widest font-[500] rounded-[4px] right-[972px]  bottom-[25px]'>დასრულება</button></a>
            <a href='/experience'><button className=' w-[113px] h-[48px] bg-[#6B40E3] 
                font-helvetica text-white text-[18px] 
                tracking-widest font-[500] rounded-[4px] left-[130px]  bottom-[25px]'>უკან</button></a>
        </div>

        </div>
        </form>
    </div>
  )
}

export default Education