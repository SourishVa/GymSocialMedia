function saveEmail() {
    // Get the value from the text box
    const textBoxValue = document.getElementById('email').value;

    // Display the value in an alert box (or you could handle it differently)
    alert('Saved Data: ' + textBoxValue);
    window.location.href = 'app.html';
    console.log(textBoxValue)
}