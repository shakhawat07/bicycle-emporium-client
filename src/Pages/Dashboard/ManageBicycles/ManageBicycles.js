import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageBicycles = () => {
    const [bicycles, setBicycles] = useState([]);

    useEffect(() => {
        fetch(`https://hidden-ridge-10259.herokuapp.com/bicycles`)
            .then(res => res.json())
            .then(data => setBicycles(data));
    }, [bicycles]);

    // DELETE AN ORDER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://hidden-ridge-10259.herokuapp.com/bicycles/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingBicycles = bicycles.filter(bicycle => bicycle._id !== id);
                        setBicycles(remainingBicycles);
                    }
                });
        }
    }
    return (
        <div>
            <h1 className="text-primary my-4 text-center">Manage Bicycles</h1>
            {
                bicycles.map(filtered =>
                    < div className="container-fluid" key={filtered._id}>
                        <Table striped bordered hover variant="dark" responsive>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Bicycle Name</th>
                                    <th>Cost</th>
                                    <th>Delete</th>
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
                                        <p className="mb-1 mt-2">{filtered.cost}</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger my-1" onClick={() => handleDeleteUser(filtered._id)}>Delete</button>
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

export default ManageBicycles;