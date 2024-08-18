import React, {useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import "../pages/Contactus.css";


const ContactForm = () => {
  
  const { currentUser } = useSelector((state) => state.user);
  const ref = currentUser?.rest?._id;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    ref,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!currentUser){
      toast.error("You need to login send a message.")
      return;
    }
    try {
      const response = await axios.post(
        "https://carrental-h251.onrender.com/api/contactus/contactuss",
        formData
      );
      toast.success("success");
    } catch (error) {
      console.log(error);
    }
  };

  const [isEmailHovered, setIsEmailHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <header className="sticky-top">
        <DefaultLayout />
      </header>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <div style={{ paddingTop: "50px" }}>
                  <h4>CONTACT WHEELSONROAD</h4>
                </div>

                <div style={{ paddingTop: "20px", display: "flex" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <label>First Name:</label>
                    </div>
                    <div>
                      <input
                        style={{ paddingTop: "10px", width: "20rem" }}
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <label>Last Name:</label>
                    </div>
                    <input
                      style={{ paddingTop: "10px", width: "20rem" }}
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label style={{paddingTop:'10px'}}>Email
                    <br /> Address:</label>
                  <input
                    style={{
                      width: "37rem",
                      color: isEmailHovered ? "green" : "black",
                    }}
                    type="email"
                    id="emailAddress"
                    name="email"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                  />
                </div>

                <label style={{paddingTop:'5px'}}>Message:</label>
                <div>
                  <textarea
                    style={{ width: "40rem", height: "9rem" }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button className="cntctusbtn">
                <span>SUBMIT</span>
              </button>
            </div>
          </form>
        </div>
        <div style={{ paddingTop: "10rem" }}>
          <h5
            style={{ fontFamily: "Arial", color: "#333", fontWeight: "bold" }}
          >
            If you need support with a previous booking, please email
          </h5>
          <div
            onMouseEnter={() => setIsEmailHovered(true)}
            onMouseLeave={() => setIsEmailHovered(false)}
          >
            <h4
              style={{
                fontFamily: "Arial",
                color: isEmailHovered ? "green" : "#ff0000",
                cursor: "pointer",
              }}
            >
              wheelsonroad@gmail.com
            </h4>
          </div>
          <h5
            style={{ fontFamily: "Arial", color: "#333", fontWeight: "bold" }}
          >
            To chat with someone at Customer care, please talk to an expert, or
            call +91 9605177652
          </h5>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
