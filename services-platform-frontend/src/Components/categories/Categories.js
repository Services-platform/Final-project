import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "./categories.css";

function Categories() {
  const state = useSelector((state) => {
    return {
      user: state.userReducer,
    };
  });
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Button
          onClick={() => {
            state.user.isLogedIn
              ? navigate("/service/request")
              : navigate("/signin");
          }}
          className="request-btn"
          variant="warning"
        >
          +Request service
        </Button>
      </div>
      <div className="category-container">
        <h1>
          Our services
          <hr />
        </h1>
      </div>
      <div className="category-list">
        <div>
          <img src="./images/home-service.png" height="130" width="130"></img>
          <div className="category-name">
            <h4>Home services</h4>
            <div className="service-icons">
              <div>
                <img src="./images/plumbing.png" width="25px" height="25px" />
                <label className="icon-txt">plumbing repair work.</label>
              </div>
              <div>
                <img src="./images/bolt.png" width="25px" height="25px" />
                <label className="icon-txt">Electrical repair work.</label>
              </div>
              <div>
                <img
                  src="./images/air-conditioner.png"
                  width="25px"
                  height="25px"
                />
                <label className="icon-txt">
                  Air conditioning maintenance.
                </label>
              </div>
              <div>
                <img src="./images/gas.png" width="25px" height="25px" />
                <label className="icon-txt">Delivery of fuel.</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="./images/car-repair.png" height="130" width="130"></img>
          <div className="category-name">
            <h4>Car services</h4>
            <div className="service-icons car">
              <div>
                <img src="./images/tire.png" width="25px" height="25px" />
                <label className="icon-txt">Fixing tire issues.</label>
              </div>
              <div>
                <img src="./images/battery.png" width="25px" height="25px" />
                <label className="icon-txt">replacing a battery.</label>
              </div>
              <div>
                <img src="./images/locked-car.png" width="25px" height="25px" />
                <label className="icon-txt">Unlocking vehicles.</label>
              </div>
              <div>
                <img src="./images/gas-pump.png" width="25px" height="25px" />
                <label className="icon-txt">Delivery of Gas.</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="./images/smartphone.png" height="130" width="130"></img>
          <div className="category-name">
            <h4>Phone services</h4>
            <div className="service-icons">
              <div>
                <img src="./images/apple.png" width="25px" height="25px" />
                <label className="icon-txt">iPhone maintenance.</label>
              </div>
              <div>
                <img src="./images/android.png" width="25px" height="25px" />
                <label className="icon-txt">Android maintenance.</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
