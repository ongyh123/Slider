// Get the DOM elements
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

// To determine the left %
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

// 1st item, index = 0, 0 * 100 = 0%
// 2nd item, index = 1, 1 * 100 = 100%
// 3rd item, index = 2, 2 * 100 = 200%
// 4th item, index = 3, 3 * 100 = 300%

// <style>
//      slide {
//          left: 100%;
//      }
// </style>
