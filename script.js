<script>
  window.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".slideshow-container img");
    var currentImageIndex = 0;

    function showNextImage() {
      images[currentImageIndex].classList.remove("active");
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add("active");
    }

    setInterval(showNextImage, 2000); // Adjust the duration (in milliseconds) between each image transition
  });
</script>


