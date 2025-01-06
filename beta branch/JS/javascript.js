// CAROUSEL IMAGE

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 1; // L'image centrale par défaut
  
    const updateCarousel = () => {
      items.forEach((item, index) => {
        const newIndex = (index - currentIndex + items.length) % items.length;
        item.dataset.index = newIndex;
      });
    };
  
    items.forEach((item) => {
      item.addEventListener("click", () => {
        const clickedIndex = parseInt(item.dataset.index, 10);
        if (clickedIndex !== 1) {
          currentIndex = (currentIndex + clickedIndex - 1 + items.length) % items.length;
          updateCarousel();
        }
      });
    });
  
    updateCarousel();
  });