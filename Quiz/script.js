let question = {
    title: "What is the name of a 30L bottle of wine",
    alternative: ["Magnum", "Split", "Nabuchadnezzar", "Salmanazar"],
    correctAnswer: 2,
};

let app = {
    start: function() {
        let alts = document.querySelectorAll(".alternative");
        alts.forEach((element, index) => {
            element.addEventListener("click", () => {
                this.checkAnswer(index);
            });
        });

        //.bind allows to pass on the value of .this
        // however, arrow functions do the same job and are much neater

        // alts.forEach(
        //     function(element, index) {
        //         element.addEventListener(
        //             "click",
        //             function() {
        //                 this.checkAnswer(index);
        //             }.bind(this)
        //         );
        //     }.bind(this)
        // );

        this.showQuestion(question);
    },
    showQuestion: function(q) {
        //keep track of the current question

        this.currentQuestion = q;

        let titleDiv = document.getElementById("title");

        titleDiv.textContent = q.title;

        let alts = document.querySelectorAll(".alternative");

        alts.forEach(function(element, index) {
            element.textContent = q.alternative[index];
        });
    },

    checkAnswer: function(userSelection) {
        if (this.currentQuestion.correctAnswer == userSelection) {
            alert("Correct!");
        } else {
            alert("Wrong!");
        }
    },
};

app.start();

/*refactored some more using methods to make 
the structure neater.*/