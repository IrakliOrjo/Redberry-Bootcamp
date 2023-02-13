import React, {useEffect, useState} from 'react';

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Vector from '../images/Vector.svg'
import success from '../images/success.png'
import error from '../images/error.png'



const Education = (props) => {

    const navigate = useNavigate()

    const schema = yup.object().shape({
        institute: yup.string().required('required!!').min(2),
        degree_id: yup.string().required('required!!'),
        due_date: yup.mixed().test("Date is required", value => value.length > 0,),
        description: yup.string().required('Description required')
        
    });

    let [options, setOptions] = useState([]);

    const { register, handleSubmit, setError, formState: { errors } } = useForm({
          resolver: yupResolver(schema)
     })

     function change(event) {
    props.setData(prevFormData => {
     const updatedEducations = prevFormData.educations.map(educations => {
      if (Object.keys(educations).includes(event.target.name)) {
        return {
          ...educations,
          [event.target.name]: event.target.value
        };
      }
      return educations;
    });

    return {
      ...prevFormData,
      educations: updatedEducations
    };
  })};



     const onSubmit = (data) => {
        console.log(data)
        props.setFinal(true)
        
        setTimeout(navigate('/finalresume'),1000);
        
    }
  
    function move() {
    
    setTimeout(() => localStorage.clear(), 500) 
     setTimeout(() => navigate('/'), 1000);
 
  }
    
  

    let image = props.data.image
    const dataSend = props.data
    const name = props.data.name
    const surname = props.data.surname
    const email = props.data.email
    const phone_number = props.data.phone_number
    const position = props.data.experiences[0].position
    const employer = props.data.experiences[0].employer
    const start_date = props.data.experiences[0].start_date
    const due_date = props.data.experiences[0].due_date
    const description = props.data.experiences[0].description
    const institute = props.data.educations[0].institute
    const degree_id = props.data.educations[0].degree_id
    const due_date_two = props.data.educations[0].due_date
    const edu_description = props.data.educations[0].description
    const about = props.data.about_me
    
    const finalData = props.data

    const url = 'https://resume.redberryinternship.ge/api/cvs'
    console.log('image',image)
    console.log('asdas',props.data)

    const formData = new FormData();
 
    

    const postData = async (e) => {
        e.preventDefault();
          const typedArray = new Uint8Array(image)
        const base64Image = btoa(
        typedArray.reduce((data, byte) => data + String.fromCharCode(byte), "")
  );
           console.log('8888888',typedArray)



formData.append('name',name)
        formData.append('surname',surname)
        formData.append('email',email)
        formData.append('phone_number',phone_number)
        props.data.experiences.forEach((experience,index) => {

            formData.append(`experiences[${index}][position]`,experience.position)
            formData.append(`experiences[${index}][employer]`,experience.employer)
            formData.append(`experiences[${index}][start_date]`,experience.start_date)
            formData.append(`experiences[${index}][due_date]`,experience.due_date)
            formData.append(`experiences[${index}][description]`,experience.description)
        })
        props.data.educations.forEach((education,index) => {

            formData.append(`experiences[${index}][institute]`,education.institute)
            formData.append(`experiences[${index}][degree_id]`,education.degree_id)
            formData.append(`experiences[${index}][due_date]`,education.due_date_two)
            formData.append(`experiences[${index}][description]`,education.edu_description)
        
        })

        formData.append('image', `data:image/jpeg;base64,${base64Image}`)
        formData.append('about_me',about)
       console.log('data',formData)

        


        try {
            const resp = await axios.post(url,finalData,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },})
            console.log(finalData)
    console.log(resp)
        }catch(error){
            console.log(error)
        }

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
                    if(props.data.educations[0].institute.length > 0){
                        if(props.data.educations[0].institute.length == 1){
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
                name='institute'
                 {...register("institute",)}
                value={props.data.educations[0].institute}
                onChange={(event) =>change(event)}
                ></input>
                {props.data.educations[0].institute.length >= 2  && <img src={success} className='absolute top-[3.4rem] right-11' alt='success validation' />}       
                {props.data.educations[0].institute.length > 0 && props.data.educations[0].institute.length == 1 && <img src={error} className='absolute top-[3.2rem] -right-1' alt='error validation' />}
                {errors.education?.message && props.data.educations[0].institute.length == 0 && <img src={error} className='absolute top-[3.2rem] -right-1' alt='error validation' />}
                <p className='text-[14px] text-[#686262]'>მინიმუმ 2 სიმბოლო</p>
            </div>
            
        <div className='flex gap-[8px] mb-5'>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col gap-1'>
                <p className='text-[1rem] font-[600]  tracking-wide'>ხარისხი</p>
                <select className={`w-[371px] h-[48px] border tracking-wide
                border-[#BCBCBC] 
                ${(()=> {
                    if(props.data.educations[0].degree_id.length > 0){
                        return 'border-[#98E37E] focus:outline-[#98E37E]'
                    }
                     if(errors.grade?.message){
                            return 'border-[#EF5050] focus:outline-[#EF5050]'
                        }

                    } )()}
                rounded-[4px] pl-4 `}
                name='degree'
               
                 {...register("degree_id")}
                value={props.data.educations[0].degree_id}
                onChange={(event) =>change(event)}
                >
                    { useEffect(() => {
                        async function fetchMyAPI() {
                          try {
                            let response = await axios.get(`https://resume.redberryinternship.ge/api/degrees`);
                            let data = response.data;
                            console.log(data);
                            setOptions(data)
                          } catch (error) {
                            console.error(error.message);
                          }
                        }
                    
                          fetchMyAPI();
                        }, [])}
                         <option value='' disabled defaultValue>აირჩიე ხარისხი</option>
                        {options.map(item => {
                           
                            return (<option key={item.id} value={item.id}>{item.title}</option>)
                        })}
                    
                </select>
                
                </div>
            </div>
            <div className='w-[419px] h-[122px]  flex flex-col justify-center  items-center'>
                <div className='flex flex-col gap-1'>
                <p className='text-[1rem] font-[600]   tracking-wide'>დამთავრების რიცხვი</p>
                <input className={`w-[371px] h-[48px] border 
                border-[#BCBCBC]  rounded-[4px] pl-4
                ${(()=> {
                    if(props.data.educations[0].due_date.match(/^\d{4}/)){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }
                    
                    if(errors.educationEndDate?.message){
                       
                            return 'border-[#EF5050] focus:outline-[#EF5050]'

                        }                     
                    
                     } )()}
                `}
                placeholder='მუმლაძე'
                type="date" 
                name='due_date'
                 {...register("due_date")}
                value={props.data.educations[0].due_date}
                onChange={(event) => change(event)}
                />
                
                </div>
            </div>
        </div>
        <div>
            <div className='flex flex-col justify-around  w-[52.875em] h-[14em]  pl-5 mb-[3.2rem]'>
                <p className='text-[1rem] font-[600] tracking-wide'>აღწერა</p>
                <textarea className={`w-[49.875em] h-[11.1875em] border-[#BCBCBC]
                ${(()=> {
                    if(props.data.educations[0].description.length >0){
                            return 'border-[#98E37E] focus:outline-[#98E37E]'
                        }
                    
                    if(errors.description?.message){
                       
                            return 'border-[#EF5050] focus:outline-[#EF5050]'

                        }                     
                    
                     } )()}
                border rounded-[4px] pl-4 pt-2 resize-none`} 
                placeholder="განათლების აღწერა"
                name='description'
                 {...register("description")}
                value={props.data.educations[0].description}
                onChange={(event) => change(event)}
                ></textarea>
            </div>
            <div className='w-[49.875em] mt-2 mb-[3.8em] bg-[#BCBCBC] ml-5 h-[1px]'></div>
            
        <button className='bg-[#62A1EB] w-[18.0625em] h-[3em] 
        ml-5 mb-[6.2rem] rounded-[4px] text-[#FFFFFF] font-[500]'>სხვა სასწავლებლის დამატება</button>

        <div className='flex flex-row-reverse justify-between ml-5 pr-5 mb-[4.0625em]'>
            <button className=' w-[151px] h-[48px] bg-[#6B40E3] 
                font-helvetica text-white text-[18px] 
                tracking-widest font-[500] rounded-[4px] right-[972px]  bottom-[25px]'
                type='submit'
                
                >დასრულება</button>
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