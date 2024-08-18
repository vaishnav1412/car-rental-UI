import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../pages/Button.css';
import { useDispatch, useSelector } from 'react-redux';
import { bookingFailure, bookingStart, bookingSuccess } from '../redux/user/bookingDetails/bookingSlice';

function CarRentalForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropOffLocation: '',
    pickupDate: '',
    pickupHour: '12',
    pickupMinute: '00',
    pickupPeriod: 'AM',
    dropOffDate: '',
    dropOffHour: '12',
    dropOffMinute: '00',
    dropOffPeriod: 'AM',
  });

  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData({
      ...formData,
      [name]: value,
    });
  
    if (name === 'pickupDate') {
      const minDropOffDate = new Date(value);
      minDropOffDate.setDate(minDropOffDate.getDate() + 1);
  
      setFormData((prevFormData) => ({
        ...prevFormData,
        dropOffDate: '',
      }));
  
      document.getElementById('dropOffDate').min = minDropOffDate.toISOString().split('T')[0];
    }
  };
  
  
  function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const year = tomorrow.getFullYear();
    let month = tomorrow.getMonth() + 1;
    let day = tomorrow.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  }


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(  bookingStart())

    
    const pickupTime = `${formData.pickupHour}:${formData.pickupMinute} ${formData.pickupPeriod}`;
    const dropOffTime = `${formData.dropOffHour}:${formData.dropOffMinute} ${formData.dropOffPeriod}`;

    const updatedFormData = {
      ...formData,
      pickupTime,
      dropOffTime,
      pickupDate: new Date(formData.pickupDate),
      dropOffDate: new Date(formData.dropOffDate)
    };
    

    try {
      const response = await axios.post(
        "https://carrental-h251.onrender.com/api/auth/bookdetails",
        updatedFormData, 
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      // console.log(response);
      dispatch( bookingSuccess(response.data))
      navigate('/Bookingdetails');
    } catch (error) {
      console.log(error);
      dispatch(bookingFailure(error))
    }
  };

  return (
    <div className="container contains mt-5 col-sm-12">
      <form className='formeddata' onSubmit={handleSubmit}>
        <div  className=" form-group">
          <label>Select Pickup Location</label>
          <select
            className="form-control"
            id="pickupLocation"
            name="pickupLocation"
            onChange={handleChange}
          >
            <option value="Kannur">Kannur</option>
            <option value="Kochi">Kochi</option>
            <option value="Trivandrum">Trivandrum</option>
            <option value="Trissur">Trissur</option>
            <option value="Palakkad">Palakkad</option>
            <option value="Wayanad">Wayanad</option>
          </select>
        </div>

        <div className="form-group">
          <label>Select Drop Off Location</label>
          <select
            className="form-control"
            id="dropOffLocation"
            name="dropOffLocation"
            onChange={handleChange}
          >
            <option value="Trissur">Trissur</option>
            <option value="Palakkad">Palakkad</option>
            <option value="Wayanad">Wayanad</option>
            <option value="Kannur">Kannur</option>
            <option value="Kochi">Kochi</option>
            <option value="Trivandrum">Trivandrum</option>
          </select>
        </div>

        <div className="form-group">
          <label>Select Pickup Date</label>
          <input
            type="date"
            className="form-control"
            id="pickupDate"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            min={getTomorrowDate()}
          />
        </div>

        <div className="form-group">
          <label>Select Pickup Time</label>
          <div className="d-flex">
            <input
              type="number"
              className="form-control mr-2"
              id="pickupHour"
              name="pickupHour"
              value={formData.pickupHour}
              onChange={handleChange}
              min="1"
              max="12"
            />
            <span className="mr-2">:</span>
            <input
              type="number"
              className="form-control mr-2"
              id="pickupMinute"
              name="pickupMinute"
              value={formData.pickupMinute}
              onChange={handleChange}
              min="0"
              max="59"
            />
            <select
              className="form-control"
              id="pickupPeriod"
              name="pickupPeriod"
              value={formData.pickupPeriod}
              onChange={handleChange}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="dropOffDate">Select Drop Off Date</label>
          <input
            type="date"
            className="form-control"
            id="dropOffDate"
            name="dropOffDate"
            value={formData.dropOffDate}
            onChange={handleChange}
            min={getTomorrowDate()}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dropOffTime">Select Drop Off Time</label>
          <div className="d-flex">
            <input
              type="number"
              className="form-control mr-2"
              id="dropOffHour"
              name="dropOffHour"
              value={formData.dropOffHour}
              onChange={handleChange}
              min="1"
              max="12"
            />
            <span className="mr-2">:</span>
            <input
              type="number"
              className="form-control mr-2"
              id="dropOffMinute"
              name="dropOffMinute"
              value={formData.dropOffMinute}
              onChange={handleChange}
              min="0"
              max="59"
            />
            <select
              className="form-control"
              id="dropOffPeriod"
              name="dropOffPeriod"
              value={formData.dropOffPeriod}
              onChange={handleChange}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>

        {/* <button type="submit" className="btn btn-primary">
          Submit
        </button> */}
        <button className='newbtn'> SUBMIT
        </button>
      </form>
      <img className='imaging1'
        src="https://www.evmwheels.com/assets/img/evm.png"
        alt="Car Rental Image"
      />
    </div>
  );
}

export default CarRentalForm;
