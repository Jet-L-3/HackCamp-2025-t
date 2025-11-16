let balloon = document.getElementById("balloon");
let size = 1; // scale multiplier
const popSize = 1.8; // scale at which balloon pops


balloon.addEventListener("click", () => {
  size += 0.1; // grow a bit each click
  balloon.style.transform = `scale(${size})`;


  if (size >= popSize) {
    popBalloon();
  }
});


function popBalloon() {
  balloon.classList.add("pop");


  setTimeout(() => {
    // reset balloon
    size = 1;
    balloon.classList.remove("pop");
    balloon.style.transform = "scale(1)";
  }, 300); // matches animation duration
}


