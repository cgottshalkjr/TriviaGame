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

var right = 0;
var wrong = 0;
// var question = [];
var unanswered = 0;
var counter = 0;
var timer = 15;
var intervalId;

function start () {
    
    $("#startButton").append("<button id='startButton'>Start</button>");

    $("#startButton").on("click", function() {
            $("#startButton").hide();
            writeQuestion();
            choice();
            intervalId = setInterval(countDown, 1000);
            
    });
}
function countDown() {
    $("#timerArea").text(timer);
            timer--;
}

function writeQuestion() {
        
        
    $("#question").append("<br>" + "<br>" + "<br>" + "<h2>" + questions[counter].question + "</h2>");
    
    
}

function choice(){

    for (var i = 0; i < questions[counter].choices.length; i++){
        console.log(questions[counter].choices);
        $("#answerArea").append("<button id='answerArea'>" + questions[counter].choices[i] + "</button>");


    }
    
    
   
}






$(document).ready(function (){

 start();









});