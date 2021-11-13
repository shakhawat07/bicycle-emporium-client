import React from 'react';
import ReactRating from 'react-rating';
import './ReviewsHome.css';

const ReviewsHome = ({ review }) => {
    const { name, email, description, star } = review;
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card h-100 border border-light shadow-lg review-card-background">
                <div className="card-body review-img">
                    {/* <img className="p-2 img-fluid" style={teamMemberImgStyle} src={img} alt="" /> */}
                    <h4 className="card-title py-3 fs-4 text-black text-center mt-2 fw-bolder">{name}</h4>
                    <p className="card-details text-center">Email: {email}</p>
                    <p className="card-details text-center">Review: {description}</p>
                    {/* <p className="card-details text-center">Star: {star}</p> */}
                    <ReactRating className="d-flex justify-content-center"
                        initialRating={star}
                        readonly
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                    ></ReactRating>
                </div>
            </div>
        </div>
    );
};

export default ReviewsHome;