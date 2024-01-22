function getFormvalue() {
    let firstName = document.querySelector('input[name="fname"]');
    let lastName = document.querySelector('input[name="lname"]');
    alert(`${firstName.value} ${lastName.value}`);
}

getFormvalue();