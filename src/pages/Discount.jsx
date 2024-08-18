import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Discount() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="containerr ">
      <h2 className="heading2 col-sm-12">SPECIAL OFFERS AND DISCOUNTS</h2>
      <Slider {...settings}>
        {/* <div className="displaying"> */}
        <div className="square1 ">
          <div className="image-container">
            <img
            style={{width:'400px',marginLeft:'-180px'}}
              src="https://www.evmwheels.com/front-theme/images/special_offer_3.png"
              alt="Special Offer"
            />
            <span className="stylish  col-sm-6" style={{fontFamily:"cursive"}}>
              <h2 style={{fontSize:'50px'}}>FIRST RIDE</h2>
              <h4 style={{fontSize:'35px'}}>Get Up 50% Off</h4>
              <h5 style={{fontSize:"30px"}}>Your 1st Booking</h5>
              <h5>CODE:FSTR666</h5>
            </span>
          </div>
        </div>

        <div className="square2 col-6">
          <div className="image-container">
            <img
            style={{width:'400px',marginLeft:'-180px'}}
              src="https://www.evmwheels.com/front-theme/images/special_offer_2.png"
              alt="Special Offer 2"
            />
            <span style={{marginLeft:"25px",marginTop:"-50px"}} className="stylish">
              <h4 style={{fontSize:'40px'}}>GET 15%OFF ON 5</h4>
              <h4 style={{fontSize:"32px"}}>DAYS BOOKING</h4>
              <h5>CODE:HAADV666</h5>
            </span>
          </div>
        </div>

        <div className="square3">
          <div className="image-container">
            <img
            style={{width:'400px',marginLeft:'-180px',marginTop:"30px"}}
              src="https://www.evmwheels.com/front-theme/images/special_offer_1.png"
              alt="skoda"
            />
            <span  className="stylish">
              <h4 style={{marginLeft:"5px",fontSize:"36px"}}>WEEKEND SPECIAL</h4>
              <h4 style={{fontSize:"32px"}}>GET 5% OFF</h4>
              <h5>CODE:WKND666</h5>
            </span>
          </div>
        </div>
        {/* </div> */}
      </Slider>
    </div>
  );
}

export default Discount;
