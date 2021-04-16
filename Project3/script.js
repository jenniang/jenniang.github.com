/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyIdaIj17p4u42Pp" }).base(
  "app4S7qkwDrtYlRDn"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("collection").select({}).eachPage(gotPageOfCoins, gotAllCoins);

// an empty array to hold our book data
const coins = [];

// callback function that receives our data
function gotPageOfCoins(records, fetchNextPage) {
  console.log("gotPageOfCoins()");
  // add the records from this page to our array
  coins.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllCoins(err) {
  console.log("gotAllCoins()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogCoins();
  try {
    showCoins();
  } catch(e){
    console.log(e)
  }
}

// just loop through the books and console.log them
function consoleLogCoins() {
  console.log("consoleLogCoins()");
  coins.forEach((coin) => {
    // console.log("Coin:", coin);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showCoins() {

  let allCountry = document.querySelectorAll('.country')
  allCountry.forEach((item, i) => {
    item.addEventListener("click", function(){
      console.log(event)
      var element = event.currentTarget
      var country = element.dataset.country
      console.log(country)
      filter(country);
    })
  });
  // console.log("showCoins()");
  coins.forEach((coin) => {


      var coinContainer = document.createElement("div");
      coinContainer.classList.add("coin-container");
      document.querySelector(".container").append(coinContainer);

      var coinTitle = document.createElement("p")
      coinTitle.classList.add("title")
      coinTitle.innerText = coin.fields.title;
      coinContainer.append(coinTitle);

      var nameOfCurrency = document.createElement("p")
      nameOfCurrency.classList.add("currency")
      nameOfCurrency.innerText = coin.fields.currency;
      coinContainer.append(nameOfCurrency);

      var coinYear = document.createElement("p")
      coinYear.classList.add("year")
      coinYear.innerText = coin.fields.year;
      coinContainer.append(coinYear);

      var coinValue = document.createElement("p")
      coinValue.classList.add("value")
      coinValue.innerText = coin.fields.value;
      coinContainer.append(coinValue);

      var coinValueUSD = document.createElement("p")
      coinValueUSD.classList.add("value_usd")
      coinValueUSD.innerText = coin.fields.value_usd;
      coinContainer.append(coinValueUSD);

      var coinImage = document.createElement("img")
      coinImage.classList.add("image");
      coinImage.src = coin.fields.image[0].url;
      coinContainer.append(coinImage);

      // get country field from airtable
      // loop through the array and add each country as a class to the coin container

      var coinCountry = coin.fields.country;
      coinCountry.forEach(function(country) {
    //    coinContainer.classList.add(country)
        coinContainer.dataset.country = country
      })
  });


  function filter(country){

    let allCoins = document.querySelectorAll('.coin-container')
    allCoins.forEach((item, i) => {
      if (item.dataset.country == country) {
        item.style.display = 'grid'
      } else {
        item.style.display = 'none'
      }

    });

  }

  document.getElementById("asiabutton").addEventListener("click", function() {

    document.getElementsByClassName('asia')[0].style.display = "grid";
    document.getElementsByClassName('europe')[0].style.display = "none";
    document.getElementsByClassName('northamerica')[0].style.display = "none";
    document.getElementsByClassName('showall')[0].style.display = "none";

    document.getElementsByClassName('asiatext')[0].style.display = "block";
    document.getElementsByClassName('europetext')[0].style.display = "none";
    document.getElementsByClassName('northamericatext')[0].style.display = "none";

    document.getElementById('showallbutton').style.textDecoration = "none";
    document.getElementById('asiabutton').style.textDecoration = "underline";
    document.getElementById('europebutton').style.textDecoration = "none";
    document.getElementById('northamericabutton').style.textDecoration = "none";

  });

  document.getElementById("europebutton").addEventListener("click", function() {

    document.getElementsByClassName('asia')[0].style.display = "none";
    document.getElementsByClassName('europe')[0].style.display = "block";
    document.getElementsByClassName('northamerica')[0].style.display = "none";
    document.getElementsByClassName('showall')[0].style.display = "none";

    document.getElementsByClassName('asiatext')[0].style.display = "none";
    document.getElementsByClassName('europetext')[0].style.display = "block";
    document.getElementsByClassName('northamericatext')[0].style.display = "none";

    document.getElementById('showallbutton').style.textDecoration = "none";
    document.getElementById('asiabutton').style.textDecoration = "none";
    document.getElementById('europebutton').style.textDecoration = "underline";
    document.getElementById('northamericabutton').style.textDecoration = "none";

  });

  document.getElementById("northamericabutton").addEventListener("click", function() {

    document.getElementsByClassName('asia')[0].style.display = "none";
    document.getElementsByClassName('europe')[0].style.display = "none";
    document.getElementsByClassName('northamerica')[0].style.display = "block";
    document.getElementsByClassName('showall')[0].style.display = "none";

    document.getElementsByClassName('asiatext')[0].style.display = "none";
    document.getElementsByClassName('europetext')[0].style.display = "none";
    document.getElementsByClassName('northamericatext')[0].style.display = "block";

    document.getElementById('showallbutton').style.textDecoration = "none";
    document.getElementById('asiabutton').style.textDecoration = "none";
    document.getElementById('europebutton').style.textDecoration = "none";
    document.getElementById('northamericabutton').style.textDecoration = "underline";

  });

  document.getElementById("showallbutton").addEventListener("click", function() {

    document.getElementsByClassName('asia')[0].style.display = "none";
    document.getElementsByClassName('europe')[0].style.display = "none";
    document.getElementsByClassName('northamerica')[0].style.display = "none";
    document.getElementsByClassName('showall')[0].style.display = "block";

    document.getElementsByClassName('asiatext')[0].style.display = "none";
    document.getElementsByClassName('europetext')[0].style.display = "none";
    document.getElementsByClassName('northamericatext')[0].style.display = "none";

    document.getElementById('showallbutton').style.textDecoration = "underline";
    document.getElementById('asiabutton').style.textDecoration = "none";
    document.getElementById('europebutton').style.textDecoration = "none";
    document.getElementById('northamericabutton').style.textDecoration = "none";

  });

  document.querySelector("#showallbutton").addEventListener("click", function() {

    let allCoins = document.querySelectorAll('.coin-container')
    allCoins.forEach((item, i) => {
        item.style.display = 'grid'

    });
  })




  document.getElementById("THAI").addEventListener("click", function() {
    document.getElementsByClassName("THAI")[0].style.color = ("#FF4545")
    document.getElementsByClassName("MAS")[0].style.color = ("white")
    document.getElementsByClassName("IDN")[0].style.color = ("white")
    document.getElementsByClassName("CHI")[0].style.color = ("white")
    document.getElementsByClassName("HK")[0].style.color = ("white")
    document.getElementsByClassName("KR")[0].style.color = ("white")
    document.getElementsByClassName("SG")[0].style.color = ("white")

    });

  document.getElementById("MAS").addEventListener("click", function() {
    document.getElementsByClassName("THAI")[0].style.color = ("white")
    document.getElementsByClassName("MAS")[0].style.color = ("#FF4545")
    document.getElementsByClassName("IDN")[0].style.color = ("white")
    document.getElementsByClassName("CHI")[0].style.color = ("white")
    document.getElementsByClassName("HK")[0].style.color = ("white")
    document.getElementsByClassName("KR")[0].style.color = ("white")
    document.getElementsByClassName("SG")[0].style.color = ("white")

    });

  document.getElementById("IDN").addEventListener("click", function() {
    document.getElementsByClassName("THAI")[0].style.color = ("white")
    document.getElementsByClassName("MAS")[0].style.color = ("white")
    document.getElementsByClassName("IDN")[0].style.color = ("#FF4545")
    document.getElementsByClassName("CHI")[0].style.color = ("white")
    document.getElementsByClassName("HK")[0].style.color = ("white")
    document.getElementsByClassName("KR")[0].style.color = ("white")
    document.getElementsByClassName("SG")[0].style.color = ("white")

    });

  document.getElementById("CHI").addEventListener("click", function() {
    document.getElementsByClassName("THAI")[0].style.color = ("white")
    document.getElementsByClassName("MAS")[0].style.color = ("white")
    document.getElementsByClassName("IDN")[0].style.color = ("white")
    document.getElementsByClassName("CHI")[0].style.color = ("#FF4545")
    document.getElementsByClassName("HK")[0].style.color = ("white")
    document.getElementsByClassName("KR")[0].style.color = ("white")
    document.getElementsByClassName("SG")[0].style.color = ("white")


    });

  document.getElementById("HK").addEventListener("click", function() {
    document.getElementsByClassName("THAI")[0].style.color = ("white")
    document.getElementsByClassName("MAS")[0].style.color = ("white")
    document.getElementsByClassName("IDN")[0].style.color = ("white")
    document.getElementsByClassName("CHI")[0].style.color = ("white")
    document.getElementsByClassName("HK")[0].style.color = ("#FF4545")
    document.getElementsByClassName("KR")[0].style.color = ("white")
    document.getElementsByClassName("SG")[0].style.color = ("white")

    });

  document.getElementById("KR").addEventListener("click", function() {
    document.getElementsByClassName("THAI")[0].style.color = ("white")
    document.getElementsByClassName("MAS")[0].style.color = ("white")
    document.getElementsByClassName("IDN")[0].style.color = ("white")
    document.getElementsByClassName("CHI")[0].style.color = ("white")
    document.getElementsByClassName("HK")[0].style.color = ("white")
    document.getElementsByClassName("KR")[0].style.color = ("#FF4545")
    document.getElementsByClassName("SG")[0].style.color = ("white")

    });

  document.getElementById("SG").addEventListener("click", function() {
    document.getElementsByClassName("THAI")[0].style.color = ("white")
    document.getElementsByClassName("MAS")[0].style.color = ("white")
    document.getElementsByClassName("IDN")[0].style.color = ("white")
    document.getElementsByClassName("CHI")[0].style.color = ("white")
    document.getElementsByClassName("HK")[0].style.color = ("white")
    document.getElementsByClassName("KR")[0].style.color = ("white")
    document.getElementsByClassName("SG")[0].style.color = ("#FF4545")

    });

  document.getElementById("FR").addEventListener("click", function() {
    document.getElementsByClassName("CZ")[0].style.color = ("white")
    document.getElementsByClassName("FR")[0].style.color = ("#FF4545")

    });

  document.getElementById("CZ").addEventListener("click", function() {
    document.getElementsByClassName("FR")[0].style.color = ("white")
    document.getElementsByClassName("CZ")[0].style.color = ("#FF4545")

    });

  document.getElementById("USA").addEventListener("click", function() {
    document.getElementsByClassName("USA")[0].style.color = ("#FF4545")

    });

  document.getElementById("maplinks").addEventListener("click", function() {
    document.getElementsByClassName("THAI")[0].style.color = ("white")
    document.getElementsByClassName("MAS")[0].style.color = ("white")
    document.getElementsByClassName("IDN")[0].style.color = ("white")
    document.getElementsByClassName("CHI")[0].style.color = ("white")
    document.getElementsByClassName("HK")[0].style.color = ("white")
    document.getElementsByClassName("KR")[0].style.color = ("white")
    document.getElementsByClassName("SG")[0].style.color = ("white")
    document.getElementsByClassName("FR")[0].style.color = ("white")
    document.getElementsByClassName("CZ")[0].style.color = ("white")
    document.getElementsByClassName("USA")[0].style.color = ("white")

    });
}
