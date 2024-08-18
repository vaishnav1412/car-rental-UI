import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Paginationn from './Pagination';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; 
const ITEMS_PER_PAGE = 6;

function AdminCars() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate()
console.log(cars);
  useEffect(() => {
    async function getAllCars() {
      try {
        const response = await axios.get("https://carrental-h251.onrender.com/api/admin/cars");
        setCars(response?.data?.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }

    getAllCars();
  }, []);

  const indexOfLastPage = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstPage = indexOfLastPage - ITEMS_PER_PAGE;
  const currentList = cars?.slice(indexOfFirstPage, indexOfLastPage);

  const handleEdit = (carId) => {
  
    
    console.log(`Edit car with ID: ${carId}`);
  };

  const handleDelete =async (carId) => {
   

    try {

      const formData = {
        carId
      }

      if(formData){

        const response = await axios.patch("https://carrental-h251.onrender.com/api/admin/deletecar",formData);
        
        if (response.data.status === "success") {
          
          setCars((prevCars) => prevCars.filter((car) => car._id !== carId));
        } else {
          console.log('Deletion failed');
        }

      }else{
        console.log('error');
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='allcars'>
        {currentList?.map((car) => (
          <div key={car._id} style={{ marginBottom: '20px' }}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={car.image} alt={car.title} />
              <Card.Body>
                <Card.Title>{car.title}</Card.Title>
                <Card.Text>{car.description}</Card.Text>
                <Card.Text>PRICE: ₹{car.price}</Card.Text>
                <Card.Text>Model: {car.model}</Card.Text>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button className="wow-button" onClick={()=>{navigate(`/adminedit/${car._id}`)}}>
                    <FaEdit  /> Edit
                  </button>
                  <button className="wow-button" onClick={() => handleDelete(car?._id)}>
                    <FaTrashAlt /> Delete
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <Paginationn
        itemsPerPage={ITEMS_PER_PAGE}
        totalpages={cars.length}
        paginate={setCurrentPage}
        currentpage={currentPage}
      />
    </div>
  );
}

export default AdminCars;
