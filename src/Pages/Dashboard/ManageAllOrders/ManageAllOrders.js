import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`https://hidden-ridge-10259.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [myOrders]);

    // DELETE AN ORDER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://hidden-ridge-10259.herokuapp.com/orders/${id}`;
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

    // UPDATE ORDER STATUS
    const handleOrderStatus = id => {
        const proceed = window.confirm('Are you sure, you want to approve the order?');
        if (proceed) {
            const url = `https://hidden-ridge-10259.herokuapp.com/orders/${id}`;

            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(myOrders)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Status Update Successful');
                        // setUser({});
                    }
                });
        }
    }
    return (
        <div>
            <h1 className="text-primary my-4 text-center">Manage All Orders</h1>
            {
                myOrders.map(filtered =>
                    < div className="container-fluid" key={filtered._id}>
                        <Table striped bordered hover variant="dark" responsive>
                            <thead>
                                <tr>
                                    <th>Order Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Bicycle Name</th>
                                    <th>Status</th>
                                    <th>Delete</th>
                                    <th>Status Approve</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p className="mb-1 mt-2">{filtered._id}</p>
                                    </td>
                                    <td>
                                        <p className="mb-1 mt-2">{filtered.name}</p>
                                    </td>
                                    <td>
                                        <p className="mb-1 mt-2">{filtered.email}</p>
                                    </td>
                                    <td>
                                        <p className="mb-1 mt-2">{filtered.bicycleName}</p>
                                    </td>
                                    <td>
                                        <p className="mb-1 mt-2">{filtered.status}</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger my-1" onClick={() => handleDeleteUser(filtered._id)}>Delete</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger my-1" onClick={() => handleOrderStatus(filtered._id)}>Approved</button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                )
            }
        </div>
    );
};

export default ManageAllOrders;