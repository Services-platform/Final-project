import { useSelector } from "react-redux";
import profileImg from "../../images/profile-icon.jpg";
import "./sidebar.css";

function SideBar() {
  const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
      isLogedIn: state.userReducer.isLogedIn,
    };
  });
  return (
    <div>
      <div className="side-bar-container">
        <div className="side-bar-items">
          <div className="user-side-bar">
            {state.isLogedIn ? (
              <>
                <div className="profile-name">
                  <img src={profileImg} height="35px" width="35px" />
                  <h3 className="user-first-name">{state.user.name}</h3>
                </div>
                <a className="nav-link text-white" href="#">
                  Profile
                </a>
              </>
            ) : (
              ""
            )}
            {state.user.role === "USER" ? (
              <>
                <a className="nav-link text-white" href="/Home">
                  Home
                </a>
                <a className="nav-link text-white" href="/user/requests">
                  My Requests
                </a>
              </>
            ) : state.user.role === "WORKER" ? (
              <>
                <a className="nav-link text-white" href="/worker/Home">
                  Requests
                </a>
                <a className="nav-link text-white" href="/offers">
                  Accepted offers
                </a>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
