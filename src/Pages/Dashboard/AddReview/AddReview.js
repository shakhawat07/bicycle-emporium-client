import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://hidden-ridge-10259.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="">
            <h2 className="text-center text-primary my-3">Add Review</h2>
            <div className="addReview">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name", { required: true, maxLength: 20 })} placeholder="User Name" value={user.displayName} />
                    <input type="email" {...register("email", { required: true })} placeholder="Email" value={user.email} />
                    <textarea {...register("description")} placeholder="Description" />
                    <input type="number" min="0" max="5" {...register("star", { required: true })} placeholder="Rating (Type 0-5 any integer number)" />
                    <input className="bg-primary text-white w-25 rounded-3" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;