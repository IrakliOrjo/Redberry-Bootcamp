import React, {useState} from 'react'

const AddExperience = (props) => {

    const [data,setData] = useState(
        {
      firstName: '',
      lastName: '',
      isAvatar: null,
      about: '',
      email: '',
      mobile:'',
      position: '',
      company: '',
      
      description: '',
      education: '',
      grade: '',
   
      educationDescription: '',
  }
    )

    console.log(data.isAvatar)

    const handleImageChange = (e) => {
    const image = e.target.files[0];
    const reader = new FileReader();
  
  
    reader.onloadend = () => {
      setData({...data,isAvatar: reader.result});
    };

    reader.readAsDataURL(image);
  };

  return (
    <div>
<div className='self-start mb-8 pl-5 relative'>
            <p className='inline text-[1.125rem] font-[600] mr-5'>პირადი ფოტოს ატვირთვა</p>
            
            <label  className='inline-flex  w-[7.85em] justify-center items-center
             text-white text-[0.85rem] tracking-wide h-[1.9875em]
              rounded-[4px] bg-[#0E80BF] cursor-pointer'
              >ატვირთვა
              <input id="file"  className=' hidden'
              
              name='imagePreview'
              onChange={(e) => handleImageChange(e)}
              type="file" 
              accept="image/png, image/gif, image/jpeg" 
             
              
             
              /></label>
             <img src={data.isAvatar} />
              
             
              
              
        </div>

     

    </div>
  )
}

export default AddExperience