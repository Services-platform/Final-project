import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import SideBar from "../sidebar/SideBar";
import "./userRequests.css";

function UserRequests() {
  const [userPosts, setUserPosts] = useState();
  const [postOffers, setPostOffers] = useState();
  const [showOffers, setShowOffers] = useState(false);

  const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
      token: state.userReducer.token,
    };
  });
  const config = {
    headers: { Authorization: `Bearer ${state.token}` },
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/posts/user/" + state.user.id, config)
      .then((response) => {
        setUserPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const getOffers = (postId) => {
    axios
      .get("http://localhost:8080/offer/post/" + postId, config)
      .then((response) => {
        setPostOffers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deletePost = (postId) => {
    axios
      .delete("http://localhost:8080/posts/" + postId, config)
      .then((response) => {
        setUserPosts((userPosts) =>
          userPosts.filter((post) => post.post_id !== postId)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="user-requests-container">
      <div>
        <SideBar />
      </div>
      <div className="user-requests-body">
        <div className="request-header">
          <h1>My Requests</h1>
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
                      <div className="user-post-btns">
                        <Button
                          variant="danger"
                          className="delete-request-btn"
                          onClick={() => {
                            deletePost(element.post_id);
                          }}
                        >
                          Delete Request
                        </Button>
                        <Button
                          variant="warning"
                          className="delete-request-btn"
                          onClick={() => {
                            showOffers
                              ? setShowOffers(false)
                              : setShowOffers(true);
                            getOffers(element.post_id);
                          }}
                        >
                          Show offers
                        </Button>
                      </div>
                      {showOffers && (
                        <>
                          <div className="request-header">
                            <hr />
                            <h3>Offers</h3>
                          </div>
                          <div className="user-offers">
                            {postOffers !== undefined ? (
                              <>
                                {postOffers.map((element) => {
                                  return (
                                    <>
                                      <Card
                                        className="offer-card"
                                        style={{ width: "15rem" }}
                                      >
                                        <div className="worker-img">
                                          <img
                                            src="../images/user-img.png"
                                            width="80px"
                                            height="80px"
                                          />
                                        </div>
                                        <Card.Body>
                                          <Card.Title className="offer-title">
                                            {element.worker.user.name}
                                          </Card.Title>
                                          <Card.Text className="offer-text">
                                            <label className="user-card-label">
                                              <small>Price/ </small>
                                            </label>
                                            {element.offer_price}
                                          </Card.Text>
                                          <Card.Text className="offer-text">
                                            <label className="user-card-label">
                                              <small>Speciality/ </small>
                                            </label>
                                            {element.worker.speciality}
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
                                    </>
                                  );
                                })}
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </>
                      )}
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
