/* Variables */

const shareIcon = document.getElementById("shareIcon");
const cardProfileContainer = document.getElementById("cardProfileContainer");
const originalContent = document.getElementById("cardProfileInfo");
const cardProfileInfoActive = document.getElementById("cardProfileInfoActive");
const nonMobileProfileActive = document.getElementById(
  "share-active-icons-non-mob"
);
let isActive = false;

shareIcon.addEventListener("click", () => {
  isActive = !isActive;

  if (window.matchMedia("(min-width: 48em)").matches) {
    // Tablet or larger view
    nonMobileProfileActive.style.display = isActive ? "block" : "none";
  } else {
    // Mobile View
    if (isActive) {
      originalContent.style.display = "none";
      cardProfileInfoActive.style.display = "flex";
      cardProfileContainer.style.backgroundColor = "hsl(217, 19%, 35%)";
    } else {
      originalContent.style.display = "flex";
      cardProfileInfoActive.style.display = "none";
      cardProfileContainer.style.backgroundColor = "hsl(210, 46%, 95%)";
    }
  }
});
