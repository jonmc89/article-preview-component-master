/* Variables */

const shareIcon = document.getElementById("shareIcon");
const cardProfileContainer = document.getElementById("cardProfileContainer");
const originalContent = document.getElementById("cardProfileInfo");
const cardProfileInfoActive = document.getElementById("cardProfileInfoActive");
let isActive = false;

shareIcon.addEventListener("click", () => {
  isActive = !isActive;

  if (isActive) {
    cardProfileContainer.style.backgroundColor = "hsl(217, 19%, 35%)";
    originalContent.style.display = "none";
    cardProfileInfoActive.style.display = "flex";
  } else {
    cardProfileContainer.style.backgroundColor = "hsl(210, 46%, 95%)";
    originalContent.style.display = "flex";
    cardProfileInfoActive.style.display = "none";
  }
});
