// -------------------------
// LOVE COUNTER
// -------------------------
let loveCount = 0;
const cardLove = document.querySelectorAll(".cardLoveIcon");
const loveCounter = document.getElementById("loveCount");

cardLove.forEach(cardLove => {
  cardLove.addEventListener("click", () => {
    loveCount++;
    loveCounter.textContent = loveCount;
  });
});

// -------------------------
// COPY BUTTONS
// -------------------------
const navCopyBtn = document.getElementById("navCopyBtn");
const buttons = document.querySelectorAll(".copyBtn");
let clickCounts = [];
let totalCopies = 0;

buttons.forEach((button, index) => {
  clickCounts[index] = 0;

  button.addEventListener("click", function () {
    clickCounts[index]++;
    totalCopies++;

    const cardText = document.querySelectorAll(".cardText")[index].innerText;

    navigator.clipboard.writeText(cardText).then(() => {
      alert(`Number Copied: "${cardText}"`);
      navCopyBtn.innerHTML = totalCopies + "&nbsp" + " Copy";
    });
  });
});

// -------------------------
// COINS & CALL BUTTONS
// -------------------------
let coins = 100;
const callButtons = document.querySelectorAll(".call-btn");
const coinNumber = document.getElementById("coinNumber");

function updateCoins() {
  coinNumber.innerText = coins;
}

// -------------------------
// CALL HISTORY
// -------------------------
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

// Format time (HH:MM:SS AM/PM)
function getFormattedTime() {
  const now = new Date();
  return now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

// Add call card to history
function addCallToHistory(serviceName, serviceNumber) {
  const time = getFormattedTime();

  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center mt-8 bg-gray-100 rounded-lg px-4 py-3 mb-3 shadow-sm";

  li.innerHTML = `
    <div class="">
      <p class="font-semibold text-gray-900">${serviceName}</p>
      <p class="text-sm text-gray-600">${serviceNumber}</p>
    </div>
    <span class="text-sm text-gray-500">${time}</span>
  `;

  historyList.appendChild(li);
}

// Clear all history
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});

// -------------------------
// CALL BUTTON HANDLER
// -------------------------
callButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let cardContainer = button.parentElement;
    while (cardContainer && !cardContainer.classList.contains("cardContainer")) {
      cardContainer = cardContainer.parentElement;
    }
    if (!cardContainer) return;

    const cardNumberContainer = cardContainer.querySelector(".cardText");
    if (!cardNumberContainer) return;
    const cardNumber = cardNumberContainer.innerText;

    const taglineElement = cardContainer.querySelector(".tagline");
    if (!taglineElement) return;
    const taglineText = taglineElement.innerText;

    if (coins < 20) {
      alert("⚠️ You don’t have enough coins to make this call.");
      return;
    }
    if (confirm(`📞 Calling ${taglineText} ${cardNumber}...`)) {
      coins -= 20;
      updateCoins();

      addCallToHistory(taglineText, cardNumber);
    }
  });
});

// Init coins on page load
updateCoins();
