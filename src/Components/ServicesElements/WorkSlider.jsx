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
                    <h4 class="small-hdn">EKOCOCO</h4>
                    <h4 class="hdng-h4">Coconut tree waste material crafts</h4>
                    <p className="hdng-16">Designed ELE4ORCE website, increasing client's customer base by 35% with visually appealing and user-friendly interface.</p>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work2} alt="Review2" />
                <div className="work-slide-content">
                    <h4 class="small-hdn">ELE4ORCE</h4>
                    <h4 class="hdng-h4">New customers increase by 35%</h4>
                    <p className="hdng-16">Collaborated with client to create unique website showcasing coconut tree waste material products. Result was professional and successful online platform.</p>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work3} alt="Review3" />
                <div className="work-slide-content">
                    <h4 class="small-hdn">Krazy Deals & Steals</h4>
                    <h4 class="hdng-h4">Sales increased by 30%</h4>
                    <p className="hdng-16">Redesigned app for client, resulting in a significant boost in sales performance.</p>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work1} alt="Review1" />
                <div className="work-slide-content">
                    <h4 class="small-hdn">EKOCOCO</h4>
                    <h4 class="hdng-h4">Coconut tree waste material crafts</h4>
                    <p className="hdng-16">Designed ELE4ORCE website, increasing client's customer base by 35% with visually appealing and user-friendly interface.</p>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work2} alt="Review2" />
                <div className="work-slide-content">
                    <h4 class="small-hdn">ELE4ORCE</h4>
                    <h4 class="hdng-h4">New customers increase by 35%</h4>
                    <p className="hdng-16">Collaborated with client to create unique website showcasing coconut tree waste material products. Result was professional and successful online platform.</p>
                </div>
            </div>

            <div className="work-slide">
                <img src={Work3} alt="Review3" />
                <div className="work-slide-content">
                    <h4 class="small-hdn">Krazy Deals & Steals</h4>
                    <h4 class="hdng-h4">Sales increased by 30%</h4>
                    <p className="hdng-16">Redesigned app for client, resulting in a significant boost in sales performance.</p>
                </div>
            </div>

        </Slider>

    );
};

export default WorkSlider;
