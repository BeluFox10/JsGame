function startGame() {
    const min = 1;
    const max = 100;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let attempts = 0;
    let guessedCorrectly = false;

    while (!guessedCorrectly) {
        let userGuess = prompt("Adivina un número entre " + min + " y " + max + ":");
        attempts++;

        if (userGuess === null) {
            alert("Juego cancelado.");
            return;
        }

        userGuess = parseInt(userGuess, 10);

        if (isNaN(userGuess)) {
            alert("Por favor, ingresa un número válido.");
        } else if (userGuess < min || userGuess > max) {
            alert("El número debe estar entre " + min + " y " + max + ".");
        } else if (userGuess < randomNumber) {
            alert("El número es mayor.");
        } else if (userGuess > randomNumber) {
            alert("El número es menor.");
        } else {
            alert("¡Felicidades! Adivinaste el número " + randomNumber + " en " + attempts + " intentos.");
            guessedCorrectly = true;
        }
    }
}
