import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery"
import React from 'react';
import Modal from 'react-modal';
import logo from "./images/logo.png";
import stella from "./images/stella.png";
import caruso from "./images/caruso.jpg";
import other from "./images/ric.jpg";

const customStyles = {
  content: {
    top: '20%',
    left: '25%',
    width: '50%',
  },
};



const submitMessage = function(){
  if($("#fullame") != "" && $("message") != ""){
    alert('Thank you for your inquiry!\nOur expert will be sure to reach out to you as soon as possible.');
  }
}

const bookNow = function(){
    alert('Thank you for booking your appointment!\nYou will be receiving an email shortly with all your appointment details. Your expert will be sure to reach out to you 15 minutes before you appointment.');
}

function App() {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link href="styles/styles.css" rel="stylesheet" type="text/css"/>
    <nav className="navbar sticky-top bg-dark text-white" role="navigation">
    <div className="container-fluid">
      <div className="navbar-header">
        <h1 id="pageName"><img src={logo} width="130" height="130"/>Fresh Cutz</h1>
      </div>
    </div>
    <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
      <li className="nav-item col-6 col-md-auto">
        <a className="nav-link p-2" href="#about">
          About Us
        </a>
      </li>
      <li className="nav-item col-6 col-md-auto">
        <a className="nav-link p-2" href="#services">
          Services
        </a>
      </li>
      <li className="nav-item col-6 col-md-auto">
        <a className="nav-link p-2" href="#team">
          Our Team
        </a>
      </li>
      <li className="nav-item col-6 col-md-auto">
        <a className="nav-link p-2" href="#contact">
          Contact Us
        </a>
      </li>
      <li>
        <button id="open" onClick={openModal}>Book an appointment</button>
      </li>
      <li>
        <div id="google_translate_element"  ></div>
      </li>
    </ul>
    </nav>

    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <br/>
        <h2>Book an appointment</h2>
        <form action="#" onSubmit={bookNow}>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" className="form-control" placeholder="John" required/><br/><br/>

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" className="form-control" placeholder="Smith" required/><br/><br/>

          <label htmlFor="email">Email <img className="icon" src="https://img.icons8.com/material-outlined/24/000000/new-post.png"/></label>
          <input type="text" id="email" name="email" className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="example@example.com" required/><br/><br/>

          <label htmlFor="phone">Phone Number <img className="icon" src="https://img.icons8.com/material-rounded/24/000000/phone--v1.png"/></label>
          <input type="tel" id="phone" name="phone" className="form-control" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxLength="12" placeholder="xxx-xxx-xxxx" required/><br/><br/>

          <label htmlFor="address">Address <img src="https://img.icons8.com/ios/24/000000/home--v1.png"/></label>
          <input type="text" id="address" name="address" className="form-control" placeholder="123 ABC Street" required/><br/><br/>

          <label htmlFor="credit">Credit Card <img className="icon" src="https://img.icons8.com/ios/50/000000/bank-card-back-side.png"/></label>
          <input type="tel" id="credit" name="credit" className="form-control" inputMode="numeric" onKeyPress="credit()" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" maxLength="19" placeholder="xxxx xxxx xxxx xxxx"/><br/><br/>

          <label htmlFor="expert">Expert <img src="https://img.icons8.com/ios/24/000000/barber-pole.png"/></label>
          <select id="expert" name="expert" className="form-control" required>
            <option value="Stefano">Stefano</option>
            <option value="Nick">Nick</option>
            <option value="Rick">Rick</option>
          </select><br/><br/>

          <label htmlFor="datepicker">Date <img className="icon" src="https://img.icons8.com/ios/24/000000/calendar--v1.png"/></label>
          <input type="text" id="datepicker" name="datepicker" className="form-control" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" maxLength="10" placeholder="yyyy-mm-dd" required/><br/><br/>

          <label htmlFor="appt">Time <img className="icon" src="https://img.icons8.com/material-outlined/24/000000/clock--v1.png"/></label>
          <input type="number" id="appt" name="appt" className="form-control" min="9" max="17" required/><br/><br/>

          <label htmlFor="service">Service <img src="https://img.icons8.com/ios/24/000000/barber-scissors.png"/></label>
          <select id="service" name="service" className="form-control" required>
            <option value="knee">Barber Cut</option>
            <option value="orthotics">Beard Trim</option>
            <option value="tmj">Child's Cut</option>
            <option value="surgery">Traditional Face Shave</option>
            <option value="sport">Traditional Head Shave</option>
          </select><br/>

          <input id="book" type="submit" value="Book Now"/>
        </form><br/>
        <button id="close" onClick={closeModal}>close</button>
      </Modal>

    <div id="about" className=" p-3 my-3">
        <h1 className=""> About Us</h1>
        <p className="p-4 my-3" style={{fontSize: '25px'}} >Fresh Cutz is a family owned and operated business that strives to provide a top class relaxing experience to all of our clients and have them looking sharp for any meeting, wedding or whatever the event may be.</p>
    </div>

      <div id="services" className=" p-3 my-3 border bg-light">
        <h1 className="">Services</h1>
        <div id="priceList">
						<table>
							<tbody><tr>
								<td className="name">Barber Cut<span className="leader"></span></td>
								<td className="price">$36</td>
							</tr>
						</tbody></table>
            <table>
							<tbody><tr>
								<td className="name">Beard Trim<span className="leader"></span></td>
								<td className="price">$19</td>
							</tr>
						</tbody></table>
						<table>
							<tbody><tr>
								<td className="name">Child's Cut<span className="leader"></span></td>
								<td className="price">$28</td>
							</tr>
						</tbody></table>
						<table>
							<tbody><tr>
								<td className="name">Traditional Face Shave<span className="leader"></span></td>
								<td className="price">$64</td>
							</tr>
						</tbody></table>
						<table>
							<tbody><tr>
								<td className="name">Traditional Head Shave<span className="leader"></span></td>
								<td className="price">$64</td>
							</tr>
						</tbody></table>
						</div>
      </div>

      <div id="team" className="p-3 my-3">
          <h1 className="">Our Team</h1>
          <div className="row justify-content-around">
              <div className="card" style={{width: '18rem'}}>
                  <div className="row">
                    <img src={stella} className="card-img-top" alt="..."/>
                  </div>
                  <div className="card-body">
                    <h4>Stefano</h4>
                    <p className="card-text">Stefano is the owner and founder of Fresh Cutz. He started the barber shop after when he graduated from the University of Ottawa at the age of 23 years old.</p>
                  </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                  <div className="row">
                    <img src={caruso} className="card-img-top" alt="..."/>
                  </div>
                  <div className="card-body">
                    <h4>Nick</h4>
                    <p className="card-text">Nick is one of our more experienced barbers with over 50 years of experience.</p>
                  </div>
              </div>
              <div className="card" style={{width: '18rem'}}>
                  <div className="row">
                    <img src={other} className="card-img-top" alt="..."/>
                  </div>
                  <div className="card-body">
                    <h4>Rick</h4>
                    <p className="card-text">Rick graduated from the University of Ottawa in December 2010 and has been a barber at Fresh Cutz.</p>
                  </div>
              </div>
          </div>
      </div>

      <div id="contact" className="p-3 my-3 border bg-light">
        <h1 className="">Contact Us</h1>
        <div className="row">
          <div className="col">
            <form action="#contact" onSubmit={submitMessage}>
              <label htmlFor="fullname">First Name</label>
              <input type="text" id="fullame" name="fullname" className="form-control" placeholder="John Smith" required/><br/><br/>

              <label htmlFor="contactemail">Email <img className="icon" src="https://img.icons8.com/material-outlined/24/000000/new-post.png"/></label>
              <input type="text" id="contactemail" name="contactemail" className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="example@example.com" required/><br/><br/>

              <label htmlFor="contactexpert">Expert <img src="https://img.icons8.com/ios/24/000000/barber-pole.png"/></label>
              <select id="contactexpert" name="contactexpert" className="form-control" required>
                <option value="Stefano">Stefano</option>
                <option value="Nick">Nick</option>
                <option value="Rick">Rick</option>
              </select><br/><br/>

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className="form-control" rows="10" cols="60" required/><br/><br/>

              <input id="send" type="submit" value="Send"/>
            </form>
          </div>
          <div className="col">
            <div className="row">
              <p className="h4">Hours of operation</p>
              <table>
                <tr><th>Monday</th><td>9am - 5pm</td></tr>
                <tr><th>Tuesday</th><td>9am - 5pm</td></tr>
                <tr><th>Wednesday</th><td>9am - 5pm</td></tr>
                <tr><th>Thursday</th><td>9am - 5pm</td></tr>
                <tr><th>Friday</th><td>9am - 5pm</td></tr>
                <tr><th>Saturday</th><td>9am - 5pm</td></tr>
                <tr><th>Sunday</th><td>9am - 5pm</td></tr>
              </table>
            </div>
              <div className="row">
                <p className="h4">Address</p>
                <address>
                  235 Bank Street<br/>
                  Ottawa,<br/>
                  ON K2P 1X2<br/>
                  CA
                </address>
              </div>
              <div className="row">
                <p className="h4">Email</p>
                <address>
                  help@frsh-cutz.com
                </address>
              </div>
              <div className="row">
                <p className="h4">Telephone</p>
                <address>
                  (613)-123-4567
                </address>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
