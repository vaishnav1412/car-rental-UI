import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { toast } from 'react-toastify';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  console.log(email);

  const handleSubmit = async () => {   
    
    const response = await axios.post("https://carrental-h251.onrender.com/api/auth/forgetpass",{email})
    

    if (email === confirmEmail) {
      toast.success('Emails match. Proceed with the reset password logic.');
    } else {
      toast.error('Emails do not match. Please enter matching emails.');
    }
  };

  // const containerStyle = {
  //   maxWidth: '600px',
  //   marginTop:'220px ',
  //   margin: 'auto',
  //   itemsalign: 'center',
  //   padding: '20px',
  //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  //   borderRadius: '8px',
  //   backgroundColor: '#ffffff',
  //   justifyContent: 'center'
  // };

  return (
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
        <h2 style={{fontFamily:'initial'}}>Enter your Email</h2>
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
        color:'black'}} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      
      <br />
      <Button style={{marginLeft:'210px'}} className='w-full' variant="outlined" onClick={handleSubmit}>Submit</Button>
    </div>
    </div>
  );
};

export default Forgotpassword;
