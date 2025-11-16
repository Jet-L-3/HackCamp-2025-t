const quotes = [
  "Believe you can and you're halfway there.",
  "Every moment is a fresh beginning.",
  "Dream big and dare to fail.",
  "Stay positive. Work hard. Make it happen.",
  "Your only limit is your mind."
];


const quoteEl = document.getElementById("quote");
const btn = document.getElementById("generateBtn");


btn.addEventListener("click", () => {
  // Fade out
  quoteEl.style.opacity = 0;


  setTimeout(() => {
    // Change the quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[randomIndex];


    // Fade back in
    quoteEl.style.opacity = 1;
  }, 500); // matches CSS transition duration
});


