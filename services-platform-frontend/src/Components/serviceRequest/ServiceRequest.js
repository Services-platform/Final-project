import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
import SideBar from "../sidebar/SideBar";

import "./serviceRequest.css";

function ServiceRequest() {
  const state = useSelector((state) => {
    return {
      user: state.userReducer,
      token: state.userReducer.token,
    };
  });
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [city, setCity] = useState("Riyadh");
  const [image, setImage] = useState();
  const [status, setStatus] = useState("pending");
  const [category, setCategory] = useState();

  const imageSelectedHandler = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "zxsjmbo7");
    axios
      .post("https://api.cloudinary.com/v1_1/dex9dc4h2/image/upload", formData)
      .then((response) => {
        setImage(response.data.url);
      });
  };

  const sendRequest = () => {
    const data = {
      post: {
        title: title,
        description: description,
        image: image,
        city: city,
        status: status,
      },
      category_id: category,
      user_id: state.user.user.id,
    };
    if (state.user.isLogedIn) {
      const config = {
        headers: { Authorization: `Bearer ${state.token}` },
      };
      axios
        .post("http://localhost:8080/posts", data, config)
        .then((response) => {
          navigate("/Home");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <div className="request-container">
        <div className="sidbar">
          <SideBar />
        </div>
        <div className="request-body">
          <div className="request-header">
            <h1>
              Request Service
              <hr />
            </h1>
          </div>
          <Form className="request-form">
            <Form.Group as={Row} className="mb-3">
              <Form.Label className="request-label">Category</Form.Label>
              <Row sm={10} className="request-radio">
                <div>
                  <Form.Check
                    onClick={() => {
                      setCategory(1);
                    }}
                    type="radio"
                    label="Home services"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                </div>
                <div>
                  <Form.Check
                    onClick={() => {
                      setCategory(2);
                    }}
                    type="radio"
                    label="Car services"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                </div>
                <div>
                  <Form.Check
                    onClick={() => {
                      setCategory(3);
                    }}
                    type="radio"
                    label="Phone services"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </div>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="request-label">Title</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
                placeholder="Enter title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="request-label">City</Form.Label>
              <Form.Select>
                <option
                  onClick={() => {
                    setCity("Riyadh");
                  }}
                >
                  Riyadh
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="request-label">Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => {
                  imageSelectedHandler(e.target.files);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="request-label">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>
            <div className="send-request-btn">
              <Button onClick={sendRequest} variant="success">
                Send
              </Button>{" "}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ServiceRequest;
