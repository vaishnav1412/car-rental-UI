import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import DefaultLayout from "../components/DefaultLayout";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { bookedCarDetails } from "../redux/user/bookingDetails/bookingSlice";
import { showLoading, hideLoading } from "../redux/alertSlice";
import Socialmedia from "./Socialmedia";

function Electric({ showHeaderFooter = true }) {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function getAllCars() {
      try {
        dispatch(showLoading());
        const response = await axios.get(
          "https://carrental-h251.onrender.com/api/admin/cars"
        );
        setCars(response.data.data);
        dispatch(hideLoading());
      } catch (error) {
        console.error("Error fetching cars:", error);
        dispatch(hideLoading());
      }
    }

    getAllCars();
  }, [dispatch]);

  const filterElectricCars = () => {
    return cars.filter((car) => car.model === " electric");
  };

  const handleCarClick = (id) => {
    dispatch(bookedCarDetails(id));
    console.log(id);
    navigate(`/details/${id}`);
  };

  const electricCars = filterElectricCars();

  return (
    <div>
       
      {showHeaderFooter && (
        <header className="sticky-top">
          <DefaultLayout />
        </header>
      )}{" "}
      <h4 style={{textAlign:'center',paddingTop:'2rem',color:'green'}}>EV CARS</h4>
      <div className="allcars">
       
        {electricCars.map((car) => (
          <Card key={car._id} style={{ width: "18rem", marginBottom: "20px" }}>
            <Card.Img variant="top" src={car.image} alt={car.title} />
            <Card.Body>
              <Card.Title style={{ color: "darkgreen" }}>
                {car.title}
              </Card.Title>
              <Card.Text>{car.description}</Card.Text>
              <Card.Text>
                PRICE: ₹{car.price}{" "}
                <span style={{ color: "red" }}>ONWARDS</span>
              </Card.Text>
              <Card.Text>Model: {car.model}</Card.Text>
              { showHeaderFooter && ( <button
                className="sedanbtn"
                variant="primary"
                onClick={() => handleCarClick(car?._id)}
              >
                CLICK
              </button>)}
             
            </Card.Body>
          </Card>
        ))}
      </div>
      {showHeaderFooter && (
        <>
          <div><Footer/></div>
          <div><Socialmedia /></div>
        </>
      )}
    </div>
  );
}

export default Electric;
