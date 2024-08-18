import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const Recomended = () => {
  const [recomendedCars, setRecomendedCars] = useState([]);

  useEffect(() => {
    async function getRecomendedCars() {
      try {
        const response = await axios.get("https://carrental-h251.onrender.com/api/admin/cars");
        const allCars = response.data.data;

        // Shuffle all cars
        const shuffledCars = shuffleArray(allCars);

        // Select the first 8 cars as the recomended cars
        const recomendedCarsSubset = shuffledCars.slice(0, 8);

        setRecomendedCars(recomendedCarsSubset);
      } catch (error) {
        console.error("Error fetching recomended cars:", error);
      }
    }

    getRecomendedCars();
  }, []);

 
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div > 
      <h2 className="mt-4 mb-4">Recomended Cars</h2>
      {recomendedCars.map((car) => (
        <Card key={car._id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={car.image} alt={car.title} />
          <Card.Body>
            <Card.Title>{car.title}</Card.Title>
            <Card.Text>{car.description}</Card.Text>
            <Card.Text>PRICE: ₹{car.price}</Card.Text>
            <Card.Text>Model: {car.model}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Recomended;
