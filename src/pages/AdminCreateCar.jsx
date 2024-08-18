import axios from "axios";
import React,{ useState } from "react";
import { toast } from "react-toastify";
import TerminalLoader from "../components/Spinner";

const AdminCreateCar = () => {
  const [formData, setFormData] = useState({
    title: " ",
    description: " ",
    price: " ",
    image:null,
    model: " ",
    seat: " ",
    fuel: " ",
    transmission:"",
  });

  const [loading, setLoading] = useState(false);
  //   const [file,setfile]=useState(null)
  //   console.log(file);

  console.log(formData);
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log('hai');
      
      const response = await axios.post(
        "http://localhost:5000/api/admin/cars",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      toast.success("car created successfully");
      setLoading(false);
    } catch (error) {
      console.log(
        "error found in car creating",
        error.response ? error.response.data : error.message
      );
      toast.error("error");
    }
  };

  return (
    <div>
      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <h2>Create a Car</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label>Title:</label>
            <input
              style={{ width: "100%" }}
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label>Description:</label>
            <textarea
              style={{ width: "100%" }}
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label>Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              accept="image/*"
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label>Model:</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
          </div>
            {loading?< TerminalLoader/>:""}

          <div style={{ marginBottom: "16px" }}>
            <label>Seat:</label>
            <input
              type="number"
              name="seat"
              value={formData.seat}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label>Fuel:</label>
            <input
              type="text"
              name="fuel"
              value={formData.fuel}
              onChange={handleChange}
              />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label>Transmission:</label>
            <input
              type="text"
              name="transmission"
              value={formData.transmission}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            disabled={loading}
          >
          {loading ? <div>Creating Car...,</div> : 'Create Car'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminCreateCar;
