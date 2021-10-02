

//component of ticket details

function ticket(){

    return ` <div id="flightDetials">
    <div class="heading"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsAqT8HjqxXMf5NDQziWt9sPVbQEgEmS3zhg&usqp=CAU" alt=""> <p>Flight Detial</p> </div>
    <div id="innerBOx">
       <p id="tag">DEPART</p>
       <span class="material-icons  flight-logo">flight_takeoff</span>
       <p id="flightRoute">Delhi - Mumbai</p>
       <p class="horizontalLine"></p>
       <p id="departDate">Thu-30Sep2021 </p>
       <p class="clear"></p>
       <img id="airlinelogo" src="https://flight.easemytrip.com/Content/AirlineLogon/SG.png" alt="">
       <p id="Carrier"> SpiceJet</p>
       <p id="departTime">20:20</p>
       <p id="duration">02h 20m </p>
       <p class="leftDot"></p>
       <p class="dotttedLine"></p>
       <i class="fa fa-plane" aria-hidden="true"></i>
       <svg height="30" width="30" >
           <circle cx="14" cy="14" r="14" stroke="gray" stroke-width="1.3" fill="white" />
           Sorry, your browser does not support inline SVG.  
       </svg>
       <p class="rightDot"></p>
       <p id="landingDate">22:40</p>
        <br>
       <p id="aircraftName">SG-507</p>
       <p id="source">Delhi(DEL)</p>
       <p class="refundable">REFUNDABLE</p>
       <p id="destination">Mumbai(BOM)</p>
       <br>
       <p id="takeoffDate">Thu-30Sep2021</p>
       <p id="arrivalDate">Thu-30Sep2021</p>
       <br>
       <p id="sourcerTerminal"> Terminal - 3</p>
       <p id="destinTerminal">Terminal-2</p>
    </div>
  </div>`;
}

export default ticket;