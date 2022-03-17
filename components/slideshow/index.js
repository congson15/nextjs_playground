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

const SlideShow = ({ children, className = '', slideToShow, infinite=true }) => {
    const [settings, setSettings] = React.useState(() => {
        const initSettings = {
            infinite: infinite,
            speed: 900,
            slidesToShow: slideToShow,
            autoplay: false,
            adaptiveHeight: false,
            className: className,
            dots: true,
            arrows:true,
            prevArrow: <CustomPreveArrow />,
            nextArrow: <CustomNextArrow />,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: className === 'background-image' ? 1 : slideToShow,
                    slidesToScroll: className === 'background-image' ? 1 : slideToShow,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: className === 'background-image' ? 1 : 3,
                    slidesToScroll: className === 'background-image' ? 1 : 3,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: className === 'background-image' ? 1 : 3,
                    slidesToScroll: className === 'background-image' ? 1 : 3
                  }
                }
            ]
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