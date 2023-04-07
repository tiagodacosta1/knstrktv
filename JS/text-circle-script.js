var container = document.getElementById('text-circle-container');
var image = document.getElementById('text-circle');
var angle = 0;
var lastScrollTop = 0;

function rotateImage() {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop){
    angle += 1;
  } else {
    angle -= 1;
  }
  image.style.transform = 'rotate(' + angle + 'deg)';
  lastScrollTop = st;
}

window.onscroll = function() {
  rotateImage();
};