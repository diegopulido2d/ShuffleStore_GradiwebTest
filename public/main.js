document.addEventListener("DOMContentLoaded", function () {
  // Scroll background effect
  const header = document.querySelector(".header");
  const scrollThreshold = 50;

  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  //Featured Products show more button
  const featuredProducts = document.querySelector(".featured-products");
  const showLessContainer = document.querySelector(".show-less-container");
  const showMoreContainer = document.querySelector(".show-more-container");
  const showMoreButton = document.querySelector(".show-more-button");

  showMoreButton.addEventListener("click", function () {
    if (featuredProducts.classList.contains("show-less")) {
      showLessContainer.style.display = "none";
      showMoreContainer.style.display = "block";
      showMoreButton.innerHTML = "View Less";
      featuredProducts.classList.remove("show-less");
    } else {
      showLessContainer.style.display = "block";
      showMoreContainer.style.display = "none";
      showMoreButton.innerHTML = "View More";
      featuredProducts.classList.add("show-less");
    }
  });
});
