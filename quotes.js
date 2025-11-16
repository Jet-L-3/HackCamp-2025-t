const quotes = [
  "Believe you can and you're halfway there.",
  "Every moment is a fresh beginning.",
  "Dream big and dare to fail.",
  "Stay positive. Work hard. Make it happen.",
  "Your only limit is your mind.",
  "Take one step at a time.",
  "If you aren't making mistakes, you aren't making progress",
  "No time to waste, got a dream to chase",
  "Motivation lasts for a day, discipline lasts forever",
  "You only live once",
  "Comparison is the thief of joy",
  "Stay strong",
  "The future you needs you, the past you doesn't",
  "Every day is a rest day if you're obsessed with what you do",
  "Stop thinking start doing"
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


