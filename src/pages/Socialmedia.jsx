import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'; 

const Socialmedia = () => {
  return (
    <div className='social'>
      <div>
        <h4 style={{ fontSize: '12px' }}>COPYRIGHT 2023 ALL RIGHTS RESERVED</h4>
      </div>
      <div>
        <h4 style={{ fontSize: '12px' }}>PRIVACY&POLICY</h4>
      </div>
      <div>
        <h4 style={{ fontSize: '12px' }}>DATA&SEQUIRITY</h4>
      </div>
      <div className='icons'>
  <h5>
    <i  className="fab fa-facebook" style={{ marginRight: '10px',cursor:'pointer' }}></i>
    <i className="fab fa-twitter" style={{ marginRight: '10px',cursor:'pointer' }}></i>
    <i className="fab fa-instagram" style={{ marginRight: '10px',cursor:'pointer' }} ></i>
  </h5>
</div>

    </div>
  );
};

export default Socialmedia;
