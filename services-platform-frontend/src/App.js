import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./Components/signup/Signup"
import Signin from "./Components/login/Signin"
import Navbar from "./Components/navbar/Navbar";
import UserHome from "./Components/userHome/UserHome";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/Home"  element={<UserHome/>} />
          <Route path="/signin"  element={<Signin/>} />
          <Route path="/signup"  element={<Signup/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
