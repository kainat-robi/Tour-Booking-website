import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoPlaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Navigating through this tour booking website was a breeze! From
          searching for destinations to comparing prices and reading reviews,
          everything was intuitive and user-friendly. Definitely my go-to for
          planning my next adventure!
        </p>
        <div className="d-flex align-item-center gap-4 mt-3">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2 " />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          I had a fantastic experience using this tour booking site. The variety
          of options available was impressive, and I appreciated the detailed
          descriptions and photos provided for each tour. Plus, the customer
          support was excellent - they promptly answered all my queries,
          ensuring I felt confident about my booking.
        </p>
        <div className="d-flex align-item-center gap-4 mt-3">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2 " />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          I can't speak highly enough about my experience with this tour booking
          website! From start to finish, everything exceeded my expectations.
          The interface was sleek and easy to navigate, the booking process was
          seamless, and the tour itself was nothing short of spectacular. Thanks
          to this platform, I had the adventure of a lifetime!
        </p>
        <div className="d-flex align-item-center gap-4 mt-3">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2 " />
          <div>
            <h6 className="mb-0 mt-3">Stomy Duck</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Testimonial;
