import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/signup/Signup";
import Signin from "./Components/login/Signin";
import Navbar from "./Components/navbar/Navbar";
import UserHome from "./Components/userHome/UserHome";
import ServiceRequest from "./Components/serviceRequest/ServiceRequest";
import Offers from "./Components/offers/Offers";
import WorkerHome from "./Components/workerHome/WorkerHome";
import UserRequests from "./Components/userRequests/UserRequests";

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
          <Route path="/service/request" element={<ServiceRequest />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/user/requests" element={<UserRequests />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
