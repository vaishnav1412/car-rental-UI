import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";

const BasicCard = () => {
  const [userList, setUserList] = useState([]);
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(
          "https://carrental-h251.onrender.com/api/admin/getuser"
        );
        setUserList(response.data);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    }

    fetchUsers();
  }, []);

  const totalUsers = userList.length;

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await axios.get(
          "https://carrental-h251.onrender.com/api/admin/cars"
        );
        setCarList(response.data.data);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    }

    fetchCars();
  }, []);
  const totalCars = carList.length;

  const sedanCars = carList.filter((car) => car.model === " sedan");
  const suvCars = carList.filter((car) => car.model === " suv");
  const muvCars = carList.filter((car) => car.model === " muv");
  const luxuryCars = carList.filter((car) => car.model === " luxury");
  const electricCars = carList.filter((car) => car.model === " luxury")

  return (
    <div>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          },
        ]}
        series={[
          { data: [4, 3, 5, 2, 4, 6, 3, 5, 7, 8, 9, 5] },
          { data: [1, 6, 3, 5, 2, 4, 6, 3, 1, 2, 3, 4] },
          { data: [2, 5, 6, 4, 3, 2, 1, 5, 8, 9, 6, 7] },
          { data: [2, 5, 6, 4, 3, 2, 1, 5, 2, 5, 8, 6] },
        ]}
        width={1200}
        height={300}
      />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Card
            sx={{
              minWidth: 200,
              marginTop: 10,
              width: 45,
              backgroundColor: "white",
            }}
          >
            <CardContent>
              <Typography sx={{ mb: 1.5 }} color="#37474F">
                NO.OF.CUSTOMERS:{totalUsers}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div style={{ marginTop: 55, border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
  <PieChart
    series={[
      {
        data: [
          { id: 0, value: 4, label: "SEDAN" },
          { id: 1, value: 5, label: "SUV" },
          { id: 2, value: 5, label: "MUV" },
          { id: 3, value: 5, label: "LUXURY" },
        ],
      },
    ]}
    width={400}
    height={200}
  />
</div>

        <div>
          <Card
            sx={{
              minWidth: 200,
              marginTop: 10,
              width: 45,
              backgroundColor: "white",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="black"
                gutterBottom
              >
                NUMBER OF CARS:{totalCars}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="red">
                NO.OF.SEDAN: {sedanCars.length}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="blue">
                NO.OF.MUV: {muvCars.length}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="dark pink">
                NO.OF.SUV:{suvCars.length}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="brown">
                NO.OF.LUXURY:{luxuryCars.length}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="green">
                NO.OF.EV CARS:{electricCars.length}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>

      
      <div>
  <h5
    style={{
      textAlign: "center",
      fontWeight: "bold",
      paddingTop: "50px",
    }}
  >
    AVAILABLE OFFERS FOR CUSTOMERS
  </h5>
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      paddingTop: "1rem",
    }}
  >
    <div style={{ borderBottom: "1px solid black", borderTop: "1px solid black" }}>
      <h2 style={{ color: "black" }}>FIRST RIDE</h2>
      <h4 style={{ color: "black" }}>Get Up 50% Off</h4>
      <h5 style={{color: "black" }}>Your 1st Booking</h5>
      <h5>CODE:FSTR666</h5>
    </div>
    <div style={{ borderBottom: "1px solid black", borderTop: "1px solid black" }}>
      <span>
        <h2 style={{ color: "black" }}>GET 15%OFF ON 5</h2>
        <h4 style={{ color: "black" }}>DAYS BOOKING</h4>
        <h5 style={{color: "black" }}>CODE:HAADV666</h5>
      </span>
    </div>
    <div style={{ borderBottom: "1px solid black", borderTop: "1px solid black" }}>
      <span>
        <h2 style={{ color: "black" }}>WEEKEND SPECIAL</h2>
        <h4  style={{ color: "black" }}>GET 5% OFF</h4>
        <h4   style={{color: "black" }}>DAYS BOOKING</h4>
        <h5>CODE:WKND666</h5>
      </span>
    </div>
  </div>
</div>
</div>
   
  );
};

export default BasicCard;
