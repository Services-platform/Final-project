import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Card, Button, Form } from "react-bootstrap";
import SideBar from "../sidebar/SideBar";
import "./workerHome.css";

function WorkerHome() {
  const [requests, setRequests] = useState();
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://localhost:8080/posts", config)
      .then((response) => {
        setRequests(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="home-container">
      <div>
        <SideBar />
      </div>
      <div className="worker-main">
        <div className="worker-home-header">
          <h1>
            Users Requests
            <hr />
          </h1>
        </div>
        <div className="request-cards">
          {requests !== undefined ? (
            <>
              {requests.map((element) => {
                return (
                  <Card
                    key={element.id}
                    className="card"
                    style={{ width: "22rem" }}
                  >
                    <div className="card-category">
                      <Card.Text>{element.category.category_name}</Card.Text>
                    </div>
                    <Card.Img
                      className="card-img"
                      variant="top"
                      src={element.image}
                    />
                    <Card.Body>
                      <Card.Title className="card-title">
                        {element.title}
                      </Card.Title>
                      <Card.Text>
                        <span className="card-span">
                          <small>Request details</small>
                          <br />
                        </span>
                        {element.description}
                      </Card.Text>
                      <div className="offer-btn">
                        <Button className="send-offer-btn" variant="warning">
                          send offer
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkerHome;
