document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Registered successfully!');
 });
  // JavaScript to handle form submission
  document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Redirect to the car details page
    window.location.href = 'details.html';
  });
function showDetails(carName, specs) {
    alert(`You selected: ${carName}.
Specifications: ${specs}`);
}

function bookTestDrive(carName) {
    confirm(`You have requested a test drive for: ${carName}.`);
}
 // Function to prompt the user for location and phone number
 function bookCar(carModel) {
  // Prompt the user for location
  const userLocation = prompt(`Please enter your location to book the ${carModel}:`);

  // If the user cancels or doesn't input a location, stop the process
  if (!userLocation) {
      alert("Booking process canceled. Location is required.");
      return;
  }

  // Prompt the user for their phone number
  const userPhone = prompt("Please enter your phone number:");

  // Validate the phone number (basic validation)
  const phoneRegex = /^[0-9]{10}$/; // Example: Ensures exactly 10 digits
  if (!phoneRegex.test(userPhone)) {
      alert("Invalid phone number. Please enter a valid 10-digit number.");
      return;
  }

  // Confirm booking with the entered details
  alert(`Thank you for booking the ${carModel}!\nLocation: ${userLocation}\nPhone: ${userPhone}`);

}
