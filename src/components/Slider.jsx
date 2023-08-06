import React from 'react';
import { Carousel } from 'react-bootstrap';
import ocean from '../ocean.jpg';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item style={{ height: '600px' }}>
                <img className="d-block w-100" src={ocean} alt="first-slide" />
                <Carousel.Caption>
                    <h3>Bootstrap Blog</h3>
                    <p>Eiusmod duis adipisicing ut culpa. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '600px' }}>
                <img className="d-block w-100" src={ocean} alt="first-slide" />
                <Carousel.Caption>
                    <h3>Bootstrap Blog</h3>
                    <p>Eiusmod duis adipisicing ut culpa. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '600px' }}>
                <img className="d-block w-100" src={ocean} alt="first-slide" />
                <Carousel.Caption>
                    <h3>Bootstrap Blog</h3>
                    <p>Eiusmod duis adipisicing ut culpa. </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
