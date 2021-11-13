import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1577346898588-7a1f1dd5cc79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
                        alt=""

                    />
                    <Carousel.Caption>
                        <h1 className="fw-bolder">Welcome to</h1>
                        <h1 className="fw-bolder">Bicycle Emporium</h1>
                        <h5>We provide the best service in Bangladesh</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1528460452708-058136e06fdd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=867&q=80"
                        alt=""
                    />
                    <Carousel.Caption>
                        <h1 className="fw-bolder">Welcome to</h1>
                        <h1 className="fw-bolder">Bicycle Emporium</h1>
                        <h5>We provide the best service in Bangladesh</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80" alt=""
                    />
                    <Carousel.Caption>
                        <h1 className="fw-bolder">Welcome to</h1>
                        <h1 className="fw-bolder">Bicycle Emporium</h1>
                        <h5>We provide the best service in Bangladesh</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1613351354693-4f627235a5c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1025&q=80"
                        alt=""
                    />
                    <Carousel.Caption>
                        <h1 className="fw-bolder">Welcome to</h1>
                        <h1 className="fw-bolder">Bicycle Emporium</h1>
                        <h5>We provide the best service in Bangladesh</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;