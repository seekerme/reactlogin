import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//import headercontent from '../resources/homepage.jpeg';
import './content.css';
import cr1 from '../resources/cr1.jpg';
import cr2 from '../resources/cr2.jpg';
import cr3 from '../resources/cr3.jpg';

const content = () => {    
    return (
         <div className="contentcss">       
            <Carousel autoPlay infiniteLoop>
                <div>
                    <img src={cr1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={cr2} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={cr3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>                             
             {/* <img src={headercontent} alt="Header Content"></img> */}
        </div>
        );
}

export default content;