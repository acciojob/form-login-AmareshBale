// script.js
function getFormvalue() {
  // Prevent the form from submitting in the traditional way
  event.preventDefault()

  // Get the values of First and Last Name
  let firstName = document.querySelector('input[name="fname"]').value;
  let lastName = document.querySelector('input[name="lname"]').value;

  // Display the values using alert
  alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}

// Attach the function to the form's submit event
document.querySelector('form').addEventListener('submit', getFormvalue);
