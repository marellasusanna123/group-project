document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const response = await fetch('http://localhost:5000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });
  
    const result = await response.json();
    document.getElementById('responseMessage').innerText = result.message;
  
    // Clear the form
    document.getElementById('contactForm').reset();
  });
