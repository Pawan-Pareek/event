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
    </>
  )
}
