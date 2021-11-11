import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import BicyclesHome from '../BicyclesHome/BicyclesHome';
import TeamMembersHome from '../TeamMembersHome/TeamMembersHome';

const Home = () => {
    const [bicycles, setBicycles] = useState([]);
    const [teamMembers, setTeamMembers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/bicycles`)
            .then(res => res.json())
            .then(data => setBicycles(data));
    }, []);
    console.log(bicycles);

    useEffect(() => {
        fetch(`http://localhost:5000/teamMembers`)
            .then(res => res.json())
            .then(data => setTeamMembers(data));
    }, []);
    // console.log(teamMembers);
    return (
        <div>
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
        </div>
    );
};

export default Home;