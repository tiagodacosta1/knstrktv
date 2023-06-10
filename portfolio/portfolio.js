// $(document).ready(function() {
//   $('html, body').scrollTop(0);

//   (function($) {
//     var selector = ".viewport";

//     var $slides = $(selector);

//     var currentSlide = 0;
//     var isAnimating = false;

//     var stopAnimation = function() {
//       setTimeout(function() {
//         isAnimating = false;
//       }, 300);
//     };

//     var bottomIsReached = function($elem) {
//       var rect = $elem[0].getBoundingClientRect();
//       return rect.bottom <= $(window).height();
//     };

//     var topIsReached = function($elem) {
//       var rect = $elem[0].getBoundingClientRect();
//       return rect.top >= 0;
//     };

//     console.log("$slides:", $slides);
//     console.log("currentSlide:", currentSlide);
//     console.log("isAnimating:", isAnimating);

//     document.addEventListener(
//       "wheel",
//       function(event) {
//         console.log("Wheel event triggered");

//         var $currentSlide = $($slides[currentSlide]);

//         if (isAnimating) {
//           event.preventDefault();
//           return;
//         }

//         var direction = -event.deltaY;
//         console.log("Direction:", direction);

//         if (direction < 0) {
//           console.log("Scrolling to the next slide");
//           if (currentSlide + 1 >= $slides.length) return;
//           if (!bottomIsReached($currentSlide)) return;
//           event.preventDefault();
//           currentSlide++;
//           var $slide = $($slides[currentSlide]);
//           var offsetTop = $slide.offset().top;
//           isAnimating = true;
//           console.log("Animation started");
//           $("html, body").animate(
//             {
//               scrollTop: offsetTop
//             },
//             350,
//             stopAnimation
//           );
//           console.log("Animation stopped");
//         } else {
//           console.log("Scrolling to the previous slide");
//           if (currentSlide - 1 < 0) return;
//           if (!topIsReached($currentSlide)) return;
//           event.preventDefault();
//           currentSlide--;
//           var $slide = $($slides[currentSlide]);
//           var offsetTop = $slide.offset().top;
//           isAnimating = true;
//           console.log("Animation started");
//           $("html, body").animate(
//             {
//               scrollTop: offsetTop
//             },
//             0,
//             stopAnimation
//           );
//           console.log("Animation stopped");
//         }
//       },
//       { passive: false }
//     );
//   })(jQuery);
// });
