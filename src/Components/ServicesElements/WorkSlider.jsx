import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Work1 from '../ServicesElements/images/work1.jpg';
import Work2 from '../ServicesElements/images/work2.jpg';
import Work3 from '../ServicesElements/images/work3.jpg';
import Work4 from '../ServicesElements/images/work4.jpg';
import Work5 from '../ServicesElements/images/work5.jpg';
import Work6 from '../ServicesElements/images/work6.jpg';
import Work7 from '../ServicesElements/images/work7.jpg';
import Work8 from '../ServicesElements/images/work8.jpg';
import Work9 from '../ServicesElements/images/work9.jpg';
import Slider from 'react-slick';


const WorkSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1
                }
            }
        ],
    };


    return (

        <Slider {...settings}>
            <div className="work-slide">
                <img src={Work1} alt="Work" />
                <div className="work-slide-content">
                    <h4 class="hdng-h4">Pheonix</h4>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work2} alt="Work" />
                <div className="work-slide-content">
                    <h4 class="hdng-h4">Papyrus</h4>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work3} alt="Work" />
                <div className="work-slide-content">
                    <h4 class="hdng-h4">Poter Bob</h4>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work4} alt="Work" />
                <div className="work-slide-content">
                    <h4 class="hdng-h4">Drink Trip</h4>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work5} alt="Work" />
                <div className="work-slide-content">
                    <h4 class="hdng-h4">Addison Ross</h4>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work6} alt="Work" />
                <div className="work-slide-content">
                    <h4 class="hdng-h4">The Stylish Gift</h4>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work7} alt="Work" />
                <div className="work-slide-content">
                    <h4 class="hdng-h4">Doona Wash</h4>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work8} alt="Work" />
                <div className="work-slide-content">
                    <h4 class="hdng-h4">Premium Care</h4>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work9} alt="Work" />
                <div className="work-slide-content">
                    <h4 class="hdng-h4">En Place</h4>
                </div>
            </div>

        </Slider>

    );
};

export default WorkSlider;
