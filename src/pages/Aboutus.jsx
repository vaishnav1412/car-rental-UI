import React from "react"
import DefaultLayout from "../components/DefaultLayout";
import Footer from "./Footer";

const Aboutus = () => {
  return (
    <div>
      <header className="sticky-top">
        <DefaultLayout />
      </header>
      <h5 style={{ textAlign: "center", paddingTop: "30px" }}>ABOUT US</h5>
      <div>
        <img
          src="http://localhost:5000/front-theme/images/about_us_banner.png"
          alt="bmwaudi"
          style={{ height: "500px", width: "1510px", paddingTop: "30px" }}
        />
      </div>
      <div>
        <h5>
          WheelsOnRoad:Your Perfect Travel Companion to Explore Spectacular
          Kerala
        </h5>
        WheelsOnRoad--based in Kerala, blessed by nature and culture, beckons
        you with its palm-fringed beaches, serene backwaters, lush hill stations
        and rich heritage. <br></br>To experience the magic of this tropical
        paradise at your own pace, EVM Wheels offers the perfect travel
        companion - our wide range of self-drive rental cars.
        <br />
        <p>
          WheelsOnRoad brings the legacy of Group, trusted automotive partners
          in Kerala for over 6 decades. We inherit their heritage of excellence
          in vehicle retail and service to make your travel experiences more
          memorable.
        </p>
        <p>
          Our hatchbacks, sedans, MUVs,SUVs and Laxury cater to solo travelers,
          couples, families and groups of all sizes. Rent for a few days for
          local drives or take weekly/monthly rentals for leisurely vacations.
          WheelsOnRoad rentals will be your flexible travel buddy across Kerala!
          Budget-Friendly Packages for All We understand traveling can be
          expensive, so our self-drive rentals are light on your pockets. Our
          transparent rates along with flexible daily, weekly and monthly
          packages fit every budget and trip plan. Long term rentals come with
          great discounts!
          <br />
        </p>
        <p>Service You Can Count On</p>
        <p>
          Customer delight is our top priority. Our team offers exceptional
          service through your rental journey - from booking to delivery to
          returns and beyond. Contact us 24x7 for instant resolution of all
          queries. We aim to make self-drive vacations in Kerala smooth and
          memorable for you.
        </p>
        <p>You Drive Safely, We Take Care of the Rest</p>
        <p>
          So unlock the freedom of self-driven holidays with  WheelsOnRoad as your
          perfect travel buddy. Our cars, services and reliability will make
          your Kerala trip comfortable while our affordable prices delight your
          pocket. Visit www.wheelsOnRoad.com to book your preferred self-drive
          rental today. Let's hit the open roads!
        </p>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Aboutus;
