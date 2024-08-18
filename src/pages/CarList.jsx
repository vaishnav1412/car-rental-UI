import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import Container from "@mui/material/Container";
import DefaultLayout from "../components/DefaultLayout";
import Footer from "./Footer";
import Socialmedia from "./Socialmedia";
import "../pages/Carlist.css";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function CarList() {
  const [cars, setCars] = useState([]);
  const [recommendedCars, setRecommendedCars] = useState([]);
  const [mostSearchedCars, setMostSearchedCars] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://carrental-h251.onrender.com/api/admin/cars"
        );
        const allCars = response.data.data;

        const shuffledCars = shuffleArray(allCars);

        const recommendedCarsSubset = shuffledCars.slice(0, 8);

        const mostSearchedCarsSubset = shuffledCars.filter(
          (car) => !recommendedCarsSubset.some((rc) => rc._id === car._id)
        );

        setCars(shuffledCars);
        setRecommendedCars(recommendedCarsSubset);
        setMostSearchedCars(mostSearchedCarsSubset);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <div>
      <div>
        <header className="sticky-top">
          <DefaultLayout />
        </header>
        <div className="carlist">
          <Container>
            <h2
              className="mt-4 mb-4"
              style={{
                color: "black",
                fontFamily: "Arial, sans-serif",
                fontSize: "2rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontStyle: "italic",
              }}
            >
              RECOMMENDED CARS
            </h2>
            <Slider {...settings}>
              {recommendedCars.map((car) => (
                <div
                  key={car._id}
                  style={{ margin: "1 10px", alignItems: "center", gap: "5px" }}
                >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={car.image} alt={car.title} />
                    <Card.Body>
                      <Card.Title>{car.title}</Card.Title>
                      <Card.Text>{car.description}</Card.Text>
                      <Card.Text>PRICE: ₹{car.price}</Card.Text>
                      <Card.Text>Model: {car.model}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </Container>
        </div>
        <div></div>
        <div className="searched">
          <Container>
            <h2
              className="mt-4 mb-4"
              style={{
                color: "black",
                fontFamily: "Arial, sans-serif",
                fontSize: "2rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontStyle: "italic",
              }}
            >
              MOST SEARCHED CARS
            </h2>
            <Slider {...settings}>
              {mostSearchedCars.map((car) => (
                <div
                  key={car._id}
                  style={{ margin: "1 10px", alignItems: "center", gap: "5px" }}
                >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={car.image} alt={car.title} />
                    <Card.Body>
                      <Card.Title>{car.title}</Card.Title>
                      <Card.Text>{car.description}</Card.Text>
                      <Card.Text>PRICE: ₹{car.price}</Card.Text>
                      <Card.Text>Model: {car.model}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </Container>
        </div>
      </div>
      <Footer />
      <Socialmedia />
    </div>
  );
}

export default CarList;
