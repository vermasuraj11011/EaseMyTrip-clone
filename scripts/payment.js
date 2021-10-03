



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

import navbar from '../component/header.js';

let headerPlace = document.getElementById('placeHeader');

headerPlace.innerHTML = navbar();

