import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../reducers/user/action";
import profileImg from "../../images/profile-icon.jpg";
import "./sidebar.css";

function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
      isLogedIn: state.userReducer.isLogedIn,
    };
  });
  const logout = () => {
    const action = removeUser();
    dispatch(action);
    navigate("/signin");
  };
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
                <a className="nav-link text-white" href="/profile">
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
                <a className="nav-link text-white" href="/service/request">
                  +Request service
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
            <a onClick={logout} className="nav-link text-white" href="#">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
