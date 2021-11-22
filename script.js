const quoteBtn = document.querySelector(
  " .quote-container__content--actions  button"
);
const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.querySelector(".quote-container__content--text");
const author = document.querySelector(".quote-container__content--author");
const loader = document.querySelector(".loader");

const showLoader = function () {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

const removeLoader = function () {
  if (!loader.hidden) {
    loader.hidden = true;
    quoteContainer.hidden = false;
  }
};

// Getting Quote from the Quote API
const getQuotes = async function () {
  showLoader();
  // API from https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373
  const apiUrl = "https://type.fit/api/quotes";
  const response = await fetch(apiUrl);
  const quotes = await response.json();
  displayRandomQuote(quotes);
};

// Getting a Random Quote cuz the API sends huge number of Quote and Displaying
const displayRandomQuote = function (quotes) {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  if (randomQuote.text.length > 100) {
    quoteText.style.fontSize = "20px";
    quoteText.textContent = randomQuote.text;
  } else quoteText.textContent = randomQuote.text;
  //   setting author Text Dynamically
  if (!randomQuote.author) {
    author.textContent = "UnKnown";
  } else {
    author.textContent = randomQuote.author;
  }
  removeLoader();
};

// onLoad
getQuotes();

// Event Listeners
quoteBtn.addEventListener("click", getQuotes);
