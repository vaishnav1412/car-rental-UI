import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const AdminEdit = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [car, setCar] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const carId = location.pathname.split("/").pop();
  async function getData(id) {
    try {
      const formData = { id };

      if (formData) {
        const response = await axios.post(
          "https://carrental-h251.onrender.com/api/admin/editcar",
          formData
        );

        setCar(response.data.data);
      } else {
        toast.error("id is not present");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData(carId);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = { title, description, price ,carId};

      if (formData) {
        const response = await axios.post(
          "https://carrental-h251.onrender.com/api/admin/editcardata",
          formData
        )
        

        if(response.data.success){
        navigate('/Admincars')
          toast.success(response.data.message)
        }else{
          toast.error(response.data.message)
          navigate('/Admincars')
        }
       
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Car Name</label>
          <input
            type="text"
            className="form-control"
            defaultValue={car?.title}
            id="pickupDate"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Car Model</label>
          <input
            type="text"
            className="form-control"
            id="pickupDate"
            name="pickupDate"
            defaultValue={car?.description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Price </label>
          <input
            type="number"
            className="form-control"
            id="pickupDate"
            name="pickupDate"
            defaultValue={car?.price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>

        <button className="newbtn" type="submit">
          {" "}
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AdminEdit;
