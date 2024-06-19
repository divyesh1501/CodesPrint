import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";

function HeroSection() {
    const sliderRef = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrevious = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="relative">
            <Slider ref={sliderRef} {...settings}>
                <div>
                    <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="" className='w-full h-96 object-cover' />
                </div>
                <div>
                    <img src="https://png.pngtree.com/thumb_back/fw800/background/20231002/pngtree-3d-rendering-of-a-stunning-shopping-cart-banner-design-image_13554122.png" alt="" className='w-full h-96 object-cover' />
                </div>
            </Slider>
            <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-amber-400 text-3xl text-white rounded-full mx-5">
                <IoMdArrowDropleftCircle />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-amber-400 text-3xl text-white rounded-full mx-5">
                <IoMdArrowDroprightCircle />
            </button>
        </div>
    );
}

export default HeroSection;
