let question = {
    title: "Gato",
    alternative: ["Dog", "Cat", "Bird", "Fish"],
    correctAnswer: 1,
};

//create a fucntion to allow multiple calls easily

function showQuestion(q) {
    //select dom element

    let titleDiv = document.getElementById("title");

    // modify

    titleDiv.textContent = q.title;

    //selecting class from html doc
    let alts = document.querySelectorAll(".alternative");
    console.log(alts);

    alts.forEach(function(element, index) {
        element.textContent = q.alternative[index];

        element.addEventListener("click", function() {
            //check correct answer
            if (q.correctAnswer == index) {
                console.log("Correct Answer!");
            } else {
                console.log("Incorrect!");
            }
        });
    });
}

showQuestion(question);

let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    console.log("Clicked!");
});