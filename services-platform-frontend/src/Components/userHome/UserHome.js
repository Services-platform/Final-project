import Categories from '../categories/Categories';
import SideBar from '../sidebar/SideBar';
import './userHome.css';


function UserHome(){
    return(
        <div className='home-container'>
            <div>
                <SideBar/>
            </div>
            <div className='main'>
                <div className='main-hero' style={{ backgroundImage: "url(./images/hero-img.jpg)" }}>
                    <div className='hero-text'>
                        <h1>Welcome to <span className='app-name'>Handler</span></h1>
                        <p>More than 50 services in your pocket</p>
                    </div>
                </div>
                <div>
                    <Categories/>
                </div>
            </div>
        </div>
    );
}

export default UserHome;