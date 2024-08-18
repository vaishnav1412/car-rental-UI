import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import DefaultLayout from '../components/DefaultLayout';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import '../pages/Sedan.css';
import { useDispatch } from 'react-redux';
import { bookedCarDetails } from '../redux/user/bookingDetails/bookingSlice';

function Sedan() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllCars() {
      try {
        const response = await axios.get("https://carrental-h251.onrender.com/api/admin/cars");
        setCars(response.data.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }

    getAllCars();
  }, []);
  const dispatch = useDispatch()

  const handleCarClick = (id) => {
    dispatch( bookedCarDetails(id))
    console.log(id);
    navigate(`/details/${id}`);
  };

  const filterSedanCars = () => {
    return cars.filter((car) => car.model === ' sedan');
  };

  const sedanCars = filterSedanCars();
  console.log(sedanCars);

  return (
    <div>
      <header className='sticky-top'><DefaultLayout/></header>
      <div className='allcars'>
        {sedanCars.map((car) => (
          <Card key={car._id} style={{ width: '18rem', marginBottom: '20px' }}>
            <Card.Img variant="top" src={car.image} alt={car.title} />
            <Card.Body>
              <Card.Title style={{ color: 'darkblue' }}>{car.title}</Card.Title>
              <Card.Text>{car.description}</Card.Text>
              <Card.Text>
                PRICE: ₹{car.price}{' '}
                <span style={{ color: 'red' }}>ONWARDS</span>
              </Card.Text>
              <Card.Text>Model: {car.model}</Card.Text>
              <button className='sedanbtn'
                variant="primary"
                onClick={() => handleCarClick(car?._id)}
              >
                CLICK
              </button>
            </Card.Body>
          </Card>          
        ))}
      </div>
      <div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Sedan;
