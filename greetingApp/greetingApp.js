function submitName() {
    const enteredName = document.getElementById('nameInput').value;
    
    // Senden einer Fetch-Anfrage an den Server
    fetch('/api/greet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: enteredName })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const greetingMessage = data.greeting;
        updateUI(greetingMessage);
    })
    .catch(error => {
        console.error('Error fetching greeting:', error);
    });
}
