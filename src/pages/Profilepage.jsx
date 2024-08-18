import { Avatar } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"; 
import { TbCameraPlus } from "react-icons/tb";
import { toast } from "react-toastify";
import "../pages/Profilepage.css";
import DefaultLayout from "../components/DefaultLayout";

function ProfilePage() {
  const fileRef = useRef(null);
  const [upload, setUpload] = useState(false);
  const dispatch = useDispatch();
  const { currentBooking } = useSelector((state) => state.booking);
  const { currentUser } = useSelector((state) => state.user);
  const { updatedPrice } = useSelector((state) => state.price);
  const { currentCarDetails } = useSelector((state) => state.booking);
  const id = currentCarDetails;


  const [car, setCar] = useState({});

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

  return (
    <div>
      <header className="sticky-top">
        <DefaultLayout />
      </header>
      <div className="personal-div">
        <h1 className="personal-h1">
         
        </h1>
        <input
          type="file"
          onChange={(e) => uploadavatar(e)}
          ref={fileRef}
          hidden
          accept="image/*"
        />
      
        <TbCameraPlus
          style={{
            fontSize: "1.5rem",
            position: "relative",
            left: "4rem",
            bottom: "2rem",
            color: "gray",
            cursor: "pointer",
          }}
          onClick={() => {
            fileRef.current.click();
            setUpload(true);
          }}
        />
        {upload && (
          <button
            className="upload-btn"
            onClick={() => {
              handleFileUpload();
              setUpload(false);
            }}
          >
            Upload
          </button>
        )}
      </div>
      <div className="profilehead">
      
      <div className="profiemain">
      <div className="profilename">
     
        <div className="profileinside">
        <Avatar sx={{ width: 80, height: 80 }}/>
        <h5>{currentUser?.rest?.name}</h5>
        <h5>{currentUser?.rest?.email }</h5>
        </div>
       <h4 style={{textAlign:'center'}}>MY ORDERS</h4>
       <h5 style={{paddingLeft:'15px',paddingTop:'15px'}}>TOTAL AMOUNT: {updatedPrice}/-</h5>
       <h5 style={{paddingLeft:'15px',paddingTop:'15px'}}>CAR DETAILS:  {car?.title} {car?.description}</h5>
       <div class="scene">
  <div className="cube">
    <span class="side top">THANK YOU</span>
    <span class="side front">LOGOUT</span>
  </div>
</div>
      </div>
      
      </div>
      
      </div>
    </div>
  );
}

export default ProfilePage;
