import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home/Home/Home';
import Services from './Components/Pages/Services/Services';
import Team from './Components/Pages/Team/Team';
import Contact from './Components/Pages/Contact/Contact/Contact';
import Login from './Components/Pages/Login/Login';
import NotFound from './Components/Pages/NotFound/NotFound';
import Service from './Components/Pages/Service/Service/Service';
import AuthProvider from './contexts/AuthProvider';
import AddNewService from './Components/Pages/AddNewService/AddNewService';
import MyOrders from './Components/Pages/MyOrders/MyOrders';
import ManageAllOrders from './Components/Pages/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/service/:serviceId">
              <Service></Service>
            </Route>
            <Route path="/team">
              <Team></Team>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addnewservice">
              <AddNewService></AddNewService>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
