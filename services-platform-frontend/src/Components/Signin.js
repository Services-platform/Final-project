import { useState, useEffect } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import "./signin.css"

function Signin() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [users, setUsers] = useState([]);
    const [workers, setWorkers] = useState([]);
    const [errMsg, setErrMsg] = useState();
    const [errToggle, setErrToggle] = useState(false);
    const [userType, setUserType] = useState(0);

    useEffect(() => {
        axios
        .get("http://localhost:8080/users")
        .then((response) => {
            setUsers(response.data)
        })
        .catch((err) => {
        console.log(err);
        });
        axios
        .get("http://localhost:8080/worker")
        .then((response) => {
            setWorkers(response.data)
        })
        .catch((err) => {
        console.log(err);
        });
        }, []);

    const checkUser = () => {
        let isExist = users.some((element) => {
            return(element.email === email && element.password === password)
        })
        if(isExist){
            console.log(isExist)
        }else{
            setErrMsg("Email or Password is not correct")
            setErrToggle(true)
        }
    }

    const checkWorker = () => {
        let isExist = workers.some((element) => {
            return(element.email === email && element.password === password)
        })
        if(isExist){
            console.log(isExist)
        }else{
            setErrMsg("Email or Password is not correct")
            setErrToggle(true)
        }
    }

    return (
      <div className="signin-container">
          <form className="signin-form">
                <h3 className="signin-txt">Sign in</h3>
                <div className="signin-radio">
                <div className="form-check">
                    <input onClick={() => {setUserType(1)
                        setErrToggle(false)}} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        User
                    </label>
                </div>
                <div className="form-check">
                    <input onClick={() => {setUserType(2)
                    setErrToggle(false)}} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                         Worker
                    </label>
                </div>
                </div>
                <hr/>

                <div className="form-group">
                    <label className="signin-label">Email</label>
                    <input onChange={(e) => {setEmail(e.target.value)}} type="email" className="form-control signin-input" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="signin-label">Password</label>
                    <input onChange={(e) => {setPassword(e.target.value)}} type="password" className="form-control signin-input" placeholder="Enter password" />
                </div>
                <div className="my-signin-btn">
                {errToggle && <label className="error-label">{"* " + errMsg}</label>}
                    <Button variant="primary" onClick={() => {
                        if(userType === 1){checkUser()
                        }else if(userType === 2){checkWorker()
                        }else{setErrMsg("Choose type of user") 
                        setErrToggle(true)}}}>Log in</Button>
                </div>
            </form>
      </div>
    );
  }
  
  export default Signin;