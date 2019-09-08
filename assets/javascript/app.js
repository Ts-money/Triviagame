//----------Trivia Fun!!!-------------

var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var timeRemaining = 30;
var indexQandA = 0;
var answered = false; //variable to stop the timer if user has clicked an answer
var correct;
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
    question: "Who destroied the Planet Vegeta?",
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
function startGame() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = 0;
    timeRemaining = 30;
    indexQandA = 0;
    answered = false;
    loadQuestion();
}

function loadQuestion() {
    correct = TriviaGame[indexQandA].correct;
}