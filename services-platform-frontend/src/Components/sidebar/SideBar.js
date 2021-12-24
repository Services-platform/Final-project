import "./sidebar.css";

function SideBar() {
  return (
    <div>
      <div className="side-bar-container">
        <div className="side-bar-items">
          <h3>Side bar</h3>
          <a className="nav-link text-white" href="/user/requests">
            My Requests
          </a>
          <a className="nav-link text-white" href="/offers">
            My offers
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
