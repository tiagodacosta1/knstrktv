var sticker = document.getElementById('sticker-logo');
var stickerAngle = 0;
var stickerLastScrollTop = 0;

var container = document.getElementById('text-circle-container');
var image = document.getElementById('text-circle');
var imageAngle = 0;
var imageLastScrollTop = 0;

function rotateElements() {
  var st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > stickerLastScrollTop) {
    stickerAngle += 1;
  } else {
    stickerAngle -= 1;
  }
  sticker.style.transform = 'rotate(' + stickerAngle + 'deg)';
  stickerLastScrollTop = st;

  if (st > imageLastScrollTop) {
    imageAngle += 1;
  } else {
    imageAngle -= 1;
  }
  image.style.transform = 'rotate(' + imageAngle + 'deg)';
  imageLastScrollTop = st;
}

window.onscroll = function() {
  rotateElements();
};
