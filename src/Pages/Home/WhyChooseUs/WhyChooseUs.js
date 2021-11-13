import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
    const faBicycleIcon = <FontAwesomeIcon icon={faBicycle} />;
    return (
        <section className="m-5">
            <div className="py-4 container-fluid">
                <div className="row d-flex justify-content-start align-items-start py-3 mx-3 h-100 whyChooseUs-container rounded">
                    <div className="col-lg-7 col-md-7 cl-sm-12 col-12">
                        <img className="img-fluid p-2" style={{ width: '550px', height: '420px' }} src="https://images.unsplash.com/photo-1549216963-72c1712c1196?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" />
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                        <div className="text-start p-4">
                            <h2 className="card-title fw-bold text-black pb-3">We Provide</h2>
                            <h5>{faBicycleIcon} Demo Bikes</h5>
                            <h5>{faBicycleIcon} Cost Effective</h5>
                            <h5>{faBicycleIcon} Assured Quality</h5>
                            <h5>{faBicycleIcon} Hassle Free Service</h5>
                            <h5>{faBicycleIcon} Openness and Availability</h5>
                            <h5>{faBicycleIcon} Friendly and Qualified Stuff</h5>
                            <h5>{faBicycleIcon} Experience and Trustworthiness</h5>
                            <button className="btn btn-danger mt-3">Show Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;