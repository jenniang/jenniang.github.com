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
   document.getElementsByClassName('start')[0].style.display = "none";;
   document.getElementsByClassName('clipboard')[0].style.display = "none";
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
    document.getElementById('colors')[0].style.transition = "3s";
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

document.querySelectorAll('.copy').forEach(item => {
  item.addEventListener('click', event => {
    if (document.getElementsByClassName('clipboard')[0].style.display === "none") {
      document.getElementsByClassName('clipboard')[0].style.display = "block";
  } else {
      document.getElementsByClassName('clipboard')[0].style.display = "none";
    }
  })
})





document.querySelectorAll('.copy').forEach((el) => {
  el.addEventListener('click', () => {
    navigator.clipboard.writeText(el.textContent);
  });
});







document.getElementById("showChartA").addEventListener("click", function() {
  if (document.querySelectorAll('.chartA')[0].style.display === "none") {
        document.querySelectorAll('.chartA')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartA')[0].style.display = "none";
      }
})


document.getElementById("showChartB").addEventListener("click", function() {
  if (document.querySelectorAll('.chartB')[0].style.display === "none") {
        document.querySelectorAll('.chartB')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartB')[0].style.display = "none";
      }
})

document.getElementById("showChartC").addEventListener("click", function() {
  if (document.querySelectorAll('.chartC')[0].style.display === "none") {
        document.querySelectorAll('.chartC')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartC')[0].style.display = "none";
      }
})

document.getElementById("showChartD").addEventListener("click", function() {
  if (document.querySelectorAll('.chartD')[0].style.display === "none") {
        document.querySelectorAll('.chartD')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartD')[0].style.display = "none";
      }
})

document.getElementById("showChartE").addEventListener("click", function() {
  if (document.querySelectorAll('.chartE')[0].style.display === "none") {
        document.querySelectorAll('.chartE')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartE')[0].style.display = "none";
      }
})

document.getElementById("showChartF").addEventListener("click", function() {
  if (document.querySelectorAll('.chartF')[0].style.display === "none") {
        document.querySelectorAll('.chartF')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartF')[0].style.display = "none";
      }
})

document.getElementById("showChartG").addEventListener("click", function() {
  if (document.querySelectorAll('.chartG')[0].style.display === "none") {
        document.querySelectorAll('.chartG')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartG')[0].style.display = "none";
      }
})

document.getElementById("showChartH").addEventListener("click", function() {
  if (document.querySelectorAll('.chartH')[0].style.display === "none") {
        document.querySelectorAll('.chartH')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartH')[0].style.display = "none";
      }
})

document.getElementById("showChartI").addEventListener("click", function() {
  if (document.querySelectorAll('.chartI')[0].style.display === "none") {
        document.querySelectorAll('.chartI')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartI')[0].style.display = "none";
      }
})

document.getElementById("showChartJ").addEventListener("click", function() {
  if (document.querySelectorAll('.chartJ')[0].style.display === "none") {
        document.querySelectorAll('.chartJ')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartJ')[0].style.display = "none";
      }
})

document.getElementById("showChartK").addEventListener("click", function() {
  if (document.querySelectorAll('.chartK')[0].style.display === "none") {
        document.querySelectorAll('.chartK')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartK')[0].style.display = "none";
      }
})

document.getElementById("showChartL").addEventListener("click", function() {
  if (document.querySelectorAll('.chartL')[0].style.display === "none") {
        document.querySelectorAll('.chartL')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartL')[0].style.display = "none";
      }
})

document.getElementById("showChartM").addEventListener("click", function() {
  if (document.querySelectorAll('.chartM')[0].style.display === "none") {
        document.querySelectorAll('.chartM')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartM')[0].style.display = "none";
      }
})

document.getElementById("showChartN").addEventListener("click", function() {
  if (document.querySelectorAll('.chartN')[0].style.display === "none") {
        document.querySelectorAll('.chartN')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartN')[0].style.display = "none";
      }
})

document.getElementById("showChartO").addEventListener("click", function() {
  if (document.querySelectorAll('.chartO')[0].style.display === "none") {
        document.querySelectorAll('.chartO')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartO')[0].style.display = "none";
      }
})

document.getElementById("showChartP").addEventListener("click", function() {
  if (document.querySelectorAll('.chartP')[0].style.display === "none") {
        document.querySelectorAll('.chartP')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartP')[0].style.display = "none";
      }
})

document.getElementById("showChartQ").addEventListener("click", function() {
  if (document.querySelectorAll('.chartQ')[0].style.display === "none") {
        document.querySelectorAll('.chartQ')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartQ')[0].style.display = "none";
      }
})

document.getElementById("showChartR").addEventListener("click", function() {
  if (document.querySelectorAll('.chartR')[0].style.display === "none") {
        document.querySelectorAll('.chartR')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartR')[0].style.display = "none";
      }
})

document.getElementById("showChartS").addEventListener("click", function() {
  if (document.querySelectorAll('.chartS')[0].style.display === "none") {
        document.querySelectorAll('.chartS')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartS')[0].style.display = "none";
      }
})

document.getElementById("showChartT").addEventListener("click", function() {
  if (document.querySelectorAll('.chartT')[0].style.display === "none") {
        document.querySelectorAll('.chartT')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartT')[0].style.display = "none";
      }
})

document.getElementById("showChartU").addEventListener("click", function() {
  if (document.querySelectorAll('.chartU')[0].style.display === "none") {
        document.querySelectorAll('.chartU')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartU')[0].style.display = "none";
      }
})

document.getElementById("showChartV").addEventListener("click", function() {
  if (document.querySelectorAll('.chartV')[0].style.display === "none") {
        document.querySelectorAll('.chartV')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartV')[0].style.display = "none";
      }
})

document.getElementById("showChartW").addEventListener("click", function() {
  if (document.querySelectorAll('.chartW')[0].style.display === "none") {
        document.querySelectorAll('.chartW')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartW')[0].style.display = "none";
      }
})

document.getElementById("showChartX").addEventListener("click", function() {
  if (document.querySelectorAll('.chartX')[0].style.display === "none") {
        document.querySelectorAll('.chartX')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartX')[0].style.display = "none";
      }
})

document.getElementById("showChartY").addEventListener("click", function() {
  if (document.querySelectorAll('.chartY')[0].style.display === "none") {
        document.querySelectorAll('.chartY')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartY')[0].style.display = "none";
      }
})

document.getElementById("showChartZ").addEventListener("click", function() {
  if (document.querySelectorAll('.chartZ')[0].style.display === "none") {
        document.querySelectorAll('.chartZ')[0].style.display = "grid";
    } else {
        document.querySelectorAll('.chartZ')[0].style.display = "none";
      }
})
