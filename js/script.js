// Simple fade-in effect on scroll
window.addEventListener("scroll", () => {
  const features = document.querySelectorAll(".feature, .product-card");
  features.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }
  });
});


console.log("TavaGroup website loaded successfully.");
