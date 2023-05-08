var movingText = document.getElementById("moving-text");
    var rightColumn = document.getElementById("right-column");

    document.addEventListener("mousemove", function (e) {
      // Get the width of the viewport
      var viewportWidth = window.innerWidth;

      // Define the width of the columns on the left and right
      var columnWidth = viewportWidth * 0.25;

      // Check if the mouse cursor is within the left or right column
      if (e.pageX < columnWidth) {
        // If so, display the left text
        movingText.innerHTML = "Left column text";
        movingText.style.display = "block";
      } else if (e.pageX > (viewportWidth - columnWidth)) {
        // If so, display the right text
        movingText.innerHTML = "Right column text";
        movingText.style.display = "block";

        // Check if the user clicked within the right column
        if (e.target === rightColumn) {
          // If so, navigate to portfolio2.html
          window.location.href = "../portfolio2.html";
        }

      } else {
        // Otherwise, hide the text
        movingText.style.display = "none";
      }

      // Set the position of the text
      movingText.style.left = e.pageX + "px";
      movingText.style.top = e.pageY - document.documentElement.scrollTop + "px";
    });