import 'bootstrap/dist/css/bootstrap.min.css';import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Contact from './Pages/Contact/Contact';
import AuthProvider from './Pages/Context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFoud from './Pages/NotFound/NotFoud';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Booking from './Pages/ServiceDetaiil/ServiceDetail';
import AllServices from './Pages/Services/AllServices';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import UpdateService from './Pages/UpdateService/UpdateService';

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
          <Route path="/about">
          <About></About>
          </Route>
          <Route exact path="/services">
          <AllServices></AllServices>
          </Route>
          <PrivateRoute path="/services/:serviceId">
          <Booking></Booking>
            </PrivateRoute>

            <Route path="/addservice">
              <AddService></AddService>
            </Route>
            <Route path="/updateservice/:serviceId">
              <UpdateService></UpdateService>
            </Route>

          <Route path="/contact">
          <Contact></Contact>
          </Route>
          
          <Route path="/login">
          <Login></Login>
          </Route>

          <Route path="*">
            <NotFoud></NotFoud>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
///একটা ডিব হবার করলে ডিবের ভিতরে যে ডিফারেন্ট ইলিমেন্ট গুলো আছে তাতে প্রত্যেকটাতে ভিন্ন স্টাইল এপ্লাই হয়....