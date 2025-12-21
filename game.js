function randomMove() {
  const r = Math.random();
  if (r < 1 / 3) return "cow";
  if (r < 2 / 3) return "grass";
  return "lion";
}

function decideResult(player, computer) {
  console.log("decideResult called", { player, computer });
  if (player === computer) return "tie";
  // cow beats grass, grass beats lion, lion beats cow
  if (
    (player === "cow" && computer === "grass") ||
    (player === "grass" && computer === "lion") ||
    (player === "lion" && computer === "cow")
  ) {
    return "win";
  }
  return "lose";
}

function updateUI(player, computer, result) {
  const status = document.getElementById("game-status");
  const outcome = document.getElementById("game-outcome");

  const icons = { cow: "🐄", grass: "🌿", lion: "🦁" };

  status.innerHTML = `You: ${icons[player]} vs Computer: ${icons[computer]}`;

  if (result === "win") {
    outcome.textContent = "You Win! 🎉";
    outcome.className = "outcome-text win";
  } else if (result === "lose") {
    outcome.textContent = "You Lose! 💀";
    outcome.className = "outcome-text lose";
  } else {
    outcome.textContent = "It's a Tie! 🤝";
    outcome.className = "outcome-text tie";
  }
}

function play(player) {
  const computer = randomMove();
  const result = decideResult(player, computer);
  console.log("play result", { player, computer, result });
  updateUI(player, computer, result);
}

document.getElementById("btnCow").addEventListener("click", () => play("cow"));
document
  .getElementById("btnGrass")
  .addEventListener("click", () => play("grass"));
document
  .getElementById("btnLion")
  .addEventListener("click", () => play("lion"));
