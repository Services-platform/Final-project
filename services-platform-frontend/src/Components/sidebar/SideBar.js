import './sidebar.css';

function SideBar(){
    return(
        <div>
            <div className='side-bar-container'>
                <div className='side-bar-items'>
                    <h3>Side bar</h3>
                    <a className="nav-link text-white" href="/signup">Signup</a>
                    <a className="nav-link text-white" href="/signin">signin</a>
                    <a className="nav-link text-white" href="/signup">Categories</a>
                </div>
            </div>
        </div>
    );
}

export default SideBar;