// TIRE SECTION
// const tireArea = document.querySelector(".target-tire");
// const questionTire = document.querySelector(".question-3");
// const answersTire = document.querySelector(".answers-3");
// const answerButtonOne = document.querySelector(".answer3.btn1");
// const answerButtonTwo = document.querySelector(".answer3.btn2");
// const answerButtonThree = document.querySelector(".answer3.btn3");
// console.log(answerButtonOne);

// function displayQuestionTires() {
//     questionTire.classList.remove("not-displayed");
//     answersTire.classList.remove("not-displayed");
// }

// function displayRedColorButtonOne(btn) {
//     btn.classList.add("wrong-background");
// }

// function displayRedColorButtonTwo() {
//     answerButtonTwo.classList.add("wrong-background");
// }

// displayRedColorButtonOne(answerButtonOne);
// answerButtonOne.addEventListener("click", displayRedColorButtonOne);
// answerButtonTwo.addEventListener("click", displayRedColorButtonTwo);
// // answerButtonThree.addEventListener("click", displayGreenColor);
// tireArea.addEventListener("click", displayQuestionTires);
import {
    questionsAnswers
} from "./list.js";
console.log(window.navigator);

let questionPart = document.querySelector(".questions")
let buttons
const tireArea = document.querySelector(".target-tire");
const batteryArea = document.querySelector(".target-battery")
const windshieldArea = document.querySelector(".target-windshield")
const smokeArea = document.querySelector(".target-smoke")

function displayQuestion(i) {
    let question = questionsAnswers[i].question
    let answers = questionsAnswers[i].answers
    let answerNumbers = questionsAnswers[i].answer
    let answersArray = [];
    let answerNumbersArray = [];
    answerNumbers.forEach(number => {
        answerNumbersArray.push(number);
    })
    console.log(answerNumbersArray)
    answers.forEach(answer => {

        answersArray.push(answer)
        questionPart.innerHTML = `
        <h3 class="question">${question}</h3>
        <button class="buttons" value="1">${answersArray[0]}</button>
        <button class="buttons" value="2">${answersArray[1]}</button>
        <button class="buttons" value="3">${answersArray[2]}</button>
        <button class="buttons" value="4">${answersArray[3]}</button>
        `
        buttons = document.querySelectorAll(".buttons")
        // Je veux que les boutons changent de couleurs quand on clique
        // Chaque boutons
        buttons.forEach(btn => {
            // écouter le click
            btn.addEventListener("click", colorChange);
        })
        // change de couleur 
        function colorChange(evt) {
            // console.log(evt)
            let eventButton = evt.target;
            // console.log(evt.target.value)
            let eventValue = evt.target.value;
            console.log(eventValue)
            
            // Il faut que le bouton devienne vert que si evt.target.value
            //est égale a answerNumbersArray
            if(eventValue == answerNumbersArray) {
                eventButton.classList.add("right-background");
            } else {eventButton.classList.add("wrong-background")}
        }

    })
}

tireArea.addEventListener("click", function () {
    displayQuestion(3)
});
batteryArea.addEventListener("click", function () {
    displayQuestion(1)
});
windshieldArea.addEventListener("click", function () {
    displayQuestion(2)
});
smokeArea.addEventListener("click", function () {
    displayQuestion(0)
});