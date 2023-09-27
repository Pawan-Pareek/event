import React from 'react';
import "./Home.css";
import crausal1 from './crausal1.png';
import crausal2 from './crausal2.jfif';
import crausal3 from './crausal3.jpeg';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function home() {
  return (
    <>
      <img src='https://images.unsplash.com/photo-1609102026400-3c0ca378e4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpdmUlMjBjb25jZXJ0fGVufDB8fDB8fHww&w=1000&q=80' alt="" className='home-container'/>
      <div className="text">
        <span className='fire'>NEVER MISS THE EVENTS</span>
      </div>

      <div className='come'>
        <p> Get personalized events recommendations and stay connected with your favorite Events</p>
      </div>

      <br />
      <br />
      <hr />
<div className='pre'>
 <h1>SOME GLIMPSE OF PREVIOUS EVENTS </h1>
</div>
<br></br>
<br></br>
<div className="boots">
<div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner"role="listbox" >
          <div className="carousel-item active">
            <img src={crausal1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Expert Talk</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={crausal2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>DJ Night</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={crausal3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Coding Contest</h1>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
</div>

<br />
{/* <br /> */}
<hr />
<div className='pre'>
 <h1>New Upcoming Events </h1>
 <br />
 {/* <br /> */}
</div>
<div className='btns'>
{/* <button type="button" className="btn btn-outline-primary ibtn">Primary</button>
<button type="button" class="btn btn-outline-secondary ibtn">Secondary</button>
<button type="button" class="btn btn-outline-success ibtn">Success</button>
<button type="button" class="btn btn-outline-danger ibtn">Danger</button>
<button type="button" class="btn btn-outline-warning ibtn">Warning</button>
<button type="button" class="btn btn-outline-info ibtn">Info</button>
<button type="button" class="btn btn-outline-light ibtn">Light</button>
<button type="button" class="btn btn-outline-dark ibtn">Dark</button> */}

<Link to="./Today"><button type='button' className='ibtn'>Today</button></Link>
<Link to="./Thisweek"><button type='button' className='ibtn'>This Week</button></Link>
<Link><button type='button' className='ibtn'>This Month</button></Link>
<Link><button type='button' className='ibtn'>This Year</button></Link>
</div>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<Footer/>

    </>
  )
}
