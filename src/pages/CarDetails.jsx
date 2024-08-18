import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faGasPump, faMoneyBill, faUsers, faCog, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import DefaultLayout from '../components/DefaultLayout';
import Footer from './Footer';
import Socialmedia from './Socialmedia';
import { useSelector } from 'react-redux';


const carDetailsStyle = {
  maxWidth: '500px',
  margin: 'auto',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: 'white', 
};

const imageStyle = {
  width: '100%',
  maxHeight: '400px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '20px',
};

const textStyle = {
  color: '#333',
  fontFamily: 'Arial, sans-serif',
  fontSize: '1.2rem',
  lineHeight: '1.4',
};

const iconStyle = {
  marginRight: '8px',
};

function CarDetails() {
  const [car, setCar] = useState();
  console.log(car);
  const { id } = useParams();

  const getCarDetails = async () => {
    try {
      const response = await axios.post(`https://carrental-h251.onrender.com/api/auth/details`, { id });
      setCar(response.data.cars);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarDetails();
  }, []);

  const { currentUser } = useSelector((state) => state.user);

  const handleRentButtonClick = () => {
    if (currentUser) {
      navigate(`/finaldetails/${car?._id}`);
    } else {
      navigate('/login'); 
    }
  };

  // const isLoggedIn = () => {
     
  //   return true; 
  // };


  const navigate = useNavigate();

  return (
    <div>
      <header className="sticky-top">
        <DefaultLayout />
      </header>
      <div style={carDetailsStyle}>
        {car && (
          <>
            <h1 style={{ ...textStyle, fontSize: '2rem', marginBottom: '10px', color: 'darkred' }}>{car.title}</h1>
            <h3 style={textStyle}>{car.description}</h3>
            <img src={car.image} alt="" style={imageStyle} />
            <h3 style={{ ...textStyle, fontWeight: 'bold', marginTop: '20px' }}>
              <FontAwesomeIcon icon={faMoneyBill} style={iconStyle} />
              PRICE: <h5>starts from</h5>  ₹{car.price}
            </h3>
            <h4 style={textStyle}>
              <FontAwesomeIcon icon={faUsers} style={iconStyle} />
              SEAT: {car.seat}
            </h4>
            <h4 style={textStyle}>
              <FontAwesomeIcon icon={faGasPump} style={iconStyle} />
              FUEL: {car.fuel}
            </h4>
            <h4 style={textStyle}>
              <FontAwesomeIcon icon={faCog} style={iconStyle} />
              TRANSMISSION: {car.transmission}
            </h4>
            <button
              onClick={() => handleRentButtonClick(car?._id)}
              style={{
                padding: '10px 20px',
                fontSize: '1rem',
                marginTop: '10px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <FontAwesomeIcon icon={faCar} style={{ ...iconStyle, marginRight: '0' }} />
              RENT IT <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
            </button>
          </>
        )}
      </div>
      <div>
        <Footer/>
      </div>
      <div>
        <Socialmedia/>
      </div>
    </div>
  );
}

export default CarDetails;
