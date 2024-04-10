// const buttonClick = document.querySelector('button');
// buttonClick.addEventListener('click', quizCategory);

// function quizCategory() {
//   window.location.href = "artist.html";
// }

// This section was inspired by Love Maths walkthrough project by Code Institute.
/** This part waits for the DOM to load
 * and selects each button to access different category of the game
 */

/** The following video was used as a template and inspiration for creating
 * a list of questions for all categories and also apply question display in each category:
 * https://www.youtube.com/watch?v=riDzcEQbX6k
 */

// document.addEventListener("DOMContentLoaded", function () {
//  let categoryButtons = document.getElementsByTagName('button');

//  for (let button of categoryButtons) {
//   button.addEventListener("click", function () {
//    if (this.getAttribute("data-type") === "artist") {
//     window.location.href = "artist.html";
//    } else if (this.getAttribute("data-type") === "period") {
//     window.location.href = "period.html";
//    } else if (this.getAttribute("data-type") === "painting") {
//     window.location.href = "painting.html";
//    } else {
//     let categoryType = this.getAttribute("bonus");
//     window.location.href = "bonus.html";
//    }
//   })
//  }
// })

// document.addEventListener("DOMContentLoaded", function (){
//     let categoryButtons = document.getElementsByTagName("button");

//     for (let button of categoryButtons) {
//         button.addEventListener("click", function(){
//             let categoryType = this.getAttribute("id");
//             if(this.getAttribute("id") === "artist") {
//                 chooseCategory(categoryType);
//             } else if (this.getAttribute("id") === "period") {
//                 console.log("you clicked period category");
//             } else if (this.getAttribute("id") === "painting") {
//                 console.log("you clicked painting category");
//             } else if(this.getAttribute("id") === "bonus") {
//                 console.log("you clicked I am an expert category");
//             } else{
//                 // let categoryType = this.getAttribute("id");
//                 startGame(categoryType);
//             };
//         })
//     }

//     runGame();
// })

// Static variables used for accessing DOM
const artistCategoryButton = document.getElementById('artist');
const periodCategoryButton = document.getElementById('period');
const paintingCategoryButton = document.getElementById('painting');

// variables to get their value defined within functions as I go along
let score = 0;
let questionNumberCount = 0;

/** Initialises category selection to start the game */
function startGame(categoryType){
    console.log("started");
    // chooseCategory();
    
}

/**function to enable each category that the player chooses to play */
// function chooseCategory(categoryType){
//     console.log("works");
// }

/**Function that generates random questions in each category */
function getRandomQuestion () {}

/** Function that generate a question in the getRandomQuestion function above*/
function showQuestion() {}

/** Function that populates Question area container based on chosen category
 * and applies a class name to the correct answer
 */
function displayQuestion() {}

/** Function that allows the user to select their answer button */
function userAnswer(){}

/**Function that generates 10 questions */
function nextQuestion(){}

/** Function that resets the Question area section for the next question */
function resetQuestion(){}

/** Function that shows which question the user is at against the total number of questions */
function incrementQuestionNumber(){}

/** Shows which question the user is at against the total number of questions */
function currentQuestionNumber(){}

/** Function that controls next button */
function handleNextButtonClick(){}

/** Function that will calculate the score as the quiz progresses. 
 * But will not display until the end 
 */
function incrementScore(){}

/** Function that calculates the total score of correctly answered questions */
function totalScore(){}

/**Function that generates appropriate text based on total score */
function displayScoreText(){}

/** Function that opens the Score/final page after the completion of the quiz */
function scoreBoard(){}

/**Function that resets the game */
function resetGame(){}

/**
 * Checks the user's answer against the correct answer
 */
// function checkCorrectAnswer(){}





