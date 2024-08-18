import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <div className="d-flex justify-content-center me-auto my-2 my-lg-0">
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        variant="dark"
        style={{
          maxHeight: "160px",
          border: "2px solid #fff",
          fontSize: "1.2rem",
          position: "relative",
          left: "60px",
        }}
      >
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Nav
          style={{
            backgroundColor: "purple",
            borderRadius: "10px",
            padding: "10px",
            width: "1000px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
         
            <div>
              <Link to="/sedan" className="nav-link">
                SEDAN
              </Link>
            </div>
            <div>
              <Link to="/suv" className="nav-link">
                SUV
              </Link>
            </div>
            <div>
              <Link to="/muv" className="nav-link">
                MUV
              </Link>
            </div>
            <div>
              <Link to="/luxury" className="nav-link">
                LUXURY
              </Link>
            </div>
        
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
