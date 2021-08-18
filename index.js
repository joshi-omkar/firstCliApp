var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Omkar",
    score: 5,
  },

  {
    name: "Archis",
    score: 4,
  },
]

var questions = [{
  question: "Where do I live? ",
  answer: "Pune"
}, {
  question: "My favorite superhero would be?",
  answer: "IronMan"
},
{
  question: "What is my birth date? ",
  answer: "4"
},
{
  question: "What is my college name? ",
  answer: "SCOE"
},
{
  question: "Who is my favorite author? ",
  answer: "Amish"
}
];

var highScores = [
  {
    name: "Tanay",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
]

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Omkar?");
}



function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);
  highScores.map(score => console.log("high score is -> ",score.name, " : ", score.score))
}


welcome();
game();
showScores();