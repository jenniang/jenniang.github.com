console.log('hi!')

// when clicking on the specified element (here i use a button which has been assigned an ID), an action/function is performed
// in this case, we want to change the background by applying a style to it
// this style is applied to the body of the document

// when x is clicked y is changed


document.getElementById("timebutton1").addEventListener("click", function() {

  document.body.style.background = "#0e101a";

});

document.getElementById("timebutton2").addEventListener("click", function() {

  document.body.style.background = "#151d45";

});

document.getElementById("timebutton3").addEventListener("click", function() {

  document.body.style.background = "#ff8361";

});

document.getElementById("timebutton4").addEventListener("click", function() {

  document.body.style.background = "#abdbff";

});

document.getElementById("timebutton5").addEventListener("click", function() {

  document.body.style.background = "#63adf7";

});

document.getElementById("timebutton6").addEventListener("click", function() {

  document.body.style.background = "#5b7de3";

});

document.getElementById("timebutton7").addEventListener("click", function() {

  document.body.style.background = "#d6635a";

});

document.getElementById("timebutton8").addEventListener("click", function() {

  document.body.style.background = "#2d3d6e";

});
