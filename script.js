// Mock target album data
const targetAlbum = {
    name: "Thriller",
    year: 1982,
    genre: "Pop",
    label: "Epic"
};

// Function to handle user guesses
document.getElementById("submit-guess").addEventListener("click", () => {
    const guessArea = document.getElementById("guess-area");

    // Get the current input
    const currentRow = guessArea.lastElementChild;
    const guessAlbum = currentRow.querySelector(".guess-input").value;

    // Feedback placeholders
    let yearFeedback = "";
    let genreFeedback = "";
    let labelFeedback = "";

    // Simulating feedback logic:
    if (guessAlbum.toLowerCase() === targetAlbum.name.toLowerCase()) {
        alert("🎉 Correct! You guessed the album.");
        return;
    } else {
        yearFeedback = "❌ Year is " + (guessAlbum < targetAlbum.year ? "Higher" : "lower!");
alert.
