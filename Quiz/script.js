let question = {
    title: "Gato",
    alternative: ["Dog", "Cat", "Bird", "Fish"],
    correctAnswer: 1,
};

let app = {
    start: function() {
        let alts = document.querySelectorAll(".alternative");

        alts.forEach(function(element, index) {
            element.addEventListener("click", function() {
                console.log("Check correct answer");
            });
        });

        this.showQuestion(question);
    },
    showQuestion: function(q) {
        let titleDiv = document.getElementById("title");

        titleDiv.textContent = q.title;

        let alts = document.querySelectorAll(".alternative");

        alts.forEach(function(element, index) {
            element.textContent = q.alternative[index];
        });
    },
};

app.start();

/*refactored some more using methods to make 
the structure neater.*/