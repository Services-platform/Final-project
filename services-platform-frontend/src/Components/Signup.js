import { useState } from "react";
import axios from 'axios';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import "./signup.css"

function Signup() {

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [phone, setPhone] = useState();
    const [speciality, setSpeciality] = useState();
    const [category, setCategory] = useState(0);
    const [role, setRole] = useState(1);
    const [errMsg, setErrMsg] = useState();
    const [errToggle, setErrToggle] = useState(false);
    const [toggle, setToggle] = useState(false);

    const sendUserrData = () => {
        if(errToggle === true){setErrToggle(false)}
        if(userName === undefined){
            setErrMsg("Please Enter User name")
            setErrToggle(!errToggle)
        }else if(email === undefined){
            setErrMsg("Please Enter your Email")
            setErrToggle(!errToggle)
        }else if(phone === undefined){
            setErrMsg("Please Enter your phone number")
            setErrToggle(!errToggle)
        }else if(password === undefined){
            setErrMsg("Please Enter your password")
            setErrToggle(!errToggle)
        }else {
            axios
            .post("http://localhost:8080/users", 
            {
                "user":
                {
                    "name": userName,
                    "email": email,
                    "phone": phone,
                    "password": password
                },
                "role_id": role
            })
            .then((response) => {
            console.log(response)
            })
            .catch((err) => {
            console.log(err);
            });
        }
    }
    const sendWorkerData = () => {
        if(errToggle === true){setErrToggle(false)}
        if(category === 0){
            setErrMsg("Please Choose Category")
            setErrToggle(!errToggle)
        }else if(userName === undefined){
            setErrMsg("Please Enter User name")
            setErrToggle(!errToggle)
        }else if(email === undefined){
            setErrMsg("Please Enter your Email")
            setErrToggle(!errToggle)
        }else if(phone === undefined){
            setErrMsg("Please Enter your phone number")
            setErrToggle(!errToggle)
        }else if(password === undefined){
            setErrMsg("Please Enter your password")
            setErrToggle(!errToggle)
        }else if(speciality === undefined){
            setErrMsg("Please Enter your speciality")
            setErrToggle(!errToggle)
        }else {
            axios
            .post("http://localhost:8080/users", 
            {
                "user":
                {
                    "name": userName,
                    "email": email,
                    "phone": phone,
                    "password": password
                },
                "role_id": role
            })
            .then((response) => {
            axios
            .post("http://localhost:8080/worker", 
            {
                "worker":
                {
                    "speciality": speciality,
                    "rating" : 5
                },
                "user_id": response.data.id,
                "category_id": category
            })
            .then((response) => {
            console.log(response)
            })
            .catch((err) => {
            console.log(err);
            });
            })
            .catch((err) => {
            console.log(err);
            });
            // axios
            // .post("http://localhost:8080/worker", 
            // {
            //     "worker":
            //     {
            //         "worker_name": userName,
            //         "email": email,
            //         "phone": phone,
            //         "speciality": speciality,
            //         "password": password,
            //         "rating" : 5
            //     },
            //     "category_id": category
            // })
            // .then((response) => {
            // console.log(response)
            // })
            // .catch((err) => {
            // console.log(err);
            // });
        }
    }

    return (
        <div className="signup-container">
            <form className="signup-form">
                <h3 className="signup-txt">Sign Up</h3>
                <div className="signup-radio">
                <div className="form-check">
                    <input onClick={() => {
                        setToggle(false)
                        setRole(1)}} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        User
                    </label>
                </div>
                <div className="form-check">
                    <input onClick={() => {
                        setToggle(true)
                        setRole(2)}} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                         Worker
                    </label>
                </div>
                </div>
                <hr/>
                <div className="form-group">
                    <label className="signup-label">User name</label>
                    <input onChange={(e) => {setUserName(e.target.value)}} type="text" className="form-control signup-input" placeholder="Enter user name" />
                </div>

                <div className="form-group">
                    <label className="signup-label">Email</label>
                    <input onChange={(e) => {setEmail(e.target.value)}} type="email" className="form-control signup-input" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="signup-label">Phone</label>
                    <input onChange={(e) => {setPhone(parseInt(e.target.value))}} type="text" className="form-control signup-input" placeholder="Phone number" />
                </div>
                {toggle && <div className="form-group">
                    <label className="signup-label">Speciality</label>
                    <input onChange={(e) => {setSpeciality(e.target.value)}} type="text" className="form-control signup-input" placeholder="Enter speciality" />
                </div>}
                <div className="form-group">
                    <label className="signup-label">Password</label>
                    <input onChange={(e) => {setPassword(e.target.value)}} type="password" className="form-control signup-input" placeholder="Enter password" />
                </div>
                {toggle && <div>
                    <label className="signup-label">Category</label>
                    <div className="signup-btn-group">
                        <ButtonGroup aria-label="Basic example" size="sm">
                            <Button variant="primary" onClick={() => {setCategory(1)}}>Home services</Button>
                            <Button variant="primary" onClick={() => {setCategory(2)}}>Car services</Button>
                            <Button variant="primary" onClick={() => {setCategory(3)}}>Phone services</Button>
                        </ButtonGroup>
                    </div>
                </div>}
                <div className="my-signup-btn">
                {errToggle && <label className="error-label">{"* " + errMsg}</label>}
                    <Button variant="primary" onClick={() => {if(toggle === true){sendWorkerData()}else{sendUserrData()}}}>Sign Up</Button>
                    <p className="signup-p">
                    Already have an account? <a href="/signin">sign in</a>
                    </p>
                </div>
            </form>
        </div>
    );
  }
  
  export default Signup;