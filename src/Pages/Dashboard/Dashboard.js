import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import Home from '../Home/Home/Home';
// import AdminRoute from '../Login/AdminRoute/AdminRoute';
import NotFound from '../NotFound/NotFound';
import AddNewBicycle from './AddNewBicycle/AddNewBicycle';
import AddReview from './AddReview/AddReview';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import ManageBicycles from './ManageBicycles/ManageBicycles';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, admin, logout } = useAuth();
    return (
        <div>
            {/* <h1>This is dashboard</h1> */}
            <Navbar bg="black" expand={false}>
                <Container fluid>
                    <h1 className="text-white">DashBoard</h1>
                    {/* <Navbar.Brand className="text-white fs-2 fw-bolder ms-4 container-fluid" href="#">{user.email ? `Dashboard of ${user.email}` : 'DashBoard'}</Navbar.Brand> */}
                    {/* <Nav.Link href="/orders">My Orders</Nav.Link> */}
                    <Navbar.Toggle className="bg-white" aria-controls="offcanvasNavbar" />

                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    // show="true"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">{user.email ? `Dashboard of ${user.email}` : 'DashBoard'}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {/* <Nav.Link href={`${url}`}>My Orders</Nav.Link> */}
                                <Nav.Link href="/home">Home</Nav.Link>
                                {!admin && <Nav.Link href={`${url}/payment`}>Payment</Nav.Link>}
                                {!admin && <Nav.Link href={`${url}/orders`}>My Orders</Nav.Link>}
                                {!admin && <Nav.Link href={`${url}/review`}>Add Review</Nav.Link>}

                                {admin && <Nav.Link href={`${url}/manageAllOrders`}>Manage All Orders</Nav.Link>}
                                {admin && <Nav.Link href={`${url}/makeAdmin`}>Make Admin</Nav.Link>}
                                {admin && <Nav.Link href={`${url}/addNewBicycle`}>Add New Bicycle</Nav.Link>}
                                {admin && <Nav.Link href={`${url}/manageBicycles`}>Manage Bicycle</Nav.Link>}
                                <Nav.Link href="" onClick={logout}>Logout</Nav.Link>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <Switch>
                <Route exact path={path}>
                    <Payment></Payment>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
                {/* Normal User  */}
                <Route path={`${path}/payment`}>
                    <Payment></Payment>
                </Route>
                <Route path={`${path}/orders`}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/review`}>
                    <AddReview></AddReview>
                </Route>

                {/* Admin  */}
                <Route path={`${path}/manageAllOrders`}>
                    <ManageAllOrders></ManageAllOrders>
                </Route>
                <Route path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </Route>
                <Route path={`${path}/addNewBicycle`}>
                    <AddNewBicycle></AddNewBicycle>
                </Route>
                <Route path={`${path}/manageBicycles`}>
                    <ManageBicycles></ManageBicycles>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>

                {/* <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/addNewBicycle`}>
                   <AddNewBicycle></AddNewBicycle>
                </AdminRoute> */}
            </Switch>
        </div>
    );
};

export default Dashboard;