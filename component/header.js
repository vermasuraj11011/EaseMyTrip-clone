function header() {
	return `<div class="navbar">
    <div> <a id="websitelogo" href="./index.html"> <img href="" src="https://searchlogovector.com/wp-content/uploads/2019/04/easemytrip-com-logo-vector.png" alt=""> </a>  </div>
    <a href="#home">FLIGHTS</a>
    <p class="horizontal-Line"></p>
    <a href="#news"> HOTELS  </a>
    <p class="horizontal-Line"></p>
    <a href="#news"> TRAINS  </a>
    <p class="horizontal-Line"></p>
    <a href="#news"> HOTELS  </a>
    <p class="horizontal-Line"></p>
    <a href="#news"> BUS  </a>
    <p class="horizontal-Line"></p>
    <a href="#news"> HOLIDAYS  </a>
    <p class="horizontal-Line"></p>
    <a href="#news"> CABS  </a>
    <p class="horizontal-Line"></p>
    <a href="#news"> ACTIVITIES </a>
    <p class="horizontal-Line"></p>
    <a href="#news"> GIFT CARD </a>
    <p class="horizontal-Line"></p>
    <a href="#news"> CHARTERS </a>
    <p class="horizontal-Line"></p>
    <div class="dropdown">
      <button class="dropbtn">MORE 
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">OFFERS</a>
        <a href="#">CORPORATE TRAVEL</a>
        <a href="#">AGENT LOGIN </a>
      </div>
    </div> 
    
    <div id="helpline" class="dropdown">
        <button class="dropbtn"> 24x7 Helpline
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Tel : 011 - 43131313, 43030303</a>
          <a href="#">Care@easemytrip.com</a>
        </div>
      </div> 
      

    <div id="signupLogin" class="dropdown">
        <button class="dropbtn">
         <i  class="fa fa-user" aria-hidden="true"></i>
            My Account 
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <span id="accountCircle" class="material-icons">  account_circle </span> 
          <div id="loginOrSignupbtn"> <p> <a href="#">LOGIN OR SIGNUP</a> <p></p> </div>
          <a href="#"> <i class="fa fa-caret-right"></i> My Booking </a>
          <a href="#"> <i class="fa fa-caret-right"></i> Print/Cancel Booking</a>
        </div>
      </div> 

  </div>`;
}

export default header;
