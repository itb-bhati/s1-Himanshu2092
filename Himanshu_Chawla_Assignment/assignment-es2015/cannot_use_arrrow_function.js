// object methods

var cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
};

// callback function with dynamic context

var button = document.getElementById("press");
button.addEventListener("click", () => {
  this.classList.toggle("on");
});
