import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./Components/Signup"
import Signin from "./Components/Signin"
import Navbar from "./Components/Navbar";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/signin"  element={<Signin/>} />
          <Route path="/signup"  element={<Signup/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
