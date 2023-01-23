// take the value of head and tail to be zero
let heads = 0;
let tails = 0;

// set a contant of some id and class function

let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
  // all the value store in i
  // Math.random is js method that randomly sets a value among many value
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";

  if(i) {
    setTimeout(function() {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100)
    heads++
  }
  else{
    setTimeout(function() {
      coin.style.animation = "spin-tails 3s forwards"
    },100);
    tails++;
  }
  setTimeout(updateStats, 3000);
  disableButton()
});

// activated the counter

function updateStats() {
  document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
  document.querySelector("#tails-count").textContent = `Tails: ${tails}`;

}

// activated the disable Buttons

function disableButton() {
  flipBtn.disabled = true;
  setTimeout(function() {
    flipBtn.disabled = false;
  }, 3000);
}

// active the reset button

resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStats();
});