import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from "../../reducers/user/action";
import './navbar.css';

function Navbar(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const state = useSelector((state) => {
        return {
            user: state.userReducer,
        };
    })

    const logout = () => {
        const action = removeUser();
        dispatch(action);
        navigate("/signin");
    } 
    return(
        <div className='my-navbar'>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Handler</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active text-black" aria-current="page" href="/Home">Home</a>
                            {state.user.isLogedIn ? (
                                <a onClick={logout} className="nav-link text-black" href="#">Logout</a>

                            ) : (
                                <>
                                    <a className="nav-link text-black" href="/signin">Sign in</a>
                                    <a className="nav-link text-black" href="/signup">Signup</a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;