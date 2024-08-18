import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DefaultLayout from '../components/DefaultLayout';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { bookedCarDetails } from '../redux/user/bookingDetails/bookingSlice';
import { showLoading ,hideLoading } from '../redux/alertSlice';

function Luxury() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch()
console.log(cars,"sd");

  useEffect(() => {
    async function getAllCars() {
      try {
        dispatch(showLoading())
        const response = await axios.get("https://carrental-h251.onrender.com/api/admin/cars");
        setCars(response.data.data);
        dispatch(hideLoading());
      } catch (error) {
        console.error("Error fetching cars:", error);
        dispatch(hideLoading());
      }
    }

    getAllCars();
  }, [dispatch]);

  const filterLuxuryCars = () => {
    return cars.filter((car) => car.model === ' luxury');
  };

  const handleCarClick = (id) => {
    dispatch( bookedCarDetails(id))
    console.log(id);
    navigate(`/details/${id}`);
  };

  const luxuryCars = filterLuxuryCars();

  return (
    <div>
      <header className='sticky-top'><DefaultLayout/></header>
      <div className='allcars'>
        {luxuryCars.map((car) => (
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
              <Button className='sedanbtn'
                onClick={() => handleCarClick(car?._id)}
                variant="primary"
              >
                CLICK
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Luxury;
