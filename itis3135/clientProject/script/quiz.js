document.getElementById("submitQuiz").addEventListener("click", function() {
    const correctAnswers = {
        q1: "Paris",
        q2: "4",
        q3: "Apple",
    };

    let score = 0;

    if (document.querySelector('input[name="q1"]:checked')?.value === correctAnswers.q1) {
        score++;
    }

    if (document.querySelector('input[name="q2"]:checked')?.value === correctAnswers.q2) {
        score++;
    }

    if (document.querySelector('input[name="q3"]:checked')?.value === correctAnswers.q3) {
        score++;
    }

    const totalQuestions = 3;
    const resultsText = `You scored ${score} out of ${totalQuestions}.`;

    // Display the results
    document.getElementById("resultsText").textContent = resultsText;
    document.getElementById("results").style.display = "block"; // Make the results visible
});