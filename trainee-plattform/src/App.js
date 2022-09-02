import './App.css';
import { Route, Routes } from "react-router-dom" //Routes ist Switch

import PrivateRoutes from './Components/PrivateRoutes';
import Layout from './Components/Layout';

import Login from './Components/Login';
import Signup from './Components/Signup';
import ForgotPassword from "./Components/ForgotPassword"
import Home from './Components/Home';
import Learner from "./Components/Learner"

function App() {


  return (
    <Routes>
      {/* Layout  */}

      {/* public => no Authen or Author */}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />

      {/* protected => requiered auth and author */}
      <Route element={<PrivateRoutes />}>
        {/* Layout  Navbar*/}
        <Route path="*" element={<Layout />} >
          <Route path="" element={<Home />} exact />
          


        </Route>
      </Route>
    </Routes>
  );
}

export default App;
