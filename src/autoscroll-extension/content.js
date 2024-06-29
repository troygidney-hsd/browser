// content.js

function autoScroll() {
  window.scrollBy(0, 1);
  setTimeout(autoScroll, 10);
}

autoScroll();
