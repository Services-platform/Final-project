import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import "./offers.css";
import SideBar from "../sidebar/SideBar";

function Offers() {
  const [offers, setOffers] = useState();
  const [userdetails, setUserDetails] = useState(false);
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
      .get("http://localhost:8080/offer/worker/" + state.user.id, config)
      .then((response) => {
        console.log(response.data);
        setOffers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="offer-container">
      <div className="sidbar">
        <SideBar />
      </div>
      <div className="worker-offers-body">
        <div className="offers-header">
          <h1>Accepted Offers</h1>
        </div>
        {offers !== undefined ? (
          <>
            {offers.map((element, index) => {
              return (
                <>
                  <Card className="text-center user-request-card" key={index}>
                    <Card.Header className="card-header">
                      {element.post.category.category_name}
                    </Card.Header>
                    <Card.Body>
                      <div className="user-request-top">
                        <div>
                          <img
                            className="user-request-img"
                            src={element.post.image}
                            height="100%"
                            width="100%"
                          />
                        </div>
                        <div className="user-request-details">
                          <Card.Title className="user-request-title">
                            <label className="user-card-label">
                              <small>Request Title/ </small>
                            </label>
                            {element.post.title}
                          </Card.Title>
                          <Card.Text className="user-request-description">
                            <label className="user-card-label">
                              <small>Description/ </small>
                            </label>
                            {element.post.description}
                          </Card.Text>
                          <Card.Text className="user-request-description">
                            <label className="user-card-label">
                              <small>Offer Price/ </small>
                            </label>
                            {element.offer_price}
                          </Card.Text>
                          <Card.Text className="user-request-description">
                            <label className="user-card-label">
                              <small>Status/ </small>
                            </label>
                            {element.offer_status}
                          </Card.Text>
                        </div>
                      </div>
                      <div className="user-details-btns">
                        <Button
                          variant="warning"
                          className="user-details-btn"
                          onClick={() => {
                            userdetails
                              ? setUserDetails(false)
                              : setUserDetails(true);
                          }}
                        >
                          {userdetails ? "Hide" : "Show"} User Details
                        </Button>
                      </div>
                      {userdetails && (
                        <>
                          <div className="offers-header">
                            <hr />
                          </div>
                          <div className="user-details">
                            <Card
                              className="user-details-card"
                              style={{ width: "15rem" }}
                            >
                              <div className="user-profile-img">
                                <img
                                  src="../images/user-img.png"
                                  width="80px"
                                  height="80px"
                                />
                              </div>
                              <Card.Body>
                                <Card.Title className="user-details-title">
                                  {element.post.user.name}
                                </Card.Title>
                                <Card.Text className="user-details-text">
                                  <label className="user-card-label">
                                    <small>Phone/ </small>
                                  </label>
                                  {element.post.user.phone}
                                </Card.Text>
                                <Card.Text className="offer-text">
                                  <label className="user-card-label">
                                    <small>City/ </small>
                                  </label>
                                  {element.post.city}
                                </Card.Text>
                              </Card.Body>
                            </Card>
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
export default Offers;
