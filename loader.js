var percentageElement = document.getElementById('nested-column-percentage');
var counter = 0;

var interval = setInterval(function() {
  if (counter === 100) {
    clearInterval(interval);
  } else {
    counter++;
    percentageElement.textContent = counter + "%";
  }
}, 20); // Adjust the interval duration (in milliseconds) for the desired animation speed


setTimeout(function() {
  window.location.href = 'index.html'; // Redirect to the main page
}, 2000); 