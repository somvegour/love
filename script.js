
const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

function moveButton() {
    // Generate random position within the viewport
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Add event listener for mouseover
noButton.addEventListener("mouseover", moveButton);

// Optional: A message for clicking "Yes"

