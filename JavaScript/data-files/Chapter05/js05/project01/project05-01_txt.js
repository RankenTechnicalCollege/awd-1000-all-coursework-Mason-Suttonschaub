"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Mason_Sutton-Schaub
      Date:   11/13/2025

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;
// and the node list for questions
let questionList =  document.querySelectorAll("div#quiz input");

document.getElementById("startquiz").addEventListener("onclick", ()=>{
   document.getElementById("overlay").classList.add("showquiz");
   timeID = setInterval(countDown(), 1000); 
})

function countDown(){
   if (timeLeft === 0){
      clearInterval(timeID);
      let totalCorrect;
      totalCorrect = checkAnswers();
      if (totalCorrect === correctAnswers.length){
         window.alert("Congratulations on getting 100%");
      } else {
         window.alert(totalCorrect + "/" + correctAnswers.length);
         timeLeft = quizTime;
         quizClock.value = timeLeft;
         document.getElementById("overlay").classList.replace("showquiz", "hidequiz");
      }
   } else {
      timeLeft -= 1;
      quickClock.value = timeLeft;
   }
}


















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

