import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Bicycle from '../Bicycle/Bicycle';
import './Bicycles.css';

const Bicycles = () => {
    const [bicycles, setBicycles] = useState([]);
    useEffect(() => {
        fetch(`https://hidden-ridge-10259.herokuapp.com/bicycles`)
            .then(res => res.json())
            .then(data => setBicycles(data));
    }, []);
    // console.log(bicycles);
    return (
        <>
            <Navigation></Navigation>
            <div className="container-fluid bicycles-container">
                <h1 className="text-center fw-bold mt-5">Our <span className="text-primary">Bicycles</span></h1>
                <hr />
                <div className="row">
                    {
                        bicycles.map(bicycle =>
                            <Bicycle
                                key={bicycle._id}
                                bicycle={bicycle}
                            ></Bicycle>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Bicycles;