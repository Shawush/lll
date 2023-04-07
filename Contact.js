// contact-me-header
// media_table
// contact-me
window.onload = function() {

// create an array for each color pallate
var pallate1 = ["#222831", "#00ADB5", "#EEEEEE"];
var pallate2 = ["#66BFBF", "#EAF6F6", "#FF0063"];
var pallate3 = ["#364F6B", "#F5F5F5", "#FC5185"];

// get the buttons id and add event listener
var button1 = document.getElementById("pallate_1");
var button2 = document.getElementById("pallate_2");
var button3 = document.getElementById("pallate_3");

// adding event listener to each button
button1.addEventListener("click", changeColor);
button2.addEventListener("click", changeColor2);
button3.addEventListener("click", changeColor3);



// get the id of the section
var contactMe = document.getElementById("contact-form");
var contactMeHeader = document.getElementById("contact-me-header");
var mediaTable = document.getElementById("media_table");
var contactHeading = document.getElementById("contact-form-h");

// adding event listener to each button
function changeColor() {
    contactMe.style.backgroundColor = pallate1[2];
    contactMeHeader.style.backgroundColor = pallate1[0];
    mediaTable.style.backgroundColor = pallate1[1];
}

function changeColor2() {
    contactMeHeader.style.backgroundColor = pallate2[2];
    contactMe.style.backgroundColor = pallate2[0];
    mediaTable.style.backgroundColor = pallate2[1];
}

function changeColor3() {
    contactMeHeader.style.backgroundColor = pallate3[0];
    contactMe.style.backgroundColor = pallate3[2];
    mediaTable.style.backgroundColor = pallate3[1];
    contactMe.style.color = pallate3[1];
    contactHeading.style.color = "#FFFFFF"
}


const form = document.querySelector('.contact-form');
const emailInput = form.querySelector('#email');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if (isValidEmail(emailInput.value)) {
		alert('Good!');
	} else {
		alert('Please enter a valid email address.');
	}
});

function isValidEmail(email) {
	// Regular expression to check for valid email format
	const emailRegex = /\S+@\S+\.\S+/;
	return emailRegex.test(email);
}

}