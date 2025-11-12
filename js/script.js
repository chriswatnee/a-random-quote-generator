/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

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
  // Generates a random number ranging from zero to the index of the last item in the quotes array
  const randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);