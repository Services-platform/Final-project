import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import SideBar from "../sidebar/SideBar";
import "./userRequests.css";

function UserRequests() {
  const [userPosts, setUserPosts] = useState();
  // const [postTitle, setPostTitle] = useState();
  // const [postDescription, setPostDescription] = useState();
  // const [postCategory, setPostCategory] = useState();
  // const [postImage, setPostImage] = useState();
  // const [workerName, setWorkerName] = useState();
  // const [title, setTitle] = useState();

  const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
      token: state.userReducer.token,
    };
  });
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${state.token}` },
    };
    axios
      .get("http://localhost:8080/posts/user/2", config)
      .then((response) => {
        console.log(response.data);
        setUserPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="user-requests-container">
      <div>
        <SideBar />
      </div>
      <div className="user-requests-body">
        <div className="request-header">
          <h1>
            My Requests
            {/* <hr /> */}
          </h1>
        </div>
        {userPosts !== undefined ? (
          <>
            {userPosts.map((element, index) => {
              return (
                <>
                  <Card className="text-center user-request-card" key={index}>
                    <Card.Header className="card-header">
                      Request {userPosts.indexOf(element) + 1}
                    </Card.Header>
                    <Card.Body>
                      <div className="user-request-top">
                        <div>
                          <img
                            className="user-request-img"
                            src={element.image}
                            height="100%"
                            width="100%"
                          />
                        </div>
                        <div className="user-request-details">
                          <Card.Title className="user-request-title">
                            <label className="user-card-label">
                              <small>Request Title/ </small>
                            </label>
                            {element.title}
                          </Card.Title>
                          <Card.Text className="user-request-description">
                            <label className="user-card-label">
                              <small>Description/ </small>
                            </label>
                            {element.description}
                          </Card.Text>
                          <Card.Text className="user-request-description">
                            <label className="user-card-label">
                              <small>Category/ </small>
                            </label>
                            {element.category.category_name}
                          </Card.Text>
                        </div>
                      </div>
                      <Button variant="danger" className="delete-request-btn">
                        Delete
                      </Button>
                      <div className="request-header">
                        <hr />
                        <h3>Offers</h3>
                      </div>
                      <div className="user-offers">
                        <Card className="offer-card" style={{ width: "15rem" }}>
                          <div className="worker-img">
                            <img
                              src="../images/user-img.png"
                              width="80px"
                              height="80px"
                            />
                          </div>
                          <Card.Body>
                            <Card.Title className="offer-title">
                              Card Title
                            </Card.Title>
                            <Card.Text className="offer-text">
                              Some quick
                            </Card.Text>
                            <div className="offer-btns">
                              <Button variant="success" size="sm">
                                Accept
                              </Button>
                              <Button variant="danger" size="sm">
                                Reject
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                  </Card>
                </>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default UserRequests;
