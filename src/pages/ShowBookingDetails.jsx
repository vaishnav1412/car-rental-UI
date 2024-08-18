import { useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Footer from "./Footer";
import Navbar from "./Navigationbar";
import Socialmedia from "./Socialmedia";
import Carousel from 'react-bootstrap/Carousel';

function ShowBookingDetails() {
  const { currentBooking } = useSelector((state) => state.booking);
  console.log(currentBooking);
  return (
    <header className="sticky-top">
      <header className="sticky-top">
        <DefaultLayout />
      </header>
      <div>
        <div className="mainnav">
          <div style={{ position: "relative", top: "100px", height: "100px" }}>
            <div
              className="pickup"
              style={{ width: "300px", padding: "20px", marginBottom: "20px" }}
            >
              <p>
                <strong>Pick Location:</strong>{" "}
                {currentBooking?.detailsAdd?.pickupLocation}
              </p>
              <p>
                <strong>Drop Off Location:</strong>{" "}
                {currentBooking?.detailsAdd?.dropOffLocation}
              </p>
            </div>
            <div
              className="pickup"
              style={{ width: "300px", padding: "20px", marginBottom: "20px" }}
            >
              <p>
                <strong>Pickup Date:</strong>{" "}
                {new Date(currentBooking?.detailsAdd?.pickupDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Pickup Time:</strong>{" "}
                {currentBooking?.detailsAdd?.pickupTime}
              </p>
            </div>
            <div
              className="pickup"
              style={{ width: "300px", padding: "20px", marginBottom: "20px" }}
            >
              <p>
                <strong>Drop Off Date:</strong>{" "}
                {new Date(currentBooking?.detailsAdd?.dropOffDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Drop Off Time:</strong>{" "}
                {currentBooking?.detailsAdd?.dropOffTime}
              </p>
            </div>
          </div>

          <div className="newnav">
            <Navbar />
            <div className="pickupmain">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/112452/pexels-photo-112452.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div>
        <Socialmedia/>
      </div>
    </header>
  );
}

export default ShowBookingDetails;
