var dogs = prompt('How many pets or dogs have you owned before?');
var feedback;
    if (dogs > 1) {
        feedback = 'You will make a great puppy parent!';
    } else if (dogs <= 1) {
        feedback = 'We will assume you are already a sweet person.';
    } else {feedback = 'Please enter a valid number';
}
    document.write(feedback);