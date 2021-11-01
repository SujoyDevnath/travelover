import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import './ServiceCart.css';
import { useHistory } from 'react-router-dom';

const ServiceCart = ({ service }) => {
    const history = useHistory();
    const { user } = useAuth();
    const { price } = service;
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const doc = { data, status: 'pending', user, service };
        console.log(doc);
        fetch('http://localhost:5000/allOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(doc)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    history.push('/myOrders')
                    reset();
                }
            })

    }
    return (
        <div className="bg-white p-3">
            <h3 className="service-cart-price">price: <span>${price}</span></h3>
            <h3 className="fw-bold pt-3">{user.displayName}</h3>
            <h5 className="fw-bold">{user.email}</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="service-input">
                    <input {...register("address", { required: true, maxLength: 20 })} placeholder="Your address" />
                    <input type="number" {...register("phone")} placeholder="Your phone number" />
                </div>
                <input className="service-form-submit" type="submit" />
            </form>

        </div>
    );
};

export default ServiceCart;