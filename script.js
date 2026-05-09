// Document Elements
const shareBtn = document.getElementById('shareBtn');
const shareIcon = document.getElementById('shareIcon');
const shareContainer = document.getElementById('shareContainer');
const shareContainerDesktop = document.getElementById('shareContainerDesktop');

// When Share Button is clicked.

shareBtn.addEventListener('click', () => {
  shareContainer.classList.toggle('share-container-visible');
  shareContainerDesktop.classList.toggle('share-container-desktop-visible');
  shareBtn.classList.toggle('btn-selected');
  shareIcon.classList.toggle('share-icon-selected');
});
