import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [allOrders, setAllOrders] = useState([]);
    // const [status, setStatus] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);
    allOrders.map(order => console.log(order.user.email));
    const myOrders = allOrders.filter(order => order.user.email === user.email);

    const handleUpdatedStatus = (_id, status, ...rest) => {
        const url = `http://localhost:5000/allOrders/${_id}`;
        const updatedStatus = 'approved';
        const updatedUser = { status: updatedStatus, ...rest }
        // setStatus(updatedStatus);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
    }

    return (
        <div className="my-5 py-5 container">
            <h2>My orders</h2>
            <table className="bg-white table w-75 mx-auto mt-5">
                <thead>
                    <tr>
                        <th scope="col">Order list</th>
                        <th scope="col">status</th>
                        <th scope="col">approved</th>
                        <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myOrders.map(order => {
                            const { _id, service, user, data, status } = order;
                            console.log(order)
                            return (
                                <tr key={_id}>
                                    <td>
                                        <ul className="text-start list-unstyled ms-5">
                                            <li>
                                                <div>
                                                    <h4>{service.title}</h4>
                                                    <p className="text-muted">by {user.displayName}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="my-auto">{status}</td>
                                    <td><button className="btn-success" onClick={() => handleUpdatedStatus(_id, status, data, service, user)}>{status}</button></td>
                                    <td><button className="btn-danger">delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;