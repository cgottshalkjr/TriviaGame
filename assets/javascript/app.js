//Array of objects. Each object holds questions, choices, answer, and pic associated
var questions = [
    {
        question: "The Lord of the Rings movies are based on a novel by what author?",
        choices: ["H.E. Pennypacker", "J.R.R. Tolkien", "H.R. Shovenstuff", "J.G. Ballard"],
        answer: "J.R.R. Tolkien",
        pic: "assets/images/tolkien.gif",
    },
    {
        question: "What is the first voice we hear in The Fellowship of the Ring?",
        choices: ["Frodo", "Gandalf", "Bilbo", "Galadriel"],
        answer: "Galadriel",
        pic: "assets/images/galadriel.gif",
    },
    {
        question: "While traveling through the mines of Moria, which member of the Fellowship of the Ring is killed by the Balrog?",
        choices: ["Gandalf", "Boromir", "Craig", "Aragorn"],
        answer: "Gandalf",
        pic: "assets/images/gandalf.gif",
    },
    {
        question: "In Fellowship of the Ring what gift does Lady Galadriel give Gimli before the fellowship leaves Lothlorien?",
        choices: ["Three strands of hair", "An axe to the face", "Lifts for boots", "A new axe"],
        answer: "Three strands of hair",
        pic: "assets/images/threehairs.gif",
    },
    {
        question: "The only way to destroy the Ring of Power is to throw it into the fires of",
        choices: ["Mount Kilimanjaro", "Mount Mordor", "Mount Doom", "Mount Rushmore"],
        answer: "Mount Doom",
        pic: "assets/images/mountdoom.jpeg",
    },
    {
        question: "What is the name of the Ent who carries Pippin and Merry through Fangorn Forest?",
        choices: ["Snape", "Treegoatee", "Tyler T. Treely", "Treebeard"],
        answer: "Treebeard",
        pic: "assets/images/treebeard.gif",
    },
    {
        question: "In The Two Towers, who is Saruman's spy in Rohan?",
        choices: ["Grima", "Gollum", "Martin Van Buren", "Dr. Van Nostren"],
        answer: "Grima",
        pic: "assets/images/grima.gif",
    },
    {
        question: "In The Return of the King, who kills the Witch King",
        choices: ["Aragorn", "Pippin", "Eowyn", "Faramir"],
        answer: "Eowyn",
        pic: "assets/images/eowyn.gif",
    },
    {
        question: "Who does Samwise marry after his return The Shire?",
        choices: ["Penny Lane", "Rosie Cotton", "Galadriel", "Sally"],
        answer: "Rosie Cotton",
        pic: "assets/images/rosiecotton.gif",
    },
    {
        question: "How many members were there in the Fellowship of the Ring?",
        choices: ["Nine", "Three", "Sixteen", "Five"],
        answer: "Nine",
        pic: "assets/images/fellowship.gif",
    },
]

//Global variables
var rightAnswers = 0;
var wrongAnswers = 0;
var unansweredQuestions = 0;
var counter = 0;
var timer = 10;
var intervalId;

var wrongChoice = document.getElementById("notPass");

function playAudio() {
    wrongChoice.play();
}

var rightChoice = document.getElementById("meatWin");

function playAudio2() {
    rightChoice.play();
}

//Function that holds start button and hides it after game is initialized.
function startGame() {
    $("#startButton").append("<button id='startButton'>Start</button>");
    $("#startButton").on("click", function () {
        $("#startButton").hide();
        initializeQuestion(counter);

    });
}

//Function that writes the first question in the array.
function writeQuestion() {
    $("#questionArea").append("<br>" + "<br>" + "<br>" + "<h2>" + questions[counter].question + "</h2>");
}

function initializeQuestion(counter) {
    timer = 11;
    $("#resultArea").empty().hide();
    $("#answerArea").empty().show();
    $("#questionArea").empty().show();
    $("#timerArea").show();
    writeQuestion();
    writeChoices();
    intervalId = setInterval(countDown, 1000);
}

function writeChoices() {
    var currentQuestion = questions[counter]

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        console.log(currentQuestion.choices[i]);

        var isAnswer = currentQuestion.choices[i] === currentQuestion.answer

        if (isAnswer) {
            $("#answerArea").append("<button class='choice' data-correct='true'>" + questions[counter].choices[i] + "</button>");
        } else {
            $("#answerArea").append("<button class='choice' data-correct='false'>" + questions[counter].choices[i] + "</button>");
        }
    }

    $('button[data-correct="true"]').on("click", handleCorrectAnswer);
    $('button[data-correct="false"]').on("click", handleIncorrectAnswer);
}

function stop() {
    clearInterval(intervalId);
}

function countDown() {
    timer--;
    $("#timerArea").text(timer);
    if (timer === 0) {
        unansweredQuestions++;
        stop();
        if (counter === questions.length - 1) {
            $("#resultArea").empty();
            $("#timerArea").empty();
            $("#answerArea").empty();
            $("#questionArea").empty();
            $("#scoreArea").append("Correct: " + rightAnswers + "<br>" + "Wrong: " + wrongAnswers + "<br>" + "Unanswered: " + unansweredQuestions);
            setTimeout(resetGame, 5000);
        }

        counter++;
        initializeQuestion(counter);
    }
}

function handleCorrectAnswer() {
    console.log("correct answer")
    rightAnswers++;
    stop();
    $("#resultArea").show();
    $("#timerArea").empty();
    $("#answerArea").empty();
    $("#questionArea").empty();
    $("#resultArea").append("<img src ='" + questions[counter].pic + "' id='win-img'>" + "<br>" + "YOU SHALL PASS!");
    playAudio2();
    if (counter === questions.length - 1) {
        $("#resultArea").empty();
        $("#timerArea").empty();
        $("#answerArea").empty();
        $("#questionArea").empty();
        $("#scoreArea").append("Correct: " + rightAnswers + "<br>" + "Wrong: " + wrongAnswers + "<br>" + "Unanswered: " + unansweredQuestions);
        setTimeout(resetGame, 5000);
    }
    counter++;
    setTimeout(initializeQuestion, 3600);
}

function handleIncorrectAnswer() {
    console.log("incorrect answer")
    wrongAnswers++
    stop();
    $("#resultArea").show();
    $("#timerArea").empty();
    $("#answerArea").empty();
    $("#questionArea").empty();
    $("#resultArea").append('<img id="theImg" src="assets/images/gandalfnopass.gif" />' + "<br>" + "WHAT HE SAID!")
    playAudio();
    if (counter === questions.length - 1) {
        $("#resultArea").empty();
        $("#timerArea").empty();
        $("#answerArea").empty();
        $("#questionArea").empty();
        $("#scoreArea").append("Correct: " + rightAnswers + "<br>" + "Wrong: " + wrongAnswers + "<br>" + "Unanswered: " + unansweredQuestions);
        setTimeout(resetGame, 5000);
    }
    counter++;
    setTimeout(initializeQuestion, 5000);
}

function resetGame() {
    startGame();
    rightAnswers = 0;
    wrongAnswers = 0;
    unansweredQuestions = 0;
    counter = 0;
    timer = 10;
}

$(document).ready(function () {

    startGame();

});


