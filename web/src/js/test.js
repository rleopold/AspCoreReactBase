const app = document.getElementById('app');

fetch('http://localhost:5001').then(response => response.text().then(text => app.innerText = text));
