
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // You can add your submission logic here, like sending data to a server
    
    // For demonstration purposes, let's show a feedback message
    document.getElementById("feedback").textContent = "Message sent successfully!";
    // You can clear the form fields after submission if needed
    document.getElementById("contactForm").reset();
  });
  
