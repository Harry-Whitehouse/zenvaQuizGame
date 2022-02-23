let questions = [{
        title: "What is the name of a 30L bottle of wine?",
        alternative: ["Magnum", "Mechizedek", "Nabuchadnezzar", "Salmanazar"],
        correctAnswer: 1,
    },
    {
        title: "What is the most common grape used for wine making in the world?",
        alternative: [
            "Merlot",
            "Sauvignon Blanc",
            "Pinot Grigio",
            "Cabernet Sauvignon",
        ],
        correctAnswer: 3,
    },
    {
        title: "Which country is the worlds leading wine producer?",
        alternative: ["Spain", "France", "Italy", "USA"],
        correctAnswer: 2,
    },
    {
        title: "Who is the Roman god of wine ?",
        alternative: ["Bacchus", "Hera", "Fortuna", "Janus"],
        correctAnswer: 0,
    },
    {
        title: "Approximately how many grapes go into a bottle of wine?",
        alternative: ["400-600", "600-800", "800-1000", "1000-1200"],
        correctAnswer: 1,
    },
];

let app = {
    start: function() {
        this.currentPosition = 0;
        let alts = document.querySelectorAll(".alternative");
        alts.forEach((element, index) => {
            element.addEventListener("click", () => {
                this.checkAnswer(index);
            });
        });

        this.showQuestion(questions[this.currentPosition]);
    },
    showQuestion: function(q) {
        let titleDiv = document.getElementById("title");

        titleDiv.textContent = q.title;

        let alts = document.querySelectorAll(".alternative");

        alts.forEach(function(element, index) {
            element.textContent = q.alternative[index];
        });
    },

    checkAnswer: function(userSelection) {
        let currentQuestion = questions[this.currentPosition];
        if (currentQuestion.correctAnswer == userSelection) {
            alert("Correct!");
        } else {
            alert("Wrong!");
        }

        this.increasePosition();
        this.showQuestion(questions[this.currentPosition]);
    },

    increasePosition: function() {
        this.currentPosition++;

        if (this.currentPosition == questions.length) {
            this.currentPosition = 0;
        }
    },
};

app.start();