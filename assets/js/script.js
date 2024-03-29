// const buttonClick = document.querySelector('button');
// buttonClick.addEventListener('click', quizCategory);

// function quizCategory() {
//   window.location.href = "artist.html";
// }

// This section was inspired by Love Maths walkthrough project by Code Institute.
/** This part waits for the DOM to load
 * and selects each button to access different category of the game
 */


document.addEventListener("DOMContentLoaded", function () {
 let categoryButtons = document.getElementsByTagName('button');

 for (let button of categoryButtons) {
  button.addEventListener("click", function () {
   if (this.getAttribute("data-type") === "artist") {
    window.location.href = "artist.html";
   } else if (this.getAttribute("data-type") === "period") {
    window.location.href = "period.html";
   } else if (this.getAttribute("data-type") === "painting") {
    window.location.href = "painting.html";
   } else {
    let categoryType = this.getAttribute("bonus");
    window.location.href = "bonus.html";
   }
  })
 }
})

/**function for generating random questions in each category */
function randomQuestion () {}

/** Shows which question the user is at against the total number of questions */
function currentQuestionNumber(){}

/** Allows the user to inout their own answer in the Bonus category */
function userAnswer(){}

/**
 * Checks the user's answer against the correct answer
 */
function checkCorrectAnswer(){}

/** Triggers the Score page after the completion of each category */
function scoreBoard(){}

/** Calculates the total score of correctly answered questions
 * and prompts appropriate congratulatory(consoling) paragraph
 */
function totalScore(){}

