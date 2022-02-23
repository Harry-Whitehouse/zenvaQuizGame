/*refactoring code, previous code (script1) worked fine
 for 1 question however, as there are multiple questions,
 if we were to call the old 'show question' function
 multiple times, it would just create the same result 
 over and over. */

let question = {
    title: "Gato",
    alternative: ["Dog", "Cat", "Bird", "Fish"],
    correctAnswer: 1,
};

// new 'start' function for the code.
function start() {
    let alts = document.querySelectorAll(".alternative");

    alts.forEach(function(element, index) {
        /*we dont need to set text for alts and we have 
                no access to 'q so code is redundant*/

        // element.textContent = q.alternative[index];

        element.addEventListener("click", function() {
            console.log("Check correct answer");
        });
    });

    //show first question
    showQuestion(question);
}

function showQuestion(q) {
    let titleDiv = document.getElementById("title");

    titleDiv.textContent = q.title;

    let alts = document.querySelectorAll(".alternative");

    alts.forEach(function(element, index) {
        element.textContent = q.alternative[index];
    });
}

start();