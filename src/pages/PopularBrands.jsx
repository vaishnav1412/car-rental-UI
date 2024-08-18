import * as React from "react";
import Card from "@mui/material/Card";
import '../pages/Brands.css'

export default function BasicCard() {
  return (
    <div className="brands">
    <div>
        <h3 style={{ textAlign: "center" }}>POPULAR BRANDS</h3>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "9px",
        // border: "1px solid grey",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        
      }}
    >
      
      <Card sx={{ minWidth: 100 , boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)' }}>
        <img
          src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/maruti.jpg"
          alt="Brand Logo"
          style={{ width: "20rem", height: "10rem%",  }}
        />
      </Card>
      <Card sx={{ minWidth: 100,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)' }}>
        <img
          src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/honda.jpg"
          alt="Brand Logo"
          style={{ width: "20rem", height: "10rem%" }}
        />
      </Card>
      <Card sx={{ minWidth: 100,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)' }}>
        <img
          src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/jeep.jpg"
          alt="Brand Logo"
          style={{ width: "20rem", height: "10rem%" }}
        />
      </Card>
      <Card sx={{ minWidth: 50,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)' }}>
        <img
          src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/toyota.jpg"
          alt="Brand Logo"
          style={{ width: "20rem", height: "10rem%" }}
        />
      </Card>
      <Card sx={{ minWidth: 50,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7)' }}>
        <img
          src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/hyundai.jpg"
          alt="Brand Logo"
          style={{ width: "20rem", height: "10rem%" }}
        />
      </Card>
    </div>
    </div>
    </div>
  );
}
