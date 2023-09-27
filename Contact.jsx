import React from 'react';
import "./Contact.css";

const Contact   = () => {
  return (
    
     <div>
      <div className="us">
        <h1> CONTACT US </h1>
      </div>
        
    
         <div className="container1">
        <span className="big-circle" />
        <img src="https://github.com/sefyudem/Contact-Form-HTML-CSS/blob/master/img/shape.png?raw=true" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            
            <div className="info">
              <div className="information">
                <img src="https://github.com/sefyudem/Contact-Form-HTML-CSS/blob/master/img/email.png?raw=true" className="icon" alt="" />
                <p>patelakshit675@gmail.com</p>
              </div>
              <div className="information">
                <img src="https://github.com/sefyudem/Contact-Form-HTML-CSS/blob/master/img/location.png?raw=true" className="icon" alt="" />
                <p> Changa 388 421 Anand, Gujarat </p>
              </div>
              <div className="information">
                <img src="https://github.com/sefyudem/Contact-Form-HTML-CSS/blob/master/img/phone.png?raw=true" className="icon" alt="" />
                <p>123-456-789</p>
              </div>
            </div>
            {/* <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="/">
                  <i className="fab fa-twitter" />
                </a>
                <a href="/">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div> */}
          </div>
          <div className="contact-form">
            <span className="circle one" />
            <span className="circle two" />
            <form className='Cform' action="https://formspree.io/f/xleynjwe" method="POST" >
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input1" autoComplete='off' placeholder='Username'/>
                {/* <label htmlFor>Username</label> */}
                {/* <span>Username</span> */}
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input1" autoComplete='off' placeholder='Email'/>
                {/* <label htmlFor>Email</label>
                <span>Email</span> */}
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input1" autoComplete='off' placeholder='Phone'/>
                {/* <label htmlFor>Phone</label>
                <span>Phone</span> */}
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input1" defaultValue={""} placeholder='Message'/>
                {/* <label htmlFor>Message</label>
                <span>Message</span> */}
              </div>
              <input type="submit" defaultValue="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
     </div>
    
  )
}

export default Contact 
