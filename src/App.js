import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <PrivateRoute exact path="/appointment">
              <Appointment />
            </PrivateRoute>

            <PrivateRoute  path="/dashboard">
              <Dashboard />
            </PrivateRoute>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>



          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
