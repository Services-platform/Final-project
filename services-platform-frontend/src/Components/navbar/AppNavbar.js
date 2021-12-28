import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../reducers/user/action";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import AppLogo from "../../images/logo.png";
import "./navbar.css";

function AppNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => {
    return {
      user: state.userReducer,
    };
  });

  const logout = () => {
    const action = removeUser();
    dispatch(action);
    navigate("/signin");
  };
  return (
    <>
      <div className="my-navbar">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container className="nav-container">
            <Navbar.Brand href="/Home">
              <img src={AppLogo} width="100%" height="100%" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav className="nav-text-items">
                {state.user.user.role === "WORKER" ? (
                  <Nav.Link href="/worker/Home">Requests</Nav.Link>
                ) : (
                  <Nav.Link href="/Home">Home</Nav.Link>
                )}
                {state.user.isLogedIn ? (
                  <Nav.Link onClick={logout} href="#">
                    Logout
                  </Nav.Link>
                ) : (
                  <>
                    <Nav.Link href="/signin">Signin</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default AppNavbar;
