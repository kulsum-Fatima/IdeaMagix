$(document).ready(function() {
    const $carouselContainer = $('.carousel-container');
    const $slides = $('.carousel-slide');
    const slideCount = $slides.length;
    let currentIndex = 0;
  
    function showSlide(index) {
      $carouselContainer.animate({marginLeft: -index * 100 + '%'}, 500);
    }
  
    // Next slide
    $('#next-btn').click(function() {
      currentIndex = (currentIndex + 1) % slideCount;
      showSlide(currentIndex);
    });
  
    // Previous slide
    $('#prev-btn').click(function() {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      showSlide(currentIndex);
    });
  });
  