import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './BicycleDetails.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const BicycleDetails = () => {
    const [bicycles, setBicycles] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/bicycles`)
            .then(res => res.json())
            .then(data => setBicycles(data));
    }, []);
    // console.log(bicycles);
    const { bicycleId } = useParams();
    // console.log(bicycleId);
    // console.log(typeof bicycleId);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        // console.log(data);

        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            {
                bicycles.filter(bicycle => bicycle._id === bicycleId).map(filtered =>
                (
                    < div className="container-fluid" key={filtered}>
                        <div className="row m-2 bicycleDetails-container">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center mb-3">
                                <h1 className="fw-5 my-3 text-primary">{filtered.name}</h1>
                                <img className="img-fluid border border-secondary rounded p-4" style={{ width: '500px', height: '280px' }} src={filtered.img} alt="" />
                                <p className="w-75 mb-1 mt-2"> <span className="fw-bold">Price: </span>$ {filtered.cost}</p>
                                <p className="w-75 my-1"><span className="fw-bold">Bike Type: </span>{filtered.type}</p>
                                <p className="w-75 my-1"><span className="fw-bold">Description: </span>{filtered.description}</p>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center">
                                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                                    <h3 className="text-center text-primary">Place Order</h3>

                                    <input type="hidden" placeholder="Key" defaultValue={filtered._id} {...register("key")} />

                                    <input type="hidden" placeholder="Bicycle Name" defaultValue={filtered.name} {...register("bicycleName")} />

                                    <input defaultValue={user.displayName} {...register("name")} />

                                    <input defaultValue={user.email} {...register("email", { required: true })} />

                                    {errors.email && <span className="error">This field is required</span>}

                                    <input placeholder="Address" defaultValue="" {...register("address")} />

                                    <input placeholder="Phone number" defaultValue="" {...register("phone")} />

                                    <input type="hidden" placeholder="Status" defaultValue="Pending" {...register("status")} />

                                    <input className="bg-primary" type="submit" value="Place Order" />
                                </form>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    );
};

export default BicycleDetails;