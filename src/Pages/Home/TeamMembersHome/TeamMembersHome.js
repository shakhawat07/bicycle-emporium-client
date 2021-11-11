import React from 'react';
import './TeamMembersHome.css'

const TeamMembersHome = ({ teamMember }) => {
    const { name, designation, email, img } = teamMember;

    // teamMember image style 
    const teamMemberImgStyle = {
        width: '250px',
        height: '250px',
        borderRadius: '15px'
    }
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="card h-100 border border-light shadow-lg teamMember-card-background">
                <div className="card-body teamMember-img">
                    <img className="p-2 img-fluid" style={teamMemberImgStyle} src={img} alt="" />
                    <h4 className="card-title py-3 fs-4 text-black text-center mt-2 fw-bolder">{name}</h4>
                    <p className="card-details text-center">Designation: {designation}</p>
                    <p className="card-details text-center">Email: {email}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamMembersHome;