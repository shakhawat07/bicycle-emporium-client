import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();

    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, []);

    // DELETE AN ORDER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingOrders = myOrders.filter(myOrder => myOrder._id !== id);
                        setMyOrders(remainingOrders);
                    }
                });
        }
    }

    return (
        <div>
            <h1 className="text-primary my-4 text-center">My Orders</h1>
            {
                myOrders.filter(myOrder => myOrder.email === user?.email).map(filtered => (

                    <div className="container-fluid" key={filtered._id}>
                        <Table striped bordered hover variant="dark" responsive>
                            <thead>
                                <tr>
                                    <th>Order Id</th>
                                    {/* <th>Email</th> */}
                                    <th>Bicycle Name</th>
                                    <th>Status</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p className="mb-1 mt-2">{filtered._id}</p>
                                    </td>
                                    {/* <td>
                                                <p className="w-50 mb-1 mt-2">{filtered.email}</p>
                                            </td> */}
                                    <td>
                                        <p className="mb-1 mt-2">{filtered.bicycleName}</p>
                                    </td>
                                    <td>
                                        <p className="mb-1 mt-2">{filtered.status}</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger my-1" onClick={() => handleDeleteUser(filtered._id)}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        {/* <img className="img-fluid border border-secondary rounded p-4" style={{ width: '400px', height: '280px' }} src={filtered.img} alt="" /> */}
                    </div>
                ))
            }
        </div>
    );
};

export default MyOrders;