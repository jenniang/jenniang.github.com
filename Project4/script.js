console.log('hi!')


let x = document.getElementById('colors');
let colorAll = x.children;
let page = document.getElementById("page");


var hideDivs = function(divs) {
  for (var div of divs) {
    div.style.display = 'none';
  }
}

hideDivs(colorAll);


document.getElementById("page").addEventListener("keydown", function() {
   document.getElementsByClassName('start')[0].style.display = "none";
})

var audioTags = document.querySelectorAll('audio')

window.addEventListener("keydown", (event) => {
  audioTags.forEach((item, i) => {
    item.pause()
  });

  if (event.code === 'KeyA') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#86A873";
    document.getElementsByClassName('colorA')[0].style.display = "block";
  }

  if (event.code === 'KeyB') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#CC5500";
    document.getElementsByClassName('colorB')[0].style.display = "block";
    document.getElementsByClassName('audioB')[0].play();
  }

  if (event.code === 'KeyC') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#B5D9A9";
    document.getElementsByClassName('colorC')[0].style.display = "block";
  }

  if (event.code === 'KeyD') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#4C212A";
    document.getElementsByClassName('colorD')[0].style.display = "block";
  }

  if (event.code === 'KeyE') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#1A1D1A";
    document.getElementsByClassName('colorE')[0].style.display = "block";
  }

  if (event.code === 'KeyF') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#EF6351";
    document.getElementsByClassName('colorF')[0].style.display = "block";
  }

  if (event.code === 'KeyG') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#87D68D";
    document.getElementsByClassName('colorG')[0].style.display = "block";
  }

  if (event.code === 'KeyH') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#EBF5DF";
    document.getElementsByClassName('colorH')[0].style.display = "block";
  }

  if (event.code === 'KeyI') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#84ACCE";
    document.getElementsByClassName('colorI')[0].style.display = "block";
  }

  if (event.code === 'KeyJ') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#29AB87";
    document.getElementsByClassName('colorJ')[0].style.display = "block";
  }

  if (event.code === 'KeyK') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#F2A0CD";
    document.getElementsByClassName('colorK')[0].style.display = "block";
  }

  if (event.code === 'KeyL') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#BE8FFF";
    document.getElementsByClassName('colorL')[0].style.display = "block";
  }

  if (event.code === 'KeyM') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#FFCF5E";
    document.getElementsByClassName('colorM')[0].style.display = "block";
  }

  if (event.code === 'KeyN') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#F9DC5C";
    document.getElementsByClassName('colorN')[0].style.display = "block";
  }

  if (event.code === 'KeyO') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#B4D6D3";
    document.getElementsByClassName('colorO')[0].style.display = "block";
  }

  if (event.code === 'KeyP') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#D7D9B1";
    document.getElementsByClassName('colorP')[0].style.display = "block";
  }

  if (event.code === 'KeyQ') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#456990";
    document.getElementsByClassName('colorQ')[0].style.display = "block";
  }

  if (event.code === 'KeyR') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#777696";
    document.getElementsByClassName('colorR')[0].style.display = "block";
  }

  if (event.code === 'KeyS') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#FF866E";
    document.getElementsByClassName('colorS')[0].style.display = "block";
  }

  if (event.code === 'KeyT') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#FF7B9C";
    document.getElementsByClassName('colorT')[0].style.display = "block";
  }

  if (event.code === 'KeyU') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#A4D7F3";
    document.getElementsByClassName('colorU')[0].style.display = "block";
    document.getElementsByClassName('audioU')[0].play();
  }

  if (event.code === 'KeyV') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#FF84E8";
    document.getElementsByClassName('colorV')[0].style.display = "block";
  }

  if (event.code === 'KeyW') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#4C8577";
    document.getElementsByClassName('colorW')[0].style.display = "block";
  }

  if (event.code === 'KeyX') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#798478";
    document.getElementsByClassName('colorX')[0].style.display = "block";
  }

  if (event.code === 'KeyY') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#004385";
    document.getElementsByClassName('colorY')[0].style.display = "block";
  }

  if (event.code === 'KeyZ') {
    hideDivs(colorAll);
    document.body.style.backgroundColor = "#39A78E";
    document.getElementsByClassName('colorZ')[0].style.display = "block";
  }


});
