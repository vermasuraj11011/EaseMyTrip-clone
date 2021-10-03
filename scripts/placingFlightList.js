//display id of the user on the navbar
setTimeout(() => {
	let signUpAppend = JSON.parse(localStorage.getItem('signUp'));
	if (signUpAppend[0].isCorrect === true) {
		let div = document.querySelector('#signupLogin');
		div.innerHTML = `hi, ${signUpAppend[0].email}`;
		div.style.padding = '5px';
		div.style.fontSize = '15px';

		// console.log('div:', div);
	}
}, 500);

let flightSearchDetails = JSON.parse(localStorage.getItem('searchQuery'));
// console.log('flightSearchDetails:', flightSearchDetails);
let sources = flightSearchDetails.from.slice(0, 1).toUpperCase() + flightSearchDetails.from.slice(1).toLowerCase();
let destinations = flightSearchDetails.to.slice(0, 1).toUpperCase() + flightSearchDetails.to.slice(1).toLowerCase();
let date = flightSearchDetails.arrive;

let flightImage = [
	{
		airline: 'SpiceJet',
		imgSrc: 'https://flight.easemytrip.com/Content/AirlineLogon/SG.png'
	},
	{
		airline: 'Vistara',
		imgSrc: 'https://flight.easemytrip.com/Content/AirlineLogon/UK.png'
	},
	{
		airline: 'Indigo',
		imgSrc: 'https://flight.easemytrip.com/Content/AirlineLogon/6E.png'
	},
	{
		airline: 'Go First',
		imgSrc: 'https://flight.easemytrip.com/Content/AirlineLogon/G8.png'
	},
	{
		airline: 'AirAsia',
		imgSrc: 'https://flight.easemytrip.com/Content/AirlineLogon/I5.png'
	}
];

// console.log('source destination:', sources, destinations, date);

let placingBookingFlight = document.querySelector('#flightBookBox');
async function displayBook() {
	let res = await fetch(`http://localhost:5005/flights/date/${sources}/${destinations}/${date}`);
	let data = await res.json();

	if (data.flight.length === 0) {
		placingBookingFlight.textContent = 'No flight found';
		placingBookingFlight.style.fontSize = '30px';
		placingBookingFlight.style.color = 'red';
		placingBookingFlight.style.textAlign = 'center';

		// console.log('data');
	}
	// console.log('data:', data);
	data.flight.forEach((element) => {
		let img = '';

		flightImage.forEach((e) => {
			if (element.airline_name === e.airline) {
				img = e.imgSrc;
			}
		});

		// console.log('img:', img);
		let div = document.createElement('div');

		function timeDiff() {
			let tOff = element.takeoff_time;
			let landIng = element.landing_time;

			let toffInMin = parseInt(tOff.slice(0, 2)) * 60 + parseInt(tOff.slice(3, 6));
			let landIngInMin = parseInt(landIng.slice(0, 2)) * 60 + parseInt(landIng.slice(3, 6));

			if (landIngInMin < toffInMin) {
				landIngInMin += 24 * 60;
			}

			let hrs = Math.floor((landIngInMin - toffInMin) / 60);
			let min = (landIngInMin - toffInMin) % 60;
			return `${hrs}h ${min}m`;
		}
		function placing() {
			return `<div class="bookMain flexSpace">
		                <div class="airlineInfo flexCenter">
		                    <img src="${img}" class="airlogo" alt="">
		                    <div class="flexColumn">
		                        <label for="" class="airname">${element.airline_name}</label>
		                        <label for="" class="air_no smallAirDetails">${element.aircraft_code}-${element.aircraft_number}</label>
		                    </div>
		                </div>
		                <div class="flexColumn ">
		                    <label for="" class="takeOff">${element.takeoff_time}</label>
		                    <label for="" class="fromCity">${element.source}</label>
		                </div>
		                <div class="flexColumn">
		                    <label for="" class="airDuration">${timeDiff()}</label>
		                    <img src="icons/arow_main.png" class="sidearrow" alt="">
		                    <label for="" class="nonstop">non-stop</label>
		                </div>
		                <div class="flexColumn">
		                    <label for="" class="landing">${element.landing_time}</label>
		                    <label for="" class="toCity">${element.destination}</label>
		                </div>
		                <div class="flexColumn">
		                    <label for="" class="airprice">₹ ${element.price}</label> <br>
		                    <label for="" class="morefare"> + More Fare </label>
		                </div>
		                <button class="book flexCenter" onclick="getData(this.id)" id="${element._id}"}>
		                    BOOK NOW
		                </button>
		            </div>`;
		}

		div.innerHTML = placing();

		placingBookingFlight.appendChild(div);

		// console.log('element:', element._id);
	});
}

displayBook();

async function getData(e) {
	let res = await fetch(`http://localhost:5005/flights/${e}`);
	let data = await res.json();
	console.log(data);

	if (localStorage.getItem('bookingDetailOfUSer') === null) {
		localStorage.setItem('bookingDetailOfUSer', JSON.stringify(data));
	} else {
		localStorage.setItem('bookingDetailOfUSer', JSON.stringify(data));
	}
	window.location.href = './Bookflight/bookflight.html';
}
