window.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll(".slide");
  var currentSlideIndex = 0;

  function showNextSlide() {
    slides[currentSlideIndex].classList.remove("active");
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add("active");
  }

  setInterval(showNextSlide, 2000); // Adjust the duration (in milliseconds) between each slide transition
});
document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("email-form");
  var emailInput = document.getElementById("email-input");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var email = emailInput.value;
    if (validateEmail(email)) {
      // Here, you can implement your logic to process the email
      alert("Thank you for subscribing!");
      
      // Clear the input field
      emailInput.value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });
  
  function validateEmail(email) {
    // Simple email validation using regular expression
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }
});

