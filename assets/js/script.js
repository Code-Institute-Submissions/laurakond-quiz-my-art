/** The following video was used as a template and inspiration for creating
 * a list of questions for all categories and also apply question display in each category:
 * https://www.youtube.com/watch?v=riDzcEQbX6k
 */

// Static variables used for accessing DOM
const header = document.getElementById('header');
const logo = document.getElementById('logo');
const categoriesContainer = document.getElementById('categories-container');
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

// variables that will get their value defined/calculated as the quiz progresses
let correctAnswer;
let randomQuestion;
let currentQuestionIndex;
let shuffledQuestions;
let score = 0;
let questionNumberCount = 0;

/** This section was inspired by Love Maths project */
// DOM content loaded event listener & each category iteration using a for loop
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let categoryType = this.getAttribute("id");
            startGame(categoryType);
        });
    }
});

/** Functon that initialises category selection to start the game */
function startGame(id) {
    if (id === "artist") {
        artistQuestion();
    } else if (id === "period") {
        periodQuestion();
    } else if (id === "painting") {
        paintingQuestion();
    }
}

/** Function that replaces main Logo with one letter once inside a category game */
function logoSign() {
    logo.classList.add("hide");
    document.getElementById("logo-letter").classList.remove("hide");
    // apply border style to header once inside each category
    header.style.boxShadow = "0 0 10px #540B0E";
}

/** The below used https://www.youtube.com/watch?v=riDzcEQbX6k
 * as a guide and idea on how to populate questions using JS
 */

/** Function that generates random questions in each category */
function getRandomQuestion() {
    shuffledQuestions = randomQuestion.sort(() => Math.random() - 0.5);
    // setting the index to 0 as the questions start at the first question of the array
    currentQuestionIndex = 0;
    showQuestion();
}

/** Function that generate a question in the getRandomQuestion function above*/
function showQuestion() {
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

        // creates an event listener for answer buttons for when the user clicks each button
        button.addEventListener('click', userAnswer);
        answerButtons.appendChild(button);
    });
}

/** Function that allows the user to select their answer button */
function userAnswer(event) {
    answerButtons.classList.add("pointer-block");
    correctAnswer = document.getElementById("correct");
    const clickedButton = event.target;
    correctAnswer.classList.add("correct");
    if (clickedButton === correctAnswer) {
        incrementScore();
    } else {
        this.classList.add("incorrect");
    }
    
    nextButton.style.display = "flex";
    nextButton.addEventListener('click', handleNextButtonClick);
}

/** Function that generates 10 questions */
function nextQuestion() {
    // ensures that only 10 questions are displayed
    if (currentQuestionIndex < 9) {
        resetQuestion();
        currentQuestionIndex++;
        showQuestion();
    } else {
        scoreBoard();
    }
}

/** Function that resets the Question area section for the next question */
function resetQuestion() {
    nextButton.style.display = "none";
    answerButtons.classList.remove('pointer-block');

    // removes previous answer options
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    resultPage.addEventListener('click', scoreBoard);
}

/** Function that shows which question the user is at against the total number of questions */
function incrementQuestionNumber() {
    questionNumberCount++;
    questionNumber.innerHTML = questionNumberCount;
}

/** Function that controls next button */
function handleNextButtonClick() {
    incrementQuestionNumber();
    nextQuestion();
}

/** Function that will calculate the score as the quiz progresses. 
 * But will not display until the end 
 */
function incrementScore() {
    score++;
    document.getElementById("player-score").innerHTML = score;
}

/** Function that calculates the total score of correctly answered questions */
function totalScore() {
    totalScoreCount.innerHTML = score;
}

/**Function that generates appropriate text based on total score */
function displayScoreText() {
    if (score === 10) {
        return "You are the Master of the Arts! Everyone bows to your prowess in Art History knowledge.";
    } else if (score >= 6 && score < 10) {
        return "You are on your way to becoming a great connoiseur of the Arts! Keep at it and you will one day reach the epitome of Art History knowledge.";
    } else if (score < 6 && score >= 4) {
        return "Some book and cramming time would do you good.";
    } else {
        return "There are no words to describe your lack of knowledge in Art History. Go back and study more!";
    }
}

function scoreBoard() {
    totalScore();
    const resultText = document.getElementById("result-description");
    resultText.textContent = displayScoreText();
    // Displays or hides appropriate sections
    quizAreaContainer.classList.add('hide');
    nextButton.classList.add('hide');
    logo.classList.remove("hide");
    document.getElementById("logo-letter").classList.add("hide");
    resultPage.style.display = 'flex';

    // Return to home page button
    homePageButton.addEventListener('click', resetGame);
}

/**Function that resets the game */
function resetGame() {
    window.location.reload();
}

/** Function that initialises artist question category */
function artistQuestion() {
    // Displays or hides appropriate sections
    categoriesContainer.style.display = "none";
    artistCategoryButton.classList.add('hide');
    periodCategoryButton.classList.add('hide');
    paintingCategoryButton.classList.add('hide');
    quizAreaContainer.classList.remove('hide');
    // Changes category heading content based on the chosen category
    categoryHeading.innerText = "Who crafted it?";
    randomQuestion = artistQuestions;
    incrementQuestionNumber();
    getRandomQuestion();
    logoSign();
}

/** Function that initialises period question category */
function periodQuestion() {
    // Displays or hides appropriate sections
    categoriesContainer.style.display = "none";
    artistCategoryButton.classList.add('hide');
    periodCategoryButton.classList.add('hide');
    paintingCategoryButton.classList.add('hide');
    quizAreaContainer.classList.remove('hide');
    // Changes category heading content based on the chosen category
    categoryHeading.innerText = "Which period or art movement does the work belong to?";
    randomQuestion = periodQuestions;
    incrementQuestionNumber();
    getRandomQuestion();
    logoSign();
}

/** Function that initialises painting question category*/
function paintingQuestion() {
    // Displays or hides appropriate sections
    categoriesContainer.style.display = "none";
    artistCategoryButton.classList.add('hide');
    periodCategoryButton.classList.add('hide');
    paintingCategoryButton.classList.add('hide');
    quizAreaContainer.classList.remove('hide');
    // Changes category heading content based on the chosen category
    categoryHeading.innerText = "Name that Painting";
    randomQuestion = paintingQuestions;
    incrementQuestionNumber();
    getRandomQuestion();
    logoSign();
}