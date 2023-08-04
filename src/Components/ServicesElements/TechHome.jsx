import React from 'react';
import React_icon from '../ServicesElements/images/react.svg'
import Laravel from '../ServicesElements/images/laravel.svg'
import Wordpress from '../ServicesElements/images/wordpress.svg'
import Webflow from '../ServicesElements/images/webflow.svg'
import Php from '../ServicesElements/images/php.svg'
import Shopify from '../ServicesElements/images/shopify.svg'
import Nodejs from '../ServicesElements/images/nodejs.svg'
import Java from '../ServicesElements/images/java.svg'
import Javascript from '../ServicesElements/images/javascript.svg'
import Angular from '../ServicesElements/images/angular.svg'
import Flutter from '../ServicesElements/images/flutter.svg'
import Bootstrap from '../ServicesElements/images/bootstrap.svg'
import Html from '../ServicesElements/images/html.svg'

const TechHome = () => {

    return (

        <div className="tech-block">
            <div className="tech-box">
                <img src={React_icon} alt="React" />
                <h6>React</h6>
            </div>

            <div className="tech-box">
                <img src={Laravel} alt="Laravel" />
                <h6>Laravel</h6>
            </div>

            <div className="tech-box">
                <img src={Wordpress} alt="Wordpress" />
                <h6>Wordpress</h6>
            </div>

            <div className="tech-box">
                <img src={Webflow} alt="Webflow" />
                <h6>Webflow</h6>
            </div>

            <div className="tech-box">
                <img src={Php} alt="Php" />
                <h6>PHP</h6>
            </div>

            <div className="tech-box">
                <img src={Shopify} alt="Shopify" />
                <h6>Shopify</h6>
            </div>

            <div className="tech-box">
                <img src={Nodejs} alt="Nodejs" />
                <h6>Node Js</h6>
            </div>

            <div className="tech-box">
                <img src={Java} alt="Java" />
                <h6>Java</h6>
            </div>

            <div className="tech-box">
                <img src={Javascript} alt="Javascript" />
                <h6>Javascript</h6>
            </div>

            <div className="tech-box">
                <img src={Angular} alt="Angular" />
                <h6>Angular</h6>
            </div>

            <div className="tech-box">
                <img src={Flutter} alt="Flutter" />
                <h6>Flutter</h6>
            </div>

            <div className="tech-box">
                <img src={Bootstrap} alt="Bootstrap" />
                <h6>Bootstrap</h6>
            </div>

            <div className="tech-box">
                <img src={Html} alt="Html" />
                <h6>Html</h6>
            </div>
        </div>

    )
}

export default TechHome