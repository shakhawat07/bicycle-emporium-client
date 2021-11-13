import React from 'react';
import { useHistory } from 'react-router-dom';
import './Bicycle.css'

const Bicycle = ({ bicycle }) => {
    const { _id, name, type, cost, suspension, img } = bicycle;
    const history = useHistory();
    // console.log(bicycle);

    // bicycle image style 
    const bicycleImgStyle = {
        width: '400px',
        height: '250px',
        borderRadius: '15px'
    }

    const handleBuyNow = () => {
        history.push(`/bicycle/${_id}`);
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-4">
            <div className="card h-100 border border-light shadow-lg bicycle-card-background">
                <div className="card-body bicycle-img text-center">
                    <img className="p-2 img-fluid" style={bicycleImgStyle} src={img} alt="" />
                    <h3 className="card-title py-3 fs-3 text-black text-center mt-2">{name}</h3>
                    <p><span className="text-black fw-bolder">Price: </span>$ {cost}</p>
                    <p><span className="text-black fw-bolder">Bike Type: </span>{type}</p>
                    <p><span className="text-black fw-bolder">Suspension: </span>{suspension}</p>
                    {/* <p className="card-details p-2 text-center"></p> */}
                </div>
                <div className="card-footer d-flex align-items-center justify-content-center">
                    <button onClick={handleBuyNow} className="btn btn-danger px-3"
                    > <span className="px-2">Buy Now</span>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Bicycle;