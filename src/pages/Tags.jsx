import React from 'react'
import { SlBadge } from "react-icons/sl";
import { AiOutlineCar } from "react-icons/ai";
import { MdLocalOffer } from "react-icons/md";
import { MdOutlineCompare } from "react-icons/md";

const Tags = () => {
    const lightOpacity = 0.7;
  return (
    <div style={{display:'flex',justifyContent:'space-around',marginTop:'40px'}}>
      <div style={{display:"flex",alignItems:'center',gap:'1rem'}}>
        <div>
      <SlBadge style={{fontSize:'3rem'}}/>
      </div>
      <div>
        <h4>India's #1</h4> 
        <h5 style={{ opacity: lightOpacity }}>Largest Auto Portal</h5>
        </div>
      </div>
      <div style={{display:"flex",alignItems:'center',gap:'1rem'}}>
      <div>
      <AiOutlineCar style={{fontSize:'3rem'}} />
      </div>
      
      <div>
     
      </div>
      <div>
        <h4>Car Rent</h4>
        <h5 style={{ opacity: lightOpacity }}>Every 10 Minutes</h5>
      </div>
      </div>
      <div style={{display:"flex",alignItems:'center',gap:'1rem'}}>
      <div>
      <MdLocalOffer style={{fontSize:'3rem'}} />
      </div>
      <div>
        <h4>Offers</h4>
        <h5 style={{ opacity: lightOpacity }}>stay updated pay less</h5>
      </div>
      </div>
      <div style={{display:"flex",alignItems:'center',gap:'1rem'}}>
      <div>
      <MdOutlineCompare style={{fontSize:'3rem'}}/>
      </div>
      <div>
        <h4>Compare</h4>
        <h5 style={{ opacity: lightOpacity }}>Decode the right car</h5>
      </div>
      </div>
    </div>
  )
}

export default Tags
