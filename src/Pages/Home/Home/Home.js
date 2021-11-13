import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import BicyclesHome from '../BicyclesHome/BicyclesHome';
import TeamMembersHome from '../TeamMembersHome/TeamMembersHome';
import Navigation from '../../Shared/Navigation/Navigation';
import ReviewsHome from '../ReviewsHome/ReviewsHome';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    const [bicycles, setBicycles] = useState([]);
    const [teamMembers, setTeamMembers] = useState([]);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://hidden-ridge-10259.herokuapp.com/bicycles`)
            .then(res => res.json())
            .then(data => setBicycles(data));
    }, []);
    // console.log(bicycles);

    useEffect(() => {
        fetch(`https://hidden-ridge-10259.herokuapp.com/teamMembers`)
            .then(res => res.json())
            .then(data => setTeamMembers(data));
    }, []);
    // console.log(teamMembers);

    useEffect(() => {
        fetch(`https://hidden-ridge-10259.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    // console.log(reviews);
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <h1 className="text-center mt-5 fw-bold">Our <span className="text-primary">Bicycles</span></h1>
            <hr />
            {/* our bicycles  */}
            <section className="tourPackagesHome-container">
                {
                    bicycles.slice(0, 6).map(bicycle => <BicyclesHome
                        key={bicycle._id}
                        bicycle={bicycle}
                    ></BicyclesHome>
                    )
                }
            </section>

            <h1 className="text-center fw-bold mt-4">Meet <span className="text-primary">The Team</span></h1>
            <hr />
            {/* our team members */}
            <section className="teamMembersHome-container mb-5 container-fluid">
                <div className="row p-5">
                    {
                        teamMembers.slice(0, 4).map(teamMember => <TeamMembersHome
                            key={teamMember._id}
                            teamMember={teamMember}
                        ></TeamMembersHome>
                        )
                    }
                </div>
            </section>

            <h1 className="text-center fw-bold mt-4">Why <span className="text-primary">Choose Us?</span></h1>
            <hr />
            {/* Why Choose Us  */}
            <section className="container-fluid">
                <WhyChooseUs></WhyChooseUs>
            </section>

            <h1 className="text-center fw-bold mt-4">Clients <span className="text-primary">Reviews</span></h1>
            <hr />
            {/* our clients reviews */}
            <section className="reviewsHome-container mb-5 container-fluid">
                <div className="row p-5">
                    {
                        reviews.map(review => <ReviewsHome
                            key={review._id}
                            review={review}
                        ></ReviewsHome>
                        )
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;