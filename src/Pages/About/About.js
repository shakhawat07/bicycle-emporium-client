import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import './About.css'

const About = () => {
    return (
        <>
            <Navigation></Navigation>
            <section className="container-fluid">
                <div className="py-4">
                    <div className="row d-flex justify-content-start align-items-start py-3 mx-3 h-100 about-container rounded">
                        <div className="col-lg-6 col-md-5 col-sm-12 col-12">
                            <div className="text-start p-4">
                                <h2 className="card-title fw-bold text-black">About Us</h2>
                                <p>Bicycle Emporium was opened in October 2010. Back then we were riders. Recreational cycling was something that hadn't yet become mainstream in dhaka, and there were no shop addressing biker's need . Yes, there were shops selling bikes, but with every visit to the local bike store, we realized how discouraging an interaction could be. In time, our frustration became the motivation to open a bike shop which will be honest to customer and their needs, give professional support and service and which will encourage people to try and take up bicycling as a way of life. Our focus was solving the problems that we our self have faced as customer. With the purchase of every bicycle, you will receive 6 months of servicing free.</p>
                                <button className="btn btn-danger">Details</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7 cl-sm-12 col-12 my-5">
                            <img className="img-fluid" style={{ width: '420px', height: '270px' }} src="https://images.unsplash.com/photo-1563990308267-cd6d3cc09318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;