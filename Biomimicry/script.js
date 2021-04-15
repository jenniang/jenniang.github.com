console.log('hi!')

// when clicking on the specified element (here i use a button which has been assigned an ID), an action/function is performed
// in this case, we want to change the background by applying a style to it
// this style (background) is applied to the body of the document anc changes the color
// clicking the button also underlines the time to indicate which button is currently active
// style (textDecoration) is applied to a specific ID within the document
// and the style is disabled for all other IDs

// when x is clicked y is changed


// this is a really long winded way of doing it i'm sure there is a shortcut


document.getElementById("timebutton1").addEventListener("click", function() {

  document.body.style.background = "#0e101a";
  document.getElementById("timebutton1").style.textDecoration = ("underline")
  document.getElementById("timebutton2").style.textDecoration = ("none")
  document.getElementById("timebutton3").style.textDecoration = ("none")
  document.getElementById("timebutton4").style.textDecoration = ("none")
  document.getElementById("timebutton5").style.textDecoration = ("none")
  document.getElementById("timebutton6").style.textDecoration = ("none")
  document.getElementById("timebutton7").style.textDecoration = ("none")
  document.getElementById("timebutton8").style.textDecoration = ("none")


});

document.getElementById("timebutton2").addEventListener("click", function() {

  document.body.style.background = "#151d45";
  document.getElementById("timebutton1").style.textDecoration = ("none")
  document.getElementById("timebutton2").style.textDecoration = ("underline")
  document.getElementById("timebutton3").style.textDecoration = ("none")
  document.getElementById("timebutton4").style.textDecoration = ("none")
  document.getElementById("timebutton5").style.textDecoration = ("none")
  document.getElementById("timebutton6").style.textDecoration = ("none")
  document.getElementById("timebutton7").style.textDecoration = ("none")
  document.getElementById("timebutton8").style.textDecoration = ("none")

});

document.getElementById("timebutton3").addEventListener("click", function() {

  document.body.style.background = "#ff8361";
  document.getElementById("timebutton1").style.textDecoration = ("none")
  document.getElementById("timebutton2").style.textDecoration = ("none")
  document.getElementById("timebutton3").style.textDecoration = ("underline")
  document.getElementById("timebutton4").style.textDecoration = ("none")
  document.getElementById("timebutton5").style.textDecoration = ("none")
  document.getElementById("timebutton6").style.textDecoration = ("none")
  document.getElementById("timebutton7").style.textDecoration = ("none")
  document.getElementById("timebutton8").style.textDecoration = ("none")

});

document.getElementById("timebutton4").addEventListener("click", function() {

  document.body.style.background = "#abdbff";
  document.getElementById("timebutton1").style.textDecoration = ("none")
  document.getElementById("timebutton2").style.textDecoration = ("none")
  document.getElementById("timebutton3").style.textDecoration = ("none")
  document.getElementById("timebutton4").style.textDecoration = ("underline")
  document.getElementById("timebutton5").style.textDecoration = ("none")
  document.getElementById("timebutton6").style.textDecoration = ("none")
  document.getElementById("timebutton7").style.textDecoration = ("none")
  document.getElementById("timebutton8").style.textDecoration = ("none")

});

document.getElementById("timebutton5").addEventListener("click", function() {

  document.body.style.background = "#63adf7";
  document.getElementById("timebutton1").style.textDecoration = ("none")
  document.getElementById("timebutton2").style.textDecoration = ("none")
  document.getElementById("timebutton3").style.textDecoration = ("none")
  document.getElementById("timebutton4").style.textDecoration = ("none")
  document.getElementById("timebutton5").style.textDecoration = ("underline")
  document.getElementById("timebutton6").style.textDecoration = ("none")
  document.getElementById("timebutton7").style.textDecoration = ("none")
  document.getElementById("timebutton8").style.textDecoration = ("none")

});

document.getElementById("timebutton6").addEventListener("click", function() {

  document.body.style.background = "#5b7de3";
  document.getElementById("timebutton1").style.textDecoration = ("none")
  document.getElementById("timebutton2").style.textDecoration = ("none")
  document.getElementById("timebutton3").style.textDecoration = ("none")
  document.getElementById("timebutton4").style.textDecoration = ("none")
  document.getElementById("timebutton5").style.textDecoration = ("none")
  document.getElementById("timebutton6").style.textDecoration = ("underline")
  document.getElementById("timebutton7").style.textDecoration = ("none")
  document.getElementById("timebutton8").style.textDecoration = ("none")

});

document.getElementById("timebutton7").addEventListener("click", function() {

  document.body.style.background = "#d6635a";
  document.getElementById("timebutton1").style.textDecoration = ("none")
  document.getElementById("timebutton2").style.textDecoration = ("none")
  document.getElementById("timebutton3").style.textDecoration = ("none")
  document.getElementById("timebutton4").style.textDecoration = ("none")
  document.getElementById("timebutton5").style.textDecoration = ("none")
  document.getElementById("timebutton6").style.textDecoration = ("none")
  document.getElementById("timebutton7").style.textDecoration = ("underline")
  document.getElementById("timebutton8").style.textDecoration = ("none")

});

document.getElementById("timebutton8").addEventListener("click", function() {

  document.body.style.background = "#2d3d6e";
  document.getElementById("timebutton1").style.textDecoration = ("none")
  document.getElementById("timebutton2").style.textDecoration = ("none")
  document.getElementById("timebutton3").style.textDecoration = ("none")
  document.getElementById("timebutton4").style.textDecoration = ("none")
  document.getElementById("timebutton5").style.textDecoration = ("none")
  document.getElementById("timebutton6").style.textDecoration = ("none")
  document.getElementById("timebutton7").style.textDecoration = ("none")
  document.getElementById("timebutton8").style.textDecoration = ("underline")

});
