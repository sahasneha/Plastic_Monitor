function logPlasticUsage() {
    const input = document.querySelector('.daily-log input').value;
    if (input.trim()) {
        alert(`You logged ${input} for today!`); // Corrected template literal
        document.querySelector('.daily-log input').value = ''; // Clear input
    } else {
        alert('Please enter a valid number!');
    }
}
