import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SideBar from "../Components/sidebar/SideBar";
import { Form, Button } from "react-bootstrap";

import "./profile.css";

function Profile() {
  const [userData, setUserData] = useState();
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [newName, setNewName] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newPhone, setNewPhone] = useState();
  const navigate = useNavigate();

  const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
      token: state.userReducer.token,
      isLogedIn: state.userReducer.isLogedIn,
    };
  });
  const config = {
    headers: { Authorization: `Bearer ${state.token}` },
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/users/" + state.user.id, config)
      .then((response) => {
        setUserData(response.data);
        setNewName(response.data.name);
        setNewEmail(response.data.email);
        setNewPhone(response.data.phone);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const saveChanges = () => {
    const data = {
      user: {
        name: newName,
        email: newEmail,
        phone: newPhone,
      },
    };
    if (data !== undefined) {
      console.log(data);
      axios
        .put("http://localhost:8080/users/" + state.user.id, data, config)
        .then((response) => {
          navigate("/Home");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="profile-container">
        <div className="sidbar">
          <SideBar />
        </div>
        <div className="profile-body">
          <div className="profile-header">
            <h1>Profile</h1>
            <hr />
          </div>
          {state.isLogedIn === true ? (
            <Form className="profile-form">
              <div className="user-profime-img">
                <img
                  src="../images/user-img.png"
                  width="100px"
                  height="100px"
                />
              </div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <div className="label-icon">
                  <div>
                    <Form.Label className="profile-label">
                      <small className="small-label">User Name/</small>{" "}
                      {userData === undefined ? "" : userData.name}
                    </Form.Label>
                  </div>
                  <div className="div-icon">
                    <i
                      onClick={() => {
                        setEditName(!editName);
                      }}
                      className="edit-icon bi bi-pencil-square"
                    >
                      edit
                    </i>
                  </div>
                </div>
                {editName ? (
                  <Form.Control
                    onChange={(e) => {
                      setNewName(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter New Name"
                  />
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <div className="label-icon">
                  <div>
                    <Form.Label className="profile-label">
                      <small className="small-label">Email/ </small>
                      {userData === undefined ? "" : userData.email}
                    </Form.Label>{" "}
                  </div>
                  <div className="div-icon">
                    <i
                      onClick={() => {
                        setEditEmail(!editEmail);
                      }}
                      className="edit-icon bi bi-pencil-square"
                    >
                      edit
                    </i>
                  </div>
                </div>
                {editEmail ? (
                  <Form.Control
                    onChange={(e) => {
                      setNewEmail(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter New Email"
                  />
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <div className="label-icon">
                  <div>
                    <Form.Label className="profile-label">
                      <small className="small-label">Phone Number/ </small>
                      {userData === undefined ? "" : userData.phone}
                    </Form.Label>{" "}
                  </div>
                  <div className="div-icon">
                    <i
                      onClick={() => {
                        setEditPhone(!editPhone);
                      }}
                      className="edit-icon bi bi-pencil-square"
                    >
                      edit
                    </i>
                  </div>
                </div>
                {editPhone ? (
                  <Form.Control
                    onChange={(e) => {
                      setNewPhone(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter New Phone Number"
                  />
                ) : (
                  ""
                )}
              </Form.Group>
              <div className="send-request-btn">
                {editName || editPhone || editEmail ? (
                  <Button onClick={saveChanges} variant="success">
                    save
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </Form>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
