window.onload = function() {

// create an array for each color pallate
var pallate1 = ["#222831", "#00ADB5", "#EEEEEE"];
var pallate2 = ["#66BFBF", "#EAF6F6", "#FF0063"];
var pallate3 = ["#364F6B", "#F5F5F5", "#FC5185"];

// get the buttons id and add event listener
var button1 = document.getElementById("pallate_1");
var button2 = document.getElementById("pallate_2");
var button3 = document.getElementById("pallate_3");

// get the elements id to change the color
var main_text = document.getElementById("main_text");
var main_text_div = document.getElementById("main_text_div");
var table_div = document.getElementById("table_div");
var footer = document.getElementById("footer");

// adding event listener to each button
button1.addEventListener("click", changeColor);
button2.addEventListener("click", changeColor2);
button3.addEventListener("click", changeColor3);

// when button is clicked, call the function
function changeColor() {
    main_text.style.color = pallate1[2];
    main_text_div.style.backgroundColor = pallate1[0];
    table_div.style.backgroundColor = pallate1[1];
    footer.style.backgroundColor = pallate1[2];
}

// when button is clicked, call the function
function changeColor2() {
    main_text.style.color = "#111";
    main_text_div.style.backgroundColor = pallate2[0];
    table_div.style.backgroundColor = pallate2[1];
    footer.style.backgroundColor = pallate2[2];
}

// when button is clicked, call the function
function changeColor3() {
    main_text.style.color = "#ffffff";
    main_text_div.style.backgroundColor = pallate3[0];
    table_div.style.backgroundColor = pallate3[1];
    footer.style.backgroundColor = pallate3[2];
}

    alert("Click on the buttons to change the color of the page.");
}