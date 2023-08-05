import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Work1 from '../ServicesElements/images/work1.jpg';
import Work2 from '../ServicesElements/images/work2.jpg';
import Work3 from '../ServicesElements/images/work3.jpg';
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
                <img src={Work1} alt="Review1" />
                <div className="work-slide-content">
                    <h4 class="small-hdn">Wordpress</h4>
                    <h4 class="hdng-h4">Ekococo</h4>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work2} alt="Review2" />
                <div className="work-slide-content">
                    <h4 class="small-hdn">Wordpress</h4>
                    <h4 class="hdng-h4">Ele4orce</h4>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work3} alt="Review3" />
                <div className="work-slide-content">
                    <h4 class="small-hdn">UI/UX Design</h4>
                    <h4 class="hdng-h4">Krazy Deals & Steals</h4>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work1} alt="Review1" />
                <div className="work-slide-content">
                    <h4 class="small-hdn">Wordpress</h4>
                    <h4 class="hdng-h4">Ekococo</h4>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work2} alt="Review2" />
                <div className="work-slide-content">
                    <h4 class="small-hdn">Wordpress</h4>
                    <h4 class="hdng-h4">Ele4orce</h4>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work3} alt="Review3" />
                <div className="work-slide-content">
                    <h4 class="small-hdn">UI/UX Design</h4>
                    <h4 class="hdng-h4">Krazy Deals & Steals</h4>
                </div>
            </div>

        </Slider>

    );
};

export default WorkSlider;
