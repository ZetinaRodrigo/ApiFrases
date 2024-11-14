const API_URL = 'https://api.gameofthronesquotes.xyz/v1/random';

// Función para obtener una cita
function fetchQuote() {
    console.log("Intentando obtener una cita..."); // Verificación de que se llama a la función

    fetch(API_URL)
        .then(response => {
            console.log("Respuesta recibida:", response); // Mostrar la respuesta en consola
            if (!response.ok) {
                throw new Error(`Error en la respuesta: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Datos obtenidos:", data); // Mostrar datos obtenidos en consola
            displayQuote(data);
        })
        .catch(error => console.error("Error al obtener la cita:", error));
}

// Función para mostrar la cita en el HTML
function displayQuote(quoteData) {
    const container = document.getElementById('games-container');
    container.innerHTML = `
        <p><strong>${quoteData.character.name}:</strong> "${quoteData.sentence}"</p>
    `;
}

// Llamar a la función al cargar la página
fetchQuote();

