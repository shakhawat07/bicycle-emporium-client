import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"



const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-black text-white py-2 px-1">
                <div className="col-lg-4 col-md-12 cl-sm-12 col-12 px-5 text-center py-5">
                    <img className="img-fluid mb-3" src="https://image.freepik.com/free-vector/motorcycle-wheel-logo_23-2147491893.jpg" alt="" width="55" height="30" />
                    <h3>© Bicycle Emporium</h3>

                    {/* https://image.freepik.com/free-vector/man-riding-bicycle-exercise_24877-54694.jpg */}
                </div>
                <div className="col-lg-4 col-md-12 cl-sm-12 col-12 py-5 d-flex justify-items-center align-items-center flex-column">
                    <h2 className="mb-3">Follow Us</h2>
                    <h3><FontAwesomeIcon icon={faFacebookSquare} /> <FontAwesomeIcon icon={faInstagramSquare} /> <FontAwesomeIcon icon={faTwitterSquare} /> <FontAwesomeIcon icon={faYoutubeSquare} /></h3>

                </div>
                <div className="col-lg-4 col-md-12 cl-sm-12 col-12 text-center py-2">
                    <h2 className="pb-2">Contact Us</h2>
                    <p><span className="fw-lighter">Mobile:</span> 0197666****</p>
                    <p><span className="fw-lighter">Email: </span>bicycleemporium@gmail.com</p>
                    <p><span className="fw-lighter">Location:</span> H #33, R #2, B #F, Banasree, Dhaka-1219</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;