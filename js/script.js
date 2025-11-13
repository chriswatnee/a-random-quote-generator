/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Variable that stores the index of the current quote displaying
let currentQuoteIndex;

// An array of objects to store the quotes
const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney"
  },
  {
    quote: "I've failed over and over and over again in my life. And that is why I succeed.",
    source: "Michael Jordan",
    citation: "Nike commercial"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    source: "Steve Jobs",
    citation: "Stanford Commencement Address",
    year: 2005
  },
  {
    quote: "It always seems impossible until it's done.",
    source: "Nelson Mandela"
  },
  {
    quote: "If you really want something, and really work hard, and take advantage of opportunities, and never give up, you will find a way.",
    source: "Jane Goodall"
  }
];


// Function that returns random quote object
function getRandomQuote() {
  let randomIndex;
  // Generate a randomIndex until it is different than currentQuoteIndex to prevent the same quote from displaying two times in a row
  do {
    // Generates a random number ranging from zero to the index of the last item in the quotes array
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === currentQuoteIndex);
  currentQuoteIndex = randomIndex;
  return quotes[randomIndex];
}

// Function that displays a new quote
function printQuote() {
  // Get random quote
  const quote = getRandomQuote();
  // Store the HTML string of quote
  let htmlStr = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}`;
  // Add citation if one exists
  if (quote.citation) {
    htmlStr += `<span class="citation">${quote.citation}</span>`;
  }
  // Add year if one exists
  if (quote.year) {
    htmlStr += `<span class="year">${quote.year}</span>`;
  }
  // Close the p tag
  htmlStr += "</p>";
  // Update the HTML
  document.getElementById('quote-box').innerHTML = htmlStr;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);