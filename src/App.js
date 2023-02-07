import React, {useState} from 'react';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import { format } from 'date-fns'

import Logo from './images/LOGO-023.png'
import Logo2 from './images/LOGO-401.png'

import PersonalInfo from './pages/PersonalInfo';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Resume from './components/Resume'
import Home from './pages/Home'



function App() {
  const [data, setData] = useState({
      firstName: '',
      lastName: '',
      isAvatar: false,
      about: '',
      email: '',
      mobile:'',
      position: '',
      company: '',
      startDate: format(new Date(), 'dd/mm/yyyy'),
      endDate: format(new Date(), 'dd/mm/yyyy'),
      description: '',
      education: '',
      grade: '',
      educationEndDate: format(new Date(), 'dd/mm/yyyy'),
      educationDescription: '',
  })
  const [start, setStart] = useState(true)

  function change(event) {
    setData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
        
        
    }

    function startNew () {
      setStart(true)
    }



  return (
    
    <div className="flex">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<PersonalInfo 
          setData={setData} change={change}
          firstName={data.firstName}  lastName={data.lastName}
          about={data.about} email={data.email} mobile={data.mobile} />}
      />
      
        <Route path="/experience" element={<Experience 
          setData={setData} change={change} position={data.position} company={data.company}  
          startDate={data.startDate} endDate={data.endDate} description={data.description}
           />}
      />

      <Route path="/education" element={<Education 
          setData={setData} change={change} education={data.education} 
          grade={data.grade} educationEndDate={data.educationEndDate} educationDescription={data.educationDescription}
           />}
      />
      <Route path="/resume" element={<Resume 
          setData={setData} change={change} 
           />}
      />

      </Routes>
      </BrowserRouter>
     <Resume 
      firstName={data.firstName} lastName={data.lastName} 
      about={data.about} email={data.email} mobile={data.mobile}
      description={data.description} position={data.position} 
      company={data.company} startDate={data.startDate} endDate={data.endDate}
      education={data.education} grade={data.grade} educationEndDate={data.educationEndDate}
      educationDescription={data.educationDescription}
      />

      
      
      
    </div>
  );
}

export default App;
