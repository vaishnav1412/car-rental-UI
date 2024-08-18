import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const AdminContactUs = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function getAllMessages() {
      try {
        const response = await axios.get(
          "https://carrental-h251.onrender.com/api/admin/contactmessages"
        );
        setMessages(response.data);
      } catch (error) {
        console.log("Something went wrong");
      }
    }
    getAllMessages();
  }, []);

  return (
    <div>
      {messages.map((item) => (
        <Card key={item._id} sx={{ minWidth: 275, margin: "16px" }}>
          <CardContent>
            <Typography variant="body2">
              <div>
                <h5>Username: {item.firstName}</h5>
              </div>
              <div>
                <h5>Messages: {item.message}</h5>
              </div>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AdminContactUs;
