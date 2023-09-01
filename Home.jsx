import React from 'react';
import "./Home.css"

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
      <br></br>
<br></br>
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
            <img src="https://images.unsplash.com/photo-1610900603480-c0a85ac8e315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.thebatteryshow.com/content/dam/Informa/amg/novi/2022/images/Novi22-speaker-center-hero.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.ytimg.com/vi/VFcxX9n2hVk/maxresdefault.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
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
    </>
  )
}
