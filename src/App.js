import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
// import Navigation from './Pages/Shared/Navigation/Navigation';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import Bicycles from './Pages/Bicycles/Bicycles/Bicycles';
import BicycleDetails from './Pages/Bicycles/BicycleDetails/BicycleDetails';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import About from './Pages/About/About';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          {/* <Navigation></Navigation> */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/bicycles">
              <Bicycles></Bicycles>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/bicycle/:bicycleId">
              <BicycleDetails></BicycleDetails>
            </PrivateRoute>
            {/* <PrivateRoute path="/orders">
              <MyOrders></MyOrders>
            </PrivateRoute> */}
            {/* <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute> */}
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            {/* 
            <PrivateRoute path="/tourCategories">
              <TourCategories></TourCategories>
            </PrivateRoute>
            <PrivateRoute path="/addTourPackage">
              <AddTourPackage></AddTourPackage>
            </PrivateRoute>
            
           
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>*/}
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
