import React, {useEffect, useState} from 'react';

import Axios from 'axios'

import {BrowserRouter, Routes, Route, Link,  Router} from 'react-router-dom'

import { useMachine } from "@xstate/react";
import { Machine, assign } from "xstate";
import { useDebounce } from 'use-debounce';

import { format } from 'date-fns'

import Logo from './images/LOGO-023.png'
import Logo2 from './images/LOGO-401.png' 

import PersonalInfo from './pages/PersonalInfo';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Resume from './components/Resume'
import Home from './pages/Home'
import Sum from './components/Sum'
import AddExperience from './components/AddExperience';
import FinalResume from './pages/FinalResume';



function App() {
  const [data, setData] = useState({
  name: "",
  surname: "",
  email: "",
  phone_number: "",
  experiences: [
    {
      position: "",
      employer: "",
      start_date: "",
      due_date: "",
      description: ""
    }
  ],
  educations: [
    {
      institute: "",
      degree_id: "",
      due_date: "",
      description: ""
    }
  ],
  image: "",
  about_me: ""
}
)

  const [imagePreview, setImagePreview] = useState(null);
  const [final, setFinal] = useState(false)



useEffect(() => {
      const data = window.localStorage.getItem('CV_DATA')
      setData(JSON.parse(data))
    },[])

    useEffect(() => {
      window.localStorage.setItem('CV_DATA',JSON.stringify(data))
    },[data])

    useEffect(() => {
      const data = window.localStorage.getItem('CV_FINAL')
      setFinal(JSON.parse(data))
    },[])

    useEffect(() => {
      window.localStorage.setItem('CV_FINAL',JSON.stringify(final))
    },[final])

    

   



  return (
 
    <div className="flex">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<PersonalInfo 
          setData={setData} data={data}  imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          />}
      />
      
        <Route path="/experience" element={<Experience 
          setData={setData}  data={data}
           />}
      />


      <Route path="/education" element={<Education 
          setData={setData}  data={data} setFinal={setFinal} final={final}
           />}
      />

      <Route path="/addmore" element={<AddExperience 
          setData={setData}  education={data.education} 
          grade={data.grade} educationEndDate={data.educationEndDate} educationDescription={data.educationDescription}
           />}
      />

      <Route path="/finalresume" element={<FinalResume 
          setData={setData} data={data} setFinal={setFinal} final={final}
           />}
      />

      <Route path="/resume" element={<Resume 
          setData={setData} data={data} setFinal={setFinal} final={final}
           />}
      />

      </Routes>
      </BrowserRouter>
    
    
     {!final && <Resume 
      data={data} imagePreview={imagePreview}
      />}

      
      
      
    </div>

  );
}

export default App;
