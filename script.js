const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function handleJump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

const isAlive = setInterval(function () {
  // get current dino Y position
  const dinoPos = parseInt(
    window.getComputedStyle(dino).getPropertyValue("top")
  );

  // get current cactus X position
  const cactusPos = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusPos < 50 && cactusPos > 0 && dinoPos >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  handleJump();
});
