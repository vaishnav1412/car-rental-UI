import React, { useState } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PasswordChange = () => {
    const navigate = useNavigate()
    const searchParams = new URLSearchParams(document.location.search);
    const queryValues = searchParams.get("token");
    console.log(queryValues);
    const [password ,setPassword] = useState('')
    console.log(password);


    const passwordSubmit = async () => {
        console.log("submitted");
        const response = await axios.post("https://carrental-h251.onrender.com/api/auth/changepassword",{password,queryValues})
        navigate("/login")
    }


  return (
    <div style={{fontFamily:'initial'}}>
        <div className=''
    
    style={{ maxWidth: '600px',
    marginTop:'220px ',
    margin: 'auto',
    itemsalign: 'center',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    justifyContent: 'center'}}>

      <div >
        <h2 >Change your Password Here...</h2>
      <label>
        
       <input style={{ 
        marginTop: '6px',
        // marginLeft:'15px',
        width: '550px',
        height: '35px',
        padding: '5px', 
        borderRadius: '5px', 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', 
        border: '1px solid #ccc', 
        backgroundImage: 'linear-gradient(to right, #f0f0f0, #e0e0e0)',
        color:'black'}}
         type="email" placeholder='Enter Your New Password'  onChange={(e) => setPassword(e.target.value)} />

      </label>
      <br />
      
      <br />
      <Button style={{marginLeft:'210px'}} className='w-full'  variant="outlined"  onClick={passwordSubmit} >Submit</Button>
    </div>
    </div>
    </div>
  )
}

export default PasswordChange
