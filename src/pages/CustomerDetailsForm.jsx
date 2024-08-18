
import { Controller, useForm } from "react-hook-form";
import "../pages/CustomerDetails.css";
import DefaultLayout from "../components/DefaultLayout";
import Footer from "./Footer";
import Socialmedia from "./Socialmedia";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const UserForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },  
  } = useForm();

  const navigate = useNavigate()


  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "https://carrental-h251.onrender.com/api/custdetails/cusdetails",
        formData
      );
      toast.success("Success");
      navigate('/payment')
    } catch (error) {
      console.log(error);
    }
  };


  // const handleNextButtonClick = () => {
  //   navigate('/payment')
  // }

  return (
    <>
      <div className="userdetails">
        <header className="sticky-top">
          <DefaultLayout />
        </header>
        <h2
          style={{
            textAlign: "center",
            padding: "10px",
            fontFamily: "fantasy",
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "5px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          className="mt-5"
        >
          Customer Details Form
        </h2>
        <form
          style={{ paddingTop: "20px" }}
          className="user-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div style={{ display: "flex", fontFamily: "fantasy",marginLeft:'-70px' }}>
            <label className="mt-4 p-1">Name</label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <input
                  className="mt-3"
                  style={{
                    width: "30rem",
                    marginLeft: "10px",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                    border: "1px solid #ccc",
                  }}
                  {...field}
                  type="text"
                  placeholder="Enter your name"
                />
              )}
            />
            {errors.name && <p>{errors.name.message}</p>}

            <label style={{ marginLeft: "150px" }} className="mt-4 p-1">
              Email:
            </label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <input
                  className="mt-3"
                  style={{
                    width: "30rem",
                    marginLeft: "10px",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                    border: "1px solid #ccc",
                  }}
                  {...field}
                  type="text"
                  placeholder="Enter your email"
                />
              )}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className="mt-2 " style={{ display: "flex", fontFamily: "fantasy",marginLeft:'-80px' }}>
            <label className="mt-4 p-1 ">Address</label>
            <Controller
              name="address"
              control={control}
              rules={{ required: "Address is required" }}
              render={({ field }) => (
                <input
                  className="mt-3"
                  style={{
                    width: "30rem",
                    marginLeft: "10px",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                    border: "1px solid #ccc",
                  }}
                  {...field}
                  type="text"
                  placeholder="Enter your address"
                />
              )}
            />
            {errors.address && <p>{errors.address.message}</p>}

            <label style={{ marginLeft: "150px" }} className="mt-4 p-1">
              Phone
            </label>
            <Controller
              className="ml-3 mt-3"
              name="phone"
              control={control}
              rules={{ required: "Phone number is required" }}
              render={({ field }) => (
                <input
                  className="mt-3 ml-1"
                  style={{
                    width: "30rem",
                    marginLeft: "10px",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                    border: "1px solid #ccc",
                  }}
                  {...field}  
                  type="number"
                  placeholder="Enter your phone number"
                />
              )}
            />
            {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
          </div>

          <div className="mt-4 " style={{height:'40px', display: "flex", fontFamily: "fantasy",marginLeft:'-80px' }}>
            <label style={{ marginLeft: "0px" }} className="mt-1 p-1">District</label>
            <Controller
              name="district"
              control={control}
              rules={{ required: "District is required" }}
              render={({ field }) => (
                <input
                  style={{
                    width: "30rem",
                    marginLeft: "10px",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                    border: "1px solid #ccc",
                  }}
                  {...field}
                  type="text"
                  placeholder="Enter your district" 
                />
              )}
            />
            {errors.district && <p>{errors.district.message}</p>}

            <label style={{ marginLeft:'140px', }} className="mt-2 p-1">
               Licence 
            </label>
            <Controller
              className=" mt-3"
              name="driverLicenceNumber"
              control={control}
              rules={{ required: "Driver Licence Number is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  style={{
                    width: "30rem",
                    marginLeft: "10px",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                    border: "1px solid #ccc",
                  }}
                  type="text"
                  placeholder="Enter your licence number"
                />
              )}
            />
            {errors.driverLicenceNumber && <p>{errors.driverLicenceNumber.message}</p>}
          </div>
          <div className="mt-4" style={{ display: "flex", fontFamily: "fantasy" }}>
            <label className="" style={{ marginLeft: "-50px", marginTop: "10px" }}>
              City
            </label>
            <Controller
              name="city"
              control={control}
              rules={{ required: "City is required" }}
              render={({ field }) => (
                <input
                  style={{
                    width: "30rem",
                    marginLeft: "10px",
                    borderRadius: "5px",
                    height: "42px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                    border: "1px solid #ccc",
                  }}
                  {...field}
                  type="text"
                  placeholder="Enter your city"
                />
              )}
            />
            {errors.city && <p>{errors.city.message}</p>}

            <label style={{ marginLeft: "130px"}} className="mt-3">
              Alternative
            </label>
            <Controller
              name="contactPerson"
              control={control}
              rules={{ required: "Contact Person is required" }}
              render={({ field }) => (
                <input
                  style={{
                    width: "30rem",
                    marginLeft: "10px",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                    border: "1px solid #ccc",
                  }}
                  {...field}
                  type="text"
                  placeholder="Enter your Local Contact Person"
                />
              )}
            />
            {errors.contactPerson && <p>{errors.contactPerson.message}</p>}
          </div>
          <div style={{ paddingBottom: "80px" }} className="">
            <button 
              className="mt-5"
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                fontWeight: "800",
                borderRadius: "5px",
                width: "350px",
                marginLeft: "-85px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <Socialmedia />
      </div>
    </>
  );
};

export default UserForm;

