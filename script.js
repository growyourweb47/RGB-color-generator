 
// Accessing all the range sliders 
const redSliderEl=document.querySelector("#red-slider");
const greenSliderEl=document.querySelector("#green-slider");
const blueSliderEl=document.querySelector("#blue-slider");

// Accessing the input tag 
const inputEl=document.querySelector("#rgb-value");


// function that will genrate the color as we move the range sliders 
function mycolorGenerator(){
    //Storing the current color slider values in different variables 
    var red=redSliderEl.value;
    var green=greenSliderEl.value;
    var blue=blueSliderEl.value;
    var color='rgb('+red+','+green+', '+blue+')';
    inputEl.innerText=color;
   
    // Changing the body background color - with current genrated color
    document.body.style.backgroundColor=color;
}

// mycolorGenerator calls when user changes the slider values
redSliderEl.addEventListener("input",mycolorGenerator);
greenSliderEl.addEventListener("input",mycolorGenerator);
blueSliderEl.addEventListener("input",mycolorGenerator);