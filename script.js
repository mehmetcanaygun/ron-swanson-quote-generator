// DOM Elements
const quote = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote-btn");
const mouth = document.querySelector(".mouth");

async function getNewQuote() {
  quote.innerHTML = "Loading...";

  const res = await fetch(
    "https://ron-swanson-quotes.herokuapp.com/v2/quotes/"
  );

  const data = await res.json();

  mouth.classList.add("talk");

  setTimeout(() => {
    mouth.classList.remove("talk");
  }, 2500);

  quote.innerHTML = `<em>" ${data[0]} "</em>`;
}

// Event listeners
newQuoteBtn.addEventListener("click", getNewQuote);
document.addEventListener("DOMContentLoaded", getNewQuote);
