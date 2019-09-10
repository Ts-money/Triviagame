//----------Trivia Fun!!!-------------

var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var timeRemaining = 30;
var indexQandA = 0;
var answered = false; //variable to stop the timer if user has clicked an answer
var correct;
var interval;
var TriviaGame = [{
    question: "what is Goku's real name?",
    answer: ["Kakarot", "Yamcha", "Vegita", "piccolo"],
    correct: "0",
}, {
    question: "What was the name of Goku's Father?",
    answer: ["Berus", "Bardok", "Master Roshi", "Gohan"],
    correct: "1",
}, {
    question: "Who trained Gohan when his father Goku was away from home?",
    answer: ["Vegeta", "Krilan", "Chi-Chi", "Piccolo"],
    correct: "3",
}, {
    question: "Who destroyed the Planet Vegeta?",
    answer: ["Berus", "Frieza", "Broly", "Cell"],
    correct: "1",
}, {
    question: "Goku's highest level transformation?",
    answer: ["SSBlue", "SSGOD", "MUI", "SS4"],
    correct: "2",
}, {
    question: "Vegeta's highest level transformation?",
    answer: ["SSBlue", "SSJ4", "Great Ape Baby", "SSB2"],
    correct: "3",
}, {
    question: "Who defedate Cell?",
    answer: ["Trunk", "Gohan", "Android18", "Mr.Satan"],
    correct: "1",
}, {
    question: "Strongest Oppenant Goku battled?",
    answer: ["Berus", "Broly", "Jiren", "Zamasu"],
    correct: "2",
}];


//---------------FUNCTION DECLARATION-----------
// As soon as this document is loaded, this function is executed.
function startGame() {

// This are the defaulte value for the game.
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = 0;
    timeRemaining = 30;
    indexQandA = 0;
    answered = false;

// This will load the question and show it on the site.
    loadQuestion();
// This hides any other elemnts that needs to be hidden.
    document.getElementById("game").style.display = "none";
    document.getElementById("gameover").style.display = "none";
    document.getElementById("stats").style.display = "block";
}
// This is the function that counts every 1 second.
function timer() {
// This reduces the time by 1.
    timeRemaining--;
// This checks if time remaining is 0
    if (timeRemaining === 0) {
// This executes the  function that handles the unanswered question.
        unanswered();
// This update the website to tell user that they ran out of time.
        $("#timeRemaining").text("You ran out of time!");
// Cancels the timer function.
        clearTimeout(interval);
        return;
    }
    $("#timeRemaining").text(timeRemaining + " Seconds");
}
// Loads the next question.
function loadQuestion() {
// This checks if the user ran out of questions.
    if (indexQandA === TriviaGame.length) {
        gameOver();
        return;
    }
// If there is an existing timer this will stop.
    if (interval != null) {
        clearTimeout(interval);
    }
// Selects the next question.
    var question = TriviaGame[indexQandA];
    correct = question.correct;
    timeRemaining = 30;
// This starts the counting down procedure.
    interval = setInterval(timer, 1000);
    answered = false;
    $("#timeRemaining").text(timeRemaining + " Seconds");
// This updates the website for next question.
    $("#questions").text(question.question);
    $("#answers").text("");
// Executes for next loop that execute 4 times.
    for (var i = 0; i < 4; i++) {
// Creates the button for that number.
        $("#answers").append("<button id=\"answerbutton\" onclick=\"handle(" + i + ");\">" + question.answer[i] + "</button><br><br>");
    }
    document.body.style.backgroundImage = "url('assets/images/MUIG.jpg')";
    $("#statistics").text("Correct: " + correctAnswers + " Incorrect: " + incorrectAnswers + " Unanswered: " + unansweredQuestions);
    indexQandA++;
}
// Handles the button click.
function handle(index) {
// Stops the timer.
    clearInterval(interval);
// If the position of the correct answer in the array equals to the position of the button.
    if (correct == index) {
        handleCorrect();
    } else {
        incorrect();
    }
}
// This handles the question and tells the user if they selected the correct answer and loads next question in 5 second.
function handleCorrect() {
    correctAnswers++;
    $("#answers").text("");
    $("#answers").append("<p>Congratulations you are correct!</p>");
    setTimeout(loadQuestion, 5000);
}
// This handles the incorrect answer and tells user the correct answer and loads the next question in 5 second.
function incorrect() {
    incorrectAnswers++;
    $("#answers").text("");
    $("#answers").append("<p>The correct answer was " + TriviaGame[indexQandA-1].answer[correct] + "!</p>");
    setTimeout(loadQuestion, 5000);
}
// If the user doesn't select an answer, it will tell the correct  answer and will load the next question in 5 second.
function unanswered() {
    unansweredQuestions++;
    $("#answers").text("");
    $("#answers").append("<p>The correct answer was " + TriviaGame[indexQandA-1].answer[correct] + "!</p>");
    setTimeout(loadQuestion, 5000);
}
// This will show all the option for gameover and hide the game and remove background.
function gameOver() {
    console.log("works");
    $("#statistics2").text("Correct: " + correctAnswers + " Incorrect: " + incorrectAnswers + " Unanswered: " + unansweredQuestions);
    document.getElementById("gameover").style.display = "block";
    document.getElementById("stats").style.display = "none";
    document.body.style.backgroundImage = "url('')";
}