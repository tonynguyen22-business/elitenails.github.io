document.addEventListener("DOMContentLoaded", () => {
    // Gallery
    const photos = ["image/gallery1.jpg", "image/gallery2.jpg", "image/gallery3.jpg"];
    let idx = 0;
    const galleryImg = document.querySelector(".gallery-photo");
    document.getElementById("prevPhoto").addEventListener("click", () => {
      idx = (idx - 1 + photos.length) % photos.length;
      galleryImg.src = photos[idx];
    });
    document.getElementById("nextPhoto").addEventListener("click", () => {
      idx = (idx + 1) % photos.length;
      galleryImg.src = photos[idx];
    });
  
    // Reviews carousel
    const reviews = document.querySelectorAll(".review");
    let current = 0;
    function showReview(i) { reviews.forEach((r, j) => r.style.display = j === i ? "block" : "none"); }
    showReview(current);
    document.getElementById("prevReview").addEventListener("click", () => { current = (current - 1 + reviews.length) % reviews.length; showReview(current); });
    document.getElementById("nextReview").addEventListener("click", () => { current = (current + 1) % reviews.length; showReview(current); });
  });
  