// script.js
document.addEventListener("DOMContentLoaded", () => {
  // initialize swiper for hero gallery
  new Swiper(".gallery-swiper", {
    loop: true,
    autoplay: { delay: 4000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    grabCursor: true
  });

  // reviews carousel
  const reviews = document.querySelectorAll(".review");
  let current = 0;
  function showReview(i) {
    reviews.forEach((r, j) => r.style.display = j === i ? "block" : "none");
  }
  showReview(current);
  document.getElementById("prevReview").addEventListener("click", () => {
    current = (current - 1 + reviews.length) % reviews.length;
    showReview(current);
  });
  document.getElementById("nextReview").addEventListener("click", () => {
    current = (current + 1) % reviews.length;
    showReview(current);
  });
});
