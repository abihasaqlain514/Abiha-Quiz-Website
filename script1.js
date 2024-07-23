document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission
    document.getElementById("quizForm1").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form
        const form = document.getElementById("quizForm1");

        // Initialize the score
        let score = 0;
      
        // Array of correct answers
        const correctAnswers = {
            question1: 'correct',
            question2: 'correct',
            question3: 'correct',
            question4: 'correct',
            question5: 'correct',
            question6: 'correct',
            question7: 'correct',
            question8: 'correct',
            question9: 'correct',
            question10: 'correct'
        };

        // Check each question
        for (let question in correctAnswers) {
            const selectedOption = form.querySelector(`input[name=${question}]:checked`);
            if (selectedOption && selectedOption.value === correctAnswers[question]) {
                score++;
            }
        }

        // Show the result in a popup
        alert(`Quiz submitted! You scored ${score} out of 10.`);

        // Display the result below the form
        document.getElementById("result").innerHTML =  `
            <h3>Quiz Result</h3>
            <p>You scored ${score} out of 10.</p>
        `;
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission
    document.getElementById("quizForm2").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form
        const form = document.getElementById("quizForm2");

        // Initialize the score
        let score = 0;

        // Array of correct answers
        const correctAnswers = {
            q1: 'a',  // Cascading Style Sheets
            q2: 'a',  // style
            q3: 'b',  // font-size
            q4: 'a',  // #header
            q5: 'c',  // background-color
            q6: 'b',  // /* comment */
            q7: 'b',  // padding
            q8: 'a',  // h1 {}
            q9: 'd',  // static
            q10: 'b'  // display: inline
        };

        // Check each question
        for (let question in correctAnswers) {
            const selectedOption = form.querySelector(`input[name=${question}]:checked`);
            if (selectedOption && selectedOption.value === correctAnswers[question]) {
                score++;
            }
        }

        // Show the result in a popup
        alert(`Quiz submitted! You scored ${score} out of 10.`);

        // Display the result below the form
        document.getElementById("result").innerHTML = `
            <h3>Quiz Result</h3>
            <p>You scored ${score} out of 10.</p>
        `;
    });
});




document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission
    document.getElementById("quizForm3").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form
        const form = document.getElementById("quizForm3");

        // Initialize the score
        let score = 0;

        // Array of correct answers
        const correctAnswers = {
            q1: 'a',  // JavaScript
            q2: 'a',  // push()
            q3: 'd',  // All of the above
            q4: 'a',  // function myFunction()
            q5: 'a',  // onSubmit
            q6: 'c',  // new
            q7: 'a',  // // comment
            q8: 'a',  // Not a Number
            q9: 'c',  // const
            q10: 'a'  // The object that owns the method
        };

        // Check each question
        for (let question in correctAnswers) {
            const selectedOption = form.querySelector(`input[name=${question}]:checked`);
            if (selectedOption && selectedOption.value === correctAnswers[question]) {
                score++;
            }
        }

        // Show the result in a popup
        alert(`Quiz submitted! You scored ${score} out of 10.`);

        // Display the result below the form
        document.getElementById("result").innerHTML = `
            <h3>Quiz Result</h3>
            <p>You scored ${score} out of 10.</p>
        `;
    });
});




document.addEventListener("DOMContentLoaded", function() {
    // Handle form submission
    document.getElementById("quizForm4").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form
        const form = document.getElementById("quizForm4");

        // Initialize the score
        let score = 0;

        // Array of correct answers
        const correctAnswers = {
            q1: 'a',  // William Shakespeare
            q2: 'c',  // Paris
            q3: 'c',  // Jupiter
            q4: 'b',  // Leonardo da Vinci
            q5: 'c',  // Diamond
            q6: 'a',  // H2O
            q7: 'b',  // Charles Babbage
            q8: 'c',  // 2
            q9: 'd',  // Pacific Ocean
            q10: 'b'  // Alexander Fleming
        };

        // Check each question
        for (let question in correctAnswers) {
            const selectedOption = form.querySelector(`input[name=${question}]:checked`);
            if (selectedOption && selectedOption.value === correctAnswers[question]) {
                score++;
            }
        }

        // Show the result in a popup
        alert(`Quiz submitted! You scored ${score} out of 10.`);

        // Display the result below the form
        document.getElementById("result").innerHTML = `
            <h3>Quiz Result</h3>
            <p>You scored ${score} out of 10.</p>
        `;
    });
});


