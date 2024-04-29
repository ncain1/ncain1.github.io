document.getElementById("submit-quiz").addEventListener("click", function () {
    const correctAnswers = {
        q1: 'c',
        q2: 'a',
        q3: 'b'
    };

    let score = 0;

    for (let question in correctAnswers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswers[question]) {
            score++;
        }
    }

    const resultsDiv = document.getElementById("quiz-results");
    resultsDiv.innerHTML = `Your score is ${score} out of 3.`;

    if (score === 3) {
        resultsDiv.style.color = "green";
        resultsDiv.innerHTML += " Great job!";
    } else if (score >= 1) {
        resultsDiv.style.color = "orange";
        resultsDiv.innerHTML += " Good effort, keep practicing!";
    } else {
        resultsDiv.style.color = "red";
        resultsDiv.innerHTML += " Better luck next time!";
    }
});