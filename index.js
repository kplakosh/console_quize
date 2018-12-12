'use strict'

// function constractor
var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

// print question and answers to console
Question.prototype.print = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
        console.log(this.answers[i]);
    }
}

// creating objects for an array
var question1 = new Question('What do you like most in programming?', 
    ['0: Everything!', '1: Creativity', '2: I don\'t like programing'], 
    '0: Everything!');

var question2 = new Question('What is the best programing language?', 
    ['0: Java Script', '1: Python', '2: Crypton'], 
    '0: Java Script');

var question3 = new Question('Inside which HTML element do we put the JavaScript?', 
    ['0: <javascript>', '1: <scripting>', '2: <script>', '3: <js>'],
    '2: <script>');

// creating an array of question objects
var questionsArray = [question1, question2, question3];

function printRundomQuestion(array) {
    var number = Math.floor(Math.random() * array.length);

    array[number].print();

    // for (var i = 0; i <= array.length; i++) {
    //     var number = Math.random() * 10;
    //     while (number <= array.length) {
    //         printQuestion(array[number]);
    //     } 
    // }
}

printRundomQuestion(questionsArray);





// // quize logic
// function quize(array) {
    
//     // question from array of questions
//     array.forEach(printQuestion(element));


//     // accept answer
//     var answer = Number(window.prompt('Welcome to Quize! If your answer is YES enter 1, if NO enter 0'));
    
//     // check if the answer is correct
//     if (answer === 1) {
//         score += 1;
//     } else if (answer === 0) {
//         score;
//     } else if ('exit') {
//         return;
//     }
//     console.log('Your score: ' + score);
// }
