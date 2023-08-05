import React from 'react';
import Slide1 from './images/slides/slide1.svg';
import Slide2 from './images/slides/slide2.svg';
import Slide3 from './images/slides/slide3.svg';
import Slide4 from './images/slides/slide4.svg';
import Slide5 from './images/slides/slide5.svg';
import Slide6 from './images/slides/slide6.svg';
import Slide7 from './images/slides/slide7.svg';
import Slide8 from './images/slides/slide8.svg';
import Slide9 from './images/slides/slide9.svg';
import Slide10 from './images/slides/slide10.svg';
import Slide11 from './images/slides/slide11.svg';
import Slide12 from './images/slides/slide12.svg';
import Slide13 from './images/slides/slide13.svg';
import Slide14 from './images/slides/slide14.svg';
import Slide15 from './images/slides/slide15.svg';
import Slide16 from './images/slides/slide16.svg';


const ServiceMarquee = () => {

    return (
        <>

            <div class="marquee">
                <div class="marquee__inner" aria-hidden="true">
                    <div class="marquee__inner" aria-hidden="true">
                        <p> <img src={Slide1} alt="Slide" />Python</p>
                        <p> <img src={Slide2} alt="Slide" />Frame</p>
                        <p> <img src={Slide3} alt="Slide" />Angular</p>
                        <p> <img src={Slide4} alt="Slide" />Bootstrap</p>
                        <p> <img src={Slide5} alt="Slide" />Codeigniter</p>
                        <p> <img src={Slide6} alt="Slide" />XD</p>
                        <p> <img src={Slide7} alt="Slide" />Figma</p>
                        <p> <img src={Slide8} alt="Slide" />Illustrator</p>
                        <p> <img src={Slide9} alt="Slide" />Photoshop </p>
                        <p> <img src={Slide10} alt="Slide" />Indesign </p>
                        <p> <img src={Slide11} alt="Slide" />After Effects</p>
                        <p> <img src={Slide12} alt="Slide" />Shopify</p>
                        <p> <img src={Slide13} alt="Slide" />Wordpress</p>
                        <p> <img src={Slide14} alt="Slide" />React </p>
                        <p> <img src={Slide15} alt="Slide" />HTML</p>
                        <p> <img src={Slide16} alt="Slide" />Css</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ServiceMarquee