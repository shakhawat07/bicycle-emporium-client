import React, { useEffect, useState } from 'react';
import Bicycle from '../Bicycle/Bicycle';
import './Bicycles.css';

const Bicycles = () => {
    const [bicycles, setBicycles] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/bicycles`)
            .then(res => res.json())
            .then(data => setBicycles(data));
    }, []);
    // console.log(bicycles);
    return (
        <div className="container-fluid bicycles-container">
            <h1 className="text-center fw-bold mt-5">Our <span className="text-primary">Bicycles</span></h1>
            <hr />
            <div className="row p-5">
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
    );
};

export default Bicycles;