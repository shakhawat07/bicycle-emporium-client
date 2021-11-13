import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewBicycle.css';

const AddNewBicycle = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://hidden-ridge-10259.herokuapp.com/bicycles', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="">
            <h2 className="text-center text-primary my-3">Add a New Bicycle</h2>
            <div className="addBicycle">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name", { required: true, maxLength: 20 })} placeholder="Bicycle Name" />
                    <input type="text" {...register("type", { required: true })} placeholder="Type (Example: Mountain Bike / Road Bike, etc.)" />
                    <input type="text" {...register("cost", { required: true })} placeholder="Cost is USD" />
                    <input type="text" {...register("suspension", { required: true, maxLength: 20 })} placeholder="Suspension" />
                    <textarea {...register("description", { required: true })} placeholder="Description" />
                    <input type="text" {...register("img", { required: true })} placeholder="Image URL" />
                    <input className="bg-primary text-white w-25 rounded-3" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewBicycle;