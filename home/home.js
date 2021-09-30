import footer from '../footer/footer.js';

let footerPlace = document.querySelector('#placeFooter');
footerPlace.innerHTML = footer();

import flight from '../component/flightData.js';

// placing flight roautes in the table
let count = 0;
flight.forEach((element) => {
	let container;
	if (count === 10) {
		return;
	}
	if (count % 2 == 0) {
		container = document.querySelector('.tab-content-lft');
	} else {
		container = document.querySelector('.tab-content-rit');
	}

	let ul = document.createElement('ul');
	let li1 = document.createElement('li');
	li1.innerText = element;

	let li2 = document.createElement('li');
	let a = document.createElement('a');
	a.innerText = 'search flight';
	a.setAttribute('class', 'srch_btn');
	li2.appendChild(a);

	ul.append(li1, li2);
	container.appendChild(ul);
	count++;
});

// placing signup and password popup in their respective div
import { signUpHtml, passwordHtml } from '../signup/signup.js';
document.querySelector('.placingSignUp').innerHTML = signUpHtml();
document.querySelector('.placingSignUpPass').innerHTML = passwordHtml();

//when user will click on the login the login window will popup
document.querySelector('#popUp').addEventListener('click', () => {
	document.querySelector('.bg-modal-signup').style.display = 'flex';
});

//closing the signup popup
document.querySelector('#close-sign-up-form').addEventListener('click', () => {
	document.querySelector('.bg-modal-signup').style.display = 'none';
});

//closing the password popup
document.querySelector('#close-pass-up-form').addEventListener('click', () => {
	document.querySelector('.bg-modal-password').style.display = 'none';
	console.log('suraj');
});

// changing the colour of the continue button when vaule is entered
document.querySelector('#form-signIn-email').addEventListener('input', () => {
	if (document.querySelector('#form-signIn-email').value == '') {
		document.querySelector('.signupContinue').style.backgroundColor = 'rgba(0, 0, 0, .25)';
	} else {
		document.querySelector('.signupContinue').style.backgroundColor = '#EF6614';
	}
});

//when user will click on the contiue  the password window will popup
document.querySelector('form').addEventListener('submit', (e) => {
	e.preventDefault();

	document.querySelector('.bg-modal-signup').style.display = 'none';
	document.querySelector('.bg-modal-password').style.display = 'flex';
});

// when click on the left arrow login popup will come
document.querySelector('.fa-arrow-left').addEventListener('click', () => {
	document.querySelector('.bg-modal-password').style.display = 'none';
	document.querySelector('.bg-modal-signup').style.display = 'flex';
});

// changing the colour of the login button and also location will change to the home page when clicked on the login button
document.querySelector('#form-signIn-password').addEventListener('input', () => {
	let login = document.querySelector('.login');
	if (document.querySelector('#form-signIn-password').value == '') {
		login.style.backgroundColor = 'rgba(0, 0, 0, .25)';
	} else {
		login.style.backgroundColor = '#EF6614';
	}
	login.addEventListener('submit', (e) => {
		window.location.href = './home.html';
	});
});
