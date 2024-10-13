function submitTest(event) {
    event.preventDefault();

    let studentName = document.getElementById("studentName").value;
    let score = 0;

    let q1Answer = document.querySelector('input[name="q1"]:checked');
    let q2Answer = document.querySelector('input[name="q2"]:checked');

    if (q1Answer && q1Answer.value === 'B') score += 1;  // Correct answer for Q1 is 'B'
    if (q2Answer && q2Answer.value === 'C') score += 1;  // Correct answer for Q2 is 'C'

    let studentResult = {
        name: studentName,
        score: score
    };

    // Save to localStorage
    let results = JSON.parse(localStorage.getItem("testResults")) || [];
    results.push(studentResult);
    localStorage.setItem("testResults", JSON.stringify(results));

    alert("Test submitted successfully! Check your score on the admin dashboard.");
    document.getElementById("mcqTest").reset();
}
