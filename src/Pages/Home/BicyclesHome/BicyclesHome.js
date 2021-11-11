import React from 'react';
import { useHistory } from 'react-router-dom';
import './BicyclesHome.css';

const BicyclesHome = ({ bicycle }) => {
    const { _id, name, type, cost, suspension, img, description } = bicycle;
    const history = useHistory();

    const handleBuyNow = () => {
        history.push(`/bicycle/${_id}`);
    }
    return (
        <div className="pb-4 container-fluid">
            <div className="row d-flex justify-content-start align-items-start py-3 mx-3 h-100 bg-white rounded  bicyclesHome-img">
                <div className="col-lg-6 col-md-12 cl-sm-12 col-12">
                    <img className="border border-dark border-2 rounded p-2 img-fluid" style={{ width: '550px', height: '320px' }} src={img} alt="" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="text-start ps-2">
                        <h2 className="card-title fw-bold text-black mb-3">{name}</h2>
                        {/* <p><span className="text-black fw-bolder">{type}</span></p> */}
                        <h4><span className="text-black fw-bolder">$ {cost}</span></h4>
                        <p><span className="text-black fw-bolder"></span>{description}</p>
                        <button onClick={handleBuyNow} className="btn btn-danger px-3"
                        > <span className="px-2">Buy Now</span>
                        </button>
                    </div>
                </div>
                {/* <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="text-start ps-2">
                    <p><span className="text-black fw-bolder"></span>{description}</p>
                </div>
            </div> */}
            </div>
        </div>
    );
};

export default BicyclesHome;