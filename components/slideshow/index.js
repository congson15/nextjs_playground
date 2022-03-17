import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";


const CustomPreveArrow = (props) => {
    const { className, onClick } = props;
    return (
        <img className={className} onClick={onClick} src="/svg/prev-arrow.svg" />
    );
}

const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <img className={className} onClick={onClick} src="/svg/next-arrow.svg" />
    );
}

const SlideShow = ({ children, className = '', slideToShow }) => {
    const [settings, setSettings] = React.useState(() => {
        const initSettings = {
            infinite: true,
            speed: 900,
            slidesToShow: slideToShow,
            slidesToScroll: 1,
            autoplay: false,
            adaptiveHeight: false,
            className: className,
            dots: true,
            arrows:true,
            prevArrow: <CustomPreveArrow />,
            nextArrow: <CustomNextArrow />
        };
        return initSettings;
    });
    return (
        
        <Slider {...settings}>
            {children}
        </Slider>
    )
}

export default SlideShow;