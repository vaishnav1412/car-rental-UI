import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../pages/paymentSection.css";
import Footer from "./Footer";
import Socialmedia from "./Socialmedia";
import { useNavigate } from "react-router-dom";
import { clearBooking } from "../redux/user/bookingDetails/bookingSlice";
import { yellow } from "@mui/material/colors";

const PaymentSection = () => {
  const [car, setCar] = useState({});
  const [coupen,setCoupen] = useState('')
  const [grandTotal,setGrandTotal] = useState('');
  const [coupenStatus,setCoupenStatus] = useState('');
  const [status,setStatus] = useState('');

  const navigate = useNavigate();

  const { currentBooking } = useSelector((state) => state.booking);
  const { currentCarDetails } = useSelector((state) => state.booking);
  const { updatedPrice } = useSelector((state) => state.price);
  const { currentUser } = useSelector((state) => state.user);
  const id = currentCarDetails;
  const dispatch=useDispatch()
  const userId =currentUser.rest._id

  const handleSubmit =async(e)=>{
    e.preventDefault()
    const formData ={
      coupen,
      totalAmount,
      userId
    }
    try {
      const response = await axios.post('https://carrental-h251.onrender.com/api/auth/applycoupen',formData)
      console.log(response);
      if(response.data.success){
         setStatus('coupen applied')
         setGrandTotal(response?.data?.grandTotal)
         setCoupenStatus(response?.data?.coupenstatus)
      }else{
        setStatus('coupen not valid')
      }
    } catch (error) {
      console.log(error);
    }


  }

  const Razorpay = async (e) => {
    e.preventDefault();

    var options = {
      key: "rzp_test_LarllNYjBbsQE5",
      key_secret: "uRYhTQETdBPllUGu5FcKBLyF",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Wheels on Road",
      description: "Just For The Text Purpose",
      handler: function async(response) {
        const { razorpay_payment_id: payment_id } = response;   
        if (response) {
          const updateStatus = axios.post(
            "https://carrental-h251.onrender.com/api/admin/payments",
            {
              payment_id,
              car,
              currentUser,
              currentBooking,
              currentCarDetails,
              updatedPrice,
              grandTotal,
              coupenStatus
            },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
         
          updateStatus
            .then((response) => {
              if (response.data.status === "success") {
                dispatch(clearBooking())
                  navigate("/");
              } else {
                console.error("Update status failed");
              }
            })
            .catch((error) => {
              console.error("Error updating payment status:", error);
            });
        }
      },
      prefill: {
        name: "Arshaquu",
        email: "Muhammedarshaque@gmail.com",
        contact: "9561478543",
      },
      notes: {
        address: "Razorpay Coperative Office",
      },
      theme: {
        color: "#FCE22A",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  const getCarDetails = async () => {
    try {
      const response = await axios.post(
        `https://carrental-h251.onrender.com/api/auth/details`,
        { id }
      );
      setCar(response.data.cars);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarDetails();
  }, [currentBooking]);

  const amountPrice = updatedPrice || 0;
  const gstPrice = 500;
  const totalAmount = amountPrice + gstPrice;

  return (
    <div>
      <header className="sticky-top">
        <DefaultLayout />
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "2px solid black",
            padding: "2rem",
            borderRadius: "2rem",
            marginTop: "2rem",
          }}
        >
          <h4
            style={{
              fontSize: "1.2rem",
              fontWeight: "light",
              marginBottom: "10px",
            }}
          >
            Pickup Location: {currentBooking?.detailsAdd?.pickupLocation}
          </h4>
          <h4
            style={{
              fontSize: "1.2rem",
              fontWeight: "light",
              marginBottom: "10px",
            }}
          >
            Dropoff Location: {currentBooking?.detailsAdd?.dropOffLocation}
          </h4>
          <h4
            style={{
              fontSize: "1.2rem",
              fontWeight: "light",
              marginBottom: "10px",
            }}
          >
            Pickup Date:{" "}
            {new Date(
              currentBooking?.detailsAdd?.dropOffDate
            ).toLocaleDateString()}
          </h4>
          <h4
            style={{
              fontSize: "1.2rem",
              fontWeight: "light",
              marginBottom: "10px",
            }}
          >
            Dropoff Date:{" "}
            {new Date(
              currentBooking?.detailsAdd?.pickupDate
            ).toLocaleDateString()}
          </h4>
          <h4
            style={{
              fontSize: "1.2rem",
              fontWeight: "light",
              marginBottom: "10px",
            }}
          >
            Pickup Time: {currentBooking?.detailsAdd?.pickupTime}
          </h4>
          <h4
            style={{
              fontSize: "1.2rem",
              fontWeight: "light",
              marginBottom: "10px",
            }}
          >
            Dropoff Time: {currentBooking?.detailsAdd?.dropOffTime}
          </h4>

          <div
            style={{
              marginTop: "20px",
              borderTop: "1px solid #ccc",
              paddingTop: "10px",
            }}
          >
            <h4 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Amount Price: ₹{amountPrice}
            </h4>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Insurance Amount: ₹0.00
            </h4>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Delivery Charges: ₹0.00
            </h4>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              GST: ₹{gstPrice}
            </h4>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Diff Location Charge: ₹0.00
            </h4>
            <form>
          <div style={{display:"flex"}}>
              <input type="text" placeholder="Enter Your Coupen Code" style={{ fontSize: "1.2rem", fontWeight: "bold" ,border:null}} onChange={(e)=>{setCoupen(e.target.value)}}/>
                <button type="submit" onClick={handleSubmit}>Verify</button>
                <p style={{color:yellow}}>{status}</p>
              </div>
              
            </form>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Total Amount: ₹{totalAmount}
            </h3>
          </div>
          <button type="button" class="button">
            <button type="button" onClick={Razorpay} class="button-top">
              PAY NOW
            </button>
            <div class="button-bottom"></div>
            <div class="button-base"></div>
          </button>
        </div>

        <div style={{ paddingTop: "3rem" }}>
          <Card sx={{ width: 500 }}>
            <CardMedia
              sx={{ height: 350 }}
              image={car?.image}
              title={car?.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {car?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {car?.description}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Footer />
      </div>
      <div>
        <Socialmedia />
      </div>
    </div>
  );
};

export default PaymentSection;
