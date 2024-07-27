function saveEmail() {
    // Get the value from the text box
    const textBoxValue = document.getElementById('email').value;
    
    localStorage.setItem('userEmail', textBoxValue)


    // Display the value in an alert box (or you could handle it differently)
    alert('Saved Data: ' + textBoxValue);
    window.location.href = 'app.html';
    console.log(textBoxValue)
}

window.onload = function() {
    // Get the email from localStorage
    const email = localStorage.getItem('userEmail');

    // Check if the email exists
    if (email) {
        // Display the email in the box
        document.getElementById('Profile').textContent = `${email}`;
    } else {
        // Handle the case where the email is not found
        document.getElementById('Profile').textContent = 'No email found.';
    }
}

function createBox() {
    const name = document.getElementById("WorkoutName").value
    console.log(name)
    const workout = document.getElementById("Workout").value
    console.log(workout)

    if(name && workout) {
        const newPost = document.createElement("div")
        newPost.className = "post"

        newPost.innerHTML = `
            <h3>${name}</h3>
            <p>${workout}</p>
            <button>Up</button>
            <button>Down</button>
        `

        const posted = document.getElementById("PostBoard")
        console.log(posted)
        posted.appendChild(newPost)

        document.getElementById('WorkoutName').value = '';
        document.getElementById('Workout').value = '';
    } else {
        alert('Please fill out both fields.');
    }
}