import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/signup/Signup";
import Signin from "./Components/login/Signin";
import Navbar from "./Components/navbar/Navbar";
import UserHome from "./Components/userHome/UserHome";
import ServiceRequest from "./Components/serviceRequest/ServiceRequest";
import "./App.css";
import WorkerHome from "./Components/workerHome/WorkerHome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<UserHome />} />
          <Route path="/worker/Home" element={<WorkerHome />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Service/request" element={<ServiceRequest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
