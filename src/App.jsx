import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingCar from "./pages/BookingCar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { FidgetSpinner } from 'react-loader-spinner'
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import ShowBookingDetails from "./pages/ShowBookingDetails";
import CarList from "./pages/CarList";
import ErrorPage from "./pages/ErrorPage";
import Sedan from "./pages/Sedan";
import Suv from "./pages/Suv";
import Muv from "./pages/Muv";
import Luxury from "./pages/Luxury";
import AdminHome from "./pages/AdminHome";
import CarDetails from "./pages/CarDetails";
import Userlist from "./pages/Userlist";
import AdminDash from "./pages/AdminDash";
import { ToastContainer } from "react-toastify";
import FinalDetailss from "./pages/FinalDetailss";
import CustomerDetailsForm from "./pages/CustomerDetailsForm";
import AdminCars from "./pages/AdminCars";
import "../src/pages/Otps.css";
import Otp from "./pages/Otp";
import Chatbox from "./pages/Chatbox";
import Aboutus from "./pages/Aboutus";
import ContactForm from "./pages/Contactus";
import Forgotpassword from "./pages/Forgotpassword";
import PasswordChange from "./pages/PasswordChange";
import AdminEdit from "./pages/AdminEdit";
import PaymentSection from "./pages/PaymentSection";
import Profilepage from "./pages/Profilepage";
import AdminContactUs from "./pages/AdminContactUs";
import { useSelector } from "react-redux";
import AdminCoupon from "./pages/AdminCoupon";
import Deals from "./pages/Deals";
import PopularBrands from "./pages/PopularBrands";
import Tags from "./pages/Tags";
import PrivateRoute from "./pages/PrivateRoute";
import ElecrticCars from "./pages/ElectricCars";
import AdminCreateCar from "./pages/AdminCreateCar";

function App() {
  const { loading } = useSelector((state) => state.alerts.loading);
  return (
    <div className="App">
      <BrowserRouter>
      {loading && (
        <div className="spinner-loading">
        <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="fidget-spinner-loading"
            wrapperStyle={{}}
            wrapperClass="fidget-spinner-wrapper"
            />
        </div>
      )}
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Bookingcar" element={<BookingCar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Bookingdetails" element={<ShowBookingDetails />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/sedan" element={<Sedan />} />
          <Route path="/suv" element={<Suv />} />
          <Route path="/muv" element={<Muv />} />
          <Route path="/luxury" element={<Luxury />} />
          <Route path="/electric" element={<ElecrticCars />} />
          <Route path="/details/:id" element={<CarDetails />} />
         
         
          <Route path="/Otp/:email" element={<Otp />} />
          <Route path="/chat" element={<Chatbox />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactForm />} />
          <Route path="/forgot" element={<Forgotpassword />} />
          <Route path="/password_change" element={<PasswordChange />} />
         
          <Route path="/profilepage" element={<Profilepage />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/popular" element={<PopularBrands />} />
          <Route path="/tags" element={<Tags />} />

          <Route element = {<PrivateRoute/>}>
          <Route path="/finaldetails/:id" element={<FinalDetailss />} />
          <Route path="/customerform" element={<CustomerDetailsForm />} />
          <Route path="/payment" element={<PaymentSection />} />
          </Route>

          

          <Route path="/adminhome" element={<AdminHome />} />
          <Route element={<AdminHome />}>
            <Route path="/users" element={<Userlist />} />
            <Route path="/admindash" element={<AdminDash />} />
            <Route path="/Admincars" element={<AdminCars />} />
            <Route path="/Adminedit/:carId" element={<AdminEdit />} />
            <Route path="/contactuss" element={<AdminContactUs />} />
            <Route path="/couponedit" element={<AdminCoupon />} />
            <Route path="/createCars" element={<AdminCreateCar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
