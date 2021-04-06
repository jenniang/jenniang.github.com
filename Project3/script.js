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
      // THIS DOESN'T WORK ?????

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


 // allCoins.addEventListener("click", function(){


}
