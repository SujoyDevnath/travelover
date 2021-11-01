import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allOrders]);

    // updating status
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

    // deleting order
    const handleDeleteOrder = (_id) => {
        const url = `http://localhost:5000/allOrders/${_id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted seccessfully');
                    const remainingOrders = allOrders.filter(order => order._id !== _id)
                    setAllOrders(remainingOrders);
                }
            })
    }

    return (
        <div className="my-5 py-5 container">
            <h2>All orders</h2>
            <table className="bg-white table w-75 mx-auto mt-5">
                <thead>
                    <tr>
                        <th scope="col">Order list</th>
                        {/* <th scope="col">status</th> */}
                        <th scope="col">status</th>
                        <th scope="col">delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allOrders.map(order => {
                            const { _id, service, user, data, status } = order;
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
                                    {/* <td className="my-auto">{status}</td> */}
                                    <td>
                                        <Link to="/manageAllOrders">
                                            <button className="btn-success" onClick={() => handleUpdatedStatus(_id, status, data, service, user)}>{status}</button>
                                        </Link>
                                    </td>
                                    <td><button className="btn-danger" onClick={() => handleDeleteOrder(_id)}>delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;