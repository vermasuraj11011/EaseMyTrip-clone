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

finalSearch.addEventListener('click', () => {

    if (from.value === "") {
        alert('Please enter valid origin city');
        return;
    }
    if (to.value === "") {
        alert('Please enter valid destination city');
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


