import React, {useState} from 'react';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

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
      startDate: '',
      endDate: '',
      description: '',
      education: '',
      grade: '',
      educationEndDate: '',
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
          setData={setData} change={change}
           />}
      />

      <Route path="/education" element={<Education 
          setData={setData} change={change}
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
      />

      
      
      
    </div>
  );
}

export default App;
