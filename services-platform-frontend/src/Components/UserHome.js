import { Button } from 'react-bootstrap';
import SideBar from './SideBar';
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
                    <Button className='request-btn' onClick={()=>{console.log("button clicked")}} variant="warning" >+Request service</Button>
                </div>
                <div className='category-container'>
                        <h1>Our services<hr/></h1>
                </div>
                <div className='category-list'>
                    <div>
                        <img src="./images/home-service.png" height="130" width="130"></img>
                        <div className='category-name'>
                            <h4>Home services</h4>
                            <div className="service-icons">
                                <div>
                                    <img src="./images/plumbing.png" width="30px" height="30px"/>
                                    <label className='icon-txt'>All plumbing repair and installation work.</label>
                                </div>
                                <div>
                                    <img src="./images/bolt.png" width="30px" height="30px"/>
                                    <label className='icon-txt'>Electrical installation and repair work.</label>
                                </div>
                                <div>
                                    <img src="./images/air-conditioner.png" width="30px" height="30px"/>
                                    <label className='icon-txt'>Air conditioning repair, and maintenance.</label>
                                </div>
                                <div>
                                    <img src="./images/gas.png" width="30px" height="30px"/>
                                    <label className='icon-txt'>Delivery of fuel inside the city.</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="./images/car-repair.png" height="130" width="130"></img>
                        <div className='category-name'>
                            <h4>Car services</h4>
                            <div className="service-icons">
                                <div>
                                    <img src="./images/tire.png" width="30px" height="30px"/>
                                    <label className='icon-txt'>Fixing all kinds of tire issues.</label>
                                </div>
                                <div>
                                    <img src="./images/battery.png" width="30px" height="30px"/>
                                    <label className='icon-txt'>Jump starting a battery or replacing it.</label>
                                </div>
                                <div>
                                    <img src="./images/locked-car.png" width="30px" height="30px"/>
                                    <label className='icon-txt'>Unlocking vehicles in case of emergencies.</label>
                                </div>
                                <div>
                                    <img src="./images/gas-pump.png" width="30px" height="30px"/>
                                    <label className='icon-txt'>Delivery of fuel inside the city.</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="./images/smartphone.png" height="130" width="130"></img>
                        <div className='category-name'>
                            <h4>Phone services</h4>
                            <div className="service-icons">
                                <div>
                                    <img src="./images/apple.png" width="30px" height="30px"/>
                                    <label className='icon-txt'>iPhone maintenance.</label>
                                </div>
                                <div>
                                    <img src="./images/android.png" width="30px" height="30px"/>
                                    <label className='icon-txt'>Android maintenance.</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserHome;