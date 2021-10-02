// let travellerCountDone = document.getElementById('travellerCountDone');
// let classDone = document.getElementById('classSubmit');
// let from = document.getElementById('from');
// let to = document.getElementById('to');
// let depart = document.getElementById('departDate');
// let arrive = document.getElementById('arriveDate');
// let adultCount = document.getElementById('adultCount');
// let childrenCount = document.getElementById('childrenCount');
// let infantCount = document.getElementById('infantCount');
// let travellerCount = document.getElementById('travellerCount');
// let add = [
// 	document.getElementById('adult_add'),
// 	document.getElementById('children_add'),
// 	document.getElementById('infant_add')
// ];
// let del = [
// 	document.getElementById('adult_del'),
// 	document.getElementById('children_del'),
// 	document.getElementById('infant_del')
// ];
// let flight_class = document.getElementsByName('classes');
// let travelClass = document.getElementById('flightClass');
// let swap = document.getElementById('swap');
// let classOption = document.getElementById('classOption');
// let travellerOption = document.getElementById('travellerOption');
// let traveller_click = document.getElementById('travellers');
// let class_click = document.getElementById('travellerClass');
// let one = document.getElementById('one');
// let round = document.getElementById('round');
// let multi = document.getElementById('multi');
// let finalSearch = document.getElementById('finalSearch');
// let fromBox = document.getElementById('fromResults');
// let toBox = document.getElementById('toResults');

// let trip = 'one',
// 	specialCitizen = 0,
// 	flightClass = 1,
// 	totalCount = 1;

// function query(from, to, depart, arrive, travellers, adults, children, infants, flightClass, special, trip) {
// 	this.from = from;
// 	this.to = to;
// 	this.depart = depart;
// 	this.arrive = arrive;
// 	this.travellerCount = travellers;
// 	this.adultCount = adults;
// 	this.childrenCount = children;
// 	this.infantCount = infants;
// 	this.flightClass = flightClass;
// 	this.specialCitizen = special;
// 	this.trip = trip;
// }
// from.addEventListener('click', () => {
// 	if (fromBox.style.display === 'none') {
// 		fromBox.style.display = 'block';
// 	} else {
// 		fromBox.style.display = 'none';
// 	}
// });
// to.addEventListener('click', () => {
// 	if (toBox.style.display === 'none') {
// 		toBox.style.display = 'block';
// 	} else {
// 		toBox.style.display = 'none';
// 	}
// });

// finalSearch.addEventListener('click', () => {
// 	if (from.value === '') {
// 		alert('Please enter valid origin city');
// 		return;
// 	}
// 	if (to.value === '') {
// 		alert('Please enter valid destination city');
// 		return;
// 	}
// 	localStorage.setItem(
// 		'searchQuery',
// 		JSON.stringify(
// 			new query(
// 				from.value,
// 				to.value,
// 				depart.value,
// 				arrive.value,
// 				totalCount,
// 				Number(adultCount.innerText),
// 				Number(childrenCount.innerText),
// 				Number(infantCount.innerText),
// 				travelClass.innerText,
// 				specialCitizen,
// 				trip
// 			)
// 		)
// 	);
// 	window.location.href = 'flightSearch.htm';
// });

// travellerCountDone.addEventListener('click', () => {
// 	travellerOption.style.display = 'none';
// });

// classDone.addEventListener('click', () => {
// 	flight_class.forEach((element) => {
// 		if (element.checked === true) {
// 			travelClass.innerText = element.value;
// 		}
// 	});
// 	classOption.style.display = 'none';
// });

// traveller_click.addEventListener('click', () => {
// 	if (travellerOption.style.display === 'none') {
// 		classOption.style.display = 'none';
// 		travellerOption.style.display = 'block';
// 	} else {
// 		travellerOption.style.display = 'none';
// 	}
// });

// class_click.addEventListener('click', () => {
// 	if (classOption.style.display === 'none') {
// 		classOption.style.display = 'block';
// 		travellerOption.style.display = 'none';
// 	} else {
// 		classOption.style.display = 'none';
// 	}
// });

// add[0].addEventListener('click', () => {
// 	if (totalCount === 9) {
// 		alert("More than 9 Passenger's can not travel.");
// 		return;
// 	}
// 	adultCount.innerText = Number(adultCount.innerText) + 1;
// 	totalCount++;
// 	travellerCount.innerText = totalCount + ' Traveller(s)';
// });
// del[0].addEventListener('click', () => {
// 	if (adultCount.innerText === '1') {
// 		return;
// 	}
// 	adultCount.innerText = Number(adultCount.innerText) - 1;
// 	totalCount--;
// 	travellerCount.innerText = totalCount + ' Traveller(s)';
// });
// add[1].addEventListener('click', () => {
// 	if (totalCount === 9) {
// 		alert("More than 9 Passenger's can not travel.");
// 		return;
// 	}
// 	childrenCount.innerText = Number(childrenCount.innerText) + 1;
// 	totalCount++;
// 	travellerCount.innerText = totalCount + ' Traveller(s)';
// });
// del[1].addEventListener('click', () => {
// 	if (childrenCount.innerText === '0') {
// 		return;
// 	}
// 	childrenCount.innerText = Number(childrenCount.innerText) - 1;
// 	totalCount--;
// 	travellerCount.innerText = totalCount + ' Traveller(s)';
// });
// add[2].addEventListener('click', () => {
// 	if (totalCount === 9) {
// 		alert("More than 9 Passenger's can not travel.");
// 		return;
// 	}
// 	infantCount.innerText = Number(infantCount.innerText) + 1;
// 	totalCount++;
// 	travellerCount.innerText = totalCount + ' Traveller(s)';
// });
// del[2].addEventListener('click', () => {
// 	if (infantCount.innerText === '0') {
// 		return;
// 	}
// 	infantCount.innerText = Number(infantCount.innerText) - 1;
// 	totalCount--;
// 	travellerCount.innerText = totalCount + ' Traveller(s)';
// });

// one.addEventListener('click', () => {
// 	one.style.backgroundColor = 'white';
// 	one.style.color = '#1853A2';
// 	trip = 'one';
// 	arrive.style.color = 'gray';
// 	arrive.setAttribute('disabled', 'true');
// 	round.style.backgroundColor = 'transparent';
// 	round.style.color = '#CAD5F5';
// 	multi.style.backgroundColor = 'transparent';
// 	multi.style.color = '#CAD5F5';
// });
// round.addEventListener('click', roundTrip);
// multi.addEventListener('click', () => {
// 	multi.style.backgroundColor = 'white';
// 	multi.style.color = '#1853A2';
// 	trip = 'multi';
// 	round.style.backgroundColor = 'transparent';
// 	round.style.color = '#CAD5F5';
// 	one.style.backgroundColor = 'transparent';
// 	one.style.color = '#CAD5F5';
// });

// function roundTrip() {
// 	round.style.backgroundColor = 'white';
// 	round.style.color = '#1853A2';
// 	trip = 'round';
// 	arrive.style.color = 'black';
// 	arrive.disabled = false;
// 	one.style.backgroundColor = 'transparent';
// 	one.style.color = '#CAD5F5';
// 	multi.style.backgroundColor = 'transparent';
// 	multi.style.color = '#CAD5F5';
// }

// document.getElementById('arrive').addEventListener('click', roundTrip);

// function radioRender(...radio) {
// 	radio.forEach((element) => {
// 		if (element.checked) {
// 			return element.value;
// 		}
// 	});
// 	return 0;
// }

// function dropTraveller() {
// 	if (params.style.display === 'none') {
// 		params.style.display = 'block';
// 	} else {
// 		params.style.display = 'none';
// 	}
// }

// function swapFromTo() {
// 	let temp = from.value;
// 	from.value = to.value;
// 	to.value = temp;
// }

// swap.addEventListener('click', swapFromTo);

// async function searchAutoComplete(feed) {
// 	let a = await fetch(`https://airportix.p.rapidapi.com/autocomplete/airport/`, {
// 		method: 'POST',
// 		headers: {
// 			'content-type': 'application/x-www-form-urlencoded',
// 			'x-rapidapi-host': 'airportix.p.rapidapi.com',
// 			'x-rapidapi-key': 'e41ac5f444mshb544d722349d34cp12a1c9jsn14405c0bb667'
// 		},
// 		body: {
// 			query: feed
// 		}
// 	});
// 	let b = await a.json();
// }


// Prottay Start

let travellerCountDone = document.getElementById('travellerCountDone');
let classDone = document.getElementById('classSubmit');
let from = document.getElementById('from');
let to = document.getElementById('to');
let depart = document.getElementById('departDate');
let arrive = document.getElementById('arriveDate');
let adultCount = document.getElementById('adultCount');
let childrenCount = document.getElementById('childrenCount');
let infantCount = document.getElementById('infantCount');
let travellerCount = document.getElementById('travellerCount');
let add = [document.getElementById('adult_add'), document.getElementById('children_add'), document.getElementById('infant_add')];
let del = [document.getElementById('adult_del'), document.getElementById('children_del'), document.getElementById('infant_del')];
let flight_class = document.getElementsByName('classes');
let travelClass = document.getElementById('flightClass');
let swap = document.getElementById('swap');
let classOption = document.getElementById('classOption');
let travellerOption = document.getElementById('travellerOption');
let traveller_click = document.getElementById('travellers');
let class_click = document.getElementById('travellerClass');
let one = document.getElementById('one');
let round = document.getElementById('round');
let multi = document.getElementById('multi');
let finalSearch = document.getElementById('finalSearch');
let fromBox = document.getElementById('fromResults');
let toBox = document.getElementById('toResults');

let trip = "one", specialCitizen = 0, flightClass = 1, totalCount = 1;

function query(from, to, depart, arrive, travellers, adults, children, infants, flightClass, special, trip) {
    this.from = from;
    this.to = to;
    this.depart = depart;
    this.arrive = arrive;
    this.travellerCount = travellers;
    this.adultCount = adults;
    this.childrenCount = children;
    this.infantCount = infants;
    this.flightClass = flightClass;
    this.specialCitizen = special;
    this.trip = trip;
}
from.addEventListener('click', () => {
    if (fromBox.style.display === "none") {
        fromBox.style.display = "block";
        toBox.style.display = "none";
    } else {
        fromBox.style.display = "none";
    }
});
to.addEventListener('click', () => {
    if (toBox.style.display === "none") {
        toBox.style.display = "block";
        fromBox.style.display = "none";
    } else {
        toBox.style.display = "none";
    }
});

finalSearch.addEventListener('click', () => {

    if (from.value === "") {
        alert('Please enter valid origin city');
        return;
    }
    if (to.value === "") {
        alert('Please enter valid destination city');
        return;
    }
    if (depart.value === "") {
        alert('Please enter valid departure date');
        return;
    }
    if (trip === "round" && arrive.value === "") {
        alert('Please enter valid arrival date');
        return;
    }
    localStorage.setItem('searchQuery', JSON.stringify(new query(from.value, to.value, depart.value, arrive.value, totalCount, Number(adultCount.innerText), Number(childrenCount.innerText), Number(infantCount.innerText), travelClass.innerText, specialCitizen, trip)));
    window.location.href = "flightSearch.htm";

});

travellerCountDone.addEventListener('click', () => {
    travellerOption.style.display = 'none';
});

classDone.addEventListener('click', () => {
    flight_class.forEach(element => {
        if (element.checked === true) {
            travelClass.innerText = element.value;
        }
    });
    classOption.style.display = 'none';
});

traveller_click.addEventListener('click', () => {
    if (travellerOption.style.display === 'none') {
        classOption.style.display = 'none';
        travellerOption.style.display = 'block';
    } else {
        travellerOption.style.display = 'none';
    }
});

class_click.addEventListener('click', () => {
    if (classOption.style.display === 'none') {
        classOption.style.display = 'block';
        travellerOption.style.display = 'none';
    } else {
        classOption.style.display = 'none';
    }
});

add[0].addEventListener('click', () => {
    if (totalCount === 9) {
        alert("More than 9 Passenger's can not travel.");
        return;
    }
    adultCount.innerText = Number(adultCount.innerText) + 1;
    totalCount++;
    travellerCount.innerText = totalCount + " Traveller(s)";
});
del[0].addEventListener('click', () => {
    if (adultCount.innerText === '1') {
        return;
    }
    adultCount.innerText = Number(adultCount.innerText) - 1;
    totalCount--;
    travellerCount.innerText = totalCount + " Traveller(s)";
});
add[1].addEventListener('click', () => {
    if (totalCount === 9) {
        alert("More than 9 Passenger's can not travel.");
        return;
    }
    childrenCount.innerText = Number(childrenCount.innerText) + 1;
    totalCount++;
    travellerCount.innerText = totalCount + " Traveller(s)";
});
del[1].addEventListener('click', () => {
    if (childrenCount.innerText === '0') {
        return;
    }
    childrenCount.innerText = Number(childrenCount.innerText) - 1;
    totalCount--;
    travellerCount.innerText = totalCount + " Traveller(s)";
});
add[2].addEventListener('click', () => {
    if (totalCount === 9) {
        alert("More than 9 Passenger's can not travel.");
        return;
    }
    infantCount.innerText = Number(infantCount.innerText) + 1;
    totalCount++;
    travellerCount.innerText = totalCount + " Traveller(s)";
});
del[2].addEventListener('click', () => {
    if (infantCount.innerText === '0') {
        return;
    }
    infantCount.innerText = Number(infantCount.innerText) - 1;
    totalCount--;
    travellerCount.innerText = totalCount + " Traveller(s)";
});

one.addEventListener('click', () => {
    one.style.backgroundColor = "white"
    one.style.color = "#1853A2";
    trip = "one";
    arrive.style.color = "gray";
    arrive.setAttribute('disabled', 'true');
    round.style.backgroundColor = "transparent";
    round.style.color = "#CAD5F5";
    multi.style.backgroundColor = "transparent";
    multi.style.color = "#CAD5F5";
})
round.addEventListener('click', roundTrip);
multi.addEventListener('click', () => {
    multi.style.backgroundColor = "white"
    multi.style.color = "#1853A2";
    trip = "multi"; 
    round.style.backgroundColor = "transparent";
    round.style.color = "#CAD5F5";
    one.style.backgroundColor = "transparent";
    one.style.color = "#CAD5F5";
})

function roundTrip() {
    round.style.backgroundColor = "white"
    round.style.color = "#1853A2";
    trip = "round"; 
    arrive.style.color = "black";
    arrive.disabled = false;
    one.style.backgroundColor = "transparent";
    one.style.color = "#CAD5F5";
    multi.style.backgroundColor = "transparent";
    multi.style.color = "#CAD5F5";
}

document.getElementById('arrive').addEventListener('click', roundTrip);

function radioRender(...radio) {
    radio.forEach(element => {
        if (element.checked) {
            return element.value;
        }
    });
    return 0;
}

function dropTraveller() {
    if (params.style.display === 'none') {
        params.style.display = "block";
    } else {
        params.style.display = 'none';
    }
}

function swapFromTo() {
    let temp = from.value;
    from.value = to.value;
    to.value = temp;
}

swap.addEventListener('click', swapFromTo);

let Airports = [
    {
        name: "Indira Gandhi International Airport",
        city: "Delhi (DEL)",
        country: "India"
    },
    {
        name: "Bengaluru International Airport",
        city: "Bangalore (BLR)",
        country: "India"
    },
    {
        name: "Chhatrapati Shivaji International Airport",
        city: "Mumbai (BOM)",
        country: "India"
    },
    {
        name: "Netaji Subhash Chandra Bose International Airport",
        city: "Kolkata (CCU)",
        country: "India"
    },
    {
        name: "Dabolim Goa International Airport",
        city: "Goa (GOI)",
        country: "India"
    },
    {
        name: "Rajiv Gandhi International Airport",
        city: "Hyderabad (HYD)",
        country: "India"
    },
    {
        name: "Madras, Chennai International Airport",
        city: "Chennai (MMA)",
        country: "India"
    },
    {
        name: "Changi Airport",
        city: "Singapore (SIN)",
        country: "Singapore"
    },
    {
        name: "Dubai International Airport",
        city: "Dubai (DXB)",
        country: "United Arab Emirates"
    },
    {
        name: "Suvarnabhumi Airport",
        city: "Bangkok (BKK)",
        country: "Thailand"
    },
    {
        name: "Tribhuvan International Airport",
        city: "Kathmandu (KTM)",
        country: "Nepal"
    }
];

async function searchAutoComplete(destination, results, feed) {

    if (feed === "") {

        results.innerHTML = `<div class="topAuto">
        <div class="flexMe">
            <img src="icons/cities.PNG" id="cities" alt="">
            <h4>Top Cities</h4>
        </div>
    </div>`;

        Airports.forEach(element => {
            let feedDiv = document.createElement('div');
            feedDiv.className = "autoFeed";
            feedDiv.innerHTML = `<div class="autoPlane">
                <img src="icons/plane.png" class="autoImg" alt="">
            </div>
            <div class="autoDetails">
                <h3 class="autoCity">${element.city}</h3>
                <div class="autoAirport">
                    <p class="autoAirportName">${element.name}</p>
                    <p class="autoCountry">${element.country}</p>
                </div>
            </div>`;
            feedDiv.addEventListener('click', () => {
                destination.value = element.city;
                results.style.display = "none";
            });
            results.appendChild(feedDiv);
        });
        
    } else {
        // let a = await fetch(`https://airportix.p.rapidapi.com/autocomplete/airport/`, {
        //     "method": "POST",
        //     "headers": {
        //         "content-type": "application/x-www-form-urlencoded",
        //         "x-rapidapi-host": "airportix.p.rapidapi.com",
        //         "x-rapidapi-key": "e41ac5f444mshb544d722349d34cp12a1c9jsn14405c0bb667"
        //     },
        //     "body": {
        //         "query": feed
        //     }
        // });
        // let b = await a.json();
    }
    

    
}

from.addEventListener('click', searchAutoComplete(from, fromBox, from.value));
from.addEventListener('input', searchAutoComplete(from, fromBox, from.value));
to.addEventListener('click', searchAutoComplete(to, toBox, to.value));
to.addEventListener('input', searchAutoComplete(to, toBox, to.value));

// Prottay End




//ravi atart

const offerData = [
	{
		img: 'https://www.easemytrip.com/images/offer-img/free-fligh-22sep-hp.png',
		title: 'Free Flight Cancellation Coverage',
		detail: 'Get complimentary flight cancellation insurance on every flight booking',
		date: 'Book Now',
		promocode: ''
	},

	{
		img: 'https://www.easemytrip.com/images/train-img/20train-1sep-hp.png',
		title: 'Cashback Offer',
		detail: 'Book Train Tickets and Enjoy 20% Cashback in Wallet',
		date: 'Valid till: 30th Sep, 2021',
		promocode: 'EMTTRAIN20'
	},

	{
		img: 'https://www.easemytrip.com/images/offer-img/expo-2020-hp.png',
		title: 'Expo 2020 Dubai',
		detail: 'Experience the best of Expo 2020 Dubai with EaseMyTrip. ',
		date: 'Buy tickets here',
		promocode: ''
	},

	{
		img: 'https://www.easemytrip.com/images/offer-img/invite_earn_hp.png',
		title: 'Invite & Earn',
		detail: 'Now Earn Money by Inviting Your Friends to EaseMyTrip Up to Rs. 2000 ',
		date: 'Start inviting now',
		promocode: ''
	},

	{
		img: 'https://www.easemytrip.com/images/offer-img/EMTFirst_hp.png',
		title: 'New User Offer',
		detail: 'Register and Get Discount on Booking First Flight with Us',
		date: 'Valid till: 30th Sep, 2021',
		promocode: 'EMTFIRST'
	},

	{
		img: 'https://www.easemytrip.com/images/offer-img/hdfcemt_hp.png',
		title: 'HDFC Bank',
		detail: 'Grab Best Deals on Travel Using HDFC Bank Credit Cards',
		date: 'Valid till: 28th Sep, 2021',
		promocode: 'HDFCEMT'
	}
];

const travelBlog = [
	{
		img: 'https://www.easemytrip.com/images/offer-img/future-cloud-computing-hp.jpg',
		detail: 'The Role Of Cloud Computing In Shaping The Future Of The Travel Industry',
		date: 'September 6, 2021'
	},

	{
		img: '	https://www.easemytrip.com/images/offer-img/future-of-cruise-hp.jpg',
		detail: 'How Technology Will Help Cruise Lines Restart Operations Post-Pandemic',
		date: 'August 25, 2021'
	},

	{
		img: 'https://www.easemytrip.com/images/offer-img/places-in-france-hp.jpg',
		detail: 'Discover Europe In A New Light With Our France Tourism Packages',
		date: 'August 19, 2021'
	},

	{
		img: 'https://www.easemytrip.com/images/offer-img/cordelia-cruise-hp.jpg',
		detail: 'All You Need To Know About Cordelia Cruise',
		date: 'September 13, 2021'
	},

	{
		img: 'https://www.easemytrip.com/images/offer-img/future-cloud-computing-hp.jpg',
		detail: 'The Role Of Cloud Computing In Shaping The Future Of The Travel Industry',
		date: 'September 6, 2021'
	},

	{
		img: '	https://www.easemytrip.com/images/offer-img/future-of-cruise-hp.jpg',
		detail: 'How Technology Will Help Cruise Lines Restart Operations Post-Pandemic',
		date: 'August 25, 2021'
	},

	{
		img: 'https://www.easemytrip.com/images/offer-img/places-in-france-hp.jpg',
		detail: 'Discover Europe In A New Light With Our France Tourism Packages',
		date: 'August 19, 2021'
	},

	{
		img: 'https://www.easemytrip.com/images/offer-img/cordelia-cruise-hp.jpg',
		detail: 'All You Need To Know About Cordelia Cruise',
		date: 'September 13, 2021'
	}
];

let storeOfferData = JSON.stringify(offerData);

localStorage.setItem('storeOfferData', storeOfferData);

let getofferData = JSON.parse(localStorage.getItem('storeOfferData'));

let offerDiv = document.getElementById('offerSectionData');

function showOfferData(data) {
	data.forEach(function(ele) {
		let divMain = document.createElement('div');
		let bigdiv = document.createElement('div');
		let div1 = document.createElement('div');
		let div2 = document.createElement('div');
		let div3 = document.createElement('div');

		let img = document.createElement('img');
		let h4 = document.createElement('h4');
		let p1 = document.createElement('p');
		let p2 = document.createElement('p');

		img.src = ele.img;
		h4.innerText = ele.title;
		p1.innerText = ele.detail;
		p2.innerText = ele.date;

		div1.append(img);
		div2.append(h4, p1);
		bigdiv.append(div1, div2);
		bigdiv.classList.add('offerDetail');

		div3.append(p2);
		div3.classList.add('offerDetailDate');

		divMain.append(bigdiv, div3);
		divMain.classList.add('offerDetailMain');

		offerDiv.append(divMain);
	});
}

showOfferData(getofferData);

let travelBlogDiv = document.getElementById('travelBlogsData');

function showTravelData(data) {
	data.forEach(function(ele) {
		let divMain = document.createElement('div');

		let div1 = document.createElement('div');
		let div2 = document.createElement('div');
		let div3 = document.createElement('div');

		let img = document.createElement('img');
		let p1 = document.createElement('p');
		let p2 = document.createElement('p');

		img.src = ele.img;
		p1.innerText = ele.detail;
		p2.innerText = ele.date;

		div1.append(img);
		div2.append(p1);
		div3.append(p2);
		div3.classList.add('offerDetailDate');
		divMain.append(div1, div2, div3);
		divMain.classList.add('offerDetailMain');
		travelBlogDiv.append(divMain);
	});
}

showTravelData(travelBlog);

let but1 = document.getElementById('tw');
function addId() {
	but1.setAttribute('id', 'two');

	but1.checked = true;
}

function removeId() {
	let but2 = document.getElementById('on');
	but1.setAttribute('id', 'two');

	but1.checked = false;
}

let but3 = document.getElementById('twe');
function addIdtravel() {
	but3.setAttribute('id', 'two');

	but3.checked = true;
}

function removeIdtravel() {
	let but4 = document.getElementById('one');
	but3.setAttribute('id', 'two');

	but3.checked = false;
}


// Prottay Start