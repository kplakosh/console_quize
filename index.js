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

Question.prototype.isCorrect = function(element) {
    return element === this.correctAnswer;
}

// creating objects for an array
var question1 = new Question('What do you like most in programming?', 
    ['0: Everything!', '1: Creativity', '2: I don\'t like programing'], 
    '0');

var question2 = new Question('What is the best programing language?', 
    ['0: Java Script', '1: Python', '2: Crypton'], 
    '0');

var question3 = new Question('Inside which HTML element do we put the JavaScript?', 
    ['0: <javascript>', '1: <scripting>', '2: <script>', '3: <js>'],
    '2');

// creating an array of question objects
var questionsArray = [question1, question2, question3];


//choosingrundom question and print it to console
function printRundomQuestion(array) {
    var number = Math.floor(Math.random() * array.length);
    array[number].print();

    // asking user to enter answer
    var userAnswer = prompt('Enter number for your answer :');

    // call function to check if the answer is correct
    if (array[number].isCorrect(userAnswer) == true) {
        console.log('Correct answer!');
    } 
}

printRundomQuestion(questionsArray);

