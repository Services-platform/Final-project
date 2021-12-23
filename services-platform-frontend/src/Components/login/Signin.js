import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { addUser, addToken } from "../../reducers/user/action";
import Button from "react-bootstrap/Button";
import "./signin.css";

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    axios
      .post("http://localhost:8080/login", { email: email, password: password })
      .then((response) => {
        const token = response.data.access_token;
        const decoded = jwt_decode(token);
        // add to redux
        const userAction = addUser({
          id: decoded.id,
          role: decoded.role,
          email: decoded.sub,
        });
        const tokenAction = addToken(token);
        dispatch(userAction);
        dispatch(tokenAction);
        if (decoded.role == "USER") {
          navigate("/Home");
        } else {
          navigate("/worker/Home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signin-container">
      <form className="signin-form">
        <h3 className="signin-txt">Sign in</h3>
        <hr />
        <div className="form-group">
          <label className="signin-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control signin-input"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label className="signin-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control signin-input"
            placeholder="Enter password"
          />
        </div>
        <div className="my-signin-btn">
          <Button
            variant="primary"
            onClick={() => {
              login();
            }}
          >
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
