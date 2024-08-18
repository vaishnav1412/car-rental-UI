import React from 'react';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };
 const navigate = useNavigate()
  return (
    <div className='footer'>
      <div className='kerala'>
      <img src="https://www.evmwheels.com/front-theme/images/kerala.png" alt="" />
        <div className='love'>
        <h5 style={{ fontSize: '12px' }}>MADE WITH LOTS OF ❤️ FROM KERALA</h5>
        </div>
      </div>
      <div className='footerhome'>
        <h5 onClick={scrollToTop}>HOME</h5>
        <h5 onClick={()=>navigate('/aboutus')}>ABOUT US</h5>
      </div>
      <div className='footerhome'>
        <h5 onClick={()=>navigate('/contactus')}>CONTACT US</h5>
        <h5 onClick={()=>navigate('/profilepage')}>MY CONTACT</h5>
        {/* <h5>LOGOUT</h5> */}
      </div>
      <div className='footerhome'>
        <h5>WHEELSONROAD</h5>
        <h5>EMAIL:wheelsonroad@gmail.com</h5>
        <h5>78778878787</h5>
      </div>
    </div>
  );
};

export default Footer;
