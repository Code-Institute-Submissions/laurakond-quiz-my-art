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
const categoryHeading = document.getElementById('category-heading');
const quizAreaContainer = document.getElementById('quiz-area-container');
const questionPlaceholder = document.getElementById('question-placeholder');
const titleName = document.getElementById("painting-name");
const answerButtons = document.getElementById('answer-choices');
const nextButton = document.getElementById('next-btn');
const resultPage = document.getElementById('score-result-container');
const questionNumber = document.getElementById("question-number");
const totalScoreCount = document.getElementById("score");
const homePageButton = document.getElementById('play-again-btn');

// variables to get their value defined within functions as I go along
let correctAnswer;
let randomQuestion;
let currentQuestionIndex;
let shuffledQuestions;
let score = 0;
let questionNumberCount = 0;


/** This section was inspired by Love Maths project */

// Event Listeners
nextButton.addEventListener('click', handleNextButtonClick);
// DOM content loaded event listener & each category iteration using a for loop
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let categoryType = this.getAttribute("id");
            startGame(categoryType);
            // "this" refers to specific button pressed, ie "Who painted it" button that has id of "artist"
            // if (this.getAttribute("id") === "artist") {
            //     console.log(`you clicked ${categoryType} category button`);
            //     startGame();
            // } else if (this.getAttribute("id") === "period") {
            //     console.log(`you clicked ${categoryType} category button`);
            //     startGame();
            // } else if (this.getAttribute("id") === "painting") {
            //     console.log(`you clicked ${categoryType} category button`);
            //     startGame();
            // } else {
            //     console.log(`error`);
            // }
        });
    }
});


/** Initialises category selection to start the game */
function startGame(id){
    console.log("started");
    // chooseCategory();
    if (id === "artist") {
        artistCategoryButton.classList.add('hide');
        periodCategoryButton.classList.add('hide');
        paintingCategoryButton.classList.add('hide');
        quizAreaContainer.classList.remove('hide');
        categoryHeading.innerText = "Who painted it?";
        randomQuestion = artistQuestions;
        incrementQuestionNumber();
        getRandomQuestion();        
    } else if (id === "period") {
        artistCategoryButton.classList.add('hide');
        periodCategoryButton.classList.add('hide');
        paintingCategoryButton.classList.add('hide');
        quizAreaContainer.classList.remove('hide');
        categoryHeading.innerText = "Which period or art movement does the work belong to?";
        randomQuestion = periodQuestions;
        incrementQuestionNumber();
        getRandomQuestion();
    } else if (id === "painting") {
        artistCategoryButton.classList.add('hide');
        periodCategoryButton.classList.add('hide');
        paintingCategoryButton.classList.add('hide');
        quizAreaContainer.classList.remove('hide');
        categoryHeading.innerText = "Name the painting";
        randomQuestion = paintingQuestions;
        incrementQuestionNumber();
        getRandomQuestion();
    }
    
}

/**function to enable each category that the player chooses to play */
// function chooseCategory(categoryType){
//     console.log("works");
// }

/** Fhe below used https://www.youtube.com/watch?v=riDzcEQbX6k
 * as a guide and idea on how to populate questions using JS
 */

/**Function that generates random questions in each category */
function getRandomQuestion () {
    shuffledQuestions = randomQuestion.sort(() => Math.random() - 0.5);
    // setting the index to 0 as the questions start at the first question of the array
    currentQuestionIndex = 0;
    showQuestion();
}

/** Function that generate a question in the getRandomQuestion function above*/
function showQuestion() {
    // new function that shows the question above
    displayQuestion(randomQuestion[currentQuestionIndex]);
}

/** Function that populates Question area container based on chosen category
 * and applies a class name to the correct answer
 */
function displayQuestion(randomQuestion) {
    titleName.innerText = randomQuestion.question;
    questionPlaceholder.setAttribute("src", randomQuestion.imageUrl);
    questionPlaceholder.alt = 'Question Image';
    randomQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.id = "correct";
        } 

        // create an event listener to answer buttons for when the user clicks each button then the following action follows
        button.addEventListener('click', userAnswer);
        answerButtons.appendChild(button);
    });
}

/** Function that allows the user to select their answer button */
function userAnswer(event){
    quizAreaContainer.classList.add("pointer-block");
    correctAnswer = document.getElementById("correct");
    const clickedButton = event.target;
    correctAnswer.classList.add("correct");
    if (clickedButton === correctAnswer) {
        incrementScore();
    } else {
        this.classList.add("incorrect");
    }
    nextButton.classList.remove('hide');
}

/**Function that generates 10 questions */
function nextQuestion(){
    // check that current question index below10
    if (currentQuestionIndex < 9) {
        resetQuestion();
        currentQuestionIndex++;
        showQuestion();
    } else {
        scoreBoard();
    }
}

/** Function that resets the Question area section for the next question */
function resetQuestion(){
    nextButton.classList.add('hide');
    quizAreaContainer.classList.remove('pointer-block');

    // will remove previous answer options
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    resultPage.addEventListener('click', scoreBoard);
}

/** Function that shows which question the user is at against the total number of questions */
function incrementQuestionNumber(){
    questionNumberCount++;
    document.getElementById('question-number').innerHTML = questionNumberCount;
}

/** Function that controls next button */
function handleNextButtonClick(){
    incrementQuestionNumber();
    nextQuestion();
}

/** Function that will calculate the score as the quiz progresses. 
 * But will not display until the end 
 */
function incrementScore(){
    score++;
    // score = parseInt(playerScore.innerText);
    document.getElementById("player-score").innerHTML = score;
}

/** Function that calculates the total score of correctly answered questions */
function totalScore(){
    totalScoreCount.innerHTML = score;
}

/**Function that generates appropriate text based on total score */
function displayScoreText(){}

/** Function that opens the Score/final page after the completion of the quiz */
function scoreBoard(){
    totalScore();
    const resultText = document.getElementById("result-description");
    resultText.textContent = displayScoreText();
    // Displays or hides appropriate sections
    quizAreaContainer.classList.add('hide');
    nextButton.classList.add('hide');
    resultPage.classList.remove('hide');
    
    homePageButton.addEventListener('click', resetGame);
}

/**Function that resets the game */
function resetGame(){
    window.location.reload();
}

/**
 * Checks the user's answer against the correct answer
 */
// function checkCorrectAnswer(){}





