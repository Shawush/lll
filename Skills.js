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



// get id and class name
const skills = document.getElementById('skills');
const project = document.getElementById('projects');
const horizontalImages = document.getElementById('horizontal-images');


// when button is clicked, call the function
function changeColor(pallate) {
    document.getElementById('paragraph').style.color = "#111";
    skills.style.backgroundColor = pallate1[2];
    project.style.backgroundColor = pallate1[1];
    horizontalImages.style.backgroundColor = pallate1[0];
}

function changeColor2() {
    document.getElementById('paragraph').style.color = "#ffffff";
    skills.style.backgroundColor = pallate2[0];
    project.style.backgroundColor = pallate2[1];
    horizontalImages.style.backgroundColor = pallate2[2];
}

function changeColor3() {
    document.getElementById('paragraph').style.color = "#ffffff";
    skills.style.backgroundColor = pallate3[0];
    project.style.backgroundColor = pallate3[1];
    horizontalImages.style.backgroundColor = pallate3[2];
}

}