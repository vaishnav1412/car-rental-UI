import React, { useState } from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const MyForm = () => {
    const {email} = useParams()
  const [userInput, setUserInput] = useState('');
  const navigate=useNavigate();
  const handleSubmit =async (e) => {
    e.preventDefault();
    // console.log('User input submitted:', userInput);

    try{
      const formData = {userInput,email}
      if(formData){
        const response = await axios.post("https://carrental-h251.onrender.com/api/auth/otpcheck",formData)

          if(response.data.success){
            navigate('/login')
          }else{

          }
      }else{
        console.log(false);
      }
    }catch(e){
 console.log(e);
  }}

  const containerStyle = {
    maxWidth: '400px',
    margin: 'auto',
    itemsalign: 'center',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
  };

  return (
    <div style={{marginTop:'300px'}}>
    <div style={containerStyle}>
    <form onSubmit={handleSubmit}>
      <h2 style={{fontFamily:'-moz-initial'}} htmlFor="userInput">Enter Your Otp:</h2>
      <input
  style={{
    marginTop: '6px',
    width: '350px',
    height: '30px',
    padding: '5px', 
    borderRadius: '5px', 
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', 
    border: '1px solid #ccc', 
    backgroundImage: 'linear-gradient(to right, #f0f0f0, #e0e0e0)',
    color:'black'
  }}
  type="text"
  id="userInput"
  name="userInput"
  placeholder="Type here..."
  value={userInput}
  onChange={(e) => setUserInput(e.target.value)}
/>

      <button style={{marginTop:'15px',marginLeft:'100px', backgroundColor:'#7E30E1',fontFamily:'-moz-initial' ,color:'white',width:'150px', border:'1px',   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
        fontSize:'18px'
    }} type="submit">Submit</button>
    </form>
  </div>
  </div>
  );
};

export default MyForm;
